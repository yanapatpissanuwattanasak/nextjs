import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/Navgation.module.css'
import logo from '../../public/meaw.png'
export default function Navgation(props: any) {
  const [fix, setFix] = useState(false)
  return (

    <div className={styles.fix}>
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '3rem' }}>
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={50}
          className="animate-bounce"
        ></Image>
      </div>
      <div >
        <Link href="#intro" className={styles.child} >
          Home
        </Link>
        <Link href="/login" className={styles.child} >
          Login
        </Link>
        <div className='flex flex-col text-black'>
        </div>
        
      </div>

    </div>
  )
}