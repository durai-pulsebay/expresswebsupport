import React from "react";
import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";
import { SuperSEO } from "react-super-seo";
import { triggerChatButton } from "../../utils/common";
import { useState } from "react";
import axios from "axios";

const HowCanWeHelpPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [formLoading, setFormLoading] = useState(false)
  const [formSuccessMsg, setFormSuccessMsg] = useState(null)



  let handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      name: name,
      email: email,
      mobile: mobile,
      subject: 'Custom-Built Website',
      message: ' '
    }
    setFormLoading(true)
    axios.post(
      "https://apps.expresswebsupport.com/api/send-contact-email", data
    ).then(res => {
      console.log(res)
      setFormLoading(false)
      setFormSuccessMsg(res?.data?.msg)
      setTimeout(() => {
        setFormSuccessMsg(null)
      }, 3000);
      setName("");
      setEmail("");
      setMobileNumber("");
    }).catch(err => {
      // console.log(err)
      setFormSuccessMsg(false)
    })
  };

  return (
    <>
      <SuperSEO
        title="Express Web Support - Get Instant Help For Your Shopify Site"
        description="Get your Shopify site customized in less than 48 hours. Just a little help or extensive support, Express Web Support is your ultimate solution."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: `{${window.origin}/assets/images/seo-img.png}`,
            ogImageAlt: "Express Web Support",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/png",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: `{${window.origin}/assets/images/seo-img.png}`,
            summaryCardImageAlt: "Express Web Support",
          },
        }}
      />
      <div>
        <div className="bg-sandel-clr">
          <Navbar />
          <div className="container mx-auto">
            <div className="flex flex-wrap text-center md:text-left items-center justify-center md:justify-between my-20 ">
              <div className=" lg:w-1/2 md:pr-20 ">
                <h1 className="text-[#144645] font-bold text-3xl	 lg:text-4xl  leading-snug ">
                  Need Help With Your Shopify Store? <br />
                  We Will Fix It{" "}
                </h1>
                <p className="my-5 text-lg">
                  Our team of experts are here to help you. Whether you need a
                  little help or extensive support, Express Web Support is your
                  ultimate solution.
                </p>
                <button
                  className="bg-[#91D63F] hover:bg-[#5DA00D] text-center font-medium text-[#fff] min-w-[100px] py-3 px-7  my-auto rounded"
                  onClick={(e) => {
                    triggerChatButton(e);
                  }}
                >
                  Fix My Issue
                </button>
              </div>
              <div className=" lg:w-1/2 pt-10 md:pt-0">
                <img
                  className="md:p-5 text-right"
                  src={`${window.origin}/assets/images/hi-robo.svg`}
                  alt="express-web-robo"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                      alt="support-icon"
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
                How We Deliver
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
                alt="support-icon"
              />
              <div className=" lg:w-[60%] lg:flex lg:flex-wrap ">
                <div className="p-5 w-[100%] lg:w-[50%]">
                  <div className="flex flex-wrap items-center">
                    <img
                      src={`${window.origin}/assets/images/Line 4.svg`}
                      width="100px"
                      alt="line"
                    />
                    <h2 className="text-4xl p-3 font-semibold text-[#59ACA7]">
                      1
                    </h2>
                  </div>
                  <h2 className="text-xl font-bold text text-[#144645] ">
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
                      alt="line"
                    />
                    <h2 className="text-4xl p-3 font-semibold text-[#59ACA7]">
                      2
                    </h2>
                  </div>
                  <h2 className="text-xl font-bold text text-[#144645] ">
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
                      alt="line"
                    />
                    <h2 className="text-4xl p-3 font-semibold text-[#59ACA7]">
                      3
                    </h2>
                  </div>
                  <h2 className="text-xl font-bold text text-[#144645] ">
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
          <section className="bg-[#59ACA7] pb-10">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-center  items-center">
                <div className="w-[100%] lg:w-[50%] lg:pr-20 py-10">
                  <h2 className="py-5 font-bold text-4xl text-[#144645] capitalize">
                    Would you like a custom-built website?{" "}
                  </h2>
                  <p className="text-white text-lg">
                    We can help you develop a fresh theme that performs well and
                    is SEO-friendly. If you're ready to take your business to
                    the next level, we're here to help.
                  </p>
                </div>
                <div className="w-[100%] lg:w-[40%] mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 ">
                      <label
                        htmlFor="name"
                        className="sr-only mb-2 text-sm font-medium text-gray-900 "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-[#B6FFFB] border border-[#32aca6] text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 "
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="Mobile"
                        className="sr-only mb-2 text-sm font-medium text-gray-900 "
                      >
                        Mobile
                      </label>
                      <input
                        type="number"
                        id="mobile"
                        className="bg-[#B6FFFB] border border-[#32aca6] text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 "
                        value={mobile}
                        placeholder="Mobile Number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="E-Mail"
                        className="sr-only mb-2 text-sm font-medium text-gray-900 "
                      >
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-[#B6FFFB] border border-[#32aca6] text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 "
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      disabled={formLoading}
                      type="submit"
                      className="bg-dark-green text-[#fff]  hover:bg-[#144645]  font-medium rounded-sm text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-[#144645] dark:hover:bg-[#144645] dark:focus:ring-[#144645]"
                    >
                      {formLoading ? "Loading..." : "Submit"}
                    </button>
                  </form>
                  {formSuccessMsg &&
                    <div  >
                      <p>{formSuccessMsg}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HowCanWeHelpPage;
