import { IPersonalInformation } from '../../App';

interface IProps {
    personalInformation: IPersonalInformation;
}

const Header: React.FC<IProps> = ({ personalInformation }: IProps) => {
    return (
        <div className="sticky top-0 h-40 sm:h-44 lg:h-48 px-8 py-3 sm:p-10 bg-black shadow-lg flex items-center">
            <div className="flex flex-grow items-center justify-between sm:space-x-16 max-w-5xl mx-auto">
                <div className="text-white flex flex-col gap-y-2 sm:gap-y-4 lg:gap-y-6 opacity-90">
                    <h1 className="semi-bold text-2xl sm:text-3xl lg:text-4xl ">
                        {personalInformation.firstName}{' '}
                        {personalInformation.lastName}
                    </h1>
                    <a
                        className="hover:underline transition duration-200"
                        href={`mailto:${personalInformation.email}`}
                    >
                        {personalInformation.email}
                    </a>
                </div>
                <div className="flex flex-col gap-y-4 items-center">
                    <div className="space-x-4">
                        <a href={personalInformation.githubUrl}>
                            <i className="fab fa-github text-4xl text-white hover:text-yellow-400" />
                        </a>
                        <a href={personalInformation.linkedInUrl}>
                            <i className="fab fa-linkedin text-4xl text-white hover:text-yellow-400" />
                        </a>
                    </div>
                    <a
                        className="bg-yellow-400 p-3 rounded-xl text-gray-800 hover:scale-110 transform transition duration-300 shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noreferrer"
                        href={require('../../assets/resume.pdf').default}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
