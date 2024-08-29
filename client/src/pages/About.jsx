import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            About Homii
          </h1>
          <p className="text-lg text-slate-600">
            Your Trusted Partner in Real Estate
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src="./logo2.png"
              alt="Real Estate"
              className="rounded-lg shadow-lg bg-black"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-slate-700">
            <p className="mb-6">
              Homii is a leading real estate agency that specializes in helping
              clients buy, sell, and rent properties in the most desirable
              neighborhoods. Our team of experienced agents is dedicated to
              providing exceptional service and making the buying and selling
              process as smooth as possible.
            </p>
            <p className="mb-6">
              Our mission is to help our clients achieve their real estate goals
              by providing expert advice, personalized service, and a deep
              understanding of the local market. Whether you are looking to buy,
              sell, or rent a property, we are here to help you every step of
              the way.
            </p>
            <p className="mb-6">
              Our team of agents has a wealth of experience and knowledge in the
              real estate industry, and we are committed to providing the
              highest level of service to our clients. We believe that buying or
              selling a property should be an exciting and rewarding experience,
              and we are dedicated to making that a reality for each and every
              one of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
