console.log('state.js');
// props => outside => don't change
//state => inside => changes

// Create a Counter component that renders a button
// Add it to App's render

class People extends React.Component {
  render() {
    const people = this.props.data.map( (n, i) =>  <li key={i}>{n}</li>)
    return (
      <ul>
        {people}
      </ul>
    )
  }
}

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      counter: 5
    }
  }
  handleClick(evt) {
    // changes this.state and calls render
    this.setState({
      counter: this.state.counter + this.props.incr
    })
  }
  //this.handleClick = this.handleClick.bind(this);
  render(){
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.counter}
      </button>
    );
  }
}

class App extends React.Component {
  render(){
    const counters = [1,2,3].map( (n, i) => <Counter key={i} incr={n} />)
    return(
      <div>
        <People data= {["Many", "Moe", "Jack"]} />
        <h1>Counter</h1>
        {counters}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
