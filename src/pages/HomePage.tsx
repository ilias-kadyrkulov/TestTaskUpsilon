import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className='flex-1 flex flex-col gap-5 justify-center items-center bg-[#d1c4a0] text-center'>
            <h1 className='text-lg md:text-2xl'>
                Test task for the React Frontend position.
            </h1>
            <Link
                to='products'
                className='text-[#f2f1f6] bg-[#802c6e] font-bold rounded-xl p-2 transition-colors duration-500 hover:text-[#802c6e] hover:bg-black'
            >
                /products
            </Link>
        </div>
    )
}
