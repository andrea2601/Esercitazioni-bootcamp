import React from "react";
import { FlexItem } from "../FlexItem";
import "./styles.css";

export const FlexSection = () => {
    return (
        <div className="flexSection">
            <FlexItem text="Experience"/>
            <FlexItem text="Languages"/>
            <FlexItem text="Hobbies"/>
        </div>
    );
};