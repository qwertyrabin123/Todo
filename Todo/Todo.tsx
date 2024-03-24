import React, { useState } from 'react'
import userData from '@/db/db';

import TodoTable from "../components/ui/data-table";

import { columns } from './TodoColumn'

const pageSize = 5; // Number of items per page

export default function Todo() {
    const [listStaff, setStaff] = useState(userData);
    const deleteData = (id) => {
        console.log('raninaw')
        const deleteItem = listStaff.filter(item => item.id !== id);
        setStaff(deleteItem);
    }
    return (
        <>
            <div className="container mx-auto py-10">
                <TodoTable
                    data={listStaff}
                    columns={columns}
                    onDelete={deleteData}

                />
            </div>
        </>
    )
}

