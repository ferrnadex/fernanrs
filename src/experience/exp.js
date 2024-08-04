import "./exp.css"

import { experience } from "./data";

function ExpList() {
    const experienceList = experience.map(experience => 
        <li key={experience.id}>
            <p>
                <b>{experience.company}</b> <br />
                <b>{experience.role}</b> <br />
                {experience.time} <br />
                {experience.location} <br />
                {experience.description}
            </p>
        </li>
    );

    return <ul>{experienceList}</ul>
}

export { ExpList }