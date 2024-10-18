import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF
        <br />
        <span className="heading-course">CCBP 4.0</span>
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{secondary: 'white'}}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'PROJECT') {
            return <ProjectTimelineCard projectDetails={eachItem} />
          }
          return <CourseTimelineCard courseDetails={eachItem} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
