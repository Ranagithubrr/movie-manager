import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/Store.ts';
import { ApolloProvider } from '@apollo/client';
import { client } from './Apollo/Client.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* redux provider */}
    <Provider store={store}>
      {/* Appollo Provider */}
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
