import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

import {CommandDemo} from '@/components/molecules/Chat/ChatList'
import {useSelector} from "react-redux";
import {rootReducer} from "@/modules";

interface Message {
    user: string;
    text: string;
    timestamp: string;
}

let socket: Socket;

const Chat = () => {
    const userStore = useSelector((state:rootReducer) => state.user)
    const chatStore = useSelector((state:rootReducer) => state.chat)
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [room, setRoom] = useState<string>("");

    useEffect(() => {
        socket = io("ws://127.0.0.1:8000", {
            path: "/ws/socket.io"
        });

        socket.emit("join", { room: room });

        socket.on("message", (data: Message) => {
            setMessages((messages) => [...messages, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, [room]);

    const sendMessage = () => {
        if (message) {
            socket.emit("message", { message: { user: userStore.name, text: message }, room: chatStore.id });
            setMessage("");
        }
    };

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // 로컬 시간으로 변환
    };

    return (
        <div className="h-full flex">
            <div className="">
                <CommandDemo/>
            </div>
            <div className="p-10 w-full">
                <h1>실시간 채팅</h1>
                <div>
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <strong>{msg.user}</strong> ({formatDate(msg.timestamp)}):{" "}
                            {msg.text}
                        </div>
                    ))}
                </div>

                <input
                    className="text-black"
                    type="text"
                    placeholder="채팅방 이름"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <input
                    className="text-black"
                    type="text"
                    placeholder="메시지"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>전송</button>
            </div>
        </div>
    );
};

export default Chat;