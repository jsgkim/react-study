import { useState } from 'react';
import axios from '../node_modules/axios/index';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=463bf473be334a16aaa0938be8c64435');
      setData(response.data);
    } catch (e) { console.log(e);}
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;
