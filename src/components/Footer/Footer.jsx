import { Link } from "react-router-dom";



const products = [
    {
        id: 1,
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        link: ['Help', 'Resources', 'Application', 'Team']
    }
]

const footer = () => {
    return (
        <div className="bg-darkblue mt-10">
            <div className="mx-auto max-w-2xl pt-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">


                    <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <img src={'/assets/logo/logo-white.png'} alt="logo" className='pb-8' />
                        <div className='flex gap-4'>
                            <Link href="https://facebook.com" className='footer-fb-icons'>
                                <img src={'/assets/footer/facebook.svg'} alt="facebook" width={15} height={20} />
                            </Link>
                            <Link href="https://twitter.com" className='footer-icons'>
                                <img src={'/assets/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                            </Link>
                            <Link href="https://instagram.com" className='footer-icons'>
                                <img src={'/assets/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                            </Link> 
                        </div>
                    </div>


                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((link, index) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <img src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">242 D2 JOHAR TOWN LAHORE</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <img src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">+92 314436390</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <img src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">takenewlooks@gmail.com</h5>
                        </div>
                    </div>

                </div>

                <div className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>@2025 TAKENEWLOOK. All Rights Reserved by <Link href="https://hibuyshopping.com/" target="_blank"> Raheeq Gill</Link></h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer;
