import React, { useRef, useState } from "react";
import { useEffect } from "react";


function Messagerie() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  console.log("users", selectedUserId, inputValue);
  const [selectedUserName, setSelectedUserName] = useState(null);

  const ref = useRef(null);

 
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setActiveUser(userId);

    const selectedUserName = users.find((user) => user.id === userId);

    if (selectedUserName) {
      setSelectedUserName(selectedUserName);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (ref.current.value === "") {
      ref.current.focus();
    } else if (selectedUserId && inputValue.trim() !== "") {
      dispatch(createMessageRequest(selectedUserId, inputValue));
      setInputValue("");
    }
  };
  return (
    <div
      style={{ height: "47vw", display: "flex" }}
      className=" lg:w-4/5 w-full  bg-gray-50 ml-auto"
    >
      <div
        className="w-2/6"
        style={{
          marginTop: "1vw",
          height: "43vw",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <ul
          style={{
            
            justifyContent: "flex-start",
            paddingLeft: "5px",
            fontSize: "25px",
            position: "fixed",
            width: "78%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            display: "flex",
            fontWeight: "bold",
          }}
          className="bg-gray-50"
        >
          <h3 className="w-2/4 text-gray-500 ">Liste des utilisateurs</h3>
          <h3 className="w-3/4 ml-8 text-gray-500 ">Nos messages</h3>
          <h3
            className="w-4/4 text-primary"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "capitalize",
              marginTop: "10px",
              width: "30%",
              textAlign: "end",
              color:"blue"
            }}
          >
            {" "}
            {selectedUserName && selectedUserName.name}{" "}
            Mahrez
          </h3>
        </ul>
        <div
          style={{
            height: "100%",
            margin: "2px",
          }}
        >  
          <div
            style={{
              marginTop: "40px",
              overflow: "auto",
              height: "100%",
              paddingTop: "30px",
            }}
            className="bg-purple-100  rounded-2xl"
          >
            <ul>
         
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                    <div
                   
                      style={{ display: "flex", cursor: "pointer" }}
                      className='hover:bg-gray-50' 
                 
                    >
                      <div className="w-10 h-10 bg-gray-200 m-2 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          TM
                      </div>
                      <li className="mt-4 ml-1  font-bold">Touzi Mahrez</li>
                    </div>
                    
                  
                
            </ul>
          </div>
        </div>
      </div>
      <div className="container w-4/6 ">
        <div style={{ height: "46vw" }} className="flex flex-col ">
          <div
            style={{
              height: "40vw ",
              marginTop: "2vw",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            className="flex-grow p-6 bg-gray-50 "
          >
            <div
              style={{ height: "36vw", overflow: "auto" }}
              className="flex flex-col space-y-4"
            >     

                <div className= "flex mt-10 justify-end">
                    <div
                      style={{
                        borderRadius: "20px",
                        height: "auto",
                        wordWrap: "break-word",
                      }}
                      className="bg-green-700 rounded-lg p-2  text-white max-w-sm"
                    >
                     Saha dina amek a les hommes
                    </div>
                  </div>
                  <div
                  
                    className= "flex mt-10 justify-start"
                   
                    
                  >
                    <div
                      style={{
                        borderRadius: "20px",
                        height: "auto",
                        wordWrap: "break-word",
                      }}
                      className="bg-purple-700   rounded-lg p-2  text-white max-w-sm"
                    >
                    Izem tjr a la bien
                    </div>
                  </div>
                  <div className= "flex mt-10 justify-end">
                    <div
                      style={{
                        borderRadius: "20px",
                        height: "auto",
                        wordWrap: "break-word",
                      }}
                      className="bg-green-700 rounded-lg p-2  text-white max-w-sm"
                    >
                     tnak akhoooo
                    </div>
                  </div>
            </div>
            <form
              onSubmit={handleSubmit}
              style={{ marginTop: "2vw" }}
              className="flex-none p-1"
            >
              <div className="flex rounded-lg   ">
                <input
                  type="text"
                  ref={ref}
                  style={{
                    border:
                      ref.current && ref.current.value === ""
                        ? "1px solid blue"
                        : "none",
                    boxShadow: " 0px 0px 6px 1px  rgba(189,189,189,0.6)",
                    borderRadius: "20px",
                  }}
                  className="flex-grow px-4 py-2 bg-gray-200 mr-3  rounded-lg text-primary border-none placeholder-primary focus:outline-none"
                  placeholder="Ecire un message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  style={{ borderRadius: "20px" }}
                  className="bg-purple-500 rounded-lg px-4  py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messagerie;
