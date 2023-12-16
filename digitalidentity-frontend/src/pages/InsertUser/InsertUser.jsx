import React from "react";
import RelevantInfo from "../../components/RelevantInfo/RelevantInfo";
import "./InsertUser.scss";
import Button from '@mui/material/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const InsertUser = () => {
    return (
        <>
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center pt-5 ">
                    <div className="button-container mb-5 mb-md-0">
                        <Button size="large" variant="contained" className="mb-2">Upload Id Photo</Button>
                        <Button size="large" variant="outlined" className="mt-2">Extract relevant info</Button>
                    </div>
                    <RelevantInfo />
                </div>
            </div>
        </>
    );
}

export default InsertUser;