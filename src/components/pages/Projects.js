import Project from "../project/Project";

import {projects} from "../../helpers/projectList";

const Projects = (props) => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((item) => (
                        <Project key={item.id}
                                 {...item}/>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Projects;