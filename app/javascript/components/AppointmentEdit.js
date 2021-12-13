import React from 'react';

const AppointmentEdit = ({ doctor, appointment }) => {

  const { id, name } = doctor 
  const { title, body } = appointment
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  return (
    <>
      <h1>New appointment from the doctor {name}</h1>
      <form action={`/doctors/${id}/appointments/${appointment.id}/edit`} method="post">
        <input type="hidden" name="_method" value="patch" />
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

export default AppointmentEdit;