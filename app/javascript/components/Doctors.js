import React from 'react';

const Doctors = ({ users, doctors }) => {

  const { id, name} = user
  // const id = sub.id
  // const name = sub.name
  const url = `/users/${id}/doctors/`
  return(
    <>
      <h1>All Doctors from {name}</h1>
      <a href={`/users/${id}/doctors/new`}>Add New Doctor</a>
      { Doctors.map( (doctor) => (
        <>
          <h3>{doctor.name}</h3>
          <a href={`${url}${doctor.id}`}>Show</a>
          <a href={`${url}${doctor.id}/edit`}>Edit</a>
          <a href={`${url}${doctor.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Doctors;