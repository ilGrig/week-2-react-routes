import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/main">Go to Main</Link>
      <Link to="/dashboard/profile/a423256c-795d-4bcf-865f-4739bc9906fd">Go to profile</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
