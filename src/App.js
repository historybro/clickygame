import React, {Component} from 'react';
import cards from "./cards.json";
import Nav from "./components/Nav";
import Jumbo from "./components/jumbo";
import Wrap from "./components/wrapper";
import Card from "./components/Card";
import "./app.css";

class App extends Component {

  state = {
    cards,
    message: "Click on an image to begin!",
    score: 0,
    highscore: 0
  };

  

  render() {
    return (
      <div>
        <Nav scr={this.state.score} highscr={this.state.highscore} message={this.state.message} />
        <div className="container">
          <Jumbo/>
          <Wrap>
          {/* {this.state.cards.map(props => (
            <Card
              key={props.id}
              id={props.id}
              image={props.image}
              name={props.name}
            />            
          ))} */}
          </Wrap>
        </div>
      </div>
      
    )
  }

}

export default App;
