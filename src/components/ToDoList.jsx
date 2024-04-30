import { useState} from "react";


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState('');
    

    function handleInputChange(e){
        setNewTasks(e.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t =>[...t, newTask]);
            setNewTasks('')
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }
    return(
        <div className="container flex flex-col items-center 
        space-y-3 max-w-lg md:max-w-xl bg-zinc-100 mx-auto mt-20 select-none">
            <div className="flex justify-start border-black w-full p-2">
                <input type="text" className="flex-1 text-black-900  px-6 py-3 outline-none rounded-lg border-black" placeholder="Enter a task..." onChange={handleInputChange} value={newTask}/>
                <button className="rounded-lg py-2 px-6 border-2 text-black bg-zink-800 ms-3 border-1 border-black hover:bg-slate-900
                hover:text-white" onClick={addTask}>Add</button>
            </div>
            <div id="list-task" className="w-full flex flex-col space-y-6 p-2 my-5 rounded-none">
                {
                    tasks.map((task, index) =>{
                        return (
                            <div key={index} className="w-full flex items-center justify-start px-4 py-3  font-bold border-1 border-black bg-slate-400 shadow-xl rounded-md">
                                <div className="flex-1 text-start">{task} </div>
                                <div className="flex items-center space-x-2">
                                    <span className="flex-self-end  w-10 bg-red-500 py-1 rounded-md cursor-pointer" onClick={()=>deleteTask(index)}>
                                        <i className="fa-solid fa-trash-can  text-white"></i>
                            `       </span>
                                    <span className="flex-self-end w-10 bg-green-500 py-1 rounded-md cursor-pointer" onClick={()=>moveTaskUp(index)}>
                                        <i className="fa-solid fa-arrow-up text-white"></i>
                                    </span>
                                    <span className="flex-self-end w-10 bg-yellow-500 py-1 rounded-md cursor-pointer" onClick={()=>moveTaskDown(index)}>
                                        <i className="fa-solid      fa-arrow-down text-white"></i>
                                    </span>
                                </div>
                                
                            
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default ToDoList;