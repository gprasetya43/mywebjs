import React, { Component } from 'react';
import './App.css'
import Utama from './components/utama'
import { Link } from 'react-router-dom';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div >
        <Layout >
          <Header  className="header" title="My web" scroll>
            <Navigation >
              <Link  to="/beranda" >Beranda</Link>

            </Navigation>
          </Header>
          <Drawer title="My web"  >
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/halaman1">To do list</Link>
              <Link to="/halaman2">Notes</Link>
              <Link to="/halaman3">About me</Link>
              
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Utama />
          </Content>
          
        </Layout>
        
      </div>
    )
  }
}


export default App;
