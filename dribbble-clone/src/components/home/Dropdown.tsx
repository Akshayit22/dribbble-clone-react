import { TextLink } from "../../common/Home/TextLink"
import { FaAngleDown } from "react-icons/fa6";

export const Dropdown = ({styles}:any) => {
    return (
        <div className={`group relative  cursor-pointer ${styles}`}>

            <div className="flex items-center justify-between gap-1">
                <TextLink text={"Find designers"} styles={"menu-hover"} />
                <FaAngleDown />
            </div>

            <div className="opacity-0 absolute z-50 flex flex-col w-[16vw] bg-white rounded-2xl py-1 mt-3 text-gray-500 group-hover:opacity-100 transition-all duration-500">

                <div className="p-5 space-y-4 group-hover:visible">
                    <div>
                        <p className="text-base text-gray-600">Designer search</p>
                        <p className="text-sm">Quickly find your next designer</p>
                    </div>
                    <div>
                        <p className="text-base text-gray-600">Post a job</p>
                        <p className="text-sm space-x-0.5">The #1 job board for designers</p>
                    </div>
                </div>        

                

            </div>
        </div>
    )
}
