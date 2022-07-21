import React from "react";
import Navbar from "../../components/navbar/navbar";
import { SuperSEO } from "react-super-seo";

const Page404 = () => {
  return (
    <>
      <SuperSEO
        title="404"
        description="Express Shopify Support- Instant Quote"
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: `{${window.origin}/assets/images/seo-img.png}`,
            ogImageAlt: "Express Shopify Support",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: `{${window.origin}/assets/images/seo-img.png}`,
            summaryCardImageAlt: "Express Shopify Support",
          },
        }}
      >
        <meta name="robots" content="noindex, nofollow" />
      </SuperSEO>
      <div>
        <section className="bg-sandel-clr">
          <Navbar />
          <div className="container p-10  flex flex-wrap justify-center items-center">
            <div className="w-[50%]">
              <img
                className="w-[70%] mx-auto"
                src={`${window.origin}/assets/images/404-robo.svg`}
              />
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold">
                Oops! Something Went Wrong
              </p>
              <p className="text-[250px] font-bold leading-none text-dark-green">
                404
              </p>
              <a
                className="bg-[#68992D] inline-block  text-center font-medium text-[#fff] min-w-[100px] py-2 px-5 m-5 my-auto rounded "
                href="/"
              >
                Go Home
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page404;
