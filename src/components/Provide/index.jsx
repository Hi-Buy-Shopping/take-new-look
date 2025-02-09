import { Link } from "react-router-dom";


const Aboutdata = [
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "Marketing",
        paragraph: 'Follow a hashtag total posts, videos',

    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "Graphic design",
        paragraph: 'Follow a hashtag total posts, videos',

    },
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Website",
        paragraph: 'Follow a hashtag total posts, videos',

    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "UI/UX Design",
        paragraph: 'Follow a hashtag total posts, videos',
    },
]


const Provide = () => {
    return (
        <div id="services">

            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">We provide that service.</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">We provide exceptional services tailored to meet your needs. Our team is committed to delivering innovative solutions with precision and care, ensuring the highest quality and customer satisfaction. From concept to execution, we work to bring your vision to life and exceed expectations every step of the way. </h4>
                            <Link to={'/services'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Learn more <img src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <img src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
