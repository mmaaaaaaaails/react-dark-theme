import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from './components/Root/Root';
import ThemeProvider from "./providers/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Root />
    </ThemeProvider>
);

