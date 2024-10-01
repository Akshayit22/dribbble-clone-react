import logo from '../../assets/Home/logo.svg';

export const Logo = () => {
    return (
        <div className='hover:cursor-pointer hover:opacity-50 transition-opacity duration-150'>
            <img src={logo} alt="Logo" />
        </div>
    )
}
