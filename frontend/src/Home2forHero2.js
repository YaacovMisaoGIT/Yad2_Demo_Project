import React from 'react'
import { useEffect, useState } from 'react'

import Hero2 from './components/CarComponents/Hero2'

function Home2forHero2() {
    const [users, setUsers] = useState(null)


useEffect(() => {
  const fetchUsers = async () => {
      const response = await fetch('/api/users')    
      const json = await response.json()
    console.log(json)
      if (response.ok) {
        setUsers(json)

      }
  }
  fetchUsers()
}, [])

  return (
    <div className='home'>
        <div className='users'>
           {users && users?.map((user) => (
            <Hero2 key= {user?._id} user={user} />
          ))}  
        </div>
    </div>
  )
}

export default Home2forHero2