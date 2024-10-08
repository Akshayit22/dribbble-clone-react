
export const Designers = ({ designer }:any) => (
    <>
        {designer.mediaType === 'image' ? (
            <img
                src={designer.mediaUrl}
                loading="lazy"
                alt={designer.name}
                className="w-full h-full object-cover"
            />
        ) : (
            <video
                src={designer.mediaUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 m-2 ">
            <h3 className="text-white font-bold text-lg truncate">{designer.name}</h3>
            <p className="text-white text-sm truncate">{designer.designation}</p>
            <div className="flex flex-wrap gap-2 mt-2 ml-2">
                {designer.tags.map((tag: any, index: number) => (
                    <span key={index} className="px-3 py-1 border bg-opacity-20  border-gray-400 text-white text-xs rounded-2xl">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </>
);

