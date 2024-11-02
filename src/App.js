// src/App.js
import React from 'react';
import LessonsList from './LessonsList';

const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Learning Arabic with Magpie</h1>
            </header>
            <LessonsList />
        </div>
    );
};

export default App;
