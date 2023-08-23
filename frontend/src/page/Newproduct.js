import React, { useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import { ImagetoBase64 } from '../utility/ImagetoBase64'

const Newproduct = () => {

  const [data,setData] = useState ({
    name : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (e)=>{
    const {name,value} =e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }
  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)

    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const fetchRes = await fetchData.json()

    console.log(fetchRes)
  }
  return (
    <div className="p-4">
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name}/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option>Books</option>
          <option value={"fe-books"}>FE-books</option>
          <option value={"se-books"}>SE-books</option>
          <option value={"te-books"}>TE-books</option>
          <option value={"be-books"}>BE-books</option>
          <option value={"cs-books"}>CS-books</option>
          <option value={"it-books"}>IT-books</option>
          <option value={"entc-books"}>ENTC-books</option>
          <option value={"upsc-books"}>UPSC-books</option>
        </select>

        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-300  rounded flex items-center justify-center cursor-pointer'>
          {
            data.image ? <img src={data.image} className='h-full' /> : <span className='text-5xl'><BiCloudUpload/></span>
          }

          <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden" />
        </div>
        </label>

        <label htmlFor='price'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} value={data.price}/>

        <label htmlFor='description'>Description</label>
        <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange} value={data.description}></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>

    </div>
  )
}

export default Newproduct