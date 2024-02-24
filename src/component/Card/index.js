import React from 'react'
import './style.css'
const Card = ({repo}) => {

  const time = repo.updated_at.split('T')[0];
  return (
    <div className='card'>
      <img src={repo.owner.avatar_url} alt='avatar'/>
      <div className='left'>
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
        <div className='subdiv'>
          <p className='box'> No. of Stars {repo.stargazers_count}</p>
          <p className='box'> No. of Issues {repo.open_issues}</p>
          <p>Last pushed {time} by {repo.owner.login}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
