
import { Routes, Route } from "react-router-dom";
import Card from "./card";


const Screen = () => {
    return (
        <Routes>
            <Route path='/' element={<Card />} />
        </Routes>
    )
}

export default Screen;