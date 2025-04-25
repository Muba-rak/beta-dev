import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import HeroContent from "../components/HeroContent";
import AllProperties from "../components/AllProperties";
import Pagination from "../components/Pagination";
import SliderProperty from "../components/SliderProperty";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import EmptySearch from "../components/EmptySearch";
import { axiosInstance } from "../utils/axiosConfig";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProporties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [numOfProperties, setNumOfProperties] = useState(0);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [sort, setSort] = useState("");
  const api_url = "/property";

  const getProperties = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page,
        ...(location && { location: location.trim() }), //includes values provided
        ...(bedroom && { bedrooms: bedroom }),
        ...(title && { title: title }),
        ...(sort && { sort: sort }),
      });
      console.log(params.toString());

      const { data } = await axiosInstance(`${api_url}?${params.toString()}`);

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
  }, [page, location, bedroom, title, sort]);

  const resetFilters = () => {
    setLocation("");
    setBedroom("");
    setPage(1);
    setTitle("");
  };
  return (
    <>
      <div className="hero-section w-full min-h-[680px]">
        <Nav />

        <HeroContent
          setLocation={setLocation}
          setPage={setPage}
          setBedroom={setBedroom}
          setTitle={setTitle}
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
              setSort={setSort}
              sort={sort}
            />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        )
      )}
      {!isLoading && properties.length === 0 && (
        <EmptySearch resetFilters={resetFilters} />
      )}

      <SliderProperty />
      <Footer />
    </>
  );
};

export default Home;

// proprty title
//sorting
//remember me
