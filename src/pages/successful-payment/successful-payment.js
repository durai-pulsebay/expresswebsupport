import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-scroll";
import { SuperSEO } from "react-super-seo";

const Refund = () => {
  return (
    <>
      <SuperSEO
        title="Successful payment"
        description="Express Web Support- Instant Quote"
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: `{${window.origin}/assets/images/seo-img.png}`,
            ogImageAlt: "Express Web Support",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: `{${window.origin}/assets/images/seo-img.png}`,
            summaryCardImageAlt: "Express Web Support",
          },
        }}
      >
        <meta name="robots" content="noindex, nofollow" />
      </SuperSEO>
      <div>
        <section class="bg-sandel-clr">
          <Navbar />
          <div class="container mx-auto p-5">
            <div class="flex flex-wrap items-center justify-center w-full">
              <div class="p-3">
                <div class="align-center text-right ">
                  <img
                    class="w-[50%] mx-auto"
                    src={`${window.origin}/assets/images/success.svg`}
                    alt=""
                  />
                </div>
                <h2 class="text-[#144645] pt-2 pb-2 font-bold text-2xl	 sm:text-3xl">
                  Payment Successful!
                </h2>
              </div>
              <div class="p-5">
                <h3 class="text-2xl pt-2 pb-2 text-center  font-bold text-[#59ACA7]">
                  What Happens Next?
                </h3>
                <div class="flex flex-wrap text-center">
                  <div class=" p-5">
                    <p>
                      We have received your request and a ticket number has been
                      generated. One of our shopify experts will be assigned to
                      your case and will be in touch via email if they have any
                      questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Refund;
