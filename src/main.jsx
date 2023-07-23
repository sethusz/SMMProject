import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import client from './server/client.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
