import React from "react";

import StationDetail from "./StationDetail";
import "../css/OsloBikes.css";
import oslocitybikes from "../api/oslocitybikes.js";

// 2: Oslo city bikes has an open API showing real-time data on location and state of the bike stations.
// Your task is to create a small application that utilizes this api to show:
// the amount of available bikes a station currently has
// the amount of free spots a station currently has
// How you show the stations and status is also up to you.

// TODO:
// paginate results

class OsloBikes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      activeStation: [],
    };
  }

  componentDidMount() {
    this.getStations();
  }

  getStations = () => {
    oslocitybikes
      .get("station_information.json")
      .then((data) => this.setState({ results: data.data.data.stations }))
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  handleStationDetails = (station) => {
    oslocitybikes
      .get("station_status.json")
      .then((data) => {
        const selectedStation = data.data.data.stations.filter(
          (x) => x.station_id === station.station_id
        );
        this.setState({ activeStation: selectedStation[0] });
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  render() {
    const { activeStation, results } = this.state;

    return (
      <main>
        <section>
          <h1>Stations</h1>
          <div className='card-container'>
            {results ? (
              results.map((station, index) => {
                return (
                  <div className='card' key={index}>
                    <h2>{station.name}</h2>
                    <hr />
                    <p>
                      <strong>Address:</strong> {station.address}
                    </p>
                    <button
                      className={`button accordion ${
                        activeStation.station_id === station.station_id
                          ? "active"
                          : ""
                      }`}
                      onClick={() => this.handleStationDetails(station)}
                    >
                      <i className='fas fa-bicycle'></i>Bike Availability
                    </button>
                    {activeStation.station_id === station.station_id ? (
                      <StationDetail station={activeStation} />
                    ) : null}
                  </div>
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
