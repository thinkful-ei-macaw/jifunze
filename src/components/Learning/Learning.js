import React, { Component } from 'react';
import LanguageApiService from "../../services/language-api-service";
import { Label, Input } from "../Form/Form";
import Button from "../Button/Button";
import Feedback from "../Feedback/Feedback";
import './Learning.css';

class Learning extends Component {
  state = {
    word: '',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    feedback: null,
  }

  guess = React.createRef();

  componentDidMount() {
    this.fetchRequest();
    this.guess.current.focus();
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
    const guess = this.guess.current.value;

    LanguageApiService.postGuess(guess)
      .then(data => {
        this.setState({
          feedback: {
            original: this.state.word,
            totalScore: data.totalScore,
            answer: data.answer,
            isCorrect: data.isCorrect,
            guess: guess
          },

          word: data.nextWord,
          totalScore: data.totalScore,
          wordCorrectCount: data.wordCorrectCount,
          wordIncorrectCount: data.wordCorrectCount
        });
      });
  }

  clearFeedback = () => {
    this.setState({
      feedback: null
    });
  }


  render() {
    const { feedback } = this.state;
    return (
      <section className="wrapper">
        {/*present a input to type my answer/guess for the current words translations*/}
        { !feedback
        ? (
          <>
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
              <Label htmlFor="learn-guess-input">What's the translation for this word?</Label>
              <Input id="learn-guess-input" name="learn-guess-input" ref={this.guess} required />

              {/* Implement the handle submit button to handle the post request */}
              <Button type="submit">Submit your answer</Button>
            </form>
          </>
        )
        : (
          <>
            <Feedback data={feedback} onClick={this.clearFeedback} />
          </>
        )}
        

      </section>
    )
  }
}

export default Learning;
