import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/userSchema';
import dbConnect from '@/lib/db';

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
        await dbConnect();
        let user;
        try {
          user = await User.findOne({ email });
          if (!user) {
            user = await new User({
              id,
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
          id: user._id.toString(), // Use the MongoDB _id field
          _id: user._id.toString(),
          name: user.username,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
