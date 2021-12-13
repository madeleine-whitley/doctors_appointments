import React from 'react';

const User = ({ user, fullName }) => {
  return (
    <>
      <h1>{fullName}</h1>
      <a>Edit</a>
      <a>Delete</a>
      <h2>Appointments</h2>
      <a href = {`/users/${user.id}/doctors`}>Go to Appointments</a>
    </>
  )
}

export default User;