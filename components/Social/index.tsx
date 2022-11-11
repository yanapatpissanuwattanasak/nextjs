import Link from "next/link";
import Image from "next/image";
import facebook from '../../public/facebook.png'
import ig from '../../public/ig.png'
import line from '../../public/line.png'
import { useState } from "react";
export default function Social(props: any) {
    const [items, setItems] = useState([
        {
            image: facebook,
            link: `https://web.facebook.com/yugi.kung.3/`,
            text: 'Yanapat Pissanuwattanasak'
        },
        {
            image: ig,
            link: `https://www.instagram.com/o_bright_o/`,
            text: 'o_bright_o'
        },
        {
            image: line,
            link: `https://line.me/ti/p/~brightkung43`,
            text: 'brightkung43'
        },
    ])

    const Card = items.map((item, index) => {
        return <div key={index} className="group flex flex-row justify-left items-center space-x-[50px] overflow-hidden transition duration-[1000ms] rounded-2xl hover:scale-125 ease-out">
            <Link target={`_blank`} className="z-20" href={`${item.link}`}>
                <div className="flex w-[80px] h-[80px] bg-white z-10   hover:shadow-2xl hover:border-1 hover:rounded-2xl z-1" >
                    <Image
                        // loader={myLoader}
                        src={item.image}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className='transition duration-[1000ms] ease-out z-10 rounded-2xl'
                    ></Image>
                </div>
            </Link>
            <div>

                <h1 className="font-mono text-3xl transition relative duration-[500ms] hover:z-9  opacity-0 hover:ease-in-out translate-x-[-300px] group-hover:translate-x-[-10px] group-hover:opacity-100">
                    {item.text}</h1>


            </div>
        </div>
    })

    return (
        <div id='social' className="flex flex-col h-[600px] bg-white justify-center items-center">
            <div className='mt-[-100px]'>
                <h1 className='font-mono text-black pt-[50px] hover:text-black subpixel-antialiased text-4xl font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl'>
                    Social</h1>
            </div>
            <div className="flex flex-col w-[30%] pt-[50px] justify-center items-left space-y-[50px] text-black text-2xl ">
                {Card}
            </div>

        </div>
    )
}