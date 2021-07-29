import React from 'react'
import { connect } from "react-redux";

import { checkPerson } from '../../redux/actions'

const MembersFilter = ({people, checkPerson, checkedPerson}) => {
  return (
    <div className="header__people block">
      <div className="title">Select Partisipants</div>
      {
        people.map((item, index) => (
          <label
            className='label'
            htmlFor={item}
            key={index.toString()}
          >
            {item}
            <input
              type="checkbox"
              id={item}
              value={item}
              checked={item.toLowerCase() === checkedPerson.toLowerCase() ? 'checked' : ''}
              onChange={e=>checkPerson(e)}/>
          </label>
        ))
      }
    </div>
  )
}
const mapStateToProps = ({ people, checkedPerson }) => ({
  people,
  checkedPerson
})

const mapDispatchToProps = {
  checkPerson
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersFilter);