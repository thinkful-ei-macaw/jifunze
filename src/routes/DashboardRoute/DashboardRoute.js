import React, { Component } from "react";
import { LanguageProvider } from "../../contexts/LanguageContext";
import Dashboard from "../../components/Dashboard/Dashboard";

class DashboardRoute extends Component {
  render() {
    return (
      <section className="dashboard">
        <LanguageProvider>
          <Dashboard />
        </LanguageProvider>
      </section>
    );
  }
}

export default DashboardRoute;
