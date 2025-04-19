"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([]);
  const [complete, setComplete] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  const completeHandler = (i) => {
    let copytask = [...mainTask];
    let comp = copytask.splice(i, 1);
    setMainTask(copytask);
    setComplete([...complete, comp[0]]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="bg-black text-white p-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
        My Todo List
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center p-4"
      >
        <input
          type="text"
          className="text-lg sm:text-xl border-zinc-800 border-2 px-4 py-2 w-full md:w-1/3"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-lg sm:text-xl border-zinc-800 border-2 px-4 py-2 w-full md:w-1/3"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-6 py-2 text-lg sm:text-xl font-bold rounded w-full md:w-auto">
          Add Task
        </button>
      </form>

      {/* Available Tasks */}
      <section className="p-4">
        <h2 className="text-center font-bold text-3xl sm:text-4xl mb-4">
          Available Tasks
        </h2>
        <div className="bg-white shadow-md rounded p-4">
          {mainTask.length === 0 ? (
            <h2 className="text-center text-gray-600 text-xl">No Task Available</h2>
          ) : (
            <ul>
              <div className="hidden sm:flex justify-between font-bold text-lg sm:text-2xl text-white bg-black px-4 py-2 rounded mb-4">
                <span className="w-1/3">Task Name</span>
                <span className="w-1/3 text-center">Description</span>
                <span className="w-1/3 text-end">Action</span>
              </div>
              {mainTask.map((t, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-gray-200 mb-3 p-3 rounded"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full sm:w-2/3 gap-2">
                    <h5 className="text-lg sm:text-xl font-semibold break-words">{t.title}</h5>
                    <h6 className="text-md sm:text-lg font-medium text-gray-700 break-words sm:text-end">
                      {t.desc}
                    </h6>
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
          )}
        </div>
      </section>

      {/* Completed Tasks */}
      <section className="p-4">
        <h2 className="text-center font-bold text-3xl sm:text-4xl mb-4">
          Completed Tasks
        </h2>
        <div className="bg-white shadow-md rounded p-4">
          {complete.length === 0 ? (
            <h2 className="text-center text-gray-600 text-xl">No Task Available</h2>
          ) : (
            <ul>
              <div className="hidden sm:flex justify-between font-bold text-lg sm:text-2xl text-white bg-black px-4 py-2 rounded mb-4">
                <span className="w-1/3">Task Name</span>
                <span className="w-1/3 text-center">Description</span>
                <span className="w-1/3 text-end">Status</span>
              </div>
              {complete.map((t, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-green-100 mb-3 p-3 rounded"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full sm:w-2/3 gap-2">
                    <h5 className="text-lg sm:text-xl font-semibold break-words">{t.title}</h5>
                    <h6 className="text-md sm:text-lg font-medium text-gray-700 break-words sm:text-end">
                      {t.desc}
                    </h6>
                  </div>
                  <button className="bg-green-800 text-white px-4 py-2 rounded font-bold">
                    Completed
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;
