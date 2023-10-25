import { achievements } from "../data";

function Achievements() {
  return (
    <section id="achievements" className="container">
      {achievements.map((achievement, index) => (
        <div key={index} className="achievement">
          <img src={achievement.icon} alt={achievement.title} />
          <span className="numbers">{achievement.numbers}</span>
          <p>{achievement.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Achievements;
