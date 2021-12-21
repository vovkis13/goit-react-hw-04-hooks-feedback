import { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

const initialOptions = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [values, setValues] = useState(initialOptions);

  const incrementValue = e => {
    const option = e.target.innerHTML;
    setValues(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const calculateTotal = () => {
    return Object.values(values).reduce((sum, option) => sum + option, 0);
  };
  const total = calculateTotal();

  const calculatePositivePercentage = () => {
    return Math.round((values.good / total) * 100);
  };
  const positivePercentage = calculatePositivePercentage();

  const options = Object.keys(values);
  const statistics = Object.entries(values);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={incrementValue} />
      </Section>
      <Section title="Statistics">
        {total > 0 && (
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        {total === 0 && <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
}
