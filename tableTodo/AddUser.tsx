import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type adduserType = {
    id: number; // Include id in the type definition
    name: string;
    email: string;
    jobPostion: string;
    address: string;
    salary: string;
}

export default function AddUser({ formAddUser }) {
    const schema: ZodType<adduserType> = z.object({
        id: z.number(), // Ensure id is a number
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
            id: 0, // Set default ID value to 0
            name: "Mario...",
            email: "mario@gmail.com",
            jobPosition: " ",
            address: " ",
            salary: " "
        },
    });

    const submitNewStaff = (data) => {
        const newData = { ...data, id: generateUniqueId() }; // Generate unique ID
        formAddUser(newData);
        form.reset();
    };

    // Function to generate unique ID
    const generateUniqueId = () => {
        return Math.floor(Math.random() * 10000); // Example of generating a random ID, adjust as needed
    };


    return (
        <Dialog >
            <DialogTrigger className='bg-green-700 px-20 text-white py-2 rounded-full uppercase'>Add Staff</DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitNewStaff)} className="">
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
        </Dialog >


    )
}

