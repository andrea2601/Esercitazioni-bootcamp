import React from "react";
import "./styles.css";

export const Form = () => {
    return (
        <div className="form">
            <p className="title">Contat me</p>
            <div className="objectContainer">
                <label htmlFor="object">Object</label>
                <input type="text" name="object" id="object" placeholder="Type object" />
            </div>

            <div className="messageContainer">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Type message"></textarea>
            </div>
        </div>
    );
};