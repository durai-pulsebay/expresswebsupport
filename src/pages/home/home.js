import React from "react";
import Navbar from "../../components/navbar/navbar";
import { SuperSEO } from "react-super-seo";

const Home = () => {
  return (
    <>
      <SuperSEO
        title="Home"
        description="Express Shopify Support- Instant Quote"
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: `{${window.origin}/assets/images/seo-img.png}`,
            ogImageAlt: "Express Shopify Support",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/png",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: `{${window.origin}/assets/images/seo-img.png}`,
            summaryCardImageAlt: "Express Shopify Support",
          },
        }}
      />
      <div>
        <section className="bg-sandel-clr lg:bg-hero-pattern  bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="container mx-auto">
            <div className="text-center py-5 sm:py-5">
              <h1 className="text-[#144645] font-bold text-3xl	 sm:text-5xl leading-tight sm:leading-snug">
                Fastest Shopify Support
                <br />
                In {window.countryName}
                {/* In {params && params.country == 'in' ? 'India' : 'New Zealand'} */}
              </h1>
              <p className="m-4 max-w-4xl text-xl text-center mx-auto italic">
                Express Shopify Support is a team of experts aiming to solve
                your website problems. Get an instant quote for any Shopify
                related design and development.
              </p>
              <a
                className="bg-lite-green inline-block  text-center font-medium text-[#fff] min-w-[100px] py-2 px-5 m-5 my-auto rounded "
                href=""
              >
                Let's Get Started
              </a>
              <div className=" flex w-[75%] flex-wrap items-center justify-around py-5 mx-auto">
                <div className="lg:w-[40%] p-5">
                  <img src={`${window.origin}/assets/images/home-robo.svg`} />
                </div>
                <div className="lg:w-[60%] lg:bg-hero-line bg-no-repeat bg-center bg-auto flex flex-wrap items-center justify-center">
                  <div className="w-[100%] lg:w-[50%] py-3 flex flex-col items-center justify-center">
                    <img
                      src={`${window.origin}/assets/images/chat.svg`}
                      className="w-[40%] bg-sandel-clr"
                    />
                    <h3 className="text-lg py-2 font-medium text-[#144645]">
                      Help Us Understand
                    </h3>
                  </div>
                  <div className="w-[100%] lg:w-[50%] py-3 flex flex-col items-center justify-center">
                    <img
                      src={`${window.origin}/assets/images/quote.svg`}
                      className="w-[40%]"
                    />
                    <h3 className="text-lg bg-sandel-clr py-2 font-medium">
                      Get A Quote
                    </h3>
                  </div>
                  <div className="w-[100%] lg:w-[50%] py-3 flex flex-col items-center justify-center">
                    <img
                      src={`${window.origin}/assets/images/code.svg`}
                      className="w-[40%]"
                    />
                    <h3 className="text-lg bg-sandel-clr py-2 font-medium">
                      Relax While We Take Care Of It
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dark-green py-[50px] px-4">
          <div className="container mx-auto flex flex-wrap justify-center">
            <div className="lg:w-1/2 sm:px-10">
              <div className=" lg:w-3/4 bg-sandel-clr  p-10 rounded-xl ">
                <img
                  className="py-5"
                  src={`${window.origin}/assets/images/shield.png`}
                  alt=""
                  width="100px;"
                />
                <h2 className="text-3xl font-semibold">No Fix, No Fee</h2>
                <p className="py-3 max-w-xs">
                  100% Satisfaction Guaranteed or Money Refunded
                </p>
                <div className="inner-set bg-[#EDFDDB] p-5 border-4 border-[#243c5a] text-sm rounded-lg">
                  <p className="max-w-xs">
                    Express Shopify Support is a support service for ecommerce
                    businesses on Shopify. We guarantee to have any issue
                    resolved within 48 hours and 100% satisfaction guaranteed or
                    money refunded. Our mission is to give the best customer
                    experience possible and make sure every customer leaves
                    happy by providing high quality services at an affordable
                    price.
                  </p>
                  <img
                    className="p-3"
                    src={`${window.origin}/assets/images/icon-smile.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="lg:p-10 ">
                <img
                  className="p-5 md:w-[70%]"
                  src={`${window.origin}/assets/images/shopify-logo.svg`}
                  alt=""
                />
                <p className="text-[#91d63f] text-center text-2xl my-5 md:w-[80%] ">
                  Plan Starts From
                  <span className="text-[#ffffff] text-7xl font-semibold">
                    $49
                  </span>
                </p>
                <a
                  className="bg-lite-green text-center font-medium text-[#252525] min-w-[100px] py-2 px-5 my-5 rounded "
                  href=""
                >
                  Fix my Issue
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:bg-hero-why-us bg-cover bg-no-repeat bg-right ">
          <div className="container mx-auto text-center md:text-left flex flex-wrap justify-center items-center md:justify-between">
            <div className="lg:w-full py-10">
              <div>
                <h2 className="text-center font-bold text-3xl text-[#144645]">
                  Why Choose Us?
                </h2>
                <p className="text-center text-md italic py-2">
                  Quick guaranteed outcome. With Express Shopify Support, you
                  will have more time to focus on what really matters – your
                  business!
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 text-right py-5">
              <img
                className="w-[80%] mx-auto"
                src={`${window.origin}/assets/images/robo-ask.svg`}
                alt=""
              />
            </div>
            <div className="lg:w-1/2 py-5">
              <h2 className="font-semibold text-2xl text-[#144645]">
                We assist with a wide range of customizations
              </h2>
              <p className="py-3 max-w-md">
                Shopify has many great features that can be hard for someone new
                to use. Whether you are looking for new features or
                enhancements, Express Shopify Support can help you as soon as
                possible. No job is too small or too large. We charge you only
                for the number of hours we spend bringing the site to life.
              </p>
              <a
                className="bg-lite-green text-center font-medium text-[#ffffff] min-w-[100px] py-2 px-5 my-7 rounded-full "
                href=""
              >
                Customize Now
              </a>
            </div>
            <div className="lg:w-1/2 py-5 md:pr-10  md:text-right">
              <h2 className="font-semibold text-2xl text-[#144645]">
                Get an instant quote
              </h2>
              <p className="py-3  md:pl-[50px] ">
                It's great to have a support service in place, but it'll be even
                greater if you can get a quote instantly. Our live agents are
                experts in helping small business owners on Shopify with a
                variety of services such as installation, optimization, and
                theme migration.
              </p>
              <a
                className="bg-lite-green text-center font-medium text-[#ffffff] min-w-[100px] py-2 px-5 my-7 rounded-full "
                href=""
              >
                Let's Chat
              </a>
            </div>
            <div className="lg:w-1/2 py-5">
              <img
                className="w-[80%] mx-auto"
                src={`${window.origin}/assets/images/customer-ask.svg`}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
