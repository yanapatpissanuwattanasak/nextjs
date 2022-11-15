import Link from 'next/link'
import style from '../../styles/Login/Login.module.css'
import styled from "styled-components";
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { useRouter } from 'next/router'
export default function Home() {
    const [otp, setOtp] = useState('');
    const [popUpOtp, setPopUpOtp] = useState(false)
    const [phoneNo, setPhoneNo] = useState('')
    const phoneNoChange = (phoneNo: string) => {
        console.log(phoneNo);
        setPhoneNo(phoneNo)
    }
    const router = useRouter()
    const popUpOn = () => setPopUpOtp(true)
    const popUpOff = () => setPopUpOtp(false)
    const handleChange = async (otps: any) => { console.log("asdasdasd",otps);
        await setOtp(otps);
        console.log(otps.length);
        
        if(otps.length === 6){
            // await otpCreate({phoneNo,otp})
            console.log(phoneNo,otps);
            
            const a = await checkOtp(phoneNo,otps )
            console.log(a);
            
        }
        }
    
    const checkOtp = async (phoneNo: string, otps: string) => {
        try {
            console.log(otps);
            
            const res = await axios.post(
                "http://localhost:4000/api/otp-request/otp",
                {
                    phoneNo: phoneNo,
                    otpCode: otps
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(res);
            if(res.data.data === true) {
                router.push('/')
            }
        } catch (error) {
            console.log("asdasdasd");
            
            console.log(error);
            
        }
    }
    
    const otpCreate = async ({ phoneNo }: any) => {
        try {
            const res = await axios.post(
                "http://localhost:4000/api/otp-request",
                {
                    phoneNo: phoneNo,
                    otpCode: "111111"
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(res);
        } catch (error) {
            console.log("asdasdasd");
            
            console.log(error);
            
        }
       
       
   }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div>
                    <h1>Login Page</h1>
                </div>
                <div className='space-x-[20px]'>
                    <Link href={`/`}>
                        <button className='transition duration-100 ease-in w-[100px] h-[50px] bg-[#FDC886] rounded-xl hover:bg-[#FDC886] hover:border-black hover:border-2 hover:text-white'>Portfolio</button>
                    </Link>

                    <button className='transition duration-100 ease-in w-[100px] h-[50px] bg-[#FDC886] rounded-xl hover:bg-[#FDC886] hover:border-black hover:border-2 hover:text-white'>Sign Up</button>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-full'>
                <div className={style.login}>
                    <div className='flex w-full justify-center text-xl'>
                        <h1>Login to Admin Mode</h1>
                    </div>
                    <div className='flex flex-col w-full pt-[50px] pl-[20px] pr-[20px] space-y-[50px]'>
                    {/* <form action="" method='post' className='space-y-[50px]'> */}
                        <div id='input-login' className='space-y-[10px]'>
                            
                                <input placeholder='Enter Email/Phone' name='phone' className='input-button' type="text"
                                     onChange={(e) => { phoneNoChange(e.currentTarget.value)}} required />
                                <input placeholder='Password' className='input-button' type="password" required />
                            
                        </div>

                        <button className='button' onClick={ async (e) => { popUpOn(); otpCreate({phoneNo,otp})}} > Login </button>
                        {/* </form> */}
                    </div>
                    <div className='pt-[20px] pb-[20px]'>
                        <h2> Or Sign in with </h2>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <button className='w-[100px] h-[40px] bg-white border-2 rounded-md'> Google </button>
                        <button className='w-[100px] h-[40px] bg-white border-2 rounded-md'> Facebook </button>
                        <button className='w-[100px] h-[40px] bg-white border-2 rounded-md'> Line </button>
                    </div>

                </div>
            </div>
            {/* <div className='flex w-[500px] h-[900px] justify-center items-center'> */}

            {/* </div> */}
            {popUpOtp ? <div className='modalOverlay'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <button onClick={(e) => { popUpOff(); setOtp('')}} >x</button>
                    </div>
                    <div className='modalBody'>
                        <OtpInput className=''
                            value={otp}
                            inputStyle='inputStyle'
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span>  </span>}
                        />
                    </div>
                </div>
            </div> : null}

        </div>


    )



}


