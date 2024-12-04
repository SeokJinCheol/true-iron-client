import React, {FC, useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle, SheetTrigger
} from "src/components/ui/sheet";
import {Label} from "src/components/ui/label";
import {Input} from "src/components/ui/input";
import {Button} from "src/components/ui/button";
import { BellRing, Check } from "lucide-react"
import { cn } from "src/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "src/components/ui/card"
import { Switch } from "src/components/ui/switch"

type CardProps = React.ComponentProps<typeof Card>

export function FlowCard({ className, ...props }: CardProps) {
    const [title, setTitle] = React.useState(props.title || "이름을 입력해주세요");

    return (
        <Sheet>
            <Card className={cn("w-[380px]", className)} {...props}>
                <SheetTrigger>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                </SheetTrigger>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Push Notifications
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Send notifications to device.
                            </p>
                        </div>
                        <Switch />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <Check /> Mark all as read
                    </Button>
                </CardFooter>
            </Card>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}