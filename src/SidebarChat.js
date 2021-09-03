import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from './firebase';
import "./SidebarChat.css";

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const user = prompt("Please enter name for chat");

        if(user) {
            // do some clever database stuff...
            db.collection("users").add({
                name: user,
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/users/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
        </Link>
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
