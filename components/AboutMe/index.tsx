import style from '../../styles/AboutMe.module.css'
import Image from 'next/image'
import me from '../../public/Bright.jpg'
import github from '../../public/github.svg'
import Link from 'next/link'
export default function AboutMe({ children }: any) {

    return (
        <div  className={style.container}>
            <div className='flex flex-row w-full h-[80%]'>
                <div className={style.subcotainer}>
                    <div className={style.image}>
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
                    <div className='w-[70%] h-[40%] pl-[140px] pb-[100px] bg-white font-mono text-black text-4xl justify-center items-center'>
                        <h1 className='font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl justify-center items-center'>
                            About Me
                        </h1>
                    </div>
                    <div className='flex w-[70%] h-[300px] pb-[3%] pt-[3%] bg-gray-100 font-san text-black justify-center items-buttom transition duration-[1000ms] hover:scale-125 ease-in shadow-2xl border-1 rounded-2xl overflow-auto '>
                        {/* <div style={{ width : '500px', height: '400px', background: 'white', padding: ' 0 0 5rem 5rem'}}> */}
                        <a > นาย ญาณพัฒน์ พิษณุวัฒนศักดิ์ อายุ 22 ปี
                            <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                            <br />จบจาก มหาวิทยาลัย เกษตรศาสตร์ วิทยาเขตศรีราชา
                            <br />คณะ วิศวกกรมคอมพิวเตอร์เเละสารสนเทศศาสตร์
                            <br />ตำแหน่ง Backend Developer
                            <br />เบอร์ 086-846-4543
                            <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                            <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                            <br />เกิดวันที่ 1 กุมภาพันธ์ 2543 </a>
                    </div>
                </div>

            </div>
            <div className='flex flex-row w-full h-[20%] bg-white justify-center items-center text-black font-mono text-3xl'>
                <Image
                    // loader={myLoader}
                    src={github}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className='font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl '
                ></Image>
                <Link target={`_blank`} href={`https://github.com/yanapatpissanuwattanasak`}>
                    <h1 className='font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl'>Yanapat Pissanuwattanasak</h1>
                </Link>

            </div>


        </div>
    )
}