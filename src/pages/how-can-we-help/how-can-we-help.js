import React from "react";
import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";
import { SuperSEO } from "react-super-seo";

const HowCanWeHelpPage = () => {
  let params = useParams();
  return (
    <>
      <SuperSEO
        title="How Can We Help"
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
        <section className="bg-sandel-clr">
          <Navbar />
          <div className="container mx-auto">
            <div className="flex flex-wrap text-center md:text-left items-center justify-center md:justify-between my-20 ">
              <div className=" lg:w-1/2 md:pr-20 ">
                <h1 className="text-[#144645] font-bold text-3xl	 lg:text-4xl  leading-snug ">
                  Need Help With Your Shopify Store? <br />
                  We Will Fix It{" "}
                </h1>
                <p className="my-5">
                  Our team of experts are here to help you. Whether you need a
                  little help or extensive support, Express Shopify Support is
                  your ultimate solution.
                </p>
                <a className="bg-[#91D63F] text-center font-medium text-[#fff] min-w-[100px] py-2 px-5  my-auto rounded">
                  Fix my Issue
                </a>
              </div>
              <div className=" lg:w-1/2 pt-10 md:pt-0">
                <img
                  className="md:p-5 text-right"
                  src={`${window.origin}/assets/images/hi-robo.svg`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <section className="container mx-auto bg-[#59ACA7] rounded-lg">
            <div className="py-5">
              <h2 className="text-center p-5 font-bold text-2xl text-[#ffffff] ">
                How We Can Help You!
              </h2>
              <div className="flex flex-wrap ">
                <div className="w-full lg:w-[20%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Header </p>
                  </div>
                </div>
                <div className="w-full lg:w-[30%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">
                      Code Implementation{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[28%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Cart & Check out </p>
                  </div>
                </div>
                <div className="w-full lg:w-[22%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Menu </p>
                  </div>
                </div>
                <div className="w-full lg:w-[28%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Integration/Feed </p>
                  </div>
                </div>
                <div className="w-full lg:w-[22%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Integration </p>
                  </div>
                </div>
                <div className="w-full lg:w-[25%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Banner Design </p>
                  </div>
                </div>
                <div className="w-full lg:w-[25%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Marketing </p>
                  </div>
                </div>
                <div className="w-full lg:w-[30%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">
                      Theme Customization{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[25%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Product Page</p>
                  </div>
                </div>
                <div className="w-full lg:w-[20%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Footer </p>
                  </div>
                </div>
                <div className="w-full lg:w-[25%] p-3 ">
                  <div className=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                    <img
                      className="pr-2"
                      src={`${window.origin}/assets/images/icon.svg`}
                      width="50px"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Custom Work </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto">
            <div>
              <h2 className="py-10 font-bold text-4xl text-[#144645] ">
                How We Deliver{" "}
                <span className="text-[#59ACA7] ">
                  Great Service With
                  <br /> Outstanding Value
                </span>
              </h2>
            </div>
            <div className="py-10 lg:flex lg:flex-wrap ">
              <img
                className="lg:w-[40%] p-4"
                src={`${window.origin}/assets/images/customer-ask.svg`}
                alt=""
              />
              <div className=" lg:w-[60%] lg:flex lg:flex-wrap ">
                <div className="p-5 w-[100%] lg:w-[50%]">
                  <div className="flex flex-wrap items-center">
                    <img
                      src={`${window.origin}/assets/images/Line 4.svg`}
                      width="100px"
                      alt=""
                    />
                    <h2 className="text-4xl p-3 font-semibold text-[#59ACA7]">
                      1
                    </h2>
                  </div>
                  <h2 className="text-xl font-semibold text text-[#144645] ">
                    Get A Quote
                  </h2>
                  <p className="text-md">
                    Our team will figure out what you want from your store,
                    asking questions until they have all the information they
                    need to give you an accurate price. You will be able to pay
                    for the time it takes for us to fix your problem with a
                    secure payment gateway once you sign off on the quote.
                  </p>
                </div>
                <div className="p-5 w-[100%] lg:w-[50%]">
                  <div className="flex items-center">
                    <img
                      src={`${window.origin}/assets/images/Line 4.svg`}
                      width="100px"
                      alt=""
                    />
                    <h2 className="text-4xl p-3 font-semibold text-[#59ACA7]">
                      2
                    </h2>
                  </div>
                  <h2 className="text-xl font-semibold text text-[#144645] ">
                    We Open A Ticket
                  </h2>
                  <p className="text-md">
                    Once your payment is confirmed, we open a ticket for you.
                    You will receive an email with all the details of your
                    request, and we will address it to one of our experts who
                    specializes in resolving your type of request. If our team
                    needs more information, we will contact you via email.
                  </p>
                </div>
                <div className="p-5 w-[100%] lg:w-[60%] ">
                  <div className="flex items-center">
                    <img
                      src={`${window.origin}/assets/images/Line 4.svg`}
                      width="100px"
                      alt=""
                    />
                    <h2 className="text-4xl p-3 font-semibold text-[#59ACA7]">
                      3
                    </h2>
                  </div>
                  <h2 className="text-xl font-semibold text text-[#144645] ">
                    We Fix It
                  </h2>
                  <p className="text-md ">
                    We’ll guarantee your satisfaction with our work. If you
                    don’t like the job, we’ll re-do it without charging anything
                    more than what we promised. As for the timeframe for
                    completion, it depends on the complexity of the project but
                    will typically be done within 48 hours and notified via
                    email.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default HowCanWeHelpPage;
