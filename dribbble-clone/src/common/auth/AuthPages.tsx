import { useNavigate } from 'react-router-dom';
import { Logo } from '../Home/Logo';
import ErrorBoundary from '../../pages/common/ErrorBoundary';

export const AuthPages = ({ url, Component }: any) => {

    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-white">
            <div className="hidden md:block w-[400px] h-full">
                <video
                    src={url}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute top-10 left-10" onClick={() => navigate('/')}>
                    <Logo />
                </div>
            </div>

            <div className="h-full w-full md:w-[600px] flex justify-start items-center shadow-lg shadow-white">
                <ErrorBoundary>
                    <Component />
                </ErrorBoundary>
            </div>

        </div>
    )
}
