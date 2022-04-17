import { useEffect, useState } from 'react';
import USEK from './useEffectK';
function App() {
  const [state, setState] = useState(false);

  const usekHandle = () => {
    setState(current => current = !current);
  }

  return (
    <div className="App">
      {state?<USEK/>:<p>Loading...</p>}
      <button onClick={usekHandle}>change</button>
    </div>
  );
}

export default App;
