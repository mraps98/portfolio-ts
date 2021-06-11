import "./index.scss";
import { ISkill } from "../../App";

interface IProps {
  skill: ISkill;
}

const Skill: React.FC<IProps> = ({ skill }: IProps) => {
  return (
    <a href={skill.skillUrl ?? "#"} className="skill">
      {skill.name}
      {skill.imageUrl && (
        <img
          src={require(`../../assets/skills/${skill.imageUrl}`).default}
          alt={skill.name}
        />
      )}
    </a>
  );
};

export default Skill;
