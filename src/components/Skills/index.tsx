import Skill from '../Skill/';
import { ISkill } from '../../App';

interface IProps {
    skills: Array<ISkill>;
}

const Skills: React.FC<IProps> = ({ skills }: IProps) => {
    return (
        <div className="mt-6 gap-y-4 flex flex-col">
            <h1 className="semi-bold text-gray-800 text-xl">Skills</h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
                {skills.map((s, index) => (
                    <Skill key={index} skill={s} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
