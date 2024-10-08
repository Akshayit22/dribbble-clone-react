
export const WhiteButton = ({ onclick, text, Component, flag, styles }: any) => {
    return (
        <button className={` flex justify-center gap-2 px-6 h-fit py-3 bg-white text-black rounded-full border hover:cursor-pointer ${styles}`} onClick={onclick}>
            {
                flag && <Component className="text-2xl" />
            }
            <p className="hover:opacity-55 duration-200">{text}</p>
        </button>
    )
}
