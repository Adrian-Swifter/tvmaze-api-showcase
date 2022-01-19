import { useState, useEffect } from "react";

const useTVMazeAPI = (id) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return data;
};

export default useTVMazeAPI;
