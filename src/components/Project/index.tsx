import { IProject } from '../../App';

interface IProps {
    project: IProject;
}

const Project: React.FC<IProps> = ({ project }: IProps) => {
    return (
        <div className="flex flex-col shadow-lg hover:shadow-xl">
            <h2 className="text-white text-lg bg-gray-800 bg-opacity-90 p-2">
                {project.name}
            </h2>
            <a href={project.liveUrl ?? '#'}>
                <img
                    alt={project.name + ' logo'}
                    src={
                        require(`../../assets/projects/${project.imageUrl}`)
                            .default
                    }
                    className="h-64 object-cover w-full transform transition duration-300 hover:scale-95"
                />
            </a>
            <div className="flex w-full">
                <a
                    href={project.liveUrl}
                    className="bg-white hover:bg-gray-800 bg-opacity-90 hover:text-white flex-grow text-center p-2 duration-300"
                >
                    Live
                </a>
                <a
                    href={project.codeUrl}
                    className="bg-white hover:bg-gray-800 bg-opacity-90 hover:text-white flex-grow text-center p-2 duration-300"
                >
                    Code
                </a>
            </div>
        </div>
    );
};

export default Project;
