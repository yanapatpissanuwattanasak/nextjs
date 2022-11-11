import style from '../../styles/AboutMe2.module.css'
import Image from 'next/image'
import me from '../../public/Bright.jpg'
import github from '../../public/github.svg'
import Link from 'next/link'
export default function AboutMe2({ children }: any) {

    return (
        <div id='aboutMe' className={style.container}>
            <div className={style.subContainer}>
                <div className={style.image}>
                    <Image
                        // loader={myLoader}
                        src={me}
                        alt="Picture of the author"

                        className=''
                    ></Image>
                </div>

            </div>
            <div className={style.subContainer}>
                <div className={style.aboutText}>
                    <div className='row-span-1 w-full flex bg-white w-full h-full justify-center items-center text-black'>
                        <h1 className='font-bold transition duration-[1000ms] text-4xl hover:scale-125 ease-out xl:text-shadow-xl justify-center items-end'>
                            About Me
                        </h1>
                    </div>
                    <div className='row-span-3 flex bg-white w-full h-full justify-center items-center text-black'>
                        <div className='flex w-[60%] h-[50%] pb-[3%] pt-[3%] bg-gray-100 font-san text-black justify-center items-buttom transition duration-[1000ms] hover:scale-125 ease-in shadow-2xl border-1 rounded-2xl overflow-y-scroll no-scrollbar '>
                            {/* <div style={{ width : '500px', height: '400px', background: 'white', padding: ' 0 0 5rem 5rem'}}> */}
                            <a className='' > นาย ญาณพัฒน์ พิษณุวัฒนศักดิ์ อายุ 22 ปี
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />จบจาก มหาวิทยาลัย เกษตรศาสตร์ วิทยาเขตศรีราชา
                                <br />คณะ วิศวกกรมคอมพิวเตอร์เเละสารสนเทศศาสตร์
                                <br />ตำแหน่ง Backend Developer
                                <br />เบอร์ 086-846-4543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543
                                <br />เกิดวันที่ 1 กุมภาพันธ์ 2543 </a>


                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 flex flex-row w-full h-[20%] bg-white justify-center items-center text-black font-mono text-3xl space-x-100'>
                <Image
                    // loader={myLoader}
                    src={github}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                    className='font-bold'
                ></Image>
                <Link target={`_blank`} href={`https://github.com/yanapatpissanuwattanasak`}>
                    <h1 className='font-bold '>Yanapat Pissanuwattanasak</h1>
                </Link>

            </div>
        </div>
    )
}