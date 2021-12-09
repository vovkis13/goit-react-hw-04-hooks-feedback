import { useState, useEffect } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

export default function App() {
  const [values, setValues] = useState([0, 0, 0]);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const incrementValue = e => {
    const idx = OPTIONS.indexOf(e.target.innerHTML);
    setValues(prevArr => [
      ...values.slice(0, idx),
      prevArr[idx] + 1,
      ...values.slice(idx + 1),
    ]);
  };

  useEffect(() => {
    const tempTotal = values.reduce((sum, value) => sum + value, 0);
    setTotal(tempTotal);
    if (tempTotal) setPositive(Math.round((values[0] / tempTotal) * 100));
  }, [values]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={incrementValue} />
      </Section>
      <Section title="Statistics">
        {!!total && (
          <Statistics
            options={OPTIONS}
            stat={values}
            total={total}
            positivePercentage={positive}
          />
        )}
        {!total && <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
}
