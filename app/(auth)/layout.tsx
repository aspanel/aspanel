import Brand from "@/components/ui/Brand"
import { WrapperTypes } from "@/utils/types"
import { FC } from "react"



const AuthLayout: FC<WrapperTypes> = ({ children }) => {
    return (
        <div className="flex min-w-[400px] bg-white rounded-3xl shadow-2xl flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Brand />
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout