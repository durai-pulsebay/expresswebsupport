import React from 'react';
import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";

const HowCanWeHelpPage = () => {
    let params = useParams();
    return (
        <div>
            <section class="bg-sandel-clr">
                <Navbar />
                <div class="container mx-auto">
                    <div class="flex flex-wrap text-center md:text-left items-center justify-center md:justify-between my-20 ">
                        <div class=" sm:w-1/2 md:pr-20 ">
                            <h1 class="text-[#144645] font-bold text-3xl	 sm:text-4xl  leading-snug ">
                                Need help with your Shopify store? <br />We will fix it </h1>
                            <p class="my-5">Our team of experts are here to help you. Whether you need a little help or extensive support, Express Shopify Support is your ultimate solution.</p>
                            <a class="bg-[#91D63F] text-center font-medium text-[#fff] min-w-[100px] py-2 px-5  my-auto rounded">Fix my
                                Issue</a>
                        </div>
                        <div class=" sm:w-1/2 pt-10 md:pt-0">
                            <img class="md:p-5 text-right" src={`${window.origin}/assets/images/hi-robo.svg`} alt="" />
                        </div>
                    </div>
                    <div class="my-5">
                        <img src={`${window.origin}/assets/images/logo.svg`} alt="" />
                    </div>
                </div>
                <section class="container mx-auto bg-[#59ACA7] rounded-lg">
                    <div class="py-5">
                        <h2 class="text-center p-5 font-semibold text-2xl text-[#ffffff] ">How we can help you!</h2>
                        <div class="flex flex-wrap ">
                            <div class="w-full sm:w-[20%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Header </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[30%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Code Implementation </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[28%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Cart & Check out </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[22%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]" >
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Menu </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[28%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Integration/Feed </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[22%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Integration </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[25%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Banner Design </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[25%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Marketing </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[30%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Theme Customization </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[25%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Product Page</p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[20%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Footer </p>
                                </div>
                            </div>
                            <div class="w-full sm:w-[25%] p-3 ">
                                <div class=" flex flex-wrap items-center text-[#144645] font-medium  p-3  rounded shadow bg-[#ffff]">
                                    <img class="pr-2" src={`${window.origin}/assets/images/icon.svg`} width="50px" alt="" />
                                    <p class="text-lg font-semibold">Custom Work </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="container mx-auto">
                    <div>
                        <h2 class="py-10 font-semibold text-4xl text-[#144645] ">How we deliver <span class="text-[#59ACA7] ">great service with<br /> outstanding value</span></h2>
                    </div>
                    <div class="py-10 sm:flex sm:flex-wrap ">
                        <img class="sm:w-[40%] p-4" src={`${window.origin}/assets/images/customer-ask.svg`} alt="" />
                        <div class=" sm:w-[58%] flex flex-wrap ">
                            <div class="m-5  sm:w-[43%]">
                                <div class="flex flex-wrap items-center"><img src={`${window.origin}/assets/images/Line 4.svg`} width="100px" alt="" />
                                    <h2 class="text-4xl font-semibold text-[#59ACA7]">1</h2>
                                </div>
                                <h2 class="text-xl font-semibold text text-[#144645] ">Get a quote</h2>
                                <p class="text-sm">Our team will figure out what you want from your store, asking questions until they have all the information they need to give you an accurate price. You will be able to pay for the time it takes for us to fix your problem with a secure payment gateway once you sign off on the quote.</p>
                            </div>
                            <div class="m-5 sm:w-[43%]">
                                <div class="flex items-center"><img src={`${window.origin}/assets/images/Line 4.svg`} width="100px" alt="" />
                                    <h2 class="text-4xl font-semibold text-[#59ACA7]">2</h2>
                                </div>
                                <h2 class="text-xl font-semibold text text-[#144645] ">We open a ticket</h2>
                                <p class="text-sm">Once your payment is confirmed, we open a ticket for you. You will receive an email with all the details of your request, and we will address it to one of our experts who specializes in resolving your type of request. If our team needs more information, we will contact you via email.</p>
                            </div>
                            <div class="m-5 sm:w-[60%] ">
                                <div class="flex items-center"><img src={`${window.origin}/assets/images/Line 4.svg`} width="100px" alt="" />
                                    <h2 class="text-4xl font-semibold text-[#59ACA7]">3</h2>
                                </div>
                                <h2 class="text-xl font-semibold text text-[#144645] ">We fix it</h2>
                                <p class="text-sm">We’ll guarantee your satisfaction with our work. If you don’t like the job, we’ll re-do it without charging anything more than what we promised. As for the timeframe for completion, it depends on the complexity of the project but will typically be done within 48 hours and notified via email.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section >
        </div >
    );
}

export default HowCanWeHelpPage;