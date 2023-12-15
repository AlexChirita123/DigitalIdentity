import React from "react";
import RelevantInfo from "../../components/RelevantInfo/RelevantInfo";
import "./InsertUser.css";
const InsertUser=()=>{

    
    return (
        <div className="container">
            <div className="button-container">
                <button>Upload Id Photo</button>
                <button>Extract relevant info</button>
            </div>
        <RelevantInfo/>
        </div>
    );
}

export default InsertUser;