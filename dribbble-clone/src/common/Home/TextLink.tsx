
export const TextLink = ({text,styles}:any) => {
  return (
      <p className={`${styles} font-semibold hover:cursor-pointer hover:opacity-70 transition-opacity duration-150`}>
          {text}
      </p>
  )
}
