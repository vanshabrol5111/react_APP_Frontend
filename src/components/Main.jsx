import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import { gettodo } from "./get";
import { posttodo } from "./post";
import { deletetodo } from "./deletetodo";
import { patchtodo } from "./patch";
import { puttodo } from "./put";
const Main = () => {
  const [data, setdata] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  
  useEffect(() => {
    gettodo().then((todo) => {
      setdata(todo.product);
    });
  }, []);

  const handlesubmit =async (e) => {
    e.preventDefault();
    await posttodo(inputTitle, inputDescription);
   
    // console.log('title:',inputTitle,'description:',inputDescription);
     setInputTitle("");
     setInputDescription("");

    gettodo().then((todo) => {
      setdata(todo.product);
    });
   
  };
  const handleDelete=async(id)=>{
    
    await deletetodo(id);
    gettodo().then((todo) => {
      setdata(todo.product);
    });
  }
  const statusHandler=async(id,completed)=>{

    // console.log(id,"Herer Here")
    await patchtodo(id,completed);
    gettodo().then((todo) => {
      setdata(todo.product);
    });
  }
  const editHandler=async(id)=>{
   const newtitle= prompt("enter new title ")
   const newdescription= prompt("enter new description ")
  //  console.log(id)
    await puttodo(id,newtitle,newdescription);
    gettodo().then((todo) => {
      setdata(todo.product);
    });
  }

  
 
  console.log(data)
  // const apple = data.product;

  return (
  <>
    <div className="bg-black h-screen">
      <div className="flex flex-col flex-wrap">
        <div className="flex  justify-center">
          <form className="flex flex-wrap justify-center gap-3" onSubmit={handlesubmit}>
            <input
              type="text"
              className=" h-10 mt-10  border-white rounded-md p-2"
              placeholder="Enter the title"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <input
              type="text"
              className=" h-10 w-56 mt-10 border border-white rounded-md p-2"
              placeholder="Enter the description of todo"
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
            />
            <Button buttontext={`ADD`} />
          </form>
        </div>
        <div className=" flex flex-wrap gap-4 mt-10 mr-4 ml-4 justify-center ">
          {data.map((item, index) => {
            return (
              <div key={index} className="w-96 border text-white p-3 rounded-md">
                <li className="list-none border-white">
                  {`Title :${item.title}.  Description:${item.description} .`}
                  <div className="flex">
                    <Button buttontext={`Edit`} 
                    clickHandler={()=>editHandler(item._id)}
                    />
                    <Button
                      buttontext={`Delete`}
                      
                      clickHandler={()=>handleDelete(item._id)}
                    
                    />
                    <Button
                      buttontext={`${
                        item.iscompleted ? "Completed" : "TaptoComplete"
                      }`}
                      clickHandler={()=>statusHandler(item._id,true)}
                    />
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </>
  );
  // function handleDelete(id){
  // data.filter(data=>data._id !==id)
  //   setinputid("")
      
  // }

};

export default Main;
