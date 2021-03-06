import React, { Component } from 'react';
import styles from './App.module.css'
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.gradient} />
        <Layout>
          <BurgerBuilder/>
        </Layout>


      </div>
    );
  };
};




export default App;
