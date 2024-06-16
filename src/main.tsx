import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Layout } from './layout/Layout';
import { GalleryContextProvider } from './context/crypto-context';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GalleryContextProvider>
      <Layout>
        <App />
      </Layout>
    </GalleryContextProvider>
  </React.StrictMode>
);