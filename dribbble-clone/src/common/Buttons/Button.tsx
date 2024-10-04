import '../../index.css'

export const Button = ({onclick, text, Component, flag, styles}:any) => {
  return (
      <button className={` flex justify-center items-center gap-2 px-6 h-fit py-3 bg-black rounded-full text-white hover:opacity-70 transition-opacity duration-150 hover:cursor-pointer ${styles}`} onClick={onclick}>
        {
              flag && <Component className="text-2xl"/>
        }
        <p className="">{text}</p>
    </button>
  )
}
