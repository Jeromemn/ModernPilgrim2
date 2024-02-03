const header = () => {
  return (
      <header className="flex items-center justify-between px-6 py-4 border-b">
          <a className="flex items-center gap-2" href="#">
              <span className="font-salsa text-3xl font-semibold self-baseline justify-self-end">Modern Pilgrim</span>
          </a>
          <ul className="flex gap-4">
              <li className="navItem"> <a href="/">  Explore</a> </li>
              <li className="navItem"> <a href="#"> Submit Voyage </a> </li>
              <li className="navItem"> <a href="/profile"> My Profile  </a> </li>
          </ul>
          <div className="flex items-center gap-4">
              <button className="loginBtn place-self-end float-right"> Login/Signup

              </button>
          </div>
      </header>
  );
}
export default header;