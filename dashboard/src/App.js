import React from 'react';
import Sidebar from './Component/Sidebar/Sidebar'
import Header from './Component/header/header'
import Content from './Component/content/content'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
