import { REMOVE_TASK, CREATE_EVENT, NEW_EVENT_NAME, NEW_EVENT_DAY, NEW_EVENT_TIME, NEW_EVENT_MAN } from './variables'

const data = [
  {
    id: 1,
    members: ['Diana', 'Frank'],
    day: 'wed',
    time: 12,
    task: 'Create Table'
  },
  {
    id: 2,
    members: ['Diana'],
    day: 'fri',
    time: 16,
    task: 'Release'
  }
]

const people = ['Maria', 'Bob', 'Alex', 'Peter', 'John']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18]

const initialState = {
  data: data,
  newData: data,
  newEvent: {
    name: '',
    day: '',
    hour: '',
    man: []
  },
  newEventName: '',
  newEventDay: '',
  newEventHour: '',
  newEventMan: [],
  people,
  days,
  hours
}

const removeTask = (data, id) => {
  return data.filter(item => item.id !==id)
}

const checkMan = (newEvent, value) => {
  const index = newEvent.man.indexOf(value);
  if(index !== -1) {
    return newEvent.man.filter(item => item !== value)
  } else {
    return [...newEvent.man, value]
  }
}

const reducer = ( state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_TASK:
      return {
        ...state,
        newData: removeTask(state.newData, payload)
      }

    case CREATE_EVENT:
      return {
        ...state,
      }

    case NEW_EVENT_NAME:
      return {
        ...state,
        newEventName: payload
      }

    case NEW_EVENT_DAY:
      return {
        ...state,
        newEventDay: payload
      }

    case NEW_EVENT_TIME:
      return {
        ...state,
        newEventHour: payload
      }

    case NEW_EVENT_MAN:
      return {
        ...state,
        newEvent: {
          man: checkMan(state.newEvent, payload)
        }
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer