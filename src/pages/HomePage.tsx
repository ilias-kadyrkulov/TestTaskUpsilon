import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className='flex-1 flex flex-col gap-5 md:gap-10 justify-center items-center bg-[#d1c4a0] text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl'>
                Test task for the React Frontend position.
            </h1>
            <Link
                to='products'
                className='text-[#f2f1f6] bg-[#802c6e] font-bold md:text-4xl rounded-xl px-7 py-4 transition-colors duration-500 hover:text-[#802c6e] hover:bg-black'
            >
                /products
            </Link>
        </div>
    )
}
