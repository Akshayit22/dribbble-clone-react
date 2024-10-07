import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const PrivateRoute = ({ children }: any) => {

    const { isLoggedIn } = useSelector((state: any) => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate('/login');
            return;
        }
    }, [])

    return (
        isLoggedIn && (children)
    );

}

export default PrivateRoute;