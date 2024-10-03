import '../../fonts/font-mono.css';

export const TextLink = ({text,styles}:any) => {
  return (
      <p className={` text-sm font-semibold hover:cursor-pointer hover:opacity-70 transition-opacity duration-150 ${styles}`}>
          {text}
      </p>
  )
}
