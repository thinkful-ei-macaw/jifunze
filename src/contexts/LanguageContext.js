import React, { Component } from "react";
import LanguageApiService from "../services/language-api-service";

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  setError: () => {},
  clearError: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: {}, words: [], error: null };
  }

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then((data) => {
        this.setLanguageData(data);
      })
      .catch((err) => {
        this.setError(err);
      });
  }

  setLanguageData = (languageData) => {
    this.setState(languageData);
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setScore = (score) => {
    console.log('You called?')
    this.setState({ score });
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setScore: this.setScore
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
