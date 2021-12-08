import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = e => {
    const optionName = e.target.innerHTML;
    this.setState(prevState => ({ [optionName]: prevState[optionName] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, value) => sum + value, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementValue}
          />
        </Section>
        <Section title="Statistics">
          {!!totalFeedback && (
            <Statistics
              stat={statistics}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
          {!totalFeedback && <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}
