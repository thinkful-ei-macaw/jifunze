import React, { Component } from 'react';
import Button from "../Button/Button";

export default class Feedback extends Component {
  render() {
    const { data, onClick } = this.props;
    const { isCorrect, original, answer, guess, totalScore } = data;
    return (
      <article className="feedback">
        <h2>{isCorrect ? 'You were correct! :D' : 'Good try, but not quite right :('}</h2>
        <div className="DisplayFeedback">
          <p>
            The correct translation for <b>{original}</b> was <b>{answer}</b> and you chose <b>{guess}</b>!
        </p>
        </div>
        <div className="DisplayScore">
          <p>Your total score is: {totalScore}</p>
        </div>
        <Button onClick={onClick}>Try another word!</Button>
      </article>
    )
  }
}
