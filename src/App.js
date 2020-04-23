import React from 'react'

import { Cards, Chart, CountryPicker } from './Components'
import styles from './App.module.css'
import { fetchData } from './api'

import imgCov from '../src/images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)

        this.setState({ data: fetchedData, country: country })
        // fetch the data
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <div className={styles.copyright}>
                    Provided by "Nguyen Van Luong"
                </div>
                <img className={styles.image} src={imgCov} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App