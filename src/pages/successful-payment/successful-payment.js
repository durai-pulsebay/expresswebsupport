import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-scroll";

const Refund = () => {
  return (
    <div>
      <section class="bg-sandel-clr">
        <Navbar />
        <div class="container mx-auto p-5">
          <div class="flex flex-wrap items-center justify-around w-full">
            <div class="p-5 md:pr-20">
              <h4 class="font-semibold" id="toc_14">
                Successful Payment
              </h4>
              <br />
              <p>Thank you for your payment....</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
