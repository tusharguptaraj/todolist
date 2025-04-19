"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

const [mainTask, setMainTask] = useState([])
const [complete, setComplete] = useState([])

  
  const submitHandler=(e)=>{
    e.preventDefault()
    
    setMainTask([...mainTask, {title,desc}]);

    settitle("");
    setdesc("");
    console.log(mainTask)
  };


  const deleteHandler=(i)=>{
      let copytask=[...mainTask]
      copytask.splice(i,1)
      setMainTask(copytask)
    
  }
  const completeHandler=(i)=>{
    let copytask=[...mainTask]
    
    let comp=copytask.splice(i,1)
    setMainTask(copytask)
    setComplete([...complete,comp[0]])
    console.log(setComplete)

  }


  let rendertask=<h2>No Task Available</h2>
  let completetask=<h2>No task Available</h2>



  
  if(mainTask.length>0){
    
  rendertask = mainTask.map((t,i)=>{
    return (
      <><div className='flex items-center justify-between mb-5 pl-10 pr-10 bg-black'>
    
      <h2 className='bg-black text-white font-bold text-2xl pt-2 pb-2'>Task Name</h2>
      <h2 className='bg-black text-white font-bold text-2xl pt-2 pb-2'>Description</h2>
      <h2 className='bg-black text-white font-bold text-2xl mr-20 pt-2 pb-2'>Action</h2>
      
    </div>
    <li key={i} className='flex items-center justify-between'>
      
    <div className='flex items-center justify-between mb-5 w-2/3'>
    
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-xl font-medium mr-20 w-2/3 text-end'>{t.desc}</h6>
    </div>

    
      <button 
      onClick={()=>{
        completeHandler(i)
      }}
      className='bg-green-600 text-white px-4 py-2 rounded font-bold'>
        Complete
        </button>

    <button
    onClick={()=>{
      deleteHandler(i)
    }} 
    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
      Delete
      </button>
    </li>
   
    </>
    )
  });}


  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Task Here'
      value={title} 
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description Here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded ml-120'>Add Task</button>

    </form>
    <hr/>
    <h1 className='text-center font-bold text-4xl m-3'>Available Task</h1>
    <div className='p-8 pt-2 bg-slate-200'>
      
      <ul>
      {mainTask.length === 0 ? (
          <h2>No Task Available</h2>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5 px-10 bg-black text-white font-bold text-2xl">
              <h2>Task Name</h2>
              <h2>Description</h2>
              <h2 className="mr-20">Action</h2>
            </div>
            <ul>
              {mainTask.map((t, i) => (
                <li key={i} className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-between w-2/3">
                    <h5 className="text-2xl font-semibold">{t.title}</h5>
                    <h6 className="text-xl font-medium mr-20 w-2/3 text-end">{t.desc}</h6>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => completeHandler(i)}
                      className="bg-green-600 text-white px-4 py-2 rounded font-bold"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => deleteHandler(i)}
                      className="bg-red-400 text-white px-4 py-2 rounded font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </ul>

    </div>
    <h1 className='text-center font-bold text-4xl m-3'>Completed Task</h1>
    
    <div className='p-8 pt-2 bg-slate-200'>
      
      <ul>
        {complete.length === 0 ? (
          <h2>No Task Available</h2>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5 px-10 bg-black text-white font-bold text-2xl">
              <h2>Task Name</h2>
              <h2>Description</h2>
              <h2 className="mr-20">Status</h2>
            </div>
            <ul>
              {complete.map((t, i) => (
                <li key={i} className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-between w-2/3">
                    <h5 className="text-2xl font-semibold">{t.title}</h5>
                    <h6 className="text-xl font-medium mr-20 w-2/3 text-end">{t.desc}</h6>
                  </div>
                  <button className="bg-green-800 text-white px-4 py-2 rounded font-bold">Completed</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </ul>

    </div>
    
    </>
  )
}

export default page