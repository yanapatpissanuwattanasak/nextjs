import s from '../../styles/Footer.module.css'
import Link from 'next/link'
export default function Footer({ children }: any) {
    return (
        <div className={s.container} >
            <div className={s.subContainer}>
                <h3> Follow us</h3>
                <div className='flex flex-col'>
                    <Link target="_blank" legacyBehavior href={`https://web.facebook.com/yugi.kung.3/`} >
                        <a style={{ fontSize: '14px', padding: '2px 0 2px 0' }}>- Facebook</a>
                    </Link>
                    <Link target="_blank" legacyBehavior href={`https://www.instagram.com/o_bright_o/`} >
                        <a style={{ fontSize: '14px', padding: '2px 0 2px 0' }}>- Instagram</a>
                    </Link>
                    <Link target="_blank" legacyBehavior href={`https://line.me/ti/p/~brightkung43`} >
                        <a style={{ fontSize: '14px', padding: '2px 0 2px 0' }}>- Line</a>
                    </Link>
                </div>


            </div>
            <div style={{ width: '100%', padding: '1rem 0 1rem 3rem', display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
                <a> © Copyright 2022 - Bright</a>
            </div>

        </div>
    )
}