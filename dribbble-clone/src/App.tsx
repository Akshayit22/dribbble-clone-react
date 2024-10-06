import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error } from "./pages/common/Error"
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Try } from "./pages/common/Try";
import { Profile } from "./pages/Profile";
import { Dashboard } from './pages/Dashboard';

function App() {

    return (
        <div >
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/try" element={<Try />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;
