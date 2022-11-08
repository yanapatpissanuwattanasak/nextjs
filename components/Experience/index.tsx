import style from '../../styles/Experince.module.css'
import Image from 'next/image'
import Link from 'next/link'
import learning from '../../public/learning.jpeg'
export default function Experience({children}: any) {
    
    return (
      <div id='course' className={style.container}>
        <div className='mt-[50px]'>
        <h1 className='font-mono text-black hover:text-black subpixel-antialiased text-4xl font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl'> Course</h1>
        </div>
        <div className='flex flex-row pt-[200px]' >
        <div className={style.space} >
                <div className={style.card}>
                    <Link target="_blank" href={`https://www.udemy.com/course/nextjs-react-the-complete-guide/`}>
                        <div className={style.icon}>
                            <Image
                            src={learning}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                            ></Image>
                        </div>     
                    </Link>
                    <div className='mt-[30px]'>
                            <a className='font-mono text-black hover:text-black text-md'>React Nextjs</a>
                        </div>                
                </div>
            </div>
            <div className={style.space} >
                <div className={style.card}>
                    <Link target="_blank" href={`https://www.udemy.com/course/nestjs-the-complete-developers-guide/`}>
                        <div className={style.icon}>
                            <Image
                            src={learning}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                            ></Image>
                        </div>
                        
                    </Link>
                    <div className='mt-[30px]'>
                            <a className='font-mono text-black hover:text-black text-md'>Nestjs</a>
                        </div>
                </div>
            </div>
        </div>
      </div>
    )
}