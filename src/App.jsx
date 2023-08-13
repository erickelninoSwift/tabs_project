import { useState, useEffect } from "react";
import "./index.css";
const url = "https://course-api.com/react-tabs-project";
import { JobsInfo } from "./Components/JobsInfo";

function App() {
  const [tabs, setTabs] = useState([]);
  const [isLoading, setIslLoading] = useState(true);

  const getAllTabs = async () => {
    try {
      setIslLoading(true);
      let response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTabs(data);
    } catch (error) {
      console.log(`Error found : ${error}`);
    } finally {
      setIslLoading(false);
    }
  };

  useEffect(() => {
    getAllTabs();
  }, []);

  return (
    <>
      <section className="jobs-center">
        {isLoading && <div className="loading"></div>}
        {!isLoading && <JobsInfo myJobInfos={tabs} />}
      </section>
    </>
  );
}

export default App;
