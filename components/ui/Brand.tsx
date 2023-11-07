import { FC } from "react"

type BrandTypes = {
    size?: 'sm' | 'md' | 'lg';
}

const Brand: FC<BrandTypes> = ({ size = "lg" }) => {
    const sizeClass = size === 'sm' ? 'text-md' : size === 'md' ? 'text-3xl' : 'text-[50px]';
    return (
        <div className='w-full h-full'>
            <h1 className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-400 font-brand ${sizeClass} text-center`}>aspanel</h1>
        </div>
    )
}

export default Brand