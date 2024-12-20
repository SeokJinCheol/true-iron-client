import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
    user: string;
    text: string;
    timestamp: string;
}

let socket: Socket;

const Chat = () => {
    const [username, setUsername] = useState<string>("");
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
        if (username && message) {
            socket.emit("message", { message: { user: username, text: message }, room: room });
            setMessage("");
        }
    };

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // 로컬 시간으로 변환
    };

    return (
        <div>
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
                placeholder="user Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

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
    );
};

export default Chat;