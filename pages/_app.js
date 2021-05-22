import { useState, useMemo } from "react";

import { AppContext } from "../app/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState({});

  const handleOnDeleteItem = (str) => {
    setItems(items.filter((item) => item !== str));
  };
  const handleOnAddItem = (str) => {
    if (!items.includes(str)) {
      setItems([str, ...items]);
    }
  };
  const handleOnUpdateDetail = (str, detail) => {
    console.log("id", str, "detail", detail);
    setDetails({ ...details, [str]: detail });
  };

  const value = useMemo(
    () => ({
      items,
      details,
      handleOnDeleteItem,
      handleOnAddItem,
      handleOnUpdateDetail,
    }),
    [items, details]
  );

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
