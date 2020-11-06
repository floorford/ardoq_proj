import axios from "axios";

export default axios.create({
  baseURL: "https://gbfs.urbansharing.com/oslobysykkel.no/",
});

// station_information.json - List of all stations, their capacities and locations. Required of systems utilizing docks.

// station_status.json - Number of available vehicles and docks at each station and station availability.
// Required of systems utilizing docks.

// free_bike_status.json - Describes all vehicles that are not currently in active rental.
// Required for free floating (dockless) vehicles.
// Optional for station based (docked) vehicles.
// Vehicles that are part of an active rental must not appear in this feed.
