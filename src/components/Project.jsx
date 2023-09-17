import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Project({project}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard(){
    setIsFlipped(!isFlipped);
  }

  return (
      <div className="card">
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
          <div className="card-front" onClick={flipCard}>
            <img className="card-img-top" src={project.image} alt={project.name}/>
          </div>
          <div className="card-detail card-back" onClick={flipCard}>
            {project.name}
            <a href={project.deployedLink}>
              Deployed Link
            </a>
            <a href={project.repoLink}>
              GitHub Repo
            </a>
          </div>
        </ReactCardFlip>
      </div>
  )

}