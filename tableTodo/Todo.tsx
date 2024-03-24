import React, { useState } from 'react'

import db from '@/db/db'
import Table from './Table';
import SearchBox from './SearchBox';
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import AddUser from './AddUser';
import FilterByPosition from './FilterByPostion';

export default function Todo() {
    const [originalDataList, setOriginalDataList] = useState(db);
    const [dataList, setDataList] = useState(originalDataList);
    const { toast } = useToast();


    const searchBox = (e) => {
        const term = e.target.value.toLowerCase();

        // Filter originalDataList based on the search term
        const filteredData = originalDataList.filter(item =>
            item.name.toLowerCase().includes(term)
        );

        setDataList(filteredData); // Update dataList with filtered results


    }

    const filterToDo = (e) => {
        const fiterData = e.toLowerCase()
        console.log(fiterData)
        // Filter originalDataList based on the search term
        if (fiterData === 'none') {
            setDataList(originalDataList);
        } else {
            const filteredData = originalDataList.filter(item =>
                item.jobPosition.toLowerCase().includes(fiterData)
            );

            setDataList(filteredData); // Update dataList with filtered results
        }

    }


    const deleteRow = (id) => {
        const removeData = dataList.filter(({ id: removeId }) => removeId !== id);
        setDataList(removeData);
        // Show toaster notification
        toast({
            variant: "destructive",
            description: "Data Deletion Successful",
        });
    }

    const formAddUser = (data) => {
        // Add the new user to both originalDataList and dataList
        setOriginalDataList(prev => [...prev, data]);
        setDataList(prev => [...prev, data]);
        // Show toaster notification
        toast({
            className: "bg-green-500 text-white",
            description: "New User Created Successfully",
        });
    }

    const handleUpdate = (data) => {
        setDataList(prev => prev.map((list) => {
            if (list.id === data.id) {
                return { ...list, ...data };
            }
            return list;
        }));
        setOriginalDataList(prev => prev.map((list) => {
            if (list.id === data.id) {
                return { ...list, ...data };
            }
            return list;
        }));
        // Show toaster notification
        toast({
            className: "bg-green-500 text-white",
            description: "Update User Successful",
        });
    }


    return (
        <>
            <div className="grid grid-cols-9 mb-5 gap-4">
                <div className="col-span-2">
                    <div className='headeraddnew'>
                        <AddUser formAddUser={formAddUser} />
                    </div>
                </div>
                <div className="col-span-1">
                    Filter By:
                </div>
                <div className="col-span-2">
                    <SearchBox searchBox={searchBox} />
                </div>
                <div className="col-span-2">
                    <FilterByPosition filterToDo={filterToDo} />
                </div>
            </div>
            <Table dataList={dataList} deleteRow={deleteRow} handleUpdate={handleUpdate} />
            <Toaster />
        </>
    )
}
