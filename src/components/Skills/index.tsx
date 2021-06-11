import Skill from "../Skill/";
import { ISkill } from "../../App";
import "./index.scss";

interface IProps {
  skills: Array<ISkill>;
}

const Skills: React.FC<IProps> = ({ skills }: IProps) => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-wrapper">
        {skills.map((s, index) => (
          <Skill key={index} skill={s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
