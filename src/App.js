import React, { Component } from 'react';
import './App.css';
import './assets/css/material-app.css';

import Header from './common/Header';
import Footer from './common/Footer';
import ProjectsTable from './component/ProjectsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectsTable />
        <Footer />
      </div>
    );
  }
}

export default App;
