import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/userSchema';
// import { MongoDBAdapter } from '@auth/mongodb-adapter';
// import dbConnect from '@/lib/db';
// export const { auth, handlers, signIn, signOut } = NextAuth({ providers: [Google] });

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      async profile(profile) {
        const { id, name, email, picture: image } = profile;
        let user;
        try {
          user = await User.findOne({ email });
          if (!user) {
            user = await new User({
              googleId: id,
              username: name,
              email,
              image,
            });
            await user.save();
          }
        } catch (error) {
          console.log('error in profile callback', error);
          return null;
        }
        return {
          // sub: user._id.toString(),
          id: user._id.toString(),
          name: user.username,
          email: user.email,
          // image: user.image,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    // async jwt(token, user, account) {
    //   if (account) {
    //     token.id = account.id;
    //     token.username = account.username;
    //     token.name = account.name;
    //     token.email = account.email;
    //   }
    //   return token;
    // },
    async session(session, user) {
      if (user) {
        session.user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }
      return session;
    },
  },
});
