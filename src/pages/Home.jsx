import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import HeroContent from "../components/HeroContent";
import AllProperties from "../components/AllProperties";
import Pagination from "../components/Pagination";
import SliderProperty from "../components/SliderProperty";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import EmptySearch from "../components/EmptySearch";
import axios from "axios";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProporties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [numOfProperties, setNumOfProperties] = useState(0);
  const [location, setLocation] = useState("");
  const [bedroom, setBedroom] = useState("");
  const api_url = "http://localhost:3000/api/v1/property";
  const getProperties = async () => {
    setIsLoading(true);
    try {
      //fetch the data
      const { data } = await axios(
        `${api_url}?page=${page}&location=${location}&bedrooms=${bedroom}`
      );
      console.log(data);
      setIsLoading(false);
      setProporties(data.properties);
      setTotalProperties(data.totalProperties);
      setPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, [page, location, bedroom]);

  const resetFilters = () => {
    setLocation("");
    setBedroom("");
    setPage(1);
  };
  return (
    <>
      <div className="hero-section w-full min-h-[680px]">
        <Nav />
        <HeroContent
          setLocation={setLocation}
          setPage={setPage}
          setBedroom={setBedroom}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        properties.length > 0 && (
          <div>
            <AllProperties
              properties={properties}
              totalProperties={totalProperties}
              page={page}
              numOfProperties={numOfProperties}
              resetFilters={resetFilters}
            />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        )
      )}
      {properties.length === 0 && <EmptySearch resetFilters={resetFilters} />}

      <SliderProperty />
      <Footer />
    </>
  );
};

export default Home;

//sorting
//remember me
// proprty title
