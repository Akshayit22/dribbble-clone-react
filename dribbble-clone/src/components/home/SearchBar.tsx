import { IoSearchOutline } from "react-icons/io5";

export const SearchBar = () => {
  return (
      <form className="form relative">
          <IoSearchOutline className="absolute text-xl opacity-65 top-4 left-3"/>
          <input
              className="input text-black rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
              placeholder="Search..."
              required={false}
              type="text"
          >
              
          </input>
      </form>

  )
}
