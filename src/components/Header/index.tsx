import "./index.scss";
import { IPersonalInformation } from "../../App";

interface IProps {
  personalInformation: IPersonalInformation;
}

const Header: React.FC<IProps> = ({ personalInformation }: IProps) => {
  return (
    <div className="header">
      <h2 className="name">
        {personalInformation.firstName} {personalInformation.lastName}
      </h2>
      <a href={`mailto:${personalInformation.email}`} className="email">
        {personalInformation.email}
      </a>
      <div className="btnResume">
        <a href={personalInformation.resumeUrl}>Resume</a>
      </div>
      <div className="btnGithub">
        <a href={personalInformation.githubUrl}>Github</a>
      </div>
      <div className="btnLinkedIn">
        <a href={personalInformation.linkedInUrl}>LinkedIn</a>
      </div>
    </div>
  );
};

export default Header;
