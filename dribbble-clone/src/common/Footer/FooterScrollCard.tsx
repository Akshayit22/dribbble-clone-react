
export const FooterScrollCard = ({ item }: any) => {
    return (
        <>
            <div className='rounded-xl'>
                <img
                    src={item["image-url"]}
                    alt={item.title}
                    className=" h-40 object-cover rounded-xl"
                />
            </div>

            <div className="flex mt-4 items-center ">
                <h3 className="text-md font-normal text-black">{item.title}</h3>
            </div>
        </>
    )
}
