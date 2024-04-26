import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    async function handleSignup(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (username.length < 2) {
            toast.error("Enter a valid Email")
            return;
        }
        else if (firstName.length < 2) {
            toast.error("Enter a valid First name")
            return;
        }
        else if (lastName.length < 2) {
            toast.error("Enter a valid Last name")
            return;
        }
        else if (password.length < 8) {
            toast.error("Password should be grater than 8 digits")
            return;
        }

        const response = await axios.post("http://localhost:4000/api/v1/user/signup", {
            username,
            firstName,
            lastName,
            password
        })
        setIsLoading(false)
        if (response.data.status) {
            localStorage.setItem("token", response.data.token)
            navigate("/")
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className=" w-screen h-screen bg-slate-300 flex items-center justify-center">
            <div className=" flex flex-col gap-2 items-center bg-white rounded-lg p-10">
                <Heading label="Signup" />
                <InputBox type="text" placeholder="abc@gmail.com" label="Email" onchange={e => { setUsername(e.target.value) }} />
                <InputBox type="text" placeholder="First Name" label="First Name" onchange={e => { setFirstName(e.target.value) }} />
                <InputBox type="text" placeholder="Last Name" label="Last Name" onchange={e => { setLastName(e.target.value) }} />
                <InputBox type="password" placeholder="Password" label="Password" onchange={e => { setPassword(e.target.value) }} />
                <button className=' bg-black text-white rounded-lg px-10 py-2' onClick={handleSignup}>Sign Up {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup