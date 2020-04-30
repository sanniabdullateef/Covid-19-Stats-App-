import React from 'react';
import styles from './App.module.css';
import { fetchData } from '../src/api'
// import Card from './component/Card/Card';
// import Charts from './component/Chart/Charts';
// import CountryPicker from './component/CountryPicker/CountryPicker'
import { Card, Charts, CountryPicker } from './component'
import covid19Images from './images/image.png'


 class App extends React.Component {
   state = {
      data: {},
      country: '',
   }

  async componentDidMount () {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })

    //console.log(data)
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    // console.log(fetchedData)
    // fetch the data
    // set the state
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state
  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid19Images} alt="covid-19" />
      <Card data= {data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
    );
  }
}

export default App;
