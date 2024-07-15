import { useEffect, useState } from "react"
import './App.css' 

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const obj = { name, email, message }

    fetch("https://blog-backend-i4ss.onrender.com/getdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj)
    })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        if (result === "Data Submitted") setResponse(true)
      });
  }




  return (
    <>
      <div className="mainContainer">
        <div>
          <a href="/showBlogs"><button>All Blogs</button></a>
          <a href="/"><button>Add Blog</button></a>
          </div>
        <h1>Welcome</h1>
        <div className="form">
          {response ? <p> Thank you for your message</p> : ""}
          <form action="" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Enter your name" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
            <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
            <textarea name="" id="" required placeholder="Enter your message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea><br />
            <button type="submit">Send Message</button>
            <a href="/show"><button type="button" >Show</button></a>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
