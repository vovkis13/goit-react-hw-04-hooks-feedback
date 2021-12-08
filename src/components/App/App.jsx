import { useState, useRef, useEffect } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

const OPTIONS = ['good', 'neutral', 'bad'];

export default function App() {
  const [values, setValues] = useState([0, 0, 0]);
  const [update, setUpdate] = useState(false);
  const total = useRef(0);
  const positive = useRef(0);

  const incrementValue = e => {
    const idx = OPTIONS.indexOf(e.target.innerHTML);
    setValues(prevArr => [
      ...values.slice(0, idx),
      prevArr[idx] + 1,
      ...values.slice(idx + 1),
    ]);
  };

  useEffect(() => {
    total.current = values.reduce((sum, value) => sum + value, 0);
    if (total) positive.current = Math.round((values[0] / total.current) * 100);
    setUpdate(!update);
  }, [values, update]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={incrementValue} />
      </Section>
      <Section title="Statistics">
        {!!total.current && (
          <Statistics
            options={OPTIONS}
            stat={values}
            total={total.current}
            positivePercentage={positive.current}
          />
        )}
        {!total.current && <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
}
