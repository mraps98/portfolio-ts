import { IProject } from "../../App";
import "./index.scss";

interface IProps {
  project: IProject;
}

const Project: React.FC<IProps> = ({ project }: IProps) => {
  return (
    <div className="project">
      <p>{project.name}</p>
      <a href={project.liveUrl ?? "#"}>
        <img
          alt={project.name + " logo"}
          src={require(`../../assets/projects/${project.imageUrl}`).default}
        />
      </a>
      <div className="project-bottom">
        <a href={project.liveUrl}>Live</a>
        <a href={project.codeUrl}>Code</a>
      </div>
    </div>
  );
};

export default Project;
