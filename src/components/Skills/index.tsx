import Skill from '../Skill/';
import { ISkill } from '../../App';

interface IProps {
    skills: Array<ISkill>;
}

const Skills: React.FC<IProps> = ({ skills }: IProps) => {
    return (
        <>
            <h1>Skills</h1>
            <div className="flex flex-wrap justify-center gap-x-2">
                {skills.map((s, index) => (
                    <Skill key={index} skill={s} />
                ))}
            </div>
        </>
    );
};

export default Skills;
