import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'



export default function UserRegister({ addUser }) {
    const schema = z.object({
        name: z.string().min(2, { message: "must be minimum charater of 2 letters" }).max(10, { message: ', { message: "must be less charater of 10 letters"' }),
        email: z.string().email({ message: 'must be valid email' }),
        position: z.string().min(2).max(10),
        password: z.string().min(5).max(20),
        confirmPassword: z.string().min(5).max(20)
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password donot matach",
        path: ['confirmPassword']
    });

    // or
    // const schema = z.object({
    //     name: z.string().min(3).max(50).required(),
    //     email: z.string().email().required(),
    //     position: z.enum(Position).required(),
    //     password: z.string().min(6).required(),
    //     confirmPassword: z.string().min(6).refine((val) => val === watch('password'), {
    //       message: 'Passwords do not match',
    //     }).required(),
    //   });  
    // const { register, handleSubmit,watch (note it here we must import it) , formState: { errors }, reset } = useForm({
    //     resolver: zodResolver(schema)

    // });



    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)

    });

    const submitdata = (data) => {
        addUser(data);
        reset(); // This will clear the form data
    }


    return (
        <div>

            <Dialog>
                <div className='block text-center'>
                    <DialogTrigger asChild >
                        <Button variant="outline" className='text-center bg-slate-600 uppercase text-white font-bold tracking-widest mt-5'>Register</Button>
                    </DialogTrigger>

                </div>
                <DialogContent className="sm:max-w-[425px] bg-blue-500 text-white" >
                    <DialogHeader>
                        <DialogTitle>User Login</DialogTitle>

                    </DialogHeader>
                    <div >
                        <form className="grid gap-4 py-4" onSubmit={handleSubmit(submitdata)}>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right uppercase font-mono ">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    className="col-span-3 text-black" {...register("name")}
                                />

                            </div>
                            {errors.name && <span className='text-red-900'>{errors.name.message}</span>}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right uppercase font-mono">
                                    Email Address
                                </Label>
                                <Input
                                    id="username" type="email"
                                    {...register("email")}
                                    className="col-span-3  text-black"
                                />

                            </div>
                            {errors.email && <span className='text-red-900'>{errors.email.message}</span>}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right uppercase font-mono">
                                    Position
                                </Label>
                                <Input
                                    id="username" type="text"
                                    {...register("position")}
                                    className="col-span-3 text-black"
                                />
                            </div>
                            {errors.position && <span className='text-red-900'>{errors.position.message}</span>}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right uppercase font-mono">
                                    Password
                                </Label>
                                <Input
                                    id="username" type="text"
                                    {...register("password")}
                                    className="col-span-3 text-black"
                                />
                            </div>
                            {errors.password && <span className='text-red-900'>{errors.password.message}</span>}

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right uppercase font-mono">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="username" type="text"
                                    {...register("confirmPassword")}
                                    className="col-span-3 text-black"
                                />
                            </div>
                            {errors.confirmPassword && <span className='text-red-900'>{errors.confirmPassword.message}</span>}

                            <Button type="submit" className='uppercase'>Register</Button>
                        </form>


                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}
