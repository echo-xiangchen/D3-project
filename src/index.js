import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCdkxxWmFZfVpgcl9DZlZVRmY/P1ZhSXxXdkJjUX5WdXJRRWRVVEA=');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

