import React from 'react'
import Table from "../table";
import MemebersFilter from '../memebersFilter';

import { Link } from 'react-router-dom';

const Home = ({removeItem, data, people}) => {
  return (
    <div className="home block">
      <header className='app__header'>
        <h2 className="home__title title">Calendar</h2>
        <div className="header__menu">
          <MemebersFilter />

          <Link className='link title' to="/create-event">New Event +</Link>
        </div>
      </header>
      <div className="block">
        <Table/>
      </div>
    </div>
  )
}

export default Home
