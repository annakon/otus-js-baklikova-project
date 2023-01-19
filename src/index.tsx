import React from 'react';
import * as ReactDOM from 'react-dom/client';
import "../public/style.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App"
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement
);
root.render(<HashRouter><App/></HashRouter>);
