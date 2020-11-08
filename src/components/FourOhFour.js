import React from "react";
import { Link } from "react-router-dom";

import "../css/FourOhFour.css";
import catImage from "../assets/cat.jpg";

const FourOhFour = () => {
  return (
    <section className='fourohfour'>
      <div>
        <h3>Uh oh!</h3>
        <p>We're sorry but something went wrong!</p>
        <p>
          Feel like doing some math to release your frustrations? Head to the{" "}
          <Link to='/calculator'>max product calculator</Link> page.
        </p>
        <p>
          Maybe bikes make you smile - click <Link to='/oslobikes'>here</Link>{" "}
          to find out about the ones in Oslo!
        </p>
        <p>
          If you've totally had it, I recommend you click{" "}
          <a href='https://giphy.com/explore/cat'>this.</a>
        </p>
      </div>
      <div>
        <img alt='shower cat' src={catImage} />
      </div>
    </section>
  );
};

export default FourOhFour;
