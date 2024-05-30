import HeadText from "../../components/HeadText/HeadText";
import {Link } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";

export default function Root() {
    const [closeSidebar, setCloseSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bag, setBag] = useState([]);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);


  const handleBag = useCallback(
    (newBagData) => {
      setBag((prevState) => [...prevState, newBagData]);
      setTotal((prevState) => prevState + Number(newBagData.newPrice));
    },
    []
  );

  const handleRemoveBagItem = useCallback(
    (imageId, newItemPrice) => {
      setBag((prevState) => prevState.filter((item) => item.imageId !== imageId));
      setTotal((prevState) => prevState - Number(newItemPrice));
    },
    [setBag]
  );

  const handleSidebar = useCallback(() => {
    setCloseSidebar((prevState) => !prevState);
  }, []);

  const handleInputChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleRadioChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const handleClick = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const filteredItems = useMemo(() => {
    return storeData.filter((storeItem) =>
      storeItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
let storedata = ""
  const filteredData = useMemo(() => {
    let filteredStoreData = storeData;

    if (query) {
      filteredStoreData = filteredItems;
    }

    if (selectedCategory) {
      filteredStoreData = filteredStoreData.filter(
        ({ color, company, title }) =>
          color === selectedCategory ||
          company === selectedCategory ||
          title === selectedCategory
      );
    }

    return filteredStoreData.map(({ img, title, newPrice, prevPrice, id }) => (
      <div
        key={id}
        image={img}
        title={title}
        newPrice={newPrice}
        prevPrice={prevPrice}
        imageId={id}
        handleBag={handleBag}
      ></div>
    ));
  }, [filteredItems, selectedCategory, handleBag,query]);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          
          <nav>
            <ul>
              <li>
              <Link to={`contacts/1`}>Your Name</Link>
              </li>
              <li>
              <Link to={`contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <HeadText/>
        </div>
      </>
    );
  }
 

 