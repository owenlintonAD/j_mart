import HomePage from './homepage';
import {DateProvider} from './content/date_context';
import './App.css';

function App() {
  const colour = colours[Math.floor(Math.random() * colours.length)]

  const style = {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '8px',
    ...colour
  };

  return (
    <DateProvider>
      <div style={style}>
        <HomePage />
      </div>
    </DateProvider>
  );
}

const colours = [
  {
    backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
  },
  {
    backgroundColor: '#4158D0',
    backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
  },
  {
    backgroundColor: '#8EC5FC',
    backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
  },
  {
    backgroundColor: '#D9AFD9',
    backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
  },
  {
    backgroundColor: '#8BC6EC',
    backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
  },
  {
    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )',
  },
  {
    backgroundImage: 'linear-gradient( 358.4deg,  rgba(249,151,119,1) -2.1%, rgba(98,58,162,1) 90% )',
  },
  {
    backgroundImage: 'linear-gradient( 180.4deg,  rgba(188,120,236,1) -2.2%, rgba(29,133,163,1) 83.5% )',
  },
  {
    backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  },
  {
    backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
  },
  {
    backgroundImage: 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
  }
]

export default App;
