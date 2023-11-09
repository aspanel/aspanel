'use client'
import InputBox from '@/components/ui/inputs/InputBox'
import { useForm, Controller } from 'react-hook-form';

const SignupPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("see this", data);
    }
    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name='name'
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <InputBox
                            id="name"
                            type="text"
                            autoComplete="name"
                            required
                            label="Full Name"
                            value={value}
                            onChange={onChange}
                        />
                    )
                }}

            />
            <Controller
                name='username'
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <InputBox
                            id="username"
                            type="text"
                            autoComplete="username"
                            required
                            label="Username"
                            value={value}
                            onChange={onChange}
                        />
                    )
                }}

            />
            <Controller
                name='email'
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <InputBox
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            label="Email address"
                            value={value}
                            onChange={onChange}
                        />
                    )
                }}

            />
            <Controller
                name='password'
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <InputBox
                            id="password"
                            type="password"
                            autoComplete="password"
                            required
                            label="Password"
                            value={value}
                            onChange={onChange}
                        />
                    )
                }}

            />
            
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
            </div>
        </form>
    )
}

export default SignupPage