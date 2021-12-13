import React from 'react';

const DoctorEdit = ({ user, doctor }) => {

  const { id } = user 
  const { name, rank } = doctor
  const defaultTitle = name ? name : ""
  const defaultBody = rank ? rank : ""
  return (
    <>
      <h1>New User from the Doctor {name}</h1>
      <form action={`/users/${id}/doctors/${doctor.id}`} method="post">
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

export default DoctorEdit;