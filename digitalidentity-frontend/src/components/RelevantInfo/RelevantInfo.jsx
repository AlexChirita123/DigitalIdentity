import React from "react";
import "./RelevantInfo.scss";

const RelevantInfo = ({ name, surname, PIN, address }) => {


    return (
        <>
            <div className="box w-auto">
                <h2>User info</h2>
                <div className="input-group">
                    <label htmlFor="input1">First name:</label>
                    <input type="text" id="input1" />
                </div>
                <div className="input-group">
                    <label htmlFor="input2">Last name:</label>
                    <input type="text" id="input2" />
                </div>
                <div className="input-group">
                    <label htmlFor="input3">Pin:</label>
                    <input type="number" id="input3" />
                </div>
                <div className="input-group">
                    <label htmlFor="input4">Address:</label>
                    <input type="text" id="input4" />
                </div>
            </div>


        </>
    );
}

export default RelevantInfo;