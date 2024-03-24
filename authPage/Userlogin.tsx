import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'


export default function Userlogin({ userlogin }) {
    const [error, setError] = useState(false);

    type Userlogindata = {
        username: string;
        password: string;
    }



    const LoginSchema: ZodType<Userlogindata> = z.object({
        username: z.string().min(2, { message: "must be minimum charater of 2 letters" }).max(10, { message: ', { message: "must be less charater of 10 letters"' }),
        password: z.string().min(1, "Empty!!")
    });
    const db = {
        username: 'rabin',
        password: 'awale'
    }



    const { register, handleSubmit, formState: { errors } } = useForm < Userlogindata > ({
        resolver: zodResolver(LoginSchema),
        reValidateMode: "onSubmit"
    })
    const submitForm = (data: Userlogindata) => {
        if (data.username === db.username && data.password === db.password) {
            localStorage.setItem('logindata', JSON.stringify(data.username))
            userlogin();
        } else {
            setError(true);
        }

    }
    return (

        <Dialog className="'">
            <div className='block text-center mr-2'>
                <DialogTrigger asChild >
                    <Button variant="outline" className='text-center bg-slate-600 uppercase text-white font-bold tracking-widest mt-5'>Login</Button>
                </DialogTrigger>

            </div>
            <DialogContent className="sm:max-w-[425px] bg-blue-500 text-white" >
                <DialogHeader>
                    <DialogTitle>User Login</DialogTitle>

                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleSubmit(submitForm)}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right uppercase font-mono">
                            Username
                        </Label>
                        <Input
                            id="name"
                            {...register("username")}
                            className="col-span-3 text-black"
                        />
                    </div>
                    {errors.username && <span>{errors.username.message}</span>}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right uppercase font-mono">
                            Password
                        </Label>
                        <Input
                            id="username"
                            {...register("password")}
                            className="col-span-3 text-black"
                        />
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}
                    {error && <span>Please Enter Right Credentials!!</span>}
                    <DialogFooter>
                        <Button type="submit" className='uppercase'>Login</Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>

    )
}
