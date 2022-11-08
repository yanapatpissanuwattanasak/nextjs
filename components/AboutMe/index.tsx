import style from '../../styles/AboutMe.module.css'
import Image from 'next/image'
import me from '../../public/Bright.jpg'
import github from '../../public/github.svg'
import Link from 'next/link'
export default function AboutMe({children}: any) {
    
    return (
        <div id='aboutMe' className={style.container}>  
            <div className='flex flex-row w-full h-screen '>
                <div className={style.subcotainer}>
                <div className={ style.image}>
                <Image
                // loader={myLoader}
                src={me}
                alt="Picture of the author"
                width={700}
                height={500}
                className='transition duration-[1000ms] ease-out '
                ></Image>
                </div>
                
                </div>
                <div className={style.subcotainer2}>
                <div className='w-[500px] h-[400px] pl-[140px] bg-white pb-20 font-mono text-black text-4xl justify-center items-center'>
                        <h1 className='font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl justify-center items-center'>
                        About Me
                        </h1>
                    </div>
                    <div className='flex w-[500px] h-[400px] bg-gray-100 pt-10 pb-10 font-san text-black justify-center items-center transition duration-[1000ms] hover:scale-125 ease-in shadow-2xl border-1 rounded-2xl'>
                    {/* <div style={{ width : '500px', height: '400px', background: 'white', padding: ' 0 0 5rem 5rem'}}> */}
                        <a > นาย ญาณพัฒน์ พิษณุวัฒนศักดิ์ อายุ 22 ปี 
                        <br/>เกิดวันที่ 1 กุมภาพันธ์ 2543 
                        <br/>จบจาก มหาวิทยาลัย เกษตรศาสตร์ วิทยาเขตศรีราชา 
                        <br/>คณะ วิศวกกรมคอมพิวเตอร์เเละสารสนเทศศาสตร์ 
                        <br/>ตำแหน่ง Backend Developer 
                        <br/>เบอร์ 086-846-4543 </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-full bg-white justify-center mt-[-150px] items-center text-black space-x-[100px] font-mono text-3xl'>
            <Image
                // loader={myLoader}
                src={github}
                alt="Picture of the author"
                width={100}
                height={100}
                className='font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl'
                ></Image>
                <Link target={`_blank`} href={`https://github.com/yanapatpissanuwattanasak`}>
                    <h1 className='font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl'>Yanapat Pissanuwattanasak</h1>
                </Link>
                
            </div>
           
        </div>
    )
}