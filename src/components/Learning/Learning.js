import React, { Component } from 'react';
import LanguageApiService from "../../services/language-api-service";
import Button from "../../components/Button/Button";
import './Learning.css';

class Learning extends Component {
    state = {

        //word to learn
        //current total score
        //number of correct
        //number of incorrect
        word: '',
        totalScore: 0,
        wordCorrectCount: 0,
        wordIncorrectCount: 0
      }
    
      componentDidMount() {
        this.fetchRequest();
      }
    
      //currentTotalScore vs Score
      fetchRequest() {
        LanguageApiService.getHead()
        .then(data => {
          this.setState({
            word: data.nextWord,
            totalScore: data.totalScore,
            wordCorrectCount: data.wordCorrectCount,
            wordIncorrectCount: data.wordIncorrectCount
          })
        })
        .catch((error) => {
          console.error(error);
        });
      }

      handleSubmit = (ev) => {
        ev.preventDefault();
        
        console.log('hello');
      }
      
      
      render() {
        return (
          <section>
            {/*present a input to type my answer/guess for the current words translations*/}
            <div className="total-score">
              <p>Your total score is: {this.state.totalScore}</p>
            </div>
    
            <div className="word-container">
              <h2>Translate the word:</h2><span>{this.state.word}</span>
            </div>  
            
            <div className="count-container">
              <p>You have answered this word correctly {this.state.wordCorrectCount} times.</p>
              <p>You have answered this word incorrectly {this.state.wordIncorrectCount} times.</p>
            </div>

            <form className="answer-form" onSubmit={this.handleSubmit} >
              <label for="learn-guess-input">What's the translation for this word?</label>
              <input type="text" id="learn-guess-input" name="learn-guess-input" required />

              {/* Implement the handle submit button to handle the post request */}
              <Button type="submit">Submit your answer</Button>
            </form>
          
          </section>
        )
      }
}

export default Learning;
