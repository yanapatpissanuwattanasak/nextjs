import Link from "next/link";
import Image from "next/image";
import facebook from '../../public/facebook.png'
import ig from '../../public/ig.png'
import line from '../../public/line.png'
export default function Social(props: any) {
    return (
        <div id='social' className="flex flex-col h-[600px] bg-white justify-center items-center">
            <div className='mt-[-100px]'>
        <h1 className='font-mono text-black pt-[50px] hover:text-black subpixel-antialiased text-4xl font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl'>
            Social</h1>
        </div>
            <div className="flex flex-col w-[30%] pt-[50px] justify-center items-left space-y-[50px] text-black text-2xl ">
            
            <div className="group flex flex-row justify-left items-center space-x-[50px] ">
                    <Link className="z-20" href={`https://web.facebook.com/yugi.kung.3/`}>
                        <div className="flex w-[80px] h-[80px] bg-white z-10  transition duration-[1000ms] rounded-2xl hover:scale-125 ease-out hover:shadow-2xl hover:border-1 hover:rounded-2xl z-1" >
                        <Image
                            // loader={myLoader}
                            src={facebook}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                            className='transition duration-[1000ms] ease-out z-10 rounded-2xl'
                            ></Image>
                        </div>
                    </Link>
                    <div>
                        
                            <h1 className="font-mono text-3xl transition relative duration-[500ms] hover:z-9  opacity-0 hover:ease-in-out translate-x-[-100px] group-hover:translate-x-[80px] group-hover:opacity-100">
                                Facebook</h1>
                        
                        
                    </div>
                </div>  
                <div className="group flex flex-row justify-left items-center space-x-[50px] ">
                    <Link className="z-20" href={`https://www.instagram.com/o_bright_o/`}>
                        <div className="flex w-[80px] h-[80px] bg-black  transition duration-[1000ms] rounded-2xl hover:scale-125 ease-out hover:shadow-2xl hover:border-1 hover:rounded-2xl" >
                            <Image
                                // loader={myLoader}
                                src={ig}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                className='transition duration-[1000ms] ease-out z-10 rounded-2xl'
                            ></Image>
                        </div>
                    </Link>
                    <div>
                            <h1 className="font-mono text-3xl transition duration-[1000ms]  opacity-0 hover:ease-in-out translate-x-[-150px] group-hover:translate-x-[80px] group-hover:opacity-100">
                                Instagram</h1>
                    </div>
                </div>  
                <div className="group flex flex-row justify-left items-center space-x-[50px] ">
                    <Link className="z-20" href={`https://line.me/ti/p/~brightkung43`}>
                        <div className="flex w-[80px] h-[80px] bg-black  transition duration-[1000ms] rounded-2xl hover:scale-125 ease-out hover:shadow-2xl hover:border-1 hover:rounded-2xl" >
                        <Image
                                // loader={myLoader}
                                src={line}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                className='transition duration-[1000ms] ease-out z-10 rounded-2xl'
                            ></Image>
                        </div>
                    </Link>
                    <div>
                            <h1 className="font-mono text-3xl transition duration-[1000ms]  opacity-0 hover:ease-in-out translate-x-[-150px] group-hover:translate-x-[80px] group-hover:opacity-100">
                                Line</h1>
                    </div>
                </div>                
            </div>

        </div>
    )
}