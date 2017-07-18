console.log('✨')

class NameTag extends React.Component {
  render() {
    return(
      <div
      onClick={this.handleClick.bind(this)}
      className="nameTag"
      style={{backgroundColor: this.props.bgcolor}}
      >
        <h2>
          <span className="greeting">Hello</span><br />My name is
        </h2>
          <h1 className="">{this.props.name}</h1>
      </div>
    );
  }
}

class SuperButton extends React.Component {
  render() {
    // <button style={{backgroundColor: this.props.color}}>Hi</button>
    const style = {backgroundColor: this.props.color};
    return (
      <button onClick={() => window.alert('hi')} style={style}>Hi</button>
    );
  }
}

class Welcome extends React.Component {
  handleDoubleClick(evt){
    window.alert(this.props.name)
  }
// Define a welcome class
// that renders "Hello Johnny"
  render() {
    return (
        <div onDoubleClick={this.handleDoubleClick.bind(this)} style={{color: 'pink'}}>
          <p>Hello <span>{this.props.adjective} </span>
          {this.props.name}
          </p>
        </div>
      )
  }
}

class App extends React.Component {
  render() {
        // create a SuperButton Component
        // color sets the background color of the Component
        // can you put a onDoubleClick event
        // on the welcome component and alert the name
    return (
      <div>
        <h1>Hello World</h1>
        <Welcome adjective="pretty" name="Polly" />
        <Welcome adjective="hulky" name="Sam" />
        <Welcome name="Keith" />
        <SuperButton color = "red" />

        <p>Playing with React</p>
        <p>Curly braces get evaluated {2 + 2}</p>
      </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
