import axios from "axios";
import { useEffect, useState } from "react";


const Card = () => {
    const [user, setUser] = useState([])

    //Function to get data from API
    const userfunc = async () => {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
        setUser(response?.data?.results)
        // console.log("user detailed", response?.data?.results);
    }
   
    useEffect(() => {
        userfunc();
    }, [])

    return (
        <div className=" py-6 px-12 my-[30vh] mx-auto my-30 items-center bg-white rounded-xl  w-[30rem]  border-solid border-black border-2 shadow-xl " >
        
            <div className="flex ">
                <img 
                className="h-36 w-36 object-cover rounded-full " 
                src="https://randomuser.me/api/portraits/women/88.jpg" 
                alt="profile"
                />
                <div className="py-8 pl-8 ">
                    <div className="flex text-lg text-slate-500 font-semibold ">
                        <p> Name : </p> 
                        <p className="text-black pl-4">{user[0]?.name?.first} { user[0]?.name?.last}</p>
                    </div>
                    <p className="flex  text-lg text-slate-500 font-semibold"> Gender :  <span className="text-black pl-4 ">{ user[0]?.gender.charAt(0).toUpperCase() + user[0]?.gender.slice(1)}</span></p> 
                    <p className=" flex  text-lg text-slate-500 font-semibold"> Phone : <span className="text-black pl-4">{user[0]?.phone}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card;