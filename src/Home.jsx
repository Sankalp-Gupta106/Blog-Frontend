import React, { useState } from 'react'

function Home() {
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [blog, setBlog] = useState("")
    const [file,setFile] = useState("")
    // const [fileName , setFileName] = useState("")

    // function selectFile(){

    // }


    function handleSubmit(e) {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('author' , author)
        formdata.append('title' , title)
        formdata.append('blog' , blog)
        formdata.append('file' , file)
        // console.log(obj)

        fetch("https://blog-backend-i4ss.onrender.com/getBlog", {
            method: "POST",
            body: formdata
        }).then(response=>response.json()).then(result=>console.log(result))
    }
    return (
        <>
            <div className='mainContainer'>
                <div className='form'>
                    <form action="" onSubmit={handleSubmit} encType='multipart/form-data'>
                        <input type="text" required placeholder="Author Name" value={author} onChange={(e) => { setAuthor(e.target.value) }} /><br />
                        <label>Author's Photo</label>
                        <input id ="files" type ="file" onChange={(e)=>setFile(e.target.files[0])} ></input>
                        <input type="text" required placeholder="Blog Title" value={title} onChange={(e) => { setTitle(e.target.value) }} /><br />
                        <textarea name="" id="" required placeholder="Blog Body" value={blog} onChange={(e) => { setBlog(e.target.value) }}></textarea><br />
                        <button type="submit">Add Blog</button>
                        <a href="/showBlogs"><button type="button" >All Blogs</button></a>
                    </form>
                </div>
            </div>
            <footer></footer>
        </>
    )
}

export default Home