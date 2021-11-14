import React, { useState } from 'react';
import './index.css';
import TextArea from './TextArea';
import AppearanceModeButton from './AppearanceModeButton';
import WordCountLabel from './WordCountLabel';

function App() {

    const [wordCount, setWordCount] = useState(0);
    
    return (
        <>
        <TextArea onWordCountChange={setWordCount} />
        <div className="toolbar">
            <AppearanceModeButton />
            <WordCountLabel count={wordCount} />
        </div>
        </>
    )
}

export default App;