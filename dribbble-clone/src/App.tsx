import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error } from "./pages/common/Error"
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { Try } from "./pages/common/Try";
import { Profile } from "./pages/Profile";
import { Dashboard } from './pages/Dashboard';
import PrivateRoute from './common/auth/PrivateRoute';
import { OpenRoute } from './common/auth/OpenRoute';

function App() {

    return (
        <div >
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
                <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/try" element={<Try />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;
