import { useState, useEffect } from "react";

export function useJsonFetch({url, opts}) {
  const [res, setRes] = useState([]);
  useEffect(() => {
    Promise.all(opts.map((opt) => fetchRequest(`${url}/${opt}`)
    .then((result) => getJsonData(result))))
    .then((values) => setRes(values));
  }, []);
  return res;
}

async function fetchRequest(address) {
  return await fetch(address);
}

async function getJsonData(data) {
  return await data.json();
}
