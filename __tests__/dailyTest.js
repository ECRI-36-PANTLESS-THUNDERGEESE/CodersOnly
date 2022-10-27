import DailyProblem from '../client/components/dailyProblem.jsx';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

describe('checking daily problem', () => {
  beforeEach(async () => {
    const app = await render(<App />);
  });
  describe('prompts added correctly', () => {
    const cards = screen.getByText('CodersOnly');
    expect(cards);
  });
});
