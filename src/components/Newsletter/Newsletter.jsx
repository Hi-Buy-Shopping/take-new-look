

const Newsletter = () => {
    return (
        <div className='-mt-32 relative z-3'>
            <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <img src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <img src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <img src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 flex flex-col justify-center">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">Sign up to our newsletter.</h3>
                        <h4 className="text-base font-normal mb-7 text-offwhite">Sign up to our newsletter now and let us bring the best of our world directly to yours—updates, offers, and inspiration await!.</h4>
                        <div className="flex gap-0">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4 outline-none" placeholder="@enter email-address" autoComplete="off" />
                            <button className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg">
                                <img src={'/assets/newsletter/plane.svg'} alt="plane-img" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;