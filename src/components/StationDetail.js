import React from "react";

// 2: Oslo city bikes has an open API showing real-time data on location and state of the bike stations.
// Your task is to create a small application that utilizes this api to show:
// the stations
// the amount of available bikes a station currently has
// the amount of free spots a station currently has
// How you show the stations and status is also up to you.

const StationDetail = ({ station }) => {
  return (
    <section>
      <p>Bikes Available: {station.num_bikes_available}</p>
      <p>Free Spots: {station.num_docks_available}</p>
    </section>
  );
};

export default StationDetail;
