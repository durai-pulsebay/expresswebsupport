import React from "react";
import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";

const Home = () => {
  let { country } = useParams();
  let country_code = localStorage.getItem("country_code");
  if (country != country_code) {
    window.location.href = "/" + country_code;
  }
  return (
    <div>
      <>
        <Helmet>
          {/* <title>Fastest Shopify Support In {window.countryName}</title> */}
          {/* <meta name='description' content={`Fastest Shopify Support In ${window.origin}`} /> */}
        </Helmet>
      </>
      <section class="lg:bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div class="container mx-auto">
          <div class="text-center py-10 sm:py-6">
            <h1 class="text-[#144645] font-bold text-3xl	 sm:text-5xl leading-tight sm:leading-snug">
              Fastest Shopify Support
              <br />
              In {window.countryName}
              {/* In {params && params.country == 'in' ? 'India' : 'New Zealand'} */}
            </h1>
            <p class="m-3 max-w-2xl text-xl text-center mx-auto italic">
              Express Shopify Support is a team of experts aiming to solve your
              website problems. Get an instant quote for any Shopify related
              design and development.
            </p>
            <a
              class="bg-lite-green  text-center font-medium text-[#fff] min-w-[100px] py-2 px-5 m-5 my-auto rounded "
              href=""
            >
              Let's Get Started
            </a>
            <div className="flex flex-wrap items-center justify-around py-10">
              <div className="lg:w-[30%]">
                <img src={`${window.origin}/assets/images/home-robo.svg`} />
              </div>
              <div className="lg:w-[23%] py-3 flex flex-col items-center justify-center">
                <img
                  src={`${window.origin}/assets/images/help-us.svg`}
                  className="w-[70%]"
                />
                <h3 className="text-xl font-medium">Help Us Understand</h3>
              </div>
              <div className="lg:w-[23%] py-3 flex flex-col items-center justify-center">
                <img
                  src={`${window.origin}/assets/images/get-a-quote.svg`}
                  className="w-[70%]"
                />
                <h3 className="text-xl font-medium">Get A Quote</h3>
              </div>
              <div className="lg:w-[23%] py-3 flex flex-col items-center justify-center">
                <img
                  src={`${window.origin}/assets/images/coding.svg`}
                  className="w-[70%]"
                />
                <h3 className="text-xl font-medium">
                  Relax While We Take Care Of It
                </h3>
              </div>
            </div>
            {/* <img
              class="mx-auto py-5"
              src={`${window.origin}/assets/images/hero-bnr-1.png`}
              width="60%"
              alt=""
            /> */}
          </div>
        </div>
      </section>
      <section class="bg-dark-green py-[50px] px-4">
        <div class="container mx-auto flex flex-wrap justify-center">
          <div class="sm:w-1/2 sm:px-10">
            <div class=" sm:w-3/4 bg-sandel-clr  p-10 rounded-xl ">
              <img
                class="py-5"
                src={`${window.origin}/assets/images/shield.png`}
                alt=""
                width="100px;"
              />
              <h2 class="text-3xl font-semibold">No Fix, No Fee</h2>
              <p class="py-3 max-w-xs">
                100% Satisfaction Guaranteed or Money Refunded
              </p>
              <div class="inner-set bg-[#EDFDDB] p-5 border-4 border-[#243c5a] text-sm rounded-lg">
                <p class="max-w-xs">
                  Express Shopify Support is a support service for ecommerce
                  businesses on Shopify. We guarantee to have any issue resolved
                  within 48 hours and 100% satisfaction guaranteed or money
                  refunded. Our mission is to give the best customer experience
                  possible and make sure every customer leaves happy by
                  providing high quality services at an affordable price.
                </p>
                <img
                  class="p-3"
                  src={`${window.origin}/assets/images/icon-smile.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 text-center">
            <div class="sm:p-10 ">
              <img
                class="p-5 md:w-[70%]"
                src={`${window.origin}/assets/images/shopify-logo.svg`}
                alt=""
              />
              <p class="text-[#91d63f] text-center text-2xl my-5 md:w-[80%] ">
                Plan Starts From
                <span class="text-[#ffffff] text-7xl font-semibold">$49</span>
              </p>
              <a
                class="bg-lite-green text-center font-medium text-[#252525] min-w-[100px] py-2 px-5 my-5 rounded "
                href=""
              >
                Fix my Issue
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="lg:bg-hero-why-us bg-cover bg-no-repeat bg-right ">
        <div class="container mx-auto text-center md:text-left flex flex-wrap justify-center items-center md:justify-between">
          <div class="sm:w-full py-10">
            <div>
              <h2 class="text-center font-semibold text-3xl text-[#144645]">
                Why Choose Us?
              </h2>
              <p class="text-center text-md italic py-2">
                Quick guaranteed outcome. With Express Shopify Support, you will
                have more time to focus on what really matters – your business!
              </p>
            </div>
          </div>
          <div class="sm:w-1/2 text-right py-5">
            <img
              class="w-[80%] mx-auto"
              src={`${window.origin}/assets/images/robo-ask.svg`}
              alt=""
            />
          </div>
          <div class="sm:w-1/2 py-5">
            <h2 class="font-semibold text-2xl text-[#144645]">
              We assist with a wide range of customizations
            </h2>
            <p class="py-3 max-w-md">
              Shopify has many great features that can be hard for someone new
              to use. Whether you are looking for new features or enhancements,
              Express Shopify Support can help you as soon as possible. No job
              is too small or too large. We charge you only for the number of
              hours we spend bringing the site to life.
            </p>
            <a
              class="bg-lite-green text-center font-medium text-[#ffffff] min-w-[100px] py-2 px-5 my-7 rounded-full "
              href=""
            >
              Customize Now
            </a>
          </div>

          <div class="sm:w-1/2 py-5 md:pr-10  md:text-right">
            <h2 class="font-semibold text-2xl text-[#144645]">
              Get an instant quote
            </h2>
            <p class="py-3  md:pl-[50px] ">
              It's great to have a support service in place, but it'll be even
              greater if you can get a quote instantly. Our live agents are
              experts in helping small business owners on Shopify with a variety
              of services such as installation, optimization, and theme
              migration.
            </p>
            <a
              class="bg-lite-green text-center font-medium text-[#ffffff] min-w-[100px] py-2 px-5 my-7 rounded-full "
              href=""
            >
              Let's Chat
            </a>
          </div>
          <div class="sm:w-1/2 py-5">
            <img
              class="w-[80%] mx-auto"
              src={`${window.origin}/assets/images/customer-ask.svg`}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
