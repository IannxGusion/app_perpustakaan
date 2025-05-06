import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Tag() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Tooltip
                </TooltipTrigger>
                <TooltipContent>Tooltip content</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}