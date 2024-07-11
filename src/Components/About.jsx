import React from "react";
import image from "../images/background.jpg";
const imageAltText = "minimal background";
const description =
  "I'm a Scholarship Computer Science student at Bangkok University, Microsoft Lean Student Ambassadors";
const skillsList = [
  "Web programming",
  "UX/UI",
  "Programming",
  "Python, HTML/CSS, JavaScript, Java, React, SQL, UX/UI Design, Linux, Node.js, Express.js, Swift",
  "Linux",
  "Git",
  "Figma",
  "Documents",
  "Cybersecurity",
];
const softskillList = [
  "Communication",
  "Teamwork and Collaboration",
  "Flexibility",
  "Creativity",
  "Event Organizer",
  "Public Speaking",
  "Science Communication",
];
const tools = [
  "Kali Linux",
  "Azure Service",
  "Office",
  "Figma",
  "Photoshop",
  "vmware",
  "Postman",
  "Docker",
  "Firebase",
  "MongoDB",
];
const interests = [
  "Web Development",
  "Cybersecurity",
  "DevOps",
  "Fullstack",
  "Business",
  "Software Development",
  "UX/UI Design",
];
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h3>Hard Skills</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h3>Soft Skills</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {softskillList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h3>Tools</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {tools.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h3>Interests</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {tools.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
