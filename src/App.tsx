import { Provider } from 'react-redux';
import rootReducer from "./modules";

import {Route, Routes} from "react-router-dom";
import {createStore} from "redux";

import {SidebarInset, SidebarProvider, SidebarTrigger} from "./components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"

import {ThemeProvider} from "./components/theme-provider";
import {LoginProvider} from "./components/login-provider";
import {Separator} from "./components/ui/separator";
import {HeaderPath} from "./molecules/Header";

import Home from "./pages/Home.tsx";
import CreateProject from "./pages/CreateProject.tsx";
import Task from "@/pages/Task";
import {useState} from "react";

type TItemStatus = 'todo' | 'doing';

export type TItem = {
    id: string;
    status: TItemStatus;
    title: string;
    index: number;
};

export type TItems = {
    [key in TItemStatus]: TItem[];
};


const store = createStore(rootReducer);

function App() {
    const [items, setItems] = useState<TItems>({
        todo: [...Array(5)].map((_, i) => ({
            id: `${i}${i}${i}`,
            title: `Title ${i + 1}000`,
            status: 'todo',
            index: i,
        })),
        doing: [],
    });

    return (
        <Provider store={store}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <HeaderPath/>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                                <Routes>
                                    <Route path="/login" element={<Home />} />
                                    <Route path="/" element={<Home />} />
                                    <Route path="/task" element={<Task items={items} setItems={setItems}/>} />
                                    <Route path="/start" element={<CreateProject />} />
                                    <Route path="/test" element={<div>pushTest</div>} />
                                </Routes>
                            </div>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
