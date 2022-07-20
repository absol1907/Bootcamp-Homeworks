import Card from "../Card/Card";
import style from "./projects.module.scss";
import DATA from "./data.json"

const Projects = (props) => {


  return (
    <div className={style.projects}>
      {DATA.map(
        project => <Card key={project.id} name={project.projectName} status={project.status} date={project.startDate} task={project.task} members={project.members} percentage={project.progress} />
      )}
    </div>
  )
}

export default Projects;