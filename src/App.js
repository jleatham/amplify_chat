import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import logo from './logo.svg';
import './App.css';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

class App extends Component {

  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Trip booked. Thank you! what would you like to do next?';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ChatBot Demo</h1>
        </header>
        <ChatBot
          title="Chat Bot"
          theme={myTheme}
          botName="ScheduleAppointment_dev"
          welcomeMessage="Type Book an Appointment to start"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
          conversationModeOn={false}
        />
      </div>
    );
  }
}

export default App;
