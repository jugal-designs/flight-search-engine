import React, {
    Component
} from 'react'

import AirAsia from '../../assets/flight-logo/air-asia.png';
import AirIndia from '../../assets/flight-logo/air-india.png';
import Indigo from '../../assets/flight-logo/indigo.png';
import JetAirways from '../../assets/flight-logo/jet-airways.png';
import SpiceJet from '../../assets/flight-logo/spicejet.png';

class FlightLogo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logo: null
        };
    }

    componentWillMount() {
        let key = this.props.airlines;
        let logo;
        switch (key) {
            case 'air-asia':
                logo = AirAsia
                break;
            case 'air-india':
                logo = AirIndia
                break;
            case 'indigo':
                logo = Indigo
                break;
            case 'jet-airways':
                logo = JetAirways
                break;
            case 'spicejet':
                logo = SpiceJet
                break;

            default:
                break;
        }

        this.setState({
            logo
        });

    }

    render() {
        return ( <
            img src = {
                this.state.logo
            }
            className = "flight-logo"
            alt = "logo" / >
        )
    }
}

export default FlightLogo