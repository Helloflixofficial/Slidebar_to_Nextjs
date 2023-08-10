import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../API";

const Cards = () => {
  const [page, setPage] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${page}`).then((data) =>
      setVideos(data.items)
    );
  }, [page]);

  return (
    <div className="wrapper">
      <div className="card">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fd7YxLE6ohg7TnDLYr6DEvyAxnC8.jpg&f=1&nofb=1&ipt=e4f5efa1b975c2633dc089b3eefdbd3bb916dc3bd8c36abbc981cb0046a7afe3&ipo=images" />{" "}
        <div className="descriptions">
          <h5>John Wick 5</h5>
          <p>After the Story About</p>
          <button className="Playnow">
            <i className="fab fa-youtube"></i>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
