import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("/test");
      console.log(`Se ha recibido: ${JSON.stringify(data.data)}`);
    };
    fetch();
  }, []);
  return (
    <div className="App">
      <p>Las cosas son como son ya yo lo dije</p>
    </div>
  );
}

export default App;
