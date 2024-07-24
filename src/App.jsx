import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [inputValue, setInputValue] = useState("");

  // Edit Section
  const [data ,setData] = useState([
    {
      description: "I will buy groceris",
    },
    {
      description: "Today I'll learn React hooks",
    }
  ])

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setData([...data, { description: inputValue }]);
      setInputValue("");
    }
  };

  const handleDeleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  // Confirm List
  const [action ,setAction] = useState([
    {
      descript: "I'm a Graphic Designer ",
    }
  ])

  const handleDoneItem = (index) => {
    const itemToMove = data[index];
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    setAction([...action, { descript: itemToMove.description }]);
  };

  const handleCnfrmDelete = (index) => {
    const newAction = action.filter((_, i) => i !== index);
    setAction(newAction);
  };

  return (
    <>
      <div className="">
        <header>
          <nav className="p-4 text-white text-center bg-sky-600 ">
            <h4>To Do App</h4>
          </nav>
        </header>
        <section>
          <div className=" containerMain px-4  mx-auto relative my-16 shadow mb-5 bg-body rounded">
            <div className="row flex py-3 px-4">
              <div class="col-sm-1 w-16 h-16 p-4 firstIcon rounded-md absolute -top-6 left-4 bg-sky-500">
                <img src="/notepad.svg" className="w-8 h-8" alt="" />
              </div>
              <strong class="addItems ml-16">ADD ITEM</strong>
            </div>
            <hr className="mt-2" />
            <div className="flex py-4 gap-8 ">
              <div className="inputSection w-full">
                <h6 class="font-bold text-sky-400 p-1">
                  What do you want to do ?
                </h6>
                <div className="firstRow flex w-full">
                  <div className="input w-full">
                    <input
                      type="text"
                      class="w-full form-control rounded-0 border-0 outline-0"
                      placeholder="Enter text here."
                      value={inputValue}
                      onChange={handleChange}
                    />
                    <hr className="h-1 bg-sky-400" />
                  </div>
                  {/* Add Button */}
                  <div className="addBtn  w-16 h-16">
                    <button className="px-2.5 py-2.5 rounded-full bg-sky-500"  onClick={handleAddItem}>
                      <img src="/Plus.svg" className="w-4 h-4" alt="" />
                    </button>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>

          {/* Row 2 */}
          <div className="containerMain px-4  mx-auto relative my-16 shadow mb-5 bg-body rounded">
            <div className="row flex py-3 px-4">
              <div class="col-sm-1 w-16 h-16 p-4 firstIcon rounded-md absolute -top-6 left-4 bg-amber-500">
                <img src="/list.svg" className="w-8 h-8" alt="" />
              </div>
              <strong class="addItems ml-16">TO-DO LIST</strong>
            </div>

            <hr className="mt-2 mb-2" />
            {data.map((item, index) => (
              <div className="my-1" key={index}>
                <div className="row flex items-center">
                  <div className="doneBtn w-12">
                    <button className="px-1.5 py-1  rounded-full bg-sky-500" onClick={() => handleDoneItem(index)}>
                      <img src="/Done.svg" className="w-3 h-4" alt="" />
                    </button>
                  </div>
                  <div className="input w-full text-center m-auto">
                    {item.description}
                  </div>
                  <div className="editBtn">
                    <button className="px-2 py-2 ">
                      <img src="/Edit.svg" className="w-8 h-8" alt="" />
                    </button>
                  </div>
                  <div className="dellBtn">
                    <button className="px-2 py-2 "    onClick={() => handleDeleteItem(index)}>
                      <img src="/Trash Can.svg" className="w-8 h-8" alt="" />
                    </button>
                  </div>
                </div>
                <hr className=" my-2"/>
                
              </div>
            ))}
          </div>

          {/* Row 3/ */}
          <div className="containerMain px-4  mx-auto relative my-16 shadow mb-5 bg-body rounded">
            <div className="row flex py-3 px-4">
              <div class="col-sm-1 w-16 h-16 p-4 firstIcon rounded-md absolute -top-6 left-4 bg-green-500">
                <img src="/message.svg" className="w-8 h-8" alt="" />
              </div>
              <strong class="addItems ml-16">TO-DO LIST</strong>
            </div>

            {action.map((item, index) => (
              <div className="my-1" key={index}>
                <div className="row flex items-center">
                  <div className="input w-full text-center m-auto">
                    {item.descript}
                  </div>
                  <div className="dellBtn">
                    <button className="px-2 py-2 "    onClick={() => handleCnfrmDelete(index)}>
                      <img src="/Trash Can.svg" className="w-8 h-8" alt="" />
                    </button>
                  </div>
                </div>
                <hr className=" my-2"/>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
