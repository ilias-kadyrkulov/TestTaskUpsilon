import { Link } from 'react-router-dom'
import bigLogo from '@/assets/bigLogo.svg'
import smallLogo from '@/assets/smallLogo.svg'

export const Header = () => {
    return (
        <>
            <header className='hidden md:block pt-3 pb-2 px-3 bg-[#802c6e]'>
                <Link
                    to='/'
                    className='inline-block'
                >
                    <img
                        src={bigLogo}
                        alt='Upslon logo'
                    />
                </Link>
            </header>

            <header className='md:hidden flex justify-between items-center pt-3 pb-2 px-3 bg-[#802c6e]'>
                <Link
                    to='/'
                    className='inline-block'
                >
                    <img
                        src={smallLogo}
                        alt='Upslon logo'
                    />
                </Link>
                <button className='relative w-5 h-5'>
                        <span className='before:absolute before:w-5 before:h-[3px] before:bg-black before:left-0 before:top-0'></span>
                        <span className='before:absolute before:w-5 before:h-[3px] before:bg-black before:left-0 before:top-2'></span>
                        <span className='before:absolute before:w-5 before:h-[3px] before:bg-black before:left-0 before:top-4'></span>
                </button>
            </header>
        </>
    )
}
