import React from 'react'
import './index.sass'
import Cell from '../cell'
import { connect } from "react-redux";
import { removeItem } from '../../redux/actions'

const Table = ({removeItem, data, hours}) => {
  const heading = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const renderCell = (data, hour, day) => {
    return (
      data.map((el, index) => {
        if(el.day.toLowerCase() === day.toLowerCase() && el.time === hour){
          return <Cell task={el.task} key={index.toString()} removeItem={removeItem} id={el.id}/>
        }
        return false
      }))
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Hour</td>
          {heading.map((head, headIndex) => (
            <td key={headIndex.toString()}>{head}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour, index)=>(
          <tr key={index.toString()}>
            <td>{hours[index]}</td>
            {heading.map((item, index)=>(
              <td
                key={index}
              >
                {data.length > 0 ? renderCell(data, hour, item) : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
const mapStateToProps = ({ data, hours }) => ({
  data,
  hours
})

const mapDispatchToProps = {
  removeItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);