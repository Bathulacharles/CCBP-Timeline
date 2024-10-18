import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="heading-container">
        <h1>{projectTitle}</h1>
        <div className="duration-icon-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="parent">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
