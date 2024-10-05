import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error } from "./pages/common/Error"
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Try } from "./pages/common/Try";

function App() {

    return (
        <div >
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/try" element={<Try />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;
