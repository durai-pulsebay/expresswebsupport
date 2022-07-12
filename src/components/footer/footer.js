import React from 'react'

const Footer = () => {
    return (<div>
        <footer class="mx-auto py-5 flex items-center flex-col bg-footer-black">
            <div>
                <a href="/"><img class="mx-auto py-3 w-[80%]" src="assets/images/white-logo.svg" alt="" /></a>
            </div>
            <div class="pb-5">
                <div class="my-auto py-3  text-[#fff]">
                    <button class="hidden"></button>
                    <ul class="flex py-3">
                        <li class="pr-5"><a class="px-3" href="/">Home</a></li>
                        <li class="pr-5"><a class="px-3" href="what-can-we-fix">What can we fix</a></li>
                        <li class="pr-5"><a class="px-3" href="contact">Contact</a></li>
                        <li class="pr-5"><a class="px-3" href="privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="flex justify-center py-3">
                    <a href="#"><img class="pr-3" src="assets/images/facebook.svg" alt="" /></a>
                    <a href="#"><img class="pr-3" src="assets/images/instagram.svg" alt="" /></a>
                    <a href="#"><img class="pr-3" src="assets/images/Linked-in.svg" alt="" /></a>
                </div>
            </div>
            <div class="container text-center py-3 text-[#ffffff] border-t border-[#FBF7ED] ">
                <div>
                    <p>Copyrights 2022 all rights reserved <span class="font-medium text-[#91D63F]">Experess Shopify
                        Support</span></p>
                </div>

            </div>
        </footer>
    </div>);
}

export default Footer;