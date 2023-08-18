import Project from "../components/Project";
import critterTracker from "../assets/critterTracker.png";


export default function Portfolio() {
  const projs = [
    {
      name: "Critter Tracker",
      deployedLink: "https://critter-tracker-p2-d4b8f730eb59.herokuapp.com/",
      repoLink: "https://github.com/tyler273/critter-tracker",
      image: critterTracker
    }
  ]

  return (
    <section>
      <h2>Projects</h2>
      <ul>
      {
        projs.map((project, i) => (
          <li key = {i}>
            {project.name}
            <img src={project.image} alt={project.name}/>
            <a href={project.deployedLink}>
              Deployed Link
            </a>
            <a href={project.repoLink}>
              GitHub Repo
            </a>
          </li>
        ))
      }
      </ul>
    </section>
  )
};