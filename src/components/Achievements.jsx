import React, { useState, useEffect, useRef } from "react";
import imgLogo from "../assets/AchievementsLogo.png";
import { achievementsList } from "../constants/achievements";

const Achievements = () => {
  const [counts, setCounts] = useState(achievementsList.map(() => 0));
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const ref = sectionRef.current;

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      const intervals = achievementsList.map((achievement, index) => {
        const increment = achievement.numberOfServices / 100;
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < achievement.numberOfServices) {
              newCounts[index] = Math.min(
                newCounts[index] + increment,
                achievement.numberOfServices
              );
            }
            return newCounts;
          });
        }, 25); // Adjust the interval speed as needed
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [hasStarted]);

  return (
    <div className="container" ref={sectionRef}>
      <div className="achievements">
        <h3>Our Achievements in Numbers</h3>
        <div className="cardAchievements">
          {achievementsList.map((list, index) => (
            <div
              className="boxContent"
              key={list.id}
              style={{ background: list.bgColor, color: list.color }}
            >
              <img src={imgLogo} alt={list.title} />
              <p>{list.p1}</p>
              <p>{Math.floor(counts[index])}</p>
              <p>{list.p2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
