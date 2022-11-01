// home.jsx
// src folder stores front end application code (React components, CSS, fonts, images, etc)
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss'

const Home = () => (
  <Layout>
    <h1>Home page webpack dev server running successfully</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})