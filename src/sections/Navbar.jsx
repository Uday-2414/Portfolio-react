function Navbar(){
    return(
        <>
        <div className="flex fixed top-3 left-1/2 -translate-x-1/2 z-50"> 
         <nav className="m-0 flex justify-center items-center gap-1 p-1.5 border border-white/15 rounded-full bg-gray-900 backdrop-blur-lg shadow-lg">
            <ul className="flex flex-row gap-2">
                <li className="nav-item"><a href="#hero">Home</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#project">Projects</a></li>
                <li className="nav-item bg-white text-gray-900 hover:bg-green-500"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </div>
        </>
    );
}

export default Navbar;