import { useState, ChangeEvent, JSX } from "react";
import { Button } from "@/components/ui/button";

export function DateRangePicker(): JSX.Element {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStart = e.target.value;
        setStartDate(newStart);

        if (endDate && new Date(endDate) < new Date(newStart)) {
            setEndDate("");
        }
    };

    const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    };

    const clearDates = () => {
        setStartDate("");
        setEndDate("");
    };

    const formatDate = (dateStr: string): string => {
        return new Date(dateStr).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="font-sans p-6 max-w-md mx-auto border rounded-lg bg-secondary">
            <div className="flex flex-col gap-4">
                <label className="font-bold">
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartChange}
                        max={endDate || undefined}
                        className="mt-1 p-2 text-sm border rounded w-full"
                    />
                </label>

                <label className="font-bold">
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleEndChange}
                        min={startDate || undefined}
                        className="mt-1 p-2 text-sm border rounded w-full"
                    />
                </label>
            </div>

            <Button
                onClick={clearDates} className="mt-5" variant={'outline'}
            >
            Clear
            </Button>

            {startDate && endDate && (
                <div className="mt-6 font-semibold text-gray-800">
                    Selected Range: {formatDate(startDate)} - {formatDate(endDate)}
                </div>
            )}
        </div>
    );
}
