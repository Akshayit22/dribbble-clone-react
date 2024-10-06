import { useState } from 'react';
import { HiChevronUp, HiChevronDown, HiCheck } from 'react-icons/hi';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Following');

    const options = ['Following', 'Popular', 'New & Noteworthy'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option:any) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-between items-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-lg hover:bg-gray-50 focus:outline-none  "
            >
                {selected}
                {isOpen ? <HiChevronUp className="ml-2 h-5 w-5" /> : <HiChevronDown className="ml-2 h-5 w-5" />}
            </button>

            {isOpen && (
                <div className="origin-top-right z-20 absolute left-0 mt-2 min-w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="flex justify-between items-center w-full px-1 py-1 text-sm text-gray-700  hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className='hover:cursor-pointer w-full  rounded-lg hover:bg-slate-200 flex justify-between items-center'>
                                    <p className='px-2 py-2'>{option}</p>
                                    {selected === option && <HiCheck className="h-5 w-5 " />}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;