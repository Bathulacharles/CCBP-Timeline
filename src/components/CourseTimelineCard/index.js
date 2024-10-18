import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <div>
      <div className="heading-container">
        <h1>{courseTitle}</h1>
        <div className="duration-icon-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachItem => (
          <li className="tags-item" key={eachItem.id}>
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
