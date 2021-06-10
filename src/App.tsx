import "./App.scss";
import Header from "./components/Header";

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  resumeUrl: string;
  githubUrl: string;
  linkedInUrl: string;
}

export interface Project {
  name: string;
  codeUrl: string;
  liveUrl?: string;
}

const App: React.FC = () => {
  const personalInformation: PersonalInformation = {
    firstName: "Amritpreet",
    lastName: "Singh",
    email: "amritpreet98@gmail.com",
    resumeUrl: "./assets/resume.pdf",
    githubUrl: "https://github.com/mraps98",
    linkedInUrl: "https://linkedin.com/in/amritpreet98",
  };

  const skills: Array<string> = [
    "React",
    "React Native",
    "Flask",
    "Firebase",
    ".NET Core",
    "SQL",
    "NoSQL",
    "Node",
    "Responsive Design",
  ];

  const projects: Array<Project> = [
    { name: "Paint", codeUrl: "https://github.com/mraps98/paint" },
  ];

  return (
    <div className="app">
      <Header personalInformation={personalInformation} />
    </div>
  );
};

export default App;
