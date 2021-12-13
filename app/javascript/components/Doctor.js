import React from 'react';

const Doctor = ({ user, doctor }) => {

  const { id, doctor :name } = user
  const { name, rank } = doctor
  return (
    <>
      <h1>Doctor: {title}</h1>
      <h1>User: {name}</h1>
      <p>
        {body}
      </p>
      <a href={`/users/${id}`}>Show page of {name}</a>
    </>
  )
}

export default Doctor;