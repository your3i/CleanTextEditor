import React, { useState } from "react";
import './index.css';

export default function TextArea(params) {

    function handleChange(event) {
        params.onWordCountChange(event.target.value.length);
    }

    return(
        <textarea id="text-area" autoFocus placeholder="Start typing ..." onChange={(event)=>handleChange(event)} />
    )
}