import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function FilterByPosition({ filterToDo }) {
    return (
        <Select onValueChange={filterToDo} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter By Job Position" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="SEO">SEO</SelectItem>
                <SelectItem value="Node">Node </SelectItem>
                <SelectItem value="React">React</SelectItem>
            </SelectContent>
        </Select>
    )
}
