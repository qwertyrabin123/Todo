import React from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form'; // Import Controller from react-hook-form
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function FormTest() {
    const formData = z.object({
        username: z.string().min(2, { message: 'Minimum 2 characters' }),
        password: z.string().min(1, { message: 'Minimum 1 character' }),
    });

    const form = useForm({
        resolver: zodResolver(formData),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const { control, handleSubmit, formState: { errors } } = form;
    const formSubmitted = (formData) => {
        console.log(formData);
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={handleSubmit(formSubmitted)} className="space-y-8">
                    {/* Use Controller component for each input */}
                    <Controller
                        control={control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your username" {...field} />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage>{errors.username && errors.username.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormDescription>This is your password.</FormDescription>
                                <FormMessage>{errors.password && errors.password.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    );
}
