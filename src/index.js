import React from 'react';
import ReactDOM from 'react-dom/client';
// it's file name index.js 
 import App from '~/App';
import reportWebVitals from './reportWebVitals';
// it's style global
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        // {/* it's style in ./src/component/global */}
        <GlobalStyles>
            {/* it's file name index.js */}
            <App />
        </GlobalStyles>,
    // </React.StrictMode>,
);

reportWebVitals();
