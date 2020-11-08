import React from "react";

import StationDetail from "./StationDetail";
import "../css/OsloBikes.css";
import oslocitybikes from "../api/oslocitybikes.js";

class OsloBikes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      searchedResults: [],
      activeStation: [],
      search: "",
    };
  }

  componentDidMount() {
    this.getStations();
    this.handleStationDetails();
  }

  getStations = () => {
    oslocitybikes
      .get("station_information.json")
      .then((data) => {
        this.setState({
          results: data.data.data.stations,
          searchedResults: data.data.data.stations,
        });
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  handleStationDetails = () => {
    oslocitybikes
      .get("station_status.json")
      .then((data) => {
        this.setState({ details: data.data.data.stations });
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  handleSearch = (e) => {
    const searchedResults = this.state.results.filter(
      (x) =>
        x.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        x.address.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ search: e.target.value, searchedResults });
  };

  render() {
    const { details, search, searchedResults } = this.state;

    return (
      <main>
        <section>
          <h1>Stations</h1>
          <form>
            <label>Find a station:</label>
            <input
              type='search'
              placeholder='Type a station name or address...'
              onChange={this.handleSearch}
              value={search}
            />
          </form>
          <div className='card-container'>
            {searchedResults ? (
              searchedResults.map((station, index) => {
                const match = details
                  ? details.filter(
                      (x) => x.station_id === station.station_id
                    )[0]
                  : [];
                return (
                  <article className='card' key={index}>
                    <h2>{station.name}</h2>
                    <hr />
                    <p>
                      <strong>Address: </strong>
                      {station.address}
                    </p>
                    <p>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={`https://www.google.com/maps/search/?api=1&query=${station.lat},${station.lon}`}
                      >
                        See on map <i className='fas fa-map-marker-alt'></i>
                      </a>
                    </p>
                    <StationDetail station={match} />
                  </article>
                );
              })
            ) : (
              <p>Loading</p>
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default OsloBikes;
