import Project from "../components/Project";
import critterTracker from "../assets/critterTracker.png";
import foodFocus from "../assets/foodFocus.png";
import pwGenerator from "../assets/pwGenerator.png";


export default function Portfolio() {
  const projs = [
    {
      name: "Critter Tracker",
      deployedLink: "https://critter-tracker-p2-d4b8f730eb59.herokuapp.com/",
      repoLink: "https://github.com/tyler273/critter-tracker",
      image: critterTracker
    },
    {
      name: "Food Focus",
      deployedLink: "https://paulnxn1.github.io/food_Focus/",
      repoLink: "https://github.com/tyler273/food-focus",
      image: foodFocus
    },
    {
      name: "Password Generator",
      deployedLink: "https://tyler273.github.io/password-generator/",
      repoLink: "https://github.com/tyler273/password-generator",
      image: pwGenerator
    },
  ]

  return (
    <section>
      <h2>Projects</h2>
      <ul className="project-list">
      {
        projs.map((project, i) => (
          <Project key={i} project={project} />
        ))
      }
      </ul>
    </section>
  )
};