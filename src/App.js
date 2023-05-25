import React from 'react'
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: '',
    };
  }

  handleKeyPress = (e) => {
    // Check if the pressed key matches the expected key
    if (e.key === this.state.currentKey) {
      // Update the state to trigger a re-render
      this.setState({
        currentKey: this.getRandomKey(),
      });
    }
  };

  getRandomKey = () => {
    const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
    // Get a random key from the array
    return keys[Math.floor(Math.random() * keys.length)];
  };

  componentDidMount() {
    // Add event listener to handle key presses
    document.addEventListener('keydown', this.handleKeyPress);
    // Set the initial random key
    this.setState({
      currentKey: this.getRandomKey(),
    });
  }

  componentWillUnmount() {
    // Remove event listener to clean up
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="cont">
        <h1>Touch Typing Exercise</h1>
        <p>Press the current key: {this.state.currentKey}</p>
        <div className="keyboard">
          {['a', 's', 'd', 'f', 'j', 'k', 'l', ';'].map((key) => (
            <div key={key} className="key">
              {key}
            </div>
          ))}
        </div>
      </div>
    );
  }

}
export default App;