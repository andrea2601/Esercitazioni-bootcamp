import React from "react";
import "./styles.css";

export const User = () => {
    return (
        <div className="user">
            <div className="avatar">
                <img src="https://i.pravatar.cc/100" alt="avatar"></img>
            </div>

            <p className="name">Name</p>
            <p className="surname">Surname</p>
        </div>
    );
};