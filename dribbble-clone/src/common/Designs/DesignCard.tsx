import { FaRegBookmark, FaRegHeart } from 'react-icons/fa';
import { TbEyeFilled } from "react-icons/tb";
export const DesignCard = ({ design }:any) => {
    const { image_url, image_info, redirect_url, like_count, views_count, user_information } = design;

    return (
        <div>
            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
                <a href={redirect_url} target="_blank" rel="noopener noreferrer">
                    <img src={image_url} alt={image_info} className="w-full h-60 object-cover" loading='lazy'/>
                </a>
                <div className="absolute inset-0 hover:bg-gradient-to-b from-transparent from-70% to-black/15 to-30% flex items-end">
                    <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center gap-3">

                        <h3 className="text-lg font-semibold truncate">{image_info.split('-')[0]}</h3>
                        <div className="flex items-center justify-between mt-2">
                            
                            <div className="flex items-center space-x-3">
                                <button className="text-black bg-white rounded-full p-3 ">
                                    <FaRegHeart className='hover:opacity-50 duration-150'/>
                                </button>
                                <button className="text-black bg-white rounded-full p-3">
                                    <FaRegBookmark className='hover:opacity-50 duration-150' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <div className="flex items-center space-x-2 text-black text-sm justify-between p-2">
                    <div className="flex items-center gap-3 ">
                        <img src={user_information.profile_img_url} alt={user_information.user_name} className="w-6 h-6 rounded-full hover:cursor-pointer" />
                        <span className="text-sm font-medium hover:cursor-pointer">{user_information.user_name.length > 16 ? user_information.user_name.substring(0, 15) + ".." : user_information.user_name.substring(0, 15)}</span>
                        {user_information.user_badge && (
                            <span className="bg-gray-400 text-xs text-white font-medium px-1 rounded hover:cursor-pointer hover:bg-black">{user_information.user_badge.toUpperCase()}</span>
                        )}
                    </div>

                    <div className='flex gap-3 '>
                        <span className="flex items-center">
                            <FaRegHeart className="mr-1 text-gray-400" /> {like_count}
                        </span>
                        <span className="flex items-center ">
                            <TbEyeFilled className="mr-1 text-gray-400" /> {(views_count / 1000).toFixed(1)}k
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
