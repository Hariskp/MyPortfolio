import React from "react";
import image from "../images/mewhentalking.jpg";
import image2 from "../images/meteaching.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Microsoft Learn Student Ambassadors Beta",
    description: "Microsoft Learn Student Ambassadors Program.",
    url: "https://mvp.microsoft.com/studentambassadors/certificate/82919d4a-e2d8-4908-9469-01ee99c649c8",
  },
  {
    title: "Apartment Management Program",
    description:
      "Project-Riskiapartment Which is my University Project that i made with my team. This is Apartment Management Program.",
    url: "https://github.com/Hariskp/Project-Riskiapartment",
  },
  {
    title: "My Science Communication Experience",
    description:
      "My Scicence Communication on Stage. I went on behalf of YTSA (Young Thai Science Ambassador) as a science fair in 2022.",
    url: "https://www.linkedin.com/posts/haris-kirdpakdee_experience-science-event-activity-6967418378693079040-HtmY?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "My CV 2024",
    description: "This is my CV for Job Interview.",
    url: "https://drive.google.com/file/d/1CjNsiQMNmbCMreFseHGNUVhmy4wX1936/view?usp=share_link",
  },
  {
    title: "Sphere Weather",
    description:
      "Sphere is Weather Website build with React, JavaScrip, HTML, CSS and made by our Team.",
    url: "https://github.com/Hariskp/Sphere",
  },
  {
    title: "Thailand Cyber Top Talent 2023",
    description: "Thailand Cyber Top Talent 2023 😆 #thailandcybertoptalent2023",
    url: "https://drive.google.com/file/d/1cXkNaqahw_pPHPz958w1bqFgNz-cgicO/view?usp=share_link",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <h3 style={{ textAlign: "center" }}>See more in linkedin and CV</h3>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
