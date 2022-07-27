import React from "react";
import Navbar from "../../components/navbar/navbar";
import { SuperSEO } from "react-super-seo";
import { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false)
  const [formSuccessMsg, setFormSuccessMsg] = useState(null)

  let handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      name: name,
      email: email,
      mobile: mobile,
      message: message
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
      setMessage("");
    }).catch(err => {
      // console.log(err)
      setFormSuccessMsg(false)
      setMessage("Some error occured");
    })
  };

  return (
    <>
      <SuperSEO
        title="Express Web Support - Get it all done! From just $49"
        description="Express Web Support can help you with anything from building a new store to fixing any issue you’re having. Talk to an expert now."
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
        <section className="bg-sandel-clr App">
          <Navbar />

          <div className="container mx-auto p-5">
            <div className="flex flex-wrap items-center justify-around w-full">
              <div className="w-full lg:w-1/2 p-5 md:pr-20 ">
                <h2 className="text-4xl text-dark-green font-bold">
                  Get In Touch
                </h2>
                <p className="mb-4 text-xl">Express Web Support</p>
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
                      className="bg-[#C0BFBA] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 "
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
                      id="email"
                      className="bg-[#C0BFBA] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 "
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
                      className="bg-[#C0BFBA] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 "
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="text-area"
                      className="sr-only mb-2 text-sm font-medium text-gray-900 "
                    >
                      Message
                    </label>
                    <textarea
                      className="bg-[#C0BFBA] border border-gray-300 w-full text-sm h-20 px-3 py-2 text-gray-700 placeholder-gray-600 focus:border-[#144645] rounded-lg focus:shadow-outline"
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    ></textarea>
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
              <div className="w-full lg:w-1/2 p-5 md:p-10 object-center ">
                <img
                  src={`${window.origin}/assets/images/contact-us.svg`}
                  alt="contactus-img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
