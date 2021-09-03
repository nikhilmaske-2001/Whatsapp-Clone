import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p> Last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className="chat_name">Nikhil</span>
                    Hey Guys
                    <span className="chat_timestamp">3:52pm</span>
                </p>
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

