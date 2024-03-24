import React from 'react'
import { Input } from "@/components/ui/input"
export default function SearchBox({ searchBox }) {
    return (
        <Input type="text" onChange={searchBox} placeholder="Search Staffs..." />
    )
}
