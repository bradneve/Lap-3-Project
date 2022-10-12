import React from 'react'
import './style.css'

const InGameLeaderboard = ({currentOrFinal}) => {
    return (
        <div className='igl-container'>
            <h1 style={{fontWeight: 'bold', textDecoration: 'underline', color: '#5e057e'}}>{currentOrFinal} Scores</h1>
          <ul className='leaderboard-list' role={"list"}>
            <li>beastman69 - 300</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    )
}

export default InGameLeaderboard