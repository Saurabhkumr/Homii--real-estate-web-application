import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import CountUp from "react-countup";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BounceLoader } from "react-spinners";

SwiperCore.use([Navigation, Autoplay]);
const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const landingPageImages = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/listing/get?offer=true&limit=4`
        );
        const data = await res.json();
        setOfferListings(data);
        setLoading(false);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/listing/get?type=rent&limit=4`);
        const data = await res.json();
        setRentListings(data);
        setLoading(false);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`${API_URL}/api/listing/get?type=sale&limit=4`);
        const data = await res.json();
        setSaleListings(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    window.location.href = `/search?${searchQuery}`;
  };

  return (
    <div className="flex flex-col gap-10 ">
      <div
        className="flex flex-col lg:flex-row relative"
        style={{ backgroundColor: "#131110", color: "white" }}
      >
        {/* Left Section - Text and Search */}
        <div
          className="flex-1 flex flex-col justify-center items-start px-4 py-8 lg:px-10 lg:py-4"
          style={{ backgroundColor: "#131110" }}
        >
          <br />
          <h1 className="font-bold text-3xl lg:text-5xl mb-4 lg:ml-20">
            Unlock the <br />
            Door to Your
            <br /> <span className="text-blue-500">New Home</span>
          </h1>
          <br></br>
          <Link
            to="/search"
            className="text-sm lg:text-base text-blue-800 font-bold hover:underline lg:ml-20"
          >
            Let's get started...
          </Link>
          <br />

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mt-4 flex items-center bg-gray-800 p-2 rounded-2xl lg:ml-20 w-full max-w-lg"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white focus:outline-none w-full px-4 py-1 rounded-2xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="ml-2 rounded-xl">
              <FaSearch className="text-white" />
            </button>
          </form>
          <br />

          <div className="mt-5">
            {/* Social Media Handles */}
            <div className="flex gap-4 lg:gap-10 mb-4 lg:ml-20">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <br />

            {/* Stats Section */}
            <div className="flex justify-around w-full max-w-4xl mb-10 text-blue-500 gap-10 lg:ml-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold">
                  <CountUp start={50} end={1000} duration={5} /> <span>+</span>
                </span>
                <span className="text-white">Premium Product</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold">
                  <CountUp start={10} end={500} duration={5} /> <span>+</span>
                </span>
                <span className="text-white">Happy Customer</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold">
                  <CountUp end={5} /> <span>+</span>
                </span>
                <span className="text-white">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Swiper */}
        <div
          className="flex-none w-full lg:w-1/2 p-4 lg:p-10 lg:mr-20 mt-10 mb-10"
          style={{ backgroundColor: "#131110" }}
        >
          <Swiper
            navigation={false} // Removed navigation arrows
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
            loop={true} // Loop settings
          >
            {landingPageImages.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-[300px] lg:h-[500px] w-full relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={image}
                    alt={"Listing image"} // Improve alt text for accessibility
                    className="object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Listing results for offer, sale, and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <BounceLoader color="#2563eb" size={60} />
          </div>
        ) : (
          <>
            {offerListings && offerListings.length > 0 && (
              <div>
                <div className="my-3">
                  <h2 className="text-2xl font-semibold text-slate-600">
                    Recent offers
                  </h2>
                  <Link
                    className="text-sm text-blue-800 hover:underline"
                    to={"/search?offer=true"}
                  >
                    Show more offers
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {offerListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              </div>
            )}
            {rentListings && rentListings.length > 0 && (
              <div>
                <div className="my-3">
                  <h2 className="text-2xl font-semibold text-slate-600">
                    Recent places for rent
                  </h2>
                  <Link
                    className="text-sm text-blue-800 hover:underline"
                    to={"/search?type=rent"}
                  >
                    Show more places for rent
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {rentListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              </div>
            )}
            {saleListings && saleListings.length > 0 && (
              <div>
                <div className="my-3">
                  <h2 className="text-2xl font-semibold text-slate-600">
                    Recent places for sale
                  </h2>
                  <Link
                    className="text-sm text-blue-800 hover:underline"
                    to={"/search?type=sale"}
                  >
                    Show more places for sale
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {saleListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
