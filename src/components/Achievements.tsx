import { achievements } from "../data";

function Achievements() {
  return (
    <section id="achievements" className="container">
      {achievements.map((achievement, index) => (
        <div key={index}>
          <img src={achievement.icon} alt={achievement.title} />
          <span>{achievement.numbers}</span>
          <p>{achievement.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Achievements;
