import React from 'react'
import Table from "../table";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Home = ({removeItem, newData, people}) => {
  return (
    <div className="home">
      <header className='app__header'>
        <h2 className="home__title">Calendar</h2>
        <div className="header__menu">
          <div className="header__people">
            {
              people.map((item, index) => (
                <label htmlFor={item} key={index.toString()}>
                  {item}
                  <input type="checkbox" id={item} />
                </label>
              ))
            }
          </div>
          <Link to="/create-event">New Event +</Link>
        </div>
      </header>
      <Table newData={newData} removeItem={removeItem}/>
    </div>
  )
}

const mapStateToProps = ({ people }) => ({
  people
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
