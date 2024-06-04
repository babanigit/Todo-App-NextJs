


import connectDb from "@/libs/mongodbConnect"
import Link from "next/link"

const Home = () => {

  async function handle() {
    connectDb
  }

  
  return (
    <>
    
    <div>
      hello page
    </div>
    </>
  )
}

export default Home