import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import { useParams } from 'react-router-dom';
import db from "./firebase";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);

    console.log(roomId);
    useEffect(() => {
        if(roomId) {
            db.collection("users")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

            db.collection("users").doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p> Last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map(message => (
                    <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="chat_timestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))}
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit"> Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat

