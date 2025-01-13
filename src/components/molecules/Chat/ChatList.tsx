import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo() {
    return (
        <Command className="rounded-lg border shadow-md md:max-w-[200px] h-full">
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="오늘">
                    <CommandItem>
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Search Emoji</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="이번주">
                    <CommandItem>
                        <span>Profile</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Billing</span>
                        <CommandShortcut className="text-red-600">1</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <span>Settings</span>
                        <CommandShortcut className="text-red-600">13</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </Command>
    )
}