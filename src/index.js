import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfVddWnxLflFyVWVTelh6cFdWACFaRnZdRl1kSXZRd0BiWnhedHRd');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

