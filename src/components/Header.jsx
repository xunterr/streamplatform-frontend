const Header = ({title, subtitle, className}) => {
    return (
        <div className={`${className} mt-5 mb-5`}>
            <h2 className=" text-gray-200 text-3xl font-mono font-medium">{title}</h2>
            <h5 className=" text-teal-500 mt-3 text-xl">{subtitle}</h5>
        </div>
    );
};

export default Header;