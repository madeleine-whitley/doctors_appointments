import React from 'react';

const Appointment = ({ doctor, appointment }) => {

  const { id, name } = doctor
  const { title, body } = appointment
  return (
    <>
      <h1>Appointment: {title}</h1>
      <h1>Doctor: {name}</h1>
      <p>
        {body}
      </p>
      <a href={`/doctors/${id}`}>Show page of {name}</a>
    </>
  )
}

export default Appointment;