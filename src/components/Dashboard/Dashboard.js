import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import LanguageContext from "../../contexts/LanguageContext";
import Button from "../Button/Button";
import "./Dashboard.css";

class Dashboard extends Component {
  static contextType = LanguageContext;

  render() {
    const { language, words } = this.context;
    return (
      <>
        <article className="jumbotron wrapper">
          <h2>{language.name}</h2>
          <p className="sub">Practice makes perfect, and now's a great time to do it!</p>
          <p className="score">Total correct answers: {language.total_score}</p>
          <Link to="/learn">
            <Button>
              <FontAwesomeIcon icon={faRocket} />Start practicing
            </Button>
          </Link>
        </article>
        <article className="wrapper">
          <h3>Words to practice</h3>
          <ul className="grid">
            {words.map(
              ({
                id,
                original,
                correct_count,
                incorrect_count,
              }) => (
                  <li key={id}>
                    <h4>{original}</h4>
                    <p className="scores">
                      <span>correct answer count: {correct_count}</span>
                      <span>incorrect answer count: {incorrect_count}</span>
                    </p>
                  </li>
                )
            )}
          </ul>
        </article>
      </>
    );
  }
}

export default Dashboard;
