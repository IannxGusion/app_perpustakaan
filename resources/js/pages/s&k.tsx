import { Calendar } from "@/components/ui/calendar"
import React from "react"

export default function Sk() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="max-w-100 mx-auto p-4">
                            <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />

            {/* Placeholder / kotak kosong untuk dashboard content */}
            <div className="flex h-full flex-1 flex-col gap-4 border-2 border-accent rounded-xl p-4 m-4">

            </div>

            

        </div>
    )
}
