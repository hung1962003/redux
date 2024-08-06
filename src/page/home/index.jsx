
import { useState } from 'react';
import Button from '../../component/button'
import Modal from '../../component/modal'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/feature/demoSlice';
import { addTask, clear, removeTask } from '../../redux/feature/todoSlice';
import Table from './../../component/table/index';
import "./index.scss"

function Home() {
  //update gia tri tren store => useDispatch
  //use la hook nen ko sai truc tiep ma phai tao 
  const dispatch = useDispatch();

  //get gia tri tren store => useSelector
  const demo = useSelector(state => state.demo);

  const [isOpen, setIsOpen] = useState(false);

  const [input,setInput] = useState("");

  const todoList = useSelector(state => state.todo);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };


  const handleIncrement = () => {
    // dispatch action khi click
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  
  const handleAddNewTask = () => {
    console.log("add new task", input);
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: input,
        status: 'pending',
      };
      console.log("Adding new task:", newTask);
      dispatch(addTask(newTask));
      setInput(""); // Clear input field after adding new task
    }
  };
  
  const handleCleanAllTasks = () => {
    dispatch(clear());
  };
  return (
    <div className='home'>
      <h1>{demo}</h1>
      <Button type="danger" onClick={handleIncrement}>increment</Button>
      <Button  onClick={handleDecrement}>decrement</Button>

      <Button variant="danger" onClick={handleOpenModal}/>
      <Modal isOpen={isOpen} onCancel={handleCloseModal}/>
      {/* e.target la den vi tri cua no     */}

      <input type="text" value={input} onChange={(e)=> { 
        setInput(e.target.value);
      }}/>
      <Button onClick={handleAddNewTask}>add new task</Button>
      <Button variant="danger" onClick={handleCleanAllTasks}>Delete all tasks</Button>
      <Table 
        columns={[
          {title: 'Name', dataIndex: 'name'},
          {title: 'Status', dataIndex: 'status'}, 
          {title: 'Action', dataIndex: 'id',
            render: (task,index) => {
              return(
                <>
                  <Button type="primary" onClick={()=>console.log(index) }>Edit</Button>
                  {/* console.log(task):=> hien object ;  console.log(index):=> hien vi tri */}
                  <Button variant="danger" onClick={()=>{dispatch(removeTask(index));}}>Delete</Button>
                  {/* <Button variant="danger" onClick={()=>console.log(task)}>Delete</Button> */}
                </>
              );
              
            }

            // render: (
            // <>
            // <Button type="primary" >Edit</Button>
            // <Button variant="danger" >Delete</Button>
            // </>
          //)
        }, 
        ]}
        dataSource={todoList}
      />
      <h1>
        {todoList.length} Tasks
      </h1>
    </div>
  );
}

export default Home
