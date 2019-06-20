import React, {Component} from 'react';
import Card from "./components/card/"
import Nav from "./components/nav/";
import cards from "./cards.json"

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log("New High Score: " + this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count =0;
    });
    alert("Game Over \nScore:" + this.state.score);
    this.setState({score:0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count ===0){
          cards[i].count =  cards[i].count++;
          this.setState({score: this.state.score +1}, function(){
            console.log("Score: " + this.state.score);
          });
          this.state.cards.sort(() => Math.random() -0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div>

      <Nav score={this.state.score} highscore={this.state.highscore}> 
        Clicky Game
      </Nav>
      {this.state.cards.map(card => (
      <Card
      clickCount={this.clickCount}
      key={card.id}
      id={card.id}
      image={card.image}
      />
      ))}
      </div>
    )
  }

}

export default App;
