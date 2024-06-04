


import TodoList from "@/components/TodoList"
import connectDb from "@/libs/mongodbConnect"
import Link from "next/link"

const Home = () => {

 
  return (
    <>
    
    <div>
     <TodoList />
    </div>
    </>
  )
}

export default Home