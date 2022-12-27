import BtnGitHub from "../btnGitHub/BtnGitHub";
import {useParams} from "react-router-dom";
import {projects} from "../../helpers/projectList";

const ProjectInfo = (props) => {

    const {id} = useParams()

    const project = projects[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.tittle}</h1>

                    <img src={project.imgBig} alt={project.tittle} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>


                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink}/>
                    )}

                </div>
            </div>
        </main>
    )
}

export default ProjectInfo;