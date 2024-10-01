import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error } from "./pages/common/Error"
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
function App() {

    return (
        <div className="bg-bgcolor">
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App
