import logo from '@/assets/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='pt-3 pb-2 px-3 bg-[#802c6e]'>
            <Link to='/' className='inline-block'>
                <img
                    src={logo}
                    alt='Upslon logo'
                />
            </Link>
        </header>
    )
}
