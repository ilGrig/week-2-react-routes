import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const DashboardMain = () => {
  return (
    <div>
      <Head title="Main" />
      <div id="title">Main</div>
      <Link to="/dashboard">Go to Root</Link>
      <Link to="/dashboard/profile/a423256c-795d-4bcf-865f-4739bc9906fd">Go to profile</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
