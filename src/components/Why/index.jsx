import { TiInputCheckedOutline } from "react-icons/ti";


const whydata = [
    {
        heading: "Quality",
        subheading: "We deliver high-quality, custom solutions with expertise and dedication, always exceeding expectations.",
    },
    {
        heading: "Communication",
        subheading: "We prioritize clear communication, delivering high-quality, custom solutions with expertise and dedication, ensuring your needs are always met.",
    },
    {
        heading: "Reliability",
        subheading: "We are reliable, delivering high-quality, custom solutions with clear communication and dedication, always meeting your expectations.",
    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 mb-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className="lg:-ml-64">
                        <img src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </div>

                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why we best?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">We combine expertise, creativity, and dedication to deliver high-quality, custom solutions that exceed expectations.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-12 w-12 p-1 flex items-center justify-center bg-circlebg">
                                        <img src="/assets/why/check.svg" alt="check-image" className="w-full h-full" />
                                        {/* <TiInputCheckedOutline size={30} className="text-green-500" /> */}
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
