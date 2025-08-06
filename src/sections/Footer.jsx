function Footer (){
    return (
        <>
        <div className="flex flex-col justify-center items-center p-3 gap-3 md:p-5 md:gap-5 bg-gray-950">
            <div className="text-xl ">
                <span>Thanks for visiting my portfolio!</span>
            </div>
            <div className="text-3xl flex gap-5 ">
                <span className="hover:text-green-500"> <a href="https://www.linkedin.com/in/udaykumar24" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a></span>
                <span className="hover:text-green-500"><a href="https://github.com/Uday-2414" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github' ></i></a></span>
                <span className="hover:text-green-500"><a href="https://www.instagram.com/_.mr._.choco.__?igsh=MTdvZzQ0b3NwZWU5OQ==" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt' ></i></a></span>
            </div>
            <div>
                <span> &copy;UDAY KUMAR 2025 All right reserved</span>
            </div>

        </div>
        </>
    );
}

export default Footer;