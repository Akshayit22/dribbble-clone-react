import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react';
import ErrorBoundary from './pages/common/ErrorBoundary';

const Home = lazy(() =>
    import("./pages/Home").then(module => ({ default: module.Home }))
);
const Error = lazy(() =>
    import("./pages/common/Error").then(module => ({ default: module.Error }))
);
const Login = lazy(() =>
    import("./pages/auth/Login").then(module => ({ default: module.Login }))
);
const Signup = lazy(() =>
    import("./pages/auth/Signup").then(module => ({ default: module.Signup }))
);
const Try = lazy(() =>
    import("./pages/common/Try").then(module => ({ default: module.Try }))
);
const Profile = lazy(() =>
    import("./pages/Profile").then(module => ({ default: module.Profile }))
);
const Dashboard = lazy(() =>
    import('./pages/Dashboard').then(module => ({ default: module.Dashboard }))
);
const PrivateRoute = lazy(() =>
    import('./common/auth/PrivateRoute').then(module => ({ default: module.PrivateRoute }))
);
const OpenRoute = lazy(() =>
    import('./common/auth/OpenRoute').then(module => ({ default: module.OpenRoute }))
);
const Loader = lazy(() =>
    import('./common/Home/Loader').then(module => ({ default: module.Loader }))
);





function App() {

    return (
        <div >
            <Suspense fallback={<Loader />}>
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" index element={<Home />} />
                        <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
                        <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        <Route path="/try" element={<Try />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </ErrorBoundary>
            </Suspense>
        </div>
    )
}

export default App;
