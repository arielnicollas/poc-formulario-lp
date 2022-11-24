import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import db from './firebase';

import { FirestoreProvider } from 'react-firestore';
import App from './App';


// const analytics = getAnalytics(app);


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<StrictMode>
      <App />
</StrictMode>
);
