import './style.css'
import {NavLink} from "react-router-dom";

const Project = ({tittle, img, id}) => {
    return (
        <NavLink to={`/project/${id}`}>
            <li className="project">
                <img src={img} alt={tittle} className="project__img"/>
                <h3 className="project__title">{tittle}</h3>
            </li>
        </NavLink>
    )
}

export default Project;