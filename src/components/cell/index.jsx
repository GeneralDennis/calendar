import React from 'react'

const Cell = ({task, removeItem, id}) => {
  return (
    <div>
      {task}
      <button onClick={()=>removeItem(id)}>x</button>
    </div>
  )
}

export default Cell