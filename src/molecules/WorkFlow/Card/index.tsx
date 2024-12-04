import React, {FC, useEffect, useState} from 'react'

import './_style.css'
import {useDispatch} from "react-redux";
import {setWorkFlowID} from "src/modules/workflow/actions";
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

interface Props {
    workId: string
}

const FlowCard: FC<Props> = ({workId}) => {
    const [title, setTitle] = useState<string>(workId);
    const [percent, setPercent] = useState<number>(0);

    useEffect(() => {
        const titles = {
            "1": "로그인 기능 구현",
            "2": "암호화",
            "3": "로그인 화면 구성",
            "4": "login API구현"
        }[workId] || "";

        const percents = {
            "1": 0.5 * 100,
            "2": 0.7  * 100,
            "3": 1 * 100,
            "4": 0.4  * 100,
        }[workId] || 0;

        setTitle(titles);
        setPercent(percents);
    }, []);

    const dispatch = useDispatch();
    return (
        <div className="work__card" onClick={() => {
            dispatch(setWorkFlowID("로그인 기능 구현"));
        }}>
            <Sheet>
            <div className="items">
                <SheetTrigger>
                    <div className="title" style={{"color": "red"}} >{title}</div>
                </SheetTrigger>
                <div className="item__body">
                    <div className="progress p-2">
                        percent
                    </div>
                    {new Date().toDateString()}
                </div>

                <i className="ri-user-2-fill"/>
            </div>

                <SheetContent className="w-full">
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
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
        </div>
    )
}

export default FlowCard;