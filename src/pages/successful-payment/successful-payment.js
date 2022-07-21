import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-scroll";

const Refund = () => {
  return (
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
                  {/* <h4 class="text-[#144645] font-bold text-xl	py-3 sm:text-1xl">
                    <span class="bg-pale-green px-3 py-1 mr-3 text-white rounded-3xl">
                      1
                    </span>
                    Take a Ticket
                  </h4> */}
                  <p>
                    We have received your request and a ticket number has been
                    generated. One of our shopify experts will be assigned to
                    your case and will be in touch via email if they have any
                    questions.
                  </p>
                </div>
                {/* <div class="md:w-[33%] p-5">
                  <h4 class="text-[#144645] font-bold text-xl	py-3 sm:text-1xl">
                    <span class="bg-pale-green px-3 py-1 mr-3 text-white rounded-3xl">
                      2
                    </span>
                    Take a Ticket
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
                <div class="md:w-[33%] p-5">
                  <h4 class="text-[#144645] font-bold text-xl	py-3 sm:text-1xl">
                    <span class="bg-pale-green px-3 py-1 mr-3 text-white rounded-3xl">
                      3
                    </span>
                    Take a Ticket
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
