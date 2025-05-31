import { Badge } from '@/components/ui/badge';
import type { Categories } from '@/types';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

// ui
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Category({ categories }: { categories: Categories[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <TooltipProvider key={category.id}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Badge className="hover:cursor-zoom-in dark:text-white" style={{ backgroundColor: `${category.colour}90` }}>
                                <DynamicIcon name={category.icon as IconName} color={category.colour} size={18} />
                                <span className="max-w-[120px] truncate">{category.name}</span>
                            </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{category.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </div>
    );
}
