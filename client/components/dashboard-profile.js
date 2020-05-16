import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const DashboardProfile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Profile" />
      <div id="title">Profile</div>
      <div id="username"> {user} </div>
      <Link to="/dashboard/main">Go to Main</Link>
      <div>
        <Link to="/dashboard">Go to Root</Link>
      </div>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
