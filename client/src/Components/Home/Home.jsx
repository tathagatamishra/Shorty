import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
    <div>
      <form className="" onSubmit={generate}>
        <label className="">Long URL</label>
        <input className="" type="text" required />
        <button className="" type="submit">
          Generate
        </button>
      </form>
      <NavLink target="_blank" to={urlObject.shortUrl}>
        {urlObject.shortUrl}
      </NavLink>
    </div>
  );
}
