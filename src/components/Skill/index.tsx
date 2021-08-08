import { ISkill } from '../../App';

interface IProps {
    skill: ISkill;
}

const Skill: React.FC<IProps> = ({ skill }: IProps) => {
    return (
        <a
            href={skill.skillUrl ?? '#'}
            className="text-gray-800 bg-gray-50 py-2 px-2 shadow-lg flex items-center gap-x-2 duration-300 transform transition duration-300 hover:scale-110 hover:shadow-xl"
        >
            <span>{skill.name}</span>
            {skill.imageUrl && (
                <img
                    src={
                        require(`../../assets/skills/${skill.imageUrl}`).default
                    }
                    alt={skill.name}
                    className="h-8 w-8 object-contain"
                />
            )}
        </a>
    );
};

export default Skill;
