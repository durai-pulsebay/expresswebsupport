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
            <div class="">
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
              <h3 class="text-2xl pt-2 pb-2 text-center font-semibold text-[#59ACA7]">
                What Happened Next
              </h3>
              <div class="flex flex-wrap">
                <div class="sm:w-[33%] p-5">
                  <h4 class="text-[#144645] font-bold text-xl	 sm:text-1xl">
                    <span>1</span>Take a Ticket
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
                <div class="sm:w-[33%] p-5">
                  <h4 class="text-[#144645] font-bold text-xl	 sm:text-1xl">
                    <span>2</span>Take a Ticket
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
                <div class="sm:w-[33%] p-5">
                  <h4 class="text-[#144645] font-bold text-xl	 sm:text-1xl">
                    <span>3</span>Take a Ticket
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
