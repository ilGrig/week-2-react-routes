import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/a423256c-795d-4bcf-865f-4739bc9906fd">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
