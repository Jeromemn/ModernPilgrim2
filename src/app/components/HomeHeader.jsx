const HomeHeader = () => {
  return (
    <div className="flex flex-row w-full absolute lg:justify-center p-6 top-0 z-50">
      <div className="flex lg:w-5/6 md:w-full justify-between items-center  ">
        <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
        <ul className="flex flex-row text-white font-bold gap-6">
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="#">Submit Voyage</a>
          </li>
          <li>
            <a href="/profile">My Profile</a>
          </li>
          <li>
            <a href="/profile">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
