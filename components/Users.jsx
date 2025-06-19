"use client";
import {useEffect} from 'react'

function Users() {
  useEffect(() => {
    alert('loaderd')
  }, []); 

  return (
    <div>Users</div>
  )
}

export default Users