import Header from './components/Header/';
import PersonalStatement from './components/PersonalStatement';
import Projects from './components/Projects/';
import Skills from './components/Skills/';

export interface IPersonalInformation {
    firstName: string;
    lastName: string;
    email: string;
    resumeUrl: string;
    githubUrl: string;
    linkedInUrl: string;
}
export interface ISkill {
    name: string;
    imageUrl?: string;
    skillUrl?: string;
}
export interface IProject {
    name: string;
    codeUrl: string;
    liveUrl?: string;
    imageUrl?: string;
}

const App: React.FC = () => {
    const personalInformation: IPersonalInformation = {
        firstName: 'Amritpreet',
        lastName: 'Singh',
        email: 'amritpreet98@gmail.com',
        resumeUrl: '../../assets/resume.pdf',
        githubUrl: 'https://github.com/mraps98',
        linkedInUrl: 'https://linkedin.com/in/amritpreet98',
    };

    const skills: Array<ISkill> = [
        {
            name: 'React',
            imageUrl: 'react.svg',
            skillUrl: 'https://reactjs.org',
        },
        {
            name: 'NextJS',
            imageUrl: 'nextjs.png',
            skillUrl: 'https://nextjs.org',
        },
        {
            name: 'PHP',
            imageUrl: 'php.svg',
            skillUrl: 'https://www.php.net',
        },
        {
            name: 'AWS',
            imageUrl: 'aws.png',
            skillUrl: 'https://aws.amazon.com',
        },
        {
            name: 'Docker',
            imageUrl: 'docker.jpg',
            skillUrl: 'https://www.docker.com/',
        },
        {
            name: 'API Design',
            imageUrl: 'rest.png',
            skillUrl: 'https://restfulapi.net',
        },
        {
            name: 'SQL',
            imageUrl: 'sql.png',
            skillUrl: 'https://www.w3schools.com/sql',
        },
        {
            name: 'NoSQL',
            imageUrl: 'nosql.png',
            skillUrl: 'https://mongodb.com/nosql-explained',
        },
        {
            name: 'Cucumber',
            imageUrl: 'cucumber.png',
            skillUrl: 'https://cucumber.io',
        },
        {
            name: 'Behat',
            imageUrl: 'behat.png',
            skillUrl: 'https://behat.org',
        },
        {
            name: 'Jest',
            imageUrl: 'jest.png',
            skillUrl: 'https://jestjs.io',
        },
        {
            name: 'Responsive Design',
            imageUrl: 'responsive-design.png',
            skillUrl: 'https://www.w3schools.com/html/html_responsive.asp',
        },
        {
            name: 'Prismic',
            imageUrl: 'prismic.png',
            skillUrl: 'https://prismic.io/',
        },
        {
            name: 'React Native',
            imageUrl: 'react.svg',
            skillUrl: 'https://reactnative.dev',
        },
        {
            name: 'Redux',
            imageUrl: 'redux.png',
            skillUrl: 'https://redux.js.org',
        },
        {
            name: 'TypeScript',
            imageUrl: 'typescript.png',
            skillUrl: 'https://www.typescriptlang.org',
        },
        {
            name: 'Sass',
            imageUrl: 'sass.png',
            skillUrl: 'https://sass-lang.com',
        },
        {
            name: '.NET Core',
            imageUrl: 'dotnet.png',
            skillUrl: 'https://dotnet.microsoft.com',
        },
        { name: 'Node', imageUrl: 'node.png', skillUrl: 'https://nodejs.org' },
        {
            name: 'Flask',
            imageUrl: 'flask.png',
            skillUrl: 'https://palletsprojects.com/p/flask',
        },
        { name: 'Git', imageUrl: 'git.png', skillUrl: 'https://git-scm.com' },
        {
            name: 'Firebase',
            imageUrl: 'firebase.png',
            skillUrl: 'https://firebase.google.com',
        },
        {
            name: 'Tailwind',
            imageUrl: 'tailwind.jpg',
            skillUrl: 'https://tailwindcss.com',
        },
    ];

    const projects: Array<IProject> = [
        {
            name: 'Spotify',
            codeUrl: 'https://github.com/mraps98/spotify-clone',
            liveUrl: 'https://spotify-clone-mraps98.vercel.app/',
            imageUrl: 'spotify-clone.png',
        },
        {
            name: 'Amazon',
            codeUrl: 'https://github.com/mraps98/amazon-clone',
            liveUrl: 'https://amazon-clone-mraps98.vercel.app/',
            imageUrl: 'amazon-clone.png',
        },
        {
            name: 'Airbnb',
            codeUrl: 'https://github.com/mraps98/airbnb',
            liveUrl: 'https://airbnb-mraps98.vercel.app',
            imageUrl: 'airbnb.png',
        },
        {
            name: 'Paint',
            codeUrl: 'https://github.com/mraps98/paint',
            liveUrl: 'https://mraps98.github.io/paint',
            imageUrl: 'paint.png',
        },
        {
            name: 'Hangman',
            codeUrl: 'https://github.com/mraps98/hangman',
            liveUrl: 'https://mraps98.github.io/hangman',
            imageUrl: 'hangman.png',
        },
        {
            name: 'Recipe-Native',
            codeUrl: 'https://github.com/mraps98/recipe-native',
            liveUrl: 'https://expo.io/@mraps98/recipe-native',
            imageUrl: 'recipe-native.jpg',
        },
        {
            name: 'Popat',
            codeUrl: 'https://github.com/mraps98/popat',
            liveUrl: 'https://popat-46d62.firebaseapp.com/',
            imageUrl: 'popat.png',
        },
        {
            name: 'College Manager Flask',
            codeUrl: 'https://github.com/mraps98/college-manager-flask',
            liveUrl: 'https://college-manager-flask.herokuapp.com/',
            imageUrl: 'college-manager-flask.png',
        },
        {
            name: 'PCommerce',
            codeUrl: 'https://github.com/mraps98/pcommerce',
            liveUrl: 'https://pcommerce-f3025.web.app/',
            imageUrl: 'pcommerce.png',
        },
        {
            name: 'Covid Tracker',
            codeUrl: 'https://github.com/mraps98/covid-tracker',
            liveUrl: 'https://mraps98.github.io/covid-tracker',
            imageUrl: 'covid-tracker.png',
        },
        {
            name: 'Messenger Clone',
            codeUrl: 'https://github.com/mraps98/messenger-clone-react',
            liveUrl: 'https://messenger-clone-36791.web.app/',
            imageUrl: 'messenger-clone.png',
        },
        {
            name: 'Facebook Clone',
            codeUrl: 'https://github.com/mraps98/facebook-clone-react',
            liveUrl: 'https://facebook-clone-react-6c768.web.app/',
            imageUrl: 'facebook-clone.png',
        },
    ];

    return (
        <div>
            <Header personalInformation={personalInformation} />
            <main className="max-w-5xl mx-auto px-2">
                <PersonalStatement />
                <Skills skills={skills} />
                <Projects projects={projects} />
            </main>
        </div>
    );
};

export default App;
