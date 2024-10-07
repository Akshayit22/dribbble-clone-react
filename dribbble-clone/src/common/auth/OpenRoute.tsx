import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const OpenRoute = ({ children }:any) => {

    const { isLoggedIn } = useSelector((state: any) => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
            return;
        }
    }, [])

    return (
        !isLoggedIn && (children)
    );
}
