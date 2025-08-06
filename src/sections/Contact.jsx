function Contact() {
    return(
        <>
        <div className="flex flex-col sm:flex-row md:flex-row gap-5  pt-15 p-10 mt-30 pb-20 scroll-smooth" id="contact">
            <div className="p-3">
                <p className="lg:text-5xl text-3xl font-bold ">Let's Work Together</p>
                <p className="text-xl mt-2">Thanks for exploring my portfolio. I wish you like the work, so for projects contact me.</p>
                <div className="">
                    <span className="flex flex-row gap-3 items-center m-4">
                        <span className="bg-gray-800 text-green-500 p-2 text-2xl"><i className='bx bxs-phone'></i></span>
                        <span className="flex flex-col">
                            <p className="text-green-500">Phone</p>
                            <p>+91 6302103008</p>
                        </span>
                    </span>   
                </div>
                <div>
                    <span className="flex flex-row gap-2 items-center m-4 ">
                        <span className="bg-gray-800 text-green-500 p-2 text-2xl"><i class='bx bxs-envelope'></i></span>
                        <span className="flex flex-col">
                            <p className="text-green-500">Email</p>
                            <p>udaybusiness2414@gmail.com</p>
                        </span>
                    </span>   
                </div>
                <div>
                    <span className="flex flex-row gap-2 items-center m-4">
                        <span className="bg-gray-800 text-green-500 p-2 text-2xl"><i class='bx bxs-location-plus'></i></span>
                        <span className="flex flex-col">
                            <p className="text-green-500">Address</p>
                            <p>Chittoor, Andhra Pradesh - 517001</p>
                        </span>
                    </span>   
                </div>
            </div>
 
            <div className="bg-gray-800 p-5 outline-1 outline-gray-500 rounded-b-3xl">
                <form action="https://formspree.io/f/mdkzldba" method="POST" >
                    <div className="flex flex-col gap-4 items-center">
                        <div className="text-3xl lg:text-5xl font-bold md:text-4xl "><span className=" text-green-500">CONTACT</span> ME !</div>
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
                        <input type="text" placeholder="First Name" name="firstname" className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"/></div>
                        <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
                        <input type="text" placeholder="Last Name" name="lastname" className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"/></div>
                        <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
                        <input type="email" placeholder="Email Address" name="email" className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"/></div>
                        <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
                        <input type="phone" placeholder="Phone Number" name="phone" className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"/></div>
                        </div>
                        <textarea placeholder="Your Message" className="p-2 border border-gray-600 rounded-lg bg-gray-800 text-white h-32 w-full"></textarea>
                        <button type="submit" className="bg-green-500 w-full text-white p-3 rounded-lg hover:bg-green-600 transition-colors">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Contact;