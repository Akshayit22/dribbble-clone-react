import logo from '../../assets/Home/logo.svg';

export const Logo = () => {
    return (
        <div className='m-2 hover:cursor-pointer hover:opacity-50 transition-opacity duration-150'>
            <img src={logo} alt="Logo" className="scale-125" />
        </div>
    )
}
