import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from './header.data'
import clsx from 'clsx'
import smallLogo from '@/assets/smallLogo.svg'
import bigLogo from '@/assets/bigLogo.svg'

export const Header = () => {
    const { pathname } = useLocation()

    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false)

    const handleOnBurgerClicked = () => {
        setIsBurgerMenuActive(true)
    }

    const handleOnXMarkClicked = () => {
        setIsBurgerMenuActive(false)
    }

    return (
        <>
            <header className='hidden md:flex justify-between items-center pt-3 pb-2 px-3 bg-[#802c6e]'>
                <Link
                    to='/'
                    className='inline-block'
                >
                    <img
                        src={bigLogo}
                        alt='Upslon logo'
                    />
                </Link>

                <nav
                    className={clsx({
                        hidden: pathname === '/'
                    })}
                >
                    <ul>
                        {links.map(link => (
                            <Link
                                key={link.url}
                                to={link.url}
                            >
                                <li className='font-medium bg-[#d1c4a0] rounded-lg p-1 transition-colors duration-300 hover:text-[#f2f1f6]'>
                                    {link.text}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </header>

            <header className='md:hidden relative overflow-x-clip flex justify-between items-center pt-3 pb-2 px-3 bg-[#802c6e]'>
                <Link
                    to='/'
                    className='inline-block'
                >
                    <img
                        src={smallLogo}
                        alt='Upslon logo'
                    />
                </Link>
                <button
                    className='relative w-5 h-5'
                    onClick={handleOnBurgerClicked}
                >
                    <span className='before:absolute before:w-5 before:h-[3px] before:bg-black before:left-0 before:top-0'></span>
                    <span className='before:absolute before:w-5 before:h-[3px] before:bg-black before:left-0 before:top-2'></span>
                    <span className='before:absolute before:w-5 before:h-[3px] before:bg-black before:left-0 before:top-4'></span>
                </button>
                <nav
                    className={clsx(
                        'flex flex-col items-center absolute right-0 rounded-bl-lg transition-all duration-500 py-20 px-5 mt-5 bg-[#802c6e]',
                        {
                            'translate-x-10 opacity-0 -z-10':
                                !isBurgerMenuActive,
                            'translate-x-0 opacity-100 z-50': isBurgerMenuActive
                        }
                    )}
                >   
                    <button className='w-5 text-red-600 text-xl' onClick={handleOnXMarkClicked}>X</button>
                    <ul>
                        {links.map(link => (
                            <Link
                                key={link.url}
                                to='/products/create'
                                onClick={handleOnXMarkClicked}
                            >
                                <li className='font-medium bg-[#d1c4a0] p-1 rounded-md transition-colors duration-300 hover:text-[#f2f1f6]'>
                                    {link.text}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}
