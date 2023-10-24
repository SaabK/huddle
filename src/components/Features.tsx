import { features } from "../data";

function Features() {
  return (
    <section id="features">
      {features.map((feature, index) => (
        <article key={index} className="feature">
          <div className="container">
            <div className="text-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <img src={feature.image} alt="" />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Features;
