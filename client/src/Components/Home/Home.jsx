import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const [urlObject, setUrlObject] = useState({});

  const BASE_URL = "http://localhost:6969";

  function generate(event) {
    event.preventDefault();

    const longUrl = {
      url: event.target[0].value,
    };

    axios
      .post(`${BASE_URL}/generate`, longUrl)
      .then((res) => {
        console.log(res.data.data);
        setUrlObject(res.data.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="Home">
      <div className="left">
        <h1>Showrty</h1>
        <p>
          URL shortening is used to create shorter aliases for long URLs. We
          call these shortened aliases “short links.” Users are redirected to
          the original URL when they hit these short links. Short links save a
          lot of space when displayed, printed, messaged, or tweeted.
          Additionally, users are less likely to mistype shorter URLs.
        </p>
        <div></div>
      </div>
      <div className="right">
        <h1 className="heading">Generate a short url</h1>
        <form className="" onSubmit={generate}>
          <label className="">Long URL</label>

          <div>
            <input className="" type="text" required />
            <button className="" type="submit">
              Generate
            </button>
          </div>
        </form>
        <p>Short URL</p>
        <NavLink target="_blank" to={urlObject.shortUrl}>
          {urlObject.shortUrl}
        </NavLink>
      </div>
    </div>
  );
}
