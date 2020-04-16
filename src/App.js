import React from 'react';
// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import logo from './Images/image.png';
class App extends React.Component {
state = {
    data:{},
    country: '',
}

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData });
    }

  handleCountryChange= async (country) =>{
      const fetchedData = await fetchData(country);
      this.setState({data: fetchedData, country: country });
  }


    render() {
const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <img className ={styles.image} src={logo} alt="corona"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange = { this.handleCountryChange}/>
                <br></br>
                <Chart data={data} country={country}/>
                <br></br>
                <div className={styles.footer}>API SOURCE = <a href={"https://covid19.mathdro.id/api" }>https://covid19.mathdro.id/api </a>| Built by Mahesh Rangabhat</div>
            </div>
        );
    }
}


export default App;