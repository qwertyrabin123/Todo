import React from 'react';
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Todotypes = {
    id: number;
    name: string;
    email: string;
    jobPosition: string;
    address: string;
    salary: number;
    handleDelete: (id: number) => void;
}

export const columns: ColumnDef<Todotypes>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },

    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "jobPosition",
        header: "Job Position",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "salary",
        header: () => <div className="text-left">Salary</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("salary"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original;


            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <Ellipsis className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleDelete(payment.id)}>
                            Delete
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log(payment.id)}>
                            Update
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
