import "./App.css";
import { useState, useEffect } from "react";
import FilterWidget from "./components/filterwidget/FilterWidget";
import Header from "./components/header/Header";
import NewsDisplayPanel from "./components/newspanel/NewsDisplayPanel";
function App() {
  const [searchKey, setSearchKey] = useState("cricket");
  const [articles, setArticles] = useState([]);
  const [filterType, setFilterType] = useState("days");
  const [filterValue, setFilterValue] = useState(2);
  const [pageSize, setPageSize] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [resultCount, setResultCount] = useState(0);
  const [sortBy, setSortBy] = useState("popularity");
  useEffect(() => {
    postData();
  },[]);
  useEffect(() => {
    console.log("Total Count:", resultCount);
    console.log("Articles:", articles);
  }, [resultCount, articles]);

  const handleSearchKeyChange = (newSearchKey) => {
    setSearchKey(newSearchKey);
  };

  const handleFilterValue = (newValue) => {
    setFilterValue(newValue);
  };
  const handleFilterType = (newValue) => {
    setFilterType(newValue);
  };

  const handleSortBy = (newValue) => {
    setSortBy(newValue);
  };

  const handleFilterSubmit = () => {
    console.log("searchKey " + searchKey);
    console.log("filterValue " + filterValue);
    console.log("filterType " + filterType);
    console.log("sortBy " + sortBy);

    postData();
  };

  const postData = async () => {
    const url = "http://3.110.82.192:8080/api/v1/news";
    const data = {
      filterType: filterType,
      filterValue: filterValue,
      pageSize: pageSize,
      pageNumber: pageNum,
      sortBy: sortBy,
      searchKey: searchKey,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Request succeeded
        const responseData = await response.json();
        if (responseData && responseData.totalResults) {
          setResultCount(responseData.totalResults);
        }

        if (responseData && responseData.articles) {
          setArticles(responseData.articles);
        }

        console.log("Response:", responseData);
        console.log("Total Count:", resultCount);
        console.log("Articles:", articles);
      } else {
        // Request failed
        console.error("Request failed:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="body_layout">
        <div className="news_display">
          <NewsDisplayPanel
            resultCount={resultCount}
            articles={articles}
            searchKey={searchKey}
          />
        </div>
        <div className="filter_widget">
          <FilterWidget
            searchKey={searchKey}
            handleSearchKeyChange={handleSearchKeyChange}
            filterValue={filterValue}
            handleFilterValue={handleFilterValue}
            filterType={filterType}
            handleFilterType={handleFilterType}
            sortBy={sortBy}
            handleSortBy={handleSortBy}
            handleFilterSubmit={handleFilterSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
