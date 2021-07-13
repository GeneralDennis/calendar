import React from 'react'
import { connect } from "react-redux";
import { addNewEventName, addNewEventDay,addNewEventHour, addNewEventMan } from '../../redux/actions'

const CreateEvent = ({newEvent, newEventName, addNewEventName, addNewEventDay, addNewEventHour, addNewEventMan, newEventDay, newEventMan, newEventHour , days, hours, people}) => {
  return (
    <form>
      <div>
        <div>Name of the event:</div>
        <input type="text" value={newEventName} onInput={e=> addNewEventName(e.target.value)}/>
      </div>
      <div>
        <div>Participants:</div>
        {
          people.map((item, index) => (
            <label htmlFor={item} key={index.toString()}>
              {item}
              <input type="checkbox" checked={ newEvent.man.length ? newEvent.man.includes(item) ? 'true' : '' : ''} value={item} onChange={e=> addNewEventMan(e.target.value)}/>
            </label>

          ))
        }
      </div>
      <div>
        <div>Day:</div>
        {
          days.map((item, index) => (
            <label htmlFor={item} key={index.toString()}>
              {item}
              <input type="radio" checked={ newEventDay.toLowerCase() === item.toLowerCase() ? 'true' : ''} value={item} onChange={e=> addNewEventDay(e.target.value)}/>
            </label>

          ))
        }
      </div>
      <div>
        <div>Time:</div>
        {
          hours.map((item, index) => (
            <label htmlFor={item} key={index.toString()}>
              {item}:00
              <input type="radio" checked={ +newEventHour === +item ? 'true' : ''} value={item} onChange={e=> addNewEventHour(e.target.value)}/>
            </label>

          ))
        }
      </div>

    </form>
  )
}
const mapStateToProps = ({ newEventName, newEventDay, newEventHour, newEventMan, newEvent, days, hours, people }) => ({
  newEventName,
  newEventDay,
  newEventHour,
  newEventMan,
  newEvent,
  days,
  hours,
  people
})

const mapDispatchToProps = {
  addNewEventName,
  addNewEventDay,
  addNewEventHour,
  addNewEventMan
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);