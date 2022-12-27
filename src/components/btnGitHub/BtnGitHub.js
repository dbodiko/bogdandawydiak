import github from "./black-github.svg";

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={github} alt=""/>
            GitHub repo
        </a>
    )
}

export default BtnGitHub;