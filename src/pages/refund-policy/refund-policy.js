import React from 'react';
import Navbar from "../../components/navbar/navbar";
import { Link } from 'react-scroll';

const Refund = () => {
    return (
        <div>
            <section class="bg-sandel-clr">
                <Navbar />
                <div class="container mx-auto p-5">
                    <div class="flex flex-wrap items-center justify-around w-full">
                        <div class="p-5 md:pr-20">
                            <h4 class="font-semibold" id="toc_14">Refund Policy</h4><br />
                            <p>
                                Please note that any support service you purchase will be subject to our refund policy below. We firmly believe in and stand behind our service 100%. We will offer to work until you are satisfied however, we understand that it cannot work perfectly for everyone all of the time. If we are unable to fix your issue that is repair and not custom development, and have given up, a full refund will be issued.<br /><br />

                                However, if you decide to cancel your support request before we have an opportunity to work on it and determine we cannot fix it or you are unable to provide the access we need, there will be only a refund of 50% what was paid to us.<br /><br />

                                The reason for this is that we do have operating costs that are incurred when a service is purchased and submitted and in many cases the agent has already completed a portion of the work.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Refund;