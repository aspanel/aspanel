import Link from 'next/link'

const ForgotPasswordPage = () => {
    return (
        <form className="space-y-6" method="POST">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Enter your registered email address to proceed. We will send a verification link to reset your password.</label>
                <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Verification Link</button>
            </div>

            <p>Remember the password ? Login <Link href="/login" className='text-violet-800 underline' >here</Link>.</p>
        </form>
    )
}

export default ForgotPasswordPage