import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button/Button";
import "./Feedback.css"

export default class Feedback extends Component {
  render() {
    const { data, onClick } = this.props;
    const { isCorrect, original, answer, guess, totalScore } = data;
    const icon = isCorrect ? faSmileBeam : faFrownOpen;
    return (
      <article className="feedback wrapper">
        <FontAwesomeIcon size="6x" className="icon" color={isCorrect ? "#509406" : "rgb(214, 60, 60)"} icon={icon} />
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
