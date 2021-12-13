import React from 'react';

const AppointmentNew = ({ doctor, appointment }) => {

  const { id, name } = doctor 
  const { title, body } = appointment
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New Appointment from the User {name}</h1>
      <form action={`/doctors/${id}/appointments/new`} method="post">
        <label>Title</label>
        <input 
          type="text"
          required 
          defaultValue={defaultTitle}
          name="topic[title]"
        />
        <label>Body</label>
        <textarea
          required 
          defaultValue={defaultBody}
          name="topic[body]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AppointmentNew;