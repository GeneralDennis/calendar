import {
  REMOVE_TASK,
  CREATE_NEW_EVENT,
  CHECK_PERSON
} from './variables'

export const removeItem = (value) => (
  {
    type: REMOVE_TASK,
    payload: value
  }
)

export const createNewEvent = (value) => (
  {
    type: CREATE_NEW_EVENT,
    payload: value
  }
)

export const checkPerson = (data) => ({
  type: CHECK_PERSON,
  payload: data.target.value
})