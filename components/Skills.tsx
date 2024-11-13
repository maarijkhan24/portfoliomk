import React from "react";
import styles from "./Skills.module.css";

const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 75 },
];

export default function Skills() {
    return (
        <div id="skill" className={styles["skills-container"]}>
            <div className={styles["skills-card"]}>
                <h2 className={styles["skills-title"]}>My Skills</h2>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-full"
                        style={{ "--progress-width": `${skill.level}%` } as React.CSSProperties}
                    >
                        <h3 className={styles["skill-name"]}>{skill.name}</h3>
                        <div className={styles["skill-bar"]}>
                            <div className={styles["skill-fill"]}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
