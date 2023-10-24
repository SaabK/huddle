import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <header className="container">
      <img src={logo} alt="" className="logo" />

      <button className="btn btn-secondary">Try it Free</button>
    </header>
  );
}

export default Navbar;
