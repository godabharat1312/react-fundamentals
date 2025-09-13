import "./App.css"
import { useState } from "react"
function App() {
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const [count, setCount] = useState(0)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }
  const handleIncrement = () => {
    //setCount(count + 1)
    setCount((prevCount)=>prevCount+1)
    console.log(count)
  }

  const handleClick = (name) => {
    console.log("you click on the button")
    alert("Hello " + name)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`email:${email} \npassword:${password} \nyou are logged in`)
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>I am a button</p>
        <input type="text" name="email" placeholder="enetr ur mail"
          onChange={handleEmail} />
        <input type="password" name="password" placeholder="enter ur password"
          onChange={handlePassword} />
        <button type="Submit">Login</button>
      </form>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>


    </>
  )
}

export default App
