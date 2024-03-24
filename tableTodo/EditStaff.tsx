import React, { useEffect } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


const EditStaff = ({ showModal, setUpdateModal, staffToUpdate, handleUpdate }) => {

    useEffect(() => {
        console.log(staffToUpdate)
        if (staffToUpdate) {
            form.setValue('id', staffToUpdate.id);
            form.setValue('name', staffToUpdate.name);
            form.setValue('email', staffToUpdate.email);
            form.setValue('jobPosition', staffToUpdate.jobPosition);

            form.setValue('address', staffToUpdate.address);
            form.setValue('salary', staffToUpdate.salary);
        }
    }, [staffToUpdate]);


    type adduserType = {
        id: number;
        name: string;
        email: string;
        jobPosition: string;
        address: string;
        salary: string
    }

    const schema: ZodType<adduserType> = z.object({
        id: z.number(),
        name: z.string().min(3, { message: 'Minimum length allowed is 3 Charater' }),
        email: z.string().email({ message: "must be valide email address" }).min(3, { message: 'Minimum length allowed is 3 Charater' }),
        jobPosition: z.string().min(3, { message: 'Minimum length allowed is 3 Charater' }),
        address: z.string().min(3, { message: 'Minimum length allowed is 3 Charater' }),
        salary: z.string().min(3, { message: 'Minimum length allowed is 3 Charater' }),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        mode: "onSubmit",
        defaultValues: {
            id: "",
            name: "",
            email: "",
            jobPosition: "",
            address: " ",
            salary: " "

        },
    })

    const handleUpdateStaff = (da) => {

        handleUpdate(da)
    }
    return (
        <Dialog open={showModal} onOpenChange={setUpdateModal}>

            <DialogContent className="sm:max-w-[425px]">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleUpdateStaff)} >

                        <FormField
                            control={form.control}
                            name="id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mb-1 mt-4  ">Id</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} disabled />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mb-1 mt-4 inline-block ">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mb-1 mt-4 inline-block">Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>

                                    <FormMessage />

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="jobPosition"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Job Position</FormLabel>

                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Job Position" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="SEO">SEO</SelectItem>
                                            <SelectItem value="React">React</SelectItem>
                                            <SelectItem value="Node Devloper">Node Devloper</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mb-1 mt-4 inline-block">Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>


                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="salary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mb-1 mt-4 inline-block">Salary</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>


                                </FormItem>
                            )}
                        />

                        <Button type="submit" className='mt-6 w-52'>Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default EditStaff
