
export const WhiteButton = ({ onclick, text, Component, flag, styles }: any) => {
    return (
        <button className={`${styles} flex gap-2 p-5 bg-white text-black rounded-full border hover:cursor-pointer`} onClick={onclick}>
            {
                flag && <Component className="text-2xl" />
            }
            <p className="font-semibold">{text}</p>
        </button>
    )
}
