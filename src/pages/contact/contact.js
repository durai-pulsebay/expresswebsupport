import React from 'react';
import Navbar from "../../components/navbar/navbar";

const Contact = () => {
    return (
        <div>
            <section class="bg-sandel-clr">
                <Navbar />
                <div class="container mx-auto p-5">
                    <div class="flex flex-wrap items-center justify-around w-full">
                        <div class="sm:w-1/2 p-5 md:pr-20 ">
                            <h2 class="text-3xl font-semibold">Get In Touch </h2>
                            <p class="mb-4">Express shopify support</p>
                            <form>
                                <div class="mb-4 ">
                                    <label for="name" class="hidden mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" id="name" class="bg-[#C0BFBA] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 " placeholder="Name" required />
                                </div>
                                <div class="mb-4">
                                    <label for="Mobile" class="hidden mb-2 text-sm font-medium text-gray-900 ">Mobile</label>
                                    <input type="number" id="email" class="bg-[#C0BFBA] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 " placeholder="Mobile" required />
                                </div>
                                <div class="mb-4">

                                    <label for="E-Mail" class="hidden mb-2 text-sm font-medium text-gray-900 ">E-Mail</label>
                                    <input type="email" id="email" class="bg-[#C0BFBA] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#144645] focus:border-[#144645] block w-full p-2.5 " placeholder="E-mail" required />
                                </div>
                                <div class="mb-4">
                                    <label for="text-area" class="hidden mb-2 text-sm font-medium text-gray-900 ">Text
                                        Area</label>
                                    <textarea
                                        class="bg-[#C0BFBA] border border-gray-300 w-full text-sm h-20 px-3 py-2 text-gray-700 placeholder-gray-600 focus:border-[#144645] rounded-lg focus:shadow-outline"
                                        placeholder="Text Area">
                                    </textarea>
                                </div>

                                <button type="submit"
                                    class="bg-dark-green text-[#fff]  hover:bg-[#144645] focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-[#144645] dark:hover:bg-[#144645] dark:focus:ring-[#144645]">Submit</button>
                            </form>
                        </div>
                        <div class="sm:w-1/2 p-5 md:p-10 object-center ">
                            <img src={`${window.origin}/assets/images/contact-us.svg`} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;