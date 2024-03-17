import { useState } from "react";
import "./App.css";
import DataComp from "./components/DataComp";
import ErrorComp from "./components/ErrorComp";
import LoadingComp from "./components/LoadingComp";
import { useJsonFetch } from "./useJsonFetch";

function App() {
  const [url] = useState("http://localhost:7070");
  const [data, loading, error] = useJsonFetch({
    url,
    opts: ["data", "loading", "error"],
  });
  return (
    <div className="demo-cmpnts">
      <DataComp data={data}></DataComp>
      <ErrorComp error={error}></ErrorComp>
      <LoadingComp loading={loading}></LoadingComp>
    </div>
  );
}

export default App;
