import './App.css'
import 'video-react/dist/video-react.css'
import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
