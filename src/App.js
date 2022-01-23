import HomePage from './homepage';
import {DateProvider} from './content/date_context';

function App() {
  return (
    <DateProvider>
      <HomePage />
    </DateProvider>
  );
}

export default App;
