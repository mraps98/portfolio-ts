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
          src={require(`../../assets/projects/${project.imageUrl}`).default}
        />
      </a>
      <a href={project.liveUrl}>Live</a>
      <a href={project.codeUrl}>Code</a>
    </div>
  );
};

export default Project;
