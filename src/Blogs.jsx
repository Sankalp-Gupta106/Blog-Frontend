import React, { useEffect, useState } from 'react'

function Blogs() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://blog-backend-i4ss.onrender.com/showBlogs")
      .then(response => response.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
  }, [])

  function handleSearch() {
    fetch("https://blog-backend-i4ss.onrender.com/searchBlog?q=" + search)
      .then(response => response.json())
      .then(result => console.log(result))
  }



  return (<>
    <header>
      <div className="search">
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type='button' onClick={handleSearch}>Search</button>
      </div>
    </header>
    {data.map((d) => {
      return (<>

        <div className="details">
          <div>
            <h1>{d.title}</h1>
            <h5>{d.author}</h5>
            {d.file && (
              <img src={`https://blog-backend-i4ss.onrender.com/${d.file}`}alt={d.title} />
                )}
            <p>{d.blog}</p>
          </div>
        </div>
      </>)
    })}
  </>

  )
}

export default Blogs