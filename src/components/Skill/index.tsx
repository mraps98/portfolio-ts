import { ISkill } from '../../App';

interface IProps {
    skill: ISkill;
}

const Skill: React.FC<IProps> = ({ skill }: IProps) => {
    return (
        <a
            href={skill.skillUrl ?? '#'}
            className="bg-gray-100 p-2 shadow-lg rounded-lg"
        >
            {skill.name}
            {skill.imageUrl && (
                <img
                    src={
                        require(`../../assets/skills/${skill.imageUrl}`).default
                    }
                    alt={skill.name}
                    className="h-16 w-16 object-contain"
                />
            )}
        </a>
    );
};

export default Skill;
