import { Logo } from '../Home/Logo';

export const AuthPages = ({url,Component}:any) => {

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
                <div className="absolute top-10 left-10">
                    <Logo/>
                </div>
            </div>

            <div className="h-full w-full md:w-[600px] flex justify-start items-center shadow-lg shadow-white">
                <Component/>
            </div>

        </div>
    )
}
