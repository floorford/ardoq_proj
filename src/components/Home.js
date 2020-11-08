const Home = () => (
  <section className='white-container'>
    <h3>Thanks for the oppurtunity to work on this task!</h3>
    <p>A little explanation on what's before you:</p>
    <p>
      Libraries used:
      <ul>
        <li>Axios for API requests</li>
        <li>ReactRouter for in-app navigation</li>
        <li>Font Awesome for some iconisation</li>
        <li>Google fonts</li>
      </ul>
    </p>
    <p>
      Max product calculator provides some user input error handling on the
      input form:
    </p>
    <ul>
      <li>Number type enforced on input</li>
      <li>Cannot submit an empty input</li>
      <li>Minimum of 3 numbers required before calculation can be done</li>
      <li>Cannot reset an empty list</li>
    </ul>
    <p>Oslo Bikes application:</p>
    <ul>
      <li>Added a filter search bar due to the high amount of stations</li>
      <li>Used the longitude and latitude to create a link to google maps</li>
      <li>
        Warning appears if the stations aren't renting and/or recieving bikes
      </li>
      <li>Error handling on data requests</li>
    </ul>
  </section>
);

export default Home;
