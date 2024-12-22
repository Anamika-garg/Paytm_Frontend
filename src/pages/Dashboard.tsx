import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar.tsx"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        console.log("Hello")
        const userId = localStorage.getItem("token");
        if (!userId) {
            navigate("/signin")
        }
        if (userId != "") {
            setUser(userId || "");
        }
    }, [])

    useEffect(() => {
        fetchBalance()
    }, [user])


    async function fetchBalance() {
        const response = await axios.post("http://localhost:4000/api/v1/account/balance", {
            userId: localStorage.getItem("token")
        })
        setBalance(response.data.balance)
    }

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}