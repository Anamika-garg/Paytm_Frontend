import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const Signin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    async function handleSignin(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsLoading(true)
        const response = await axios.post("http://localhost:4000/api/v1/user/signin", {
            username,
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
                <InputBox type="password" placeholder="Password" label="Password" onchange={e => { setPassword(e.target.value) }} />
                {/* <Button label='Signin' onclick={handleSignin} /> */}
                <button className=' bg-black text-white rounded-lg px-10 py-2' onClick={handleSignin}>Sign In {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signin