import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"
const  App = () => {
  return (
    <div className=' py-10 px-[10%] w-screen h-screen bg-black  text-white'>
     <Navbar />
      <Mainroutes />
      
    </div>
  )
}

export default  App