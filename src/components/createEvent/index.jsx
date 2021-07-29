import React, { useState} from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './index.sass';
import {
  createNewEvent
} from '../../redux/actions'



const CreateEvent = ({
  days,
  hours,
  people,
  data,
  createNewEvent
}) => {
  const [event, setEvent] = useState({ id: new Date().getTime(), members: ['Maria'], day: 'mon', time: 0,  task: ''})
  const [error, setError] = useState(false)
  const handleChange = e => {
    const { name, value } = e.target;

    setEvent(prevState => ({
      ...prevState,
      [name]: name === 'time' ? +value : value
    }))
  }

  const checkPeople = ({members}, value) => {
    const index = members.indexOf(value);
    if(index !== -1) {
      return setEvent(prevState => ({
        ...prevState,
        members: members.filter(item => item !== value)
      }))
    } else {
      return setEvent(prevState => ({
        ...prevState,
        members: [...members, value]
      }))
    }
  }

  const validate = ev => {
    data.forEach(item => {

      item.day.toLowerCase() === ev.day.toLowerCase() ? +item.time === +ev.time ? setError(true) : setError(false) : setError(false)
    });
  }

  return (
    <div className='block'>
       <Link className='link title' to="/">To home page</Link>
      <div>
        <div className='block'>
          <div className='title'>Name of the event:</div>
          <input
            type="text"
            value={event.task}
            name='task'
            onChange={e=>handleChange(e)}
            />
        </div>
        <div className='block'>
          <div className='title'>Select event members:</div>
          {
            people.map((item, index) => (
              <label htmlFor={item} key={index.toString()} className='label'>
                {item}
                <input
                  type="checkbox"
                  value={item}
                  checked={event.members.indexOf(item) !== -1 ? 'checked': ''}
                  onChange={()=>checkPeople(event, item)}
                  />
              </label>

            ))
          }
        </div>
        <div className='block'>
          <div className='title'>Day:</div>
          {
            days.map((item, index) => (
              <label htmlFor={item} key={index.toString()}>
                {item}
                <input
                  type="checkbox"
                  name='day'
                  value={item.toLowerCase()}
                  checked={event.day.toLowerCase() === item.toLowerCase() ? 'checked' : ''}
                  onChange={e => handleChange(e)}/>
              </label>

            ))
          }
        </div>
        <div className='block'>
          <div className='title'>Time:</div>
          {
            hours.map((item, index) => (
              <label htmlFor={item} key={index.toString()}>
                {item}:00
                <input
                  type="checkbox"
                  name='time'
                  value={+item}
                  checked={+event.time === +item ? 'checked' : ''}
                  onChange={e => handleChange(e)}/>
              </label>

            ))
          }
        </div>
        {error ?
        <div className="block error">
          <h2 className="title">This day and time is not available</h2>
        </div>
        : ''}
        <button
          className='block button'
          name='id'
          onClick={e => createNewEvent(event)}
        >Create!</button>

      </div>

    </div>
  )
}
const mapStateToProps = ({ days, hours, people, data }) => ({
  days,
  hours,
  people,
  data
})

const mapDispatchToProps = {
  createNewEvent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);