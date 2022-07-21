import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-scroll";
import { SuperSEO } from "react-super-seo";

const Contact = () => {
  return (
    <div>
      <SuperSEO
        title="Privacy Policy"
        description="React SEO component with OpenGraph and Twitter Cards support."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: `{${window.origin}/assets/images/seo-img.png}`,
            ogImageAlt: "Express Shopify Support",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: `{${window.origin}/assets/images/seo-img.png}`,
            summaryCardImageAlt: "Express Shopify Support",
          },
        }}
      >
        <meta name="robots" content="noindex, nofollow" />
      </SuperSEO>
      <section class="bg-sandel-clr">
        <Navbar />
        <div className="container py-10">
          <h2 className="font-bold text-2xl text-center py-3 text-[#144645] ">
            Our Privacy Policy
          </h2>
          <p className="text-md pb-5">
            You should read this website privacy policy carefully as it includes
            important information about who we are, how we collect, store, use,
            and share personal information, as well as your rights with regard
            to your personal information and how to contact us.
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Who we are
          </h3>
          <p className="text-md pb-5">
            This website is operated by Pulsebay New Zealand Limited a company
            registered in New Zealand. Our registered office is at 121 Newton
            Road, Eden Terrace, Auckland.{" "}
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Information Collection
          </h3>
          <p className="text-md pb-5">
            We collect personal information about you when you access our
            website, register with us, contact us, send us feedback and purchase
            services via our website. We collect this personal information from
            you either when and if you provide information to us or from your
            social media account if you have used it to register or login in or
            automatically through operating our services . Let’s go over the
            information that we collect.
            <br />
            <span className="italic inline-block py-3">
              Information You Provide to Us
            </span>
            <br />
            <span className="font-medium text-md">
              Examples of information we collect from the information you
              provide us are
            </span>
          </p>
          <ul className="list-disc pl-10 pb-3">
            <li>your name, address and contact details</li>
            <li>account details such as username, login details</li>
            <li>
              payment details through gateway tokens. We do not store credit
              card numbers or bank details as part of our payment process
            </li>
            <li>your website and domain information</li>
            <li>website login details</li>
            <li>details of feedback you provide us</li>
            <li>
              any pre-sales, billing and support communications including
              communication with the chat agent(s)
            </li>
            <li>information on where you found us</li>
          </ul>
          <p className="text-md pb-3 italic inline-block py-3">
            Information collected automatically
          </p>
          <p className="text-md pb-5">
            Some of the information we collect automatically are:
          </p>
          <ul className="list-disc pl-10 pb-3">
            <li>
              log information such as browser type, IP address, location, unique
              device identifiers, language preference, the date and time of
              access, operating system, and mobile network information
            </li>
            <li>
              transactional information such as product details, purchase price,
              and the date and location of the transaction.
            </li>
            <li>
              information from cookies to help us identify you and your device
              and store some information about your preferences or past actions.
              See our Cookie Policy section to learn more about cookies, our use
              of them, when we will ask for your consent before placing them,
              and how to disable them.
            </li>
          </ul>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Information Use
          </h3>
          <p className="text-md pb-5">We use the information collected to </p>
          <ul className="list-disc pl-10 pb-3">
            <li>manage and verify your account</li>
            <li>provides our services to you </li>
            <li>communicate with you</li>
            <li>customise our website and its content to your location</li>
            <li>
              notify you of any changes to our website or to our services that
              may affect you
            </li>
            <li>
              assist in transfers and migrations from other providers to us
            </li>
            <li>prevent fraud</li>
            <li>
              to market our services – you can opt out of marketing
              communication. See our marketing section for more details.
            </li>
          </ul>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Information Sharing
          </h3>
          <p className="text-md pb-5">
            We will never sell your personal information or data to a third
            party
          </p>
          <p className="text-md pb-5">
            However, we may share your personal data with affiliated companies
            or with trusted third parties and service providers who we partner
            with in order to provide you with our services. These services
            include:
          </p>
          <ul className="list-disc pl-10 pb-3">
            <li>processing payments</li>
            <li>providing sales, customer service and technical support</li>
            <li>providing additional tools and software at your request</li>
            <li>
              performing analysis of our services and customers demographics
            </li>
            <li>communicating with you, such as by way of email </li>
            <li>customer relationship management</li>
            <li>
              providing website maintenance & fixing services at your request
            </li>
          </ul>
          <p className="text-md pb-5">
            We only share your personal data as necessary for any third party to
            provide the services as requested or as needed on our behalf. These
            third parties (and any subcontractors) are subject to strict data
            processing terms and conditions and are prohibited from utilising,
            sharing or retaining your personal data for any purpose other than
            as they have been specifically contracted for. We will share
            personal information with law enforcement or other authorities if
            required by applicable law. We will not share your personal
            information with any other third party.
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            How long do we hold your information?
          </h3>
          <p className="text-md pb-5">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements).
            <br /> When we have no ongoing legitimate business need to process
            your personal information, we will either delete or anonymise such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Cookie Policy
          </h3>
          <p className="text-md pb-5">
            Cookies are strings of information that websites store on visitor's
            computers and that each time a visitor revisits the site, the
            computer sends to the website. Cookie is a small text file which is
            placed onto your device when you use our website. Our website uses
            cookies to help us identify you and your device and store some
            information about your preferences or past actions. <br />
            You can choose to set your browser to remove or reject browser
            cookies before using our website, with the drawback that certain
            features of the websites may not function properly without the aid
            of cookies. Express Shopify Support will respond to “do not track”
            signals across and will not track your device.
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Marketing
          </h3>
          <p className="text-md pb-5">
            We would like to send you information about our products and
            services and special offers, which may be of interest to you. Where
            we have your consent or it is in our legitimate interests to do so,
            we may do this by email. We will only ask whether you would like us
            to send you marketing messages when you tick the relevant boxes when
            you register with us for the first time. If you have previously
            agreed to being contacted in this way, you can unsubscribe at any
            time by adjusting your settings.
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Security
          </h3>
          <p className="text-md pb-5">
            While no online service is 100% secure, we work very hard to protect
            information about you against unauthorized access, use, alteration,
            or destruction, and take reasonable measures to do so. We monitor
            our Services for potential vulnerabilities and attacks.
          </p>
          <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
            Request to review, update or delete your data
          </h3>
          <p className="text-md pb-5">
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please send us an email to
            <a className="pl-2" href="mailto:admin@expressshopifysupport.com">
              admin@expressshopifysupport.com
            </a>
            .
          </p>
        </div>
        {/* <div class="container mx-auto p-5">
                    <div class="flex flex-wrap items-center justify-around w-full">
                        <div class="p-5 md:pr-20">
                            <p class="pb-3">This privacy notice for Express Shopify Support (<span class="font-semibold">"Company," "we," "us," or "our"</span>), describes how and why we might collect, store, use, and/or share ("<span class="font-semibold">process</span>") your information when you use our services ("<span class="font-semibold">Servicess</span>"), such as Shopify advice and support.</p>

                            <p class="pb-8"><span class="font-semibold">Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at admin@expressshopifysupport.com</p>

                            <h4 class="pb-3 font-semibold">SUMMARY OF KEY POINTS</h4>

                            <p class="pb-3 font-semibold italic">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>

                            <p class="pb-3"><span class="font-semibold">What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with expressshopifysupport.com and the Services, the choices you make, and the products and features you use.</p>

                            <p class="pb-3"><span class="font-semibold">Do we process any sensitive personal information?</span> We do not process sensitive personal information.</p>

                            <p class="pb-3">Do we receive any information from third parties? We may receive information from public databases, marketing partners, social media platforms, and other outside sources. Click here to learn more.</p>

                            <p class="pb-3">How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.</p>

                            <p class="pb-3">In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Click here to learn more.</p>

                            <p class="pb-3">What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.</p>

                            <p class="pb-3">How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

                            <p class="pb-8">Want to learn more about what __________ does with any information we collect? Click here to review the notice in full.</p>

                            <h4 class="pb-3 font-semibold">TABLE OF CONTENTS</h4>
                            <ol class="list-inside list-decimal pb-8 font-semibold text-blue-900">
                                <li class=""><Link to="toc_1" spy={true} smooth={true}>WHAT INFORMATION DO WE COLLECT?</Link></li>
                                <li><Link to="toc_2" spy={true} smooth={true}>HOW DO WE PROCESS YOUR INFORMATION?</Link></li>
                                <li><Link to="toc_3" spy={true} smooth={true}>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Link></li>
                                <li><Link to="toc_4" spy={true} smooth={true}>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Link></li>
                                <li><Link to="toc_5" spy={true} smooth={true}>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link></li>
                                <li><Link to="toc_6" spy={true} smooth={true}>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</Link></li>
                                <li><Link to="toc_7" spy={true} smooth={true}>HOW LONG DO WE KEEP YOUR INFORMATION?</Link></li>
                                <li><Link to="toc_8" spy={true} smooth={true}>DO WE COLLECT INFORMATION FROM MINORS?</Link></li>
                                <li><Link to="toc_9" spy={true} smooth={true}>WHAT ARE YOUR PRIVACY RIGHTS?</Link></li>
                                <li><Link to="toc_10" spy={true} smooth={true}>CONTROLS FOR DO-NOT-TRACK FEATURES</Link></li>
                                <li><Link to="toc_11" spy={true} smooth={true}>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Link></li>
                                <li><Link to="toc_12" spy={true} smooth={true}>DO WE MAKE UPDATES TO THIS NOTICE?</Link></li>
                                <li><Link to="toc_13" spy={true} smooth={true}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link></li>
                                <li><Link to="toc_14" spy={true} smooth={true}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Link></li>
                            </ol>

                            <h4 class="font-semibold" id="toc_1">1. WHAT INFORMATION DO WE COLLECT?</h4><br />

                            <p>Personal information you disclose to us<br /><br />

                                In Short: We collect personal information that you provide to us.<br /><br />

                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.<br /><br />

                                Sensitive Information. We do not process sensitive information.<br /><br />

                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.<br /><br />

                                Information automatically collected<br /><br />

                                In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.<br /><br />

                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.<br /><br />

                                Like many businesses, we also collect information through cookies and similar technologies.<br /><br />
                            </p>

                            <h4 class="font-semibold" id="toc_2">2. HOW DO WE PROCESS YOUR INFORMATION?</h4><br />

                            In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.<br /><br />

                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:<br /><br />

                            <h4 class="font-semibold" id="toc_3">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h4><br />

                            In Short: We may share information in specific situations described in this section and/or with the following third parties.<br /><br />

                            We may need to share your personal information in the following situations:<br /><br />
                            <ul class="list-inside list-disc pl-10 pb-3">
                                <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                                <li>Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                                <li>Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                            </ul><br /><br />

                            <h4 class="font-semibold" id="toc_4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4><br />

                            In Short: We may use cookies and other tracking technologies to collect and store your information.<br /><br />

                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.<br /><br />

                            <h4 class="font-semibold" id="toc_5">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h4><br />

                            In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.<br /><br />

                            Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.<br /><br />

                            We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.<br /><br />

                            <h4 class="font-semibold" id="toc_6">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h4><br />

                            In Short: We may transfer, store, and process your information in countries other than your own.<br /><br />

                            Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" above), in and other countries.<br /><br />

                            If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.<br /><br />

                            <h4 class="font-semibold" id="toc_7">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h4><br />

                            In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.<br /><br />

                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).<br /><br />

                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.<br /><br />

                            <h4 class="font-semibold" id="toc_8">8. DO WE COLLECT INFORMATION FROM MINORS?</h4><br />

                            In Short: We do not knowingly collect data from or market to children under 18 years of age.<br /><br />

                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at admin@expressshopifysupport.com<br /><br />

                            <h4 class="font-semibold" id="toc_9">9. WHAT ARE YOUR PRIVACY RIGHTS?</h4><br />

                            In Short:  You may review, change, or terminate your account at any time.<br /><br />

                            If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.<br /><br />

                            If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.<br /><br />

                            Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.<br /><br />

                            However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.<br /><br />

                            Account Information<br /><br />

                            If you would at any time like to review or change the information in your account or terminate your account, you can do so via our website or contact us at admin@expressshopifysupport.com
                            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.<br /><br />

                            <h4 class="font-semibold" id="toc_10">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h4><br />

                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.<br /><br />

                            <h4 class="font-semibold" id="toc_11">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h4><br />

                            In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.<br /><br />

                            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.<br /><br />

                            If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).<br /><br />

                            <h4 class="font-semibold" id="toc_12">12. DO WE MAKE UPDATES TO THIS NOTICE?</h4><br />

                            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.<br /><br />

                            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.<br /><br />

                            <h4 class="font-semibold" id="toc_13">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h4><br />

                            If you have questions or comments about this notice, you may email us at admin@expressshopifysupport.com<br /><br />

                            <h4 class="font-semibold" id="toc_14">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h4><br />

                            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please send us an email to admin@expressshopifysupport.com
                        </div>
                    </div>
                </div> */}
      </section>
    </div>
  );
};

export default Contact;
