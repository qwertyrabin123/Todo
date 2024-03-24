import React, { useState } from 'react'
import { Ellipsis } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import EditStaff from './EditStaff';

export default function Table({ dataList, deleteRow, handleUpdate }) {

    const [showModal, setUpdateModal] = useState(false)
    const [staffToUpdate, setStaffToUpdate] = useState(null); // Add this state

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>

                <table className='table table-auto inline-block min-w-full  shadow-md rounded-lg overflow-hidden'>
                    <thead className='text-left'>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-left px-2">Name</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">email</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">job Position</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">address</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">salary</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-left '>

                        {dataList.map((staff) => (
                            <tr key={staff.id} className='hover:bg-gray-200 '>
                                <td className='py-2 broder-2 border-gray px-4 border-r-2 border-slate-100  border-b-2 '>{staff.name}</td>
                                <td className='py-2 broder-2 border-gray px-4 border-r-2 border-slate-100 border-b-2 '>{staff.email}    </td>
                                <td className='py-2 broder-2 border-gray px-4 border-r-2 border-slate-100 border-b-2 '>{staff.jobPosition}</td>

                                <td className='py-2 broder-2 border-gray px-4 border-r-2 border-slate-100 border-b-2 ' >{staff.address}</td>
                                <td className='py-2 broder-2 border-gray px-4 border-r-2 border-slate-100 border-b-2 '>{staff.salary}</td>
                                <td className='py-2 broder-2 border-gray px-4 border-r-2 border-slate-100 border-b-2 '>  <DropdownMenu>
                                    <DropdownMenuTrigger >  <Ellipsis /></DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem
                                            onClick={() => {

                                                deleteRow(staff.id)
                                            }
                                            }>
                                            Delete</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => {
                                            setUpdateModal(true)
                                            setStaffToUpdate(staff)

                                        }}>Update</DropdownMenuItem>

                                    </DropdownMenuContent>
                                </DropdownMenu> </td>


                            </tr>
                        ))}

                    </tbody>

                </table>
            </div >
            <EditStaff setUpdateModal={setUpdateModal} showModal={showModal} staffToUpdate={staffToUpdate} handleUpdate={handleUpdate} />
        </>
    )
}
