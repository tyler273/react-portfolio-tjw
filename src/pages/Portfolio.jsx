import Project from "../components/Project";
import movieVault from "../assets/movieVault.png";
import critterTracker from "../assets/critterTracker.png";
import foodFocus from "../assets/foodFocus.png";
import techTalk from "../assets/techTalk.png";
import pwGenerator from "../assets/pwGenerator.png";
import noteTaker from "../assets/noteTaker.png";
import "../styles/Project.css";


export default function Portfolio() {
  const projs = [
    {
      name: "Movie Vault",
      deployedLink: "https://movie-vault-a6d86baeac1b.herokuapp.com/",
      repoLink: "https://github.com/nolannaphys/movie-vault",
      image: movieVault
    },
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
      name: "Tech Talk Blog",
      deployedLink: "https://tech-talk-blog-tjw-3a20aff9c737.herokuapp.com/",
      repoLink: "https://github.com/tyler273/tech-talk-blog",
      image: techTalk
    },
    {
      name: "Password Generator",
      deployedLink: "https://tyler273.github.io/password-generator/",
      repoLink: "https://github.com/tyler273/password-generator",
      image: pwGenerator
    },
    {
      name: "Note Taker",
      deployedLink: "https://note-taker-tjw.herokuapp.com/",
      repoLink: "https://github.com/tyler273/note-taker",
      image: noteTaker
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