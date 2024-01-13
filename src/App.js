import { useState } from "react";
import axios from "axios";

function App() {
  const [isUpload, setIsUpload] = useState();

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      // console.log(e.target.files);
      const fileDetails = e.target.files[0]; // This is to extract the single object from the array
      setIsUpload(fileDetails);
    }
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("endpoint-url", isUpload);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="App">
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>UPLOAD</button>
    </form>
  );
}

export default App;
