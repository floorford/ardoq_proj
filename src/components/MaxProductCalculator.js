import React from "react";

class MaxProductCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      input: "",
      total: null,
      error: false,
    };
  }

  handleAddNumbers = (e) => {
    e.preventDefault();

    this.setState({ input: "", list: [...this.state.list, this.state.input] });
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleReset = () => {
    this.setState({ list: [], input: "", total: null, error: false });
  };

  handleCalculation = () => {
    const { list } = this.state;

    if (list.length >= 3) {
      const listCopy = list;
      const sortedList = listCopy.sort((a, b) => a - b);
      const highestThree = sortedList.slice(Math.max(sortedList.length - 3, 0));

      let maxProduct = highestThree.reduce((sum, val) => sum * +val, 1);

      this.setState({ total: maxProduct, error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { list, input, total, error } = this.state;

    return (
      <article>
        <h2>Max Product Calculator</h2>
        <section>
          <p>
            A function that, given a list of integers, returns the highest
            product between three of those numbers.
          </p>
          <p>
            For example, given the list [1, 10, 2, 6, 5, 3] the highest product
            would be 10 * 6 * 5 = 300
          </p>
          {list ? (
            <ul>
              {list.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          ) : null}
          <form>
            <label htmlFor='list'>
              Create a list of numbers, by entering numbers below
            </label>
            <input
              onChange={this.handleInputChange}
              type='number'
              name='list'
              id='list'
              value={input}
            />
            <button onClick={this.handleAddNumbers} disabled={!input.length}>
              Add to the list
            </button>
          </form>
          <p>
            Once you've added 3 or more numbers, click the calculate button!
          </p>
          <button onClick={this.handleCalculation}>Calculate!</button>
          {total ? <h4>The highest product is: {total}</h4> : null}
          {error ? (
            <p>
              Please enter at least 3 numbers before using the calculate button
            </p>
          ) : null}
          <button onClick={this.handleReset}>Reset</button>
        </section>
      </article>
    );
  }
}

export default MaxProductCalculator;
