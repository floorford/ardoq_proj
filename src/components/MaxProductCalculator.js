import React from "react";

import "../css/MaxProductCalculator.css";

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
      const listCopy = list.slice();
      const sortedList = listCopy.sort((a, b) => a - b);
      const highestThree = sortedList.slice(Math.max(sortedList.length - 3, 0));

      let maxProduct = highestThree.reduce((sum, val) => sum * +val, 1);

      this.setState({ total: maxProduct, error: false, highestThree });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { list, input, total, error, highestThree } = this.state;
    return (
      <article className='calculator'>
        <h2>Max Product Calculator</h2>
        <section>
          <p>
            A function that, given a list of integers, returns the highest
            product between three of those numbers.
          </p>
          <p>
            For example, given the list: <strong>[1, 10, 2, 6, 5, 3]</strong>{" "}
            the highest product would be: <strong>10 * 6 * 5 = 300</strong>
          </p>
          {list ? (
            <ul>
              {list.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          ) : null}
          {total ? (
            <h4>
              The highest product is: {total}, a product of [
              {highestThree.join(" * ")}]
            </h4>
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
              placeholder='10'
            />
            <button
              className='button'
              onClick={this.handleAddNumbers}
              disabled={!input.length}
            >
              Add to the list
            </button>
          </form>
          <p>
            Once you've added 3 or more numbers, click the calculate button!
          </p>
          <button
            className='button'
            onClick={this.handleCalculation}
            disabled={list.length >= 3 ? "" : "disabled"}
          >
            Calculate!
          </button>
          {error ? (
            <p>
              Please enter at least 3 numbers before using the calculate button
            </p>
          ) : null}
          <button
            className='button'
            disabled={list.length ? "" : "disabled"}
            onClick={this.handleReset}
          >
            Reset
          </button>
        </section>
      </article>
    );
  }
}

export default MaxProductCalculator;
