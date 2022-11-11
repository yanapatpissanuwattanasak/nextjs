import style from '../../styles/Experince.module.css'
import Image from 'next/image'
import Link from 'next/link'
import learning from '../../public/learning.jpeg'
import { useState } from 'react'
export default function Experience({ children }: any) {

    const [items, setItems] = useState([
        {
            link: 'https://www.udemy.com/course/nextjs-react-the-complete-guide//',
            image: learning,
            name: 'React Nextjs',
            status: true
        },
        {
            link: 'https://www.udemy.com/course/nestjs-the-complete-developers-guide//',
            image: learning,
            name: 'Nestjs',
            status: true
        },
        {
            link: '/',
            image: learning,
            name: 'xxx',
            status: false
        },
        {
            link: '/',
            image: learning,
            name: 'xxx',
            status: false
        },
        {
            link: '/',
            image: learning,
            name: 'xxx',
            status: false
        },
        {
            link: '/',
            image: learning,
            name: 'xxx',
            status: false
        },
        {
            link: '/',
            image: learning,
            name: 'xxx',
            status: false
        },
        {
            link: '/',
            image: learning,
            name: 'xxx',
            status: false
        },

    ])

    let CardItem = items.map((item, index) => {

        return <div key={index} className={style.space} >
            <div className={style.card}>
                <Link target="_blank" className={item.status ? '' : 'pointer-events-none'} scroll={true} href={`${item.link}`}>
                    <div className={style.icon}>
                        <Image
                            src={item.image}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        ></Image>
                    </div>
                </Link>
                <div className='mt-[30px]'>
                    <a className='font-mono text-black hover:text-black text-md'>{item.name}</a>
                </div>
            </div>
        </div>

    })

    return (
        <>
            <div id='course' className={style.container}>
                <div className='mt-[50px]'>
                    <h1 className='font-mono text-black overscroll-x-contain hover:text-black subpixel-antialiased text-4xl font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl text-center'> Course</h1>
                </div>
                <div className=' container flex flex-row flex-wrap pt-[100px] max-h-screen overflow-y-scroll justify-center items-center min-w-[800px]' >
                    <div className='grid grid-cols-3 gap-4 min-w-[800px]'>
                    {
                        items.map((item, index) => {

                            return <div key={index} className={style.space} >
                                <div className={style.card}>
                                    <Link target="_blank" className={item.status ? '' : 'pointer-events-none'} scroll={true} href={`${item.link}`}>
                                        <div className={style.icon}>
                                            <Image
                                                src={item.image}
                                                alt="Picture of the author"
                                                width={200}
                                                height={200}
                                            ></Image>
                                        </div>
                                    </Link>
                                    <div className='mt-[30px]'>
                                        <a className='font-mono text-black hover:text-black text-md'>{item.name}</a>
                                    </div>
                                </div>
                            </div>

                        })}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}