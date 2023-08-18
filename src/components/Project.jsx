export default function Project({project}) {
    return (
        <div className="card">
        <img className="card-img-top" src={project.image} alt={project.name}/>
        <div className="card-detail">
        {project.name}
        <a href={project.deployedLink}>
          Deployed Link
        </a>
        <a href={project.repoLink}>
          GitHub Repo
        </a>
        </div>
      </div>
    )

}