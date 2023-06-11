const Tag = ({text, className}) => {
    return (
        <div className={`${className} pl-4 pr-4 p-1 w-fit rounded-full bg-secondary-500`}>
            <span className=" text-gray-200 text-xs font-mono font-thin">{text}</span>
        </div>
    );
};

export default Tag;