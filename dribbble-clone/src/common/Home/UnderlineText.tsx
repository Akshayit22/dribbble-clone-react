
export const UnderlineText = ({ text, onclick, styles}:any) => {
  return (
    <span className={`underline hover:cursor-pointer ${styles}`} onClick={onclick}>
        {text}
    </span>
  )
}
