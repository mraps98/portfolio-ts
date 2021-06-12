import { IProject } from "../../App";
import Project from "../Project/";
import "./index.scss";

interface IProps {
  projects: Array<IProject>;
}

const Projects: React.FC<IProps> = ({ projects }: IProps) => {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-wrapper">
        {projects.map((p, index) => (
          <Project key={index} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
