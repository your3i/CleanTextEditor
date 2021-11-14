import React from "react";
import './index.css';

export default function WordCountLabel(params) {

    return(
        <span className="word-count-label">
            Count: {params.count}
        </span>
    )
}