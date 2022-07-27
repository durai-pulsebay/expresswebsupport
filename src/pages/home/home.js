import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Helmet } from "react-helmet";
import { SuperSEO } from "react-super-seo";
import price from "../../data/price.json";

const Home = () => {
  const priceWithCurrencyCode =
    window?.countryCode !== undefined
      ? price[window?.countryCode]
        ? price[window?.countryCode]?.symbol === true
          ? `${price[window?.countryCode]?.currencyCode}${
              price[window?.countryCode]?.amount
            }`
          : price[window?.countryCode]?.amount +
            `<span class="text-3xl">` +
            price[window?.countryCode]?.currencyCode +
            `</span>`
        : `${price?.us?.amount} ${price?.us?.currencyCode}`
      : "";
  function triggerChatButton(e) {
    e.preventDefault();
    const chatButtonId = document.querySelector('[id*="yii693dr"]').id;
    document.getElementById(chatButtonId).click();
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Express Web Support – Trusted Experts In Shopify Customization
        </title>
        <meta
          name="description"
          content="Our Shopify experts provide the best Shopify technical help for those who need it. Live chat with an agent now to get an instant quote."
        />
        <meta
          property="og:title"
          content="Express Web Support – Trusted Experts In Shopify Customization"
        />
        <meta
          property="og:description"
          content="Our Shopify experts provide the best Shopify technical help for those who need it. Live chat with an agent now to get an instant quote."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${window?.origin}/assets/images/seo-img.png`}
        />
        <meta
          property="og:image:url"
          content={`${window?.origin}/assets/images/seo-img.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Express Web Support" />
        <meta property="og:url" content={window?.origin} />
        <meta property="og:site_name" content="Express Web Support" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      {/* <SuperSEO
        title="Express Web Support – Trusted Experts In Shopify Customization"
        description="Our Shopify experts provide the best Shopify technical help for those who need it. Live chat with an agent now to get an instant quote."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: `${window?.origin}/assets/images/seo-img.png`,
            ogImageAlt: "Express Web Support",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/png",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: `${window?.origin}/assets/images/seo-img.png`,
            summaryCardImageAlt: "Express Web Support",
          },
        }}
      /> */}
      <div>
        <section className="bg-sandel-clr lg:bg-hero-pattern  bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="container mx-auto">
            <div className="text-center py-5 sm:py-5">
              <h1 className="text-[#144645] font-bold text-3xl	 sm:text-5xl leading-tight sm:leading-snug">
                Fastest Shopify Support
                <br />
                In {window?.countryName}
                {/* In {params && params.country == 'in' ? 'India' : 'New Zealand'} */}
              </h1>
              <p className="m-4 max-w-4xl text-xl text-center mx-auto italic">
                Express Web Support is a team of experts aiming to solve your
                website problems. Get an instant quote for any Shopify related
                design and development.
              </p>
              <button
                className="bg-[#68992D] hover:bg-[#86c935] inline-block  text-center font-medium text-[#fff] min-w-[100px] py-2 px-5 m-5 my-auto rounded "
                onClick={(e) => {
                  triggerChatButton(e);
                }}
              >
                Let's Get Started
              </button>
              <div className=" flex w-[75%] flex-wrap items-center justify-around py-5 mx-auto">
                <div className="lg:w-[40%] p-5">
                  <img
                    src={`${window.origin}/assets/images/home-robo.svg`}
                    alt="Shopify Support"
                  />
                </div>
                <div className="lg:w-[60%] lg:bg-hero-line bg-no-repeat bg-center bg-auto flex flex-wrap items-center justify-center">
                  <div className="w-[100%] lg:w-[50%] py-3 flex flex-col items-center justify-center">
                    <img
                      src={`${window.origin}/assets/images/chat.svg`}
                      alt="chat-icon"
                      className="w-[40%] bg-sandel-clr"
                    />
                    <h3 className="text-lg py-2 font-medium text-[#144645]">
                      Help Us Understand
                    </h3>
                  </div>
                  <div className="w-[100%] lg :w-[50%] py-3 flex flex-col items-center justify-center">
                    <img
                      src={`${window.origin}/assets/images/quote.svg`}
                      alt="quote-icon"
                      className="w-[40%]"
                    />
                    <h3 className="text-lg bg-sandel-clr py-2 font-medium">
                      Get A Quote
                    </h3>
                  </div>
                  <div className="w-[100%] lg:w-[50%] py-3 flex flex-col items-center justify-center">
                    <img
                      src={`${window.origin}/assets/images/code.svg`}
                      alt="code-icon"
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
                  alt="shield-icon"
                  width="100px;"
                />
                <h2 className="text-3xl font-bold text-dark-green">
                  No Fix, No Fee
                </h2>
                <p className="py-3 text-xl max-w-xs">
                  100% Satisfaction Guaranteed or Money Refunded
                </p>
                <div className="inner-set bg-[#EDFDDB] p-5 border-4 border-[#243c5a] text-sm rounded-lg">
                  <p className="max-w-xs">
                    Express Web Support is a support service for ecommerce
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
                    alt="smile-icon"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center">
              <div className="lg:p-10 ">
                <img
                  className="p-5 md:w-[70%]"
                  src={`${window.origin}/assets/images/shopify-logo.svg`}
                  alt="shopify-logo"
                />
                <p className="text-[#91d63f] text-center text-2xl  my-5 md:w-[80%] ">
                  Price Starts From&nbsp;
                  <span
                    className="text-[#ffffff] text-7xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: priceWithCurrencyCode }}
                  />
                </p>
                <button
                  className="inline-block bg-lite-green hover:bg-[#a5f247]  text-center font-medium text-[#252525] min-w-[100px] py-2 px-5 rounded"
                  onClick={(e) => {
                    triggerChatButton(e);
                  }}
                >
                  Fix My Issue
                </button>
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
                  Quick guaranteed outcome. With Express Web Support, you will
                  have more time to focus on what really matters – your
                  business!
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 text-right py-5">
              <img
                className="w-[80%] mx-auto"
                src={`${window?.origin}/assets/images/robo-ask.svg`}
                alt="Shopify Support"
              />
            </div>
            <div className="lg:w-1/2 py-5">
              <h2 className="font-semibold capitalize text-2xl text-[#144645]">
                We Assist with a wide range of customizations
              </h2>
              <p className="py-3 max-w-md">
                Shopify has many great features that can be hard for someone new
                to use. Whether you are looking for new features or
                enhancements, Express Web Support can help you as soon as
                possible. No job is too small or too large. We charge you only
                for the number of hours we spend bringing the site to life.
              </p>
              <button
                className="bg-lite-green hover:bg-[#5DA00D] inline-block text-center font-medium text-[#ffffff] min-w-[100px] py-2 px-10 my-2 rounded-full "
                onClick={(e) => {
                  triggerChatButton(e);
                }}
              >
                Customize Now
              </button>
            </div>
            <div className="lg:w-1/2 py-5 md:pr-10  md:text-right">
              <h2 className="font-semibold capitalize text-2xl text-[#144645]">
                Get an instant quote
              </h2>
              <p className="py-3  md:pl-[50px] ">
                It's great to have a support service in place, but it'll be even
                greater if you can get a quote instantly. With us, there is no
                fancy contracts or cheesy conversations! Just talk to the
                experts and we'll get the job done. It's that easy. We charge
                you by the hour, which we will quote you immediately.
              </p>
              <button
                className="bg-lite-green hover:bg-[#5DA00D] inline-block text-center font-medium text-[#ffffff] min-w-[100px] py-2 px-10 my-2 rounded-full "
                onClick={(e) => {
                  triggerChatButton(e);
                }}
              >
                Let's Chat
              </button>
            </div>
            <div className="lg:w-1/2 py-5">
              <img
                className="w-[80%] mx-auto"
                src={`${window?.origin}/assets/images/customer-ask.svg`}
                alt="Shopify Support"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
