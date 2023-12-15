import React from "react";
import "./RelevantInfo.css";
const RelevantInfo=({name,surname,PIN,address})=>{



    return (
        <div className="relevant-info">
            <h4>Relevant info</h4>
        <div className="flexbox-div">
            
            <div className="item"><label>
            NAME
            <input type="text" name="name" />
            </label></div>

            <div className="item">
            <label>
            SURNAME
            <input type="text" name="name" />
            </label>
            </div>

            <div className="item">
            <label>
            PIN
            <input type="text" name="name" />
            </label>
            </div>

            <div>
            <label className="item">
            ADDRESS
                <input type="text" name="name" />
            </label>
            </div>
            
        </div>
        </div>
    );
}

export default RelevantInfo;