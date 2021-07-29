import {
  REMOVE_TASK,
  CREATE_NEW_EVENT,
  CHECK_PERSON
} from './variables'

const data = [
  {
    id: 1,
    members: ['Maria', 'Bob', 'Alex'],
    day: 'wed',
    time: 12,
    task: 'Create Table'
  },
  {
    id: 2,
    members: ['Maria', 'Alex', 'Peter', 'John'],
    day: 'fri',
    time: 16,
    task: 'Release'
  }
]

const people = ['Maria', 'Bob', 'Alex', 'Peter', 'John']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18]

const initialState = {
  data,
  newEvent: {
    id: '',
    task: '',
    day: '',
    time: '',
    members: []
  },
  people,
  days,
  hours,
  checkedPerson: '',
}

const removeTask = (data, id) => {
  return data.filter(item => item.id !==id)
}

const reducer = ( state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_TASK:
      return {
        ...state,
        data: removeTask(state.data, payload)
      }

    case CREATE_NEW_EVENT:
      return {
        ...state,
        data: [...state.data, payload]
      }

    case CHECK_PERSON:
      return {
        ...state,
        checkedPerson: payload
      }



    default:
      return {
        ...state
      }
  }
}

export default reducer