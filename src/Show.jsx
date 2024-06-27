import React, { useEffect, useState } from 'react'
import './App.css'

function Show() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [idToEdit, setIdToEdit] = useState('')

  useEffect(() => {
    fetch("http://localhost:4000/show")
      .then(response => response.json())
      .then(result => {
        setData(result)
        // console.log(result)
      })
  }, [])

  function handleDelete(id) {
    fetch("http://localhost:4000/deleteData", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ idToDelete: id }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Data Deleted")
          window.location.href = "http://localhost:5173/show";
      });
  }


  function handleEdit(id) {
    setIsActive(true)

    const selectedUser = data.find((user => {
      return user._id === id;
    }))
    // console.log(selectedUser._id)

    setIdToEdit(selectedUser._id);
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setMessage(selectedUser.message)

  }

  function handleSubmit(e) {

    e.preventDefault();
    // console.log(idToEdit)

    const obj = { name, email, message, id: idToEdit };

    fetch("http://localhost:4000/editData", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result === "Data Updated") {
          // setIsActive(false);  
          window.location.href = "http://localhost:5173/show";
        }
      });
  }


  return (
    <>
      <div className="showContainer">
        {isActive ?
          <div>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your name" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
              <textarea name="" id="" placeholder="Enter your message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea><br />
              <button type="submit"> Update Details</button>
            </form>
          </div> :
          ""
        }

        <h3 className="section-heading">Saved Messages</h3>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((d, index) => {
                  return (<><tr>
                    <td>{index + 1}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.message}</td>
                    <td>
                      <button type='button' onClick={() => handleEdit(d._id)}>EDIT</button>
                      ||
                      <button type='button' onClick={() => handleDelete(d._id)}>DELETE</button>
                    </td>
                  </tr></>

                  );
                })
              ) : (
                <tr>
                  <th colSpan="5">No Messages to Show</th>
                </tr>
              )}
            </tbody>

         

          </table>
        </div>

      </div>

    </>
  )
}

export default Show