import React from "react";

const StationDetail = ({ station }) => {
  const returnsAccepted = !station.is_returning ? "accepting returns" : "";
  const rentingAccepted = !station.is_renting ? "renting bicycles" : "";
  return (
    <section className='panel'>
      <h4>
        <i className='fas fa-bicycle'></i>
        Bike Availability
      </h4>
      <p>
        <strong>Bikes:</strong> {station.num_bikes_available}
      </p>
      <p>
        <strong>Docks:</strong> {station.num_docks_available}
      </p>
      {rentingAccepted || returnsAccepted ? (
        <p className='warning'>
          Please note: this station is not currently {rentingAccepted}{" "}
          {rentingAccepted && returnsAccepted ? "or " : ""}
          {returnsAccepted}
        </p>
      ) : null}
    </section>
  );
};

export default StationDetail;
