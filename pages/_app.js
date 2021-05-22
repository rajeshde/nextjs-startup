import { useState, useMemo } from "react";

import { AppContext } from "../app/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState({});

  const deleteDetail = (str) => {
    const tmpDetailsObj = { ...details };
    delete tmpDetailsObj[str];
    setDetails(tmpDetailsObj);
  };
  const handleOnDeleteItem = (str) => {
    setItems(items.filter((item) => item !== str));
    deleteDetail(str);
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

  console.log("details", details);
  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
