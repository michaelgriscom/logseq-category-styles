import '@logseq/libs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const main = () => {
    console.log('category-styles-plugin loaded');
  
    // register shortcut for quick todo
    logseq.App.registerCommandPalette(
      {
        key: 'category-styles',
        label: 'Modify category reference styles',
      },
      () => logseq.showMainUI(),
    );
  
  
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('app'),
    );
  };

logseq.ready(main).catch(console.error);