import { Component } from 'react';
import Lordania from './images/Lordania.jpg';
import Egypt from './images/Egypt.jpg';
import BAA from './images/BAA.webp';
import Switzerland from './images/Switzerland.jpg';
import Norway from './images/norway.avif';
import Germany from './images/germany.webp';
import Kenya from './images/kenya.webp';
import NewZealand from './images/New Zealand.jpg';
import Canada from './images/Canada.avif';
import Finland from "./images/finland.jpg";
import Poland from "./images/poland.jpg";
import Indonesia from "./images/indonesia.jpg";
import Greece from "./images/Greece.avif";
import Italy from "./images/Italy.jpg";
import CostaRica from "./images/CostaRica.avif";
import Chile from "./images/chile.jpg";
import './gallery.css'; 

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      filterCategory: 'all',
      activeFilter: 'all',
    };
  }

  componentDidMount() {
    this.travelCountries();
  }

  addTrip(country, price, location, image, time) {
    const newTrip = { country, price, location, image, time };
    this.setState(prev => ({
      trips: [...prev.trips, newTrip]
    }));
  }

  travelCountries() {
    this.addTrip("Jordan", 1300, "Petra", Lordania, '7');
    this.addTrip("Egypt", 900, "Luxor", Egypt, '10');
    this.addTrip("UAE", 1500, "Liwa Oasis", BAA, '10');
    this.addTrip("Switzerland", 2000, "Lauterbrunnen", Switzerland, '8');
    this.addTrip("Norway", 1800, "Geirangerfjord", Norway, '7');
    this.addTrip("Germany", 1500, "Berchtesgaden", Germany, '7');
    this.addTrip("Kenya", 1300, "Lake Naivasha", Kenya, '5');
    this.addTrip("New Zealand", 2200, "Milford Sound", NewZealand, '7');
    this.addTrip("Canada", 1700, "Banff", Canada, '7');
    this.addTrip("Finland", 1600, "Nuuksio National Park", Finland, '7');
    this.addTrip("Poland", 1200, "Zakopane (Tatra Mountains)", Poland, '8');
    this.addTrip("Indonesia", 1300, "Ubud Monkey Forest", Indonesia, '5');
    this.addTrip("Greece", 1400, "Santorini", Greece, '4');
    this.addTrip("Italy", 1500, "Amalfi Coast", Italy, '6');
    this.addTrip("Costa Rica", 1350, "Manuel Antonio", CostaRica, '3');
    this.addTrip("Chile", 1800, "Torres del Paine", Chile, '6');
  }

  setFilter = (category) => {
    this.setState({ filterCategory: category, activeFilter: category });
  }

  filteredTrips() {
    const { trips, filterCategory } = this.state;
    if (filterCategory === 'expensive') {
      return trips.filter(t => t.price > 1500);
    }
    if (filterCategory === 'cheap') {
      return trips.filter(t => t.price < 1500);
    }
    return trips;
  }

  template(trip, index) {
    return (
      <div className='cardd'
        key={index}
        style={{
          border: '1px solid gray',
          margin: '10px',
          padding: '10px',
          width: '250px',
          boxSizing: 'border-box',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src={trip.image}
          alt={trip.country}
          style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
        />
        <h3>{trip.country}</h3>
        <p>Price: ${trip.price}</p>
        <p>Duration: {trip.time} days</p>
        <p>Location: {trip.location}</p>
      </div>
    );
  }

  render() {
    return (
      <div className='gallery-container'>
        <div className='container'>
          <h1 style={{ color: '#3b82f6', fontSize: '50px', fontWeight: '700' }}>FARQI YO'Q .</h1>
          <div style={{display: 'flex', margin: '0px 200px 20px', gap: '30px'}}>
            <h2 style={{ fontSize: '40px', fontWeight: '600' }}>Gallery</h2>
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
              <button onClick={() => this.setFilter('all')} className={this.state.activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'}>All</button>
              <button onClick={() => this.setFilter('expensive')} className={this.state.activeFilter === 'expensive' ? 'filter-btn active' : 'filter-btn'}>Expensive &gt; $1500</button>
              <button onClick={() => this.setFilter('cheap')} className={this.state.activeFilter === 'cheap' ? 'filter-btn active' : 'filter-btn'}>Cheap &lt; $1500</button>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '10px',
          marginTop: '20px'
        }}>
          {this.filteredTrips().map((trip, i) => this.template(trip, i))}
        </div>
      </div>
    );
  }
}

export default Gallery;
