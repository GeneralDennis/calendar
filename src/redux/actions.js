import { REMOVE_TASK, NEW_EVENT_NAME, NEW_EVENT_DAY, NEW_EVENT_TIME, NEW_EVENT_MAN } from './variables'

export const removeItem = (value) => (
  // console.log('remove task click')
  {
    type: REMOVE_TASK,
    payload: value
  }
)

export const addNewEventName = (value) => (

  {
    type: NEW_EVENT_NAME,
    payload: value
  }
)

export const addNewEventDay = (value) => (
  {
    type: NEW_EVENT_DAY,
    payload: value
  }
)

export const addNewEventHour = (value) => (
  {
    type: NEW_EVENT_TIME,
    payload: value
  }
)

export const addNewEventMan = (value) => (
  {
    type: NEW_EVENT_MAN,
    payload: value
  }
)