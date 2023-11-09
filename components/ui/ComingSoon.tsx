import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
    return (
        <div className='h-full w-full grid place-content-center'>
            <div className='uppercase font-brand text-[50px] bg-clip-text text-transparent bg-gradient-to-r to-blue-600 from-pink-400'>Coming Soon</div>
            <Link href="/" className='w-fit p-4 rounded-lg bg-blue-400 text-white hover:bg-blue-500 mx-auto' >Go back</Link>
        </div>
    )
}

export default ComingSoon