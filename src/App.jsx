import { useState, useEffect } from "react";
import "./index.css";
const url = "https://course-api.com/react-tabs-project";
import { JobsInfo } from "./Components/JobsInfo";
import { ButtonContainer } from "./Components/ButtonContainer";

function App() {
  const [tabs, setTabs] = useState([]);
  const [isLoading, setIslLoading] = useState(true);
  const [currentItem, setCurrentItems] = useState(0);

  const getAllTabs = async () => {
    try {
      setIslLoading(true);
      let response = await fetch(url);
      const data = await response.json();

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
        <ButtonContainer
          alljobs={tabs}
          buttonItem={currentItem}
          buttonPressedItems={setCurrentItems}
        />
        {isLoading && <div className="loading"></div>}
        {!isLoading && (
          <JobsInfo myJobInfos={tabs} currentJobsItems={currentItem} />
        )}
      </section>
    </>
  );
}

export default App;
