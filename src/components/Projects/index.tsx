import { IProject } from '../../App';
import Project from '../Project/';

interface IProps {
    projects: Array<IProject>;
}

const Projects: React.FC<IProps> = ({ projects }: IProps) => {
    return (
        <section className="mt-6 gap-y-4 flex flex-col pb-4">
            <h1 className="semi-bold text-gray-800 text-xl">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6">
                {projects.map((p, index) => (
                    <Project key={index} project={p} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
