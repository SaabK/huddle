import heroImage from "../assets/images/screen-mockups.svg";

function Hero() {
  return (
    <section id="hero" className="container">
      <div className="text-content">
        <h1>Build The Community Your Fans Will Love</h1>

        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussions.
        </p>

        <button className="btn btn-primary">Get Started For Free</button>
      </div>

      <img
        src={heroImage}
        alt="Huddle - Connect with your audience. Both Desktop and Mobile Applications are available"
      />
    </section>
  );
}

export default Hero;
