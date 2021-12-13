import React from 'react';

const DoctorNew = ({ user, doctor }) => {

  const { id } = user 
  const { name, rank } = doctor
  const defaultTitle = name ? name : ""
  const defaultBody = rank ? rank : ""
  return (
    <>
      <h1>New user from the doctor</h1>
      <form action={`/users/${id}/doctors`} method="post">
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

export default DoctorNew;