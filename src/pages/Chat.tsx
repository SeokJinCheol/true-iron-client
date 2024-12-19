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

    useEffect(() => {
        socket = io("ws://127.0.0.1:8000", {
            path: "/ws/socket.io"
        });

        socket.on("connect", () => {
            console.log("Connected!");
        });

        socket.on("message", (data: Message) => {
            setMessages((messages) => [...messages, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (username && message) {
            socket.emit("message", { user: username, text: message });
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
                type="text"
                placeholder="사용자 이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
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