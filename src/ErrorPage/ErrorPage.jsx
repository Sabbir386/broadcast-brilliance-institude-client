import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-500'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <FaceFrownIcon className='w-40 h-40 text-red-500' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-danger-700'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-400 mb-8'>
                        {error?.message}
                    </p>
                    <div className='bg-blue-500 rounded p-2 w-[150px] mx-auto'>
                        <Link to='/' className='text-white'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage