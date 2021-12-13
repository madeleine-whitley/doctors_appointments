import React from 'react';

const Appointments = ({ doctors, appointments }) => {

  const { id, name } = doctor
  // const id = sub.id
  // const name = sub.name
  const url = `/doctors/${id}/appointments/`
  return(
    <>
      <h1>All Appointments from {name}</h1>
      <a href={`/doctors/${id}/appointments/new`}>Add New Appointment</a>
      {/* topics = [{ title: 'adfadf', body: 'dasfasdf', id: 1}, { title: 'adfadf', body: 'dasfasdf', id: 2}] */}
      { appointments.map( (Appointment) => (
        <>
          <h3>{Appointment.title}</h3>
          <a href={`${url}${song.id}`}>Show</a>
          <a href={`${url}${song.id}/edit`}>Edit</a>
          <a href={`${url}${song.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Appointments;