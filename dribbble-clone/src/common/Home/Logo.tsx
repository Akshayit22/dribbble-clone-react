import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Home/logo.svg';

export const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className='m-2 hover:cursor-pointer hover:opacity-50 transition-opacity duration-150' onClick={()=>navigate('/')}>
            <img src={logo} alt="Logo" className="scale-125" />
        </div>
    )
}
