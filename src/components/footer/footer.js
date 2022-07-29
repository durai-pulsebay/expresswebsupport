import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="mx-auto py-5 flex items-center flex-col bg-footer-black">
        <div>
          <a href="/">
            <img
              src={`${window.origin}/assets/images/f-white-logo.png`}
              className="w-[80%] mx-auto"
            />
          </a>
        </div>
        <div className="pb-5">
          <div className="my-auto py-3  text-[#fff]">
            <button className="hidden"></button>
            <ul className="lg:flex py-3 text-center">
              <li className="pb-3 lg:pb-0 lg:pr-5">
                <a
                  className="px-3 hover:text-[#91D63F]"
                  href={`${window.origin}/${window.countryCode}/`}
                >
                  Home
                </a>
              </li>
              <li className="pb-3 lg:pb-0 lg:pr-5">
                <a
                  className="px-3 hover:text-[#91D63F]"
                  href={`${window.origin}/${window.countryCode}/how-can-we-help`}
                >
                  How Can We help
                </a>
              </li>
              <li className="pb-3 lg:pb-0 lg:pr-5">
                <a
                  className="px-3 hover:text-[#91D63F]"
                  href={`${window.origin}/${window.countryCode}/contact`}
                >
                  Contact
                </a>
              </li>
              <li className="pb-3 lg:pb-0 lg:pr-5">
                <a
                  className="px-3 hover:text-[#91D63F]"
                  href={`${window.origin}/${window.countryCode}/privacy-policy`}
                >
                  Privacy Policy
                </a>
              </li>
              <li className=" lg:pr-5">
                <a
                  className="px-3 hover:text-[#91D63F]"
                  href={`${window.origin}/${window.countryCode}/terms-and-conditions`}
                >
                  Terms and Conditions
                </a>
              </li>
              {/* <li className="pr-5">
                <a
                  className="px-3"
                  href={`${window.origin}/${window.countryCode}/refund-policy`}
                >
                  Refund Policy
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div className="flex justify-center py-3">
            <a href="#">
              <img
                className="pr-3"
                src={`${window.origin}/assets/images/facebook.svg`}
                alt=""
              />
            </a>
            <a href="#">
              <img className="pr-3" src="assets/images/instagram.svg" alt="" />
            </a>
            <a href="#">
              <img className="pr-3" src="assets/images/Linked-in.svg" alt="" />
            </a>
          </div> */}
        </div>
        <div className="container  text-center py-3 text-[#ffffff] border-t border-[#FBF7ED] ">
          <div className="flex flex-wrap justify-center lg:justify-between items-center">
            <div className="p-3 lg:p-0">
              <a href="https://www.facebook.com/expressweb/" target="_blank">
                <img
                  className="pr-3 w-[80%]"
                  src={`${window.origin}/assets/images/facebook.svg`}
                  alt=""
                />
              </a>
            </div>
            <p>
              Copyrights © {year} All Rights Reserved
              <span className="font-medium text-[#91D63F]">
                <a href="https://expresswebsupport.com/">
                  {" "}
                  Express Web Support
                </a>
              </span>
            </p>
            <div></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
