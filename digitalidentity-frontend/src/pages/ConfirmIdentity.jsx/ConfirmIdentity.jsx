import React from "react";
import RelevantInfo from "../../components/RelevantInfo/RelevantInfo";
import "./ConfirmIdentity.scss";
import Button from '@mui/material/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const ConfirmIdentity = () => {

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center flex-column pt-5">
                <div className="webcam-container d-flex justify-content-center align-items-center w-75vw">
                    <p>Webcam here</p>
                </div>
                <Button size="large" variant="contained" className="mt-4">Confirm Identity</Button>
            </div>
        </div>
    );
}

export default ConfirmIdentity;