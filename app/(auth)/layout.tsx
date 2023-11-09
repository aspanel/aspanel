import Image from "@/components/ui/Image"
import { WrapperTypes } from "@/utils/types"
import { FC } from "react"



const AuthLayout: FC<WrapperTypes> = ({ children }) => {
    return (
        <div className="w-full h-full grid place-content-center">
            <div className="flex min-w-[400px] bg-white rounded-3xl shadow-2xl flex-col justify-center px-6 py-12 lg:px-8">
                <div className="w-[200px] h-[55px] relative mx-auto">
                    <Image src="/assets/logo/logo.png" alt="Panel logo" fill />
                </div>

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout