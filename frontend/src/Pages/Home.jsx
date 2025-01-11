import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { TabsComponent } from "../Components/TabsComponent";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { HeadMetaContent } from "../Components/HeadMetaContent";
import { HomeAccordianItem } from "../Components/HomeAccordianItem";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [homeMetaData, setHomeMetaData] = useState(null);
  const { categorysWithBlogs, loading } = useContext(DataContext);
  const { parentCategorysWithBlogs } = useContext(DataContext);

  const formatDate = (isoDateStr) => {
    const date = new Date(isoDateStr);
    const options = { year: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/sitepage/home/`
        );
        setHomeData(response.data);
      } catch (error) {
        console.error("Error fetching fetchHomeData", error);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    const fetchHomeMetaData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/sitepage/meta-data/`
        );
        setHomeMetaData(response.data);
      } catch (error) {
        console.error("Error fetching fetchHomeMetaData", error);
      }
    };

    fetchHomeMetaData();
  }, []);

  if (loading) return null;
  return (
    <>
      <HeadMetaContent
        singleBlog={homeMetaData}
        preloadImage={homeData?.background_image}
      />
      <div
        className="mb-3 home-bg bg-primary"
        style={{ background: `url(${homeData?.background_image})` }}
      >
        <TabsComponent items={parentCategorysWithBlogs} />
      </div>
      <div className="home container mt-4 mb-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <p className="fw-bold mb-0">All Popular Category List</p>
          </div>
          <div>
            <Link className="fw-bold text-primary" to="all-list">
              All Category List
            </Link>
          </div>
        </div>
        <Accordion>
          {categorysWithBlogs?.length > 0 &&
            categorysWithBlogs.map((category, index) => (
              <HomeAccordianItem key={index} index={index} category={category}/>
            ))}
        </Accordion>
      </div>
    </>
  );
};

export default Home;
