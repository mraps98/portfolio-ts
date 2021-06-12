import "./index.scss";
import { IPersonalInformation } from "../../App";

interface IProps {
  personalInformation: IPersonalInformation;
}

const Header: React.FC<IProps> = ({ personalInformation }: IProps) => {
  return (
    <div className="header">
      <div className="header-left">
        <h2 className="name">
          {personalInformation.firstName} {personalInformation.lastName}
        </h2>
        <a href={`mailto:${personalInformation.email}`} className="email">
          {personalInformation.email}
        </a>
      </div>
      <div className="header-right">
        <div className="header-right-icons">
          <a className="btnGithub" href={personalInformation.githubUrl}>
            <i className="fab fa-github" />
          </a>
          <a className="btnLinkedIn" href={personalInformation.linkedInUrl}>
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <a
          className="btnResume"
          target="_blank"
          rel="noreferrer"
          href={require("../../assets/resume.pdf").default}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
