import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-scroll";
import { SuperSEO } from "react-super-seo";

const Contact = () => {
  return (
    <>
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
      <div>
        <section class="bg-sandel-clr">
          <Navbar />
          <div className="container ">
            <h2 className="font-bold text-2xl text-center py-3 text-[#144645] ">
              Terms & Conditions
            </h2>
            <p className="text-md pb-5">
              These Terms of Service (“Terms”) describe our commitments to you,
              and your rights and responsibilities when using our services.
              These Terms govern your access to and use of services we provide.{" "}
              <br />
              Please read these Terms carefully before accessing or using our
              Services. By accessing or using any part of our Services, you
              agree to be bound by all of the Terms and all other operating
              rules, policies, and procedures that we may publish from time to
              time. If you don’t agree to these Terms, please don’t use
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              our services.
            </h3>
            <p className="text-md pb-5">
              You also agree that we may automatically change, update, or add on
              to our Services as stated in the Terms, and the Agreement will
              apply to any changes. Please check the applicable Terms every time
              you use our Site so that you understand which Terms apply.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              1. Who’s Who
            </h3>
            <p className="text-md pb-5">
              “You” or “Your” means any individual or entity using our Services.
              If you use our Services on behalf of another person or entity, you
              represent and warrant that you are authorised to accept the
              Agreement on that person’s or entity’s behalf, that by using our
              Services you’re accepting the Agreement on behalf of that person
              or entity, and that if you, or that person or entity, violates the
              Agreement, you and that person or entity agree to be responsible
              to us.
              <br />
              <br />
              “We”, “Us”, “Our” means Pulsebay New Zealand Limited trading as
              Express Shopify Support. We are registered in New Zealand and have
              our registered office at 121 Newton Road, Auckland, New Zealand.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              2. Account Registration
            </h3>
            <p className="text-md pb-5">
              When using our services, you may be required to create an account.
              By creating an account, you agree{" "}
            </p>
            <ul className="pl-5 pb-5">
              <li className="flex ">
                <p className="pr-5">2.1</p>
                <p>
                  to provide us with true, accurate, current and complete
                  information
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.2</p>
                <p>
                  2.3 to have the legal capacity and you agree to comply with
                  the Terms of Use 2.4 that you are not a minor and are over 18
                  years of age
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.3</p>
                <p>
                  to maintain the accuracy of such information and promptly
                  update such registration information as necessary
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.4</p>
                <p>that you are not a minor and are over 18 years of age</p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.5</p>
                <p>
                  that you will not access the Site through automated or
                  non-human means, whether through a bot, script, or otherwise
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.6</p>
                <p>
                  that you will not use the Site for any illegal or unauthorized
                  purpose
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.7</p>
                <p>
                  your use of the Site will not violate any applicable law or
                  regulation;
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.8</p>
                <p>
                  for us to communicate with you about your account and also
                  share more details about what we have to offer (i.e.,
                  marketing). Don’t worry — if you aren’t interested, you can
                  opt out of the marketing communications.
                </p>
              </li>
              <li className="flex ">
                <p className="pr-5">2.9</p>
                <p>
                  that we reserve the right to remove, reclaim, or change a
                  username you select if we determine, in our sole discretion,
                  that such username is inappropriate, obscene, or otherwise
                  objectionable.
                </p>
              </li>
              <li className="flex">
                <p className="pr-3">2.10</p>
                <p>
                  that we may limit your access to our Services until we are
                  able to verify your account information, like your email
                  address.
                </p>
              </li>
            </ul>
            <p className="text-md pb-5">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Site.
            </p>

            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              3. Our Service
            </h3>
            <p className="my-5">
              We provide one-off website fixes and tasks. These fixes and tasks
              will be completed by our expert team for a fixed fee that is
              advertised on our website.
            </p>
            <ul className="pb-5 pl-5">
              <li className="flex">
                <p className="pr-5">3.1 </p>
                <p>
                  Maintenance fix: These bring websites back to their original
                  working state. One-off maintenance fix examples include the
                  following: Malware/Hack Cleanup, Fix PHP Errors, White Screen
                  of Death, Dead Links, Update Core site along with Plugins and
                  Theme.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.2</p>
                <p>
                  Custom task: These include some form of proactive change or
                  revision to a website. A one-off custom task includes the
                  following: speed optimisation, adding a plug in, small visual
                  adjustments, plugin configurations, website migrations.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.3</p>
                <p>
                  Specific exclusions: The following work is explicitly excluded
                  from the One off Website Task service: any website development
                  tasks, any design related tasks, editing functionality of a
                  website, configuration of an external hosting environment,
                  data entry, content writing, link building and closing SQL
                  injection vulnerabilities present in custom code.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.4</p>
                <p>
                  Individual fixed task request: Each individual website fix or
                  task must be submitted as a separate task. If multiple tasks
                  are submitted in a single submission we reserve the right to
                  either reject the order or reassign each individual task or
                  fix to separate orders. You will be charged for each
                  individual website fix or task.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.5</p>
                <p>
                  Time limit: We will normally provide you with a time frame for
                  completion of the work at the time the order is placed and the
                  details of the website fix or task are provided to us. Whilst
                  we endeavour to complete any website fix within 48 hours of
                  accepting the order, we offer no guarantee as to how long it
                  will take us to complete the website fix. We will dedicate a
                  reasonable amount of time required to complete the website
                  fix. However, if we are unable to complete a fix within a
                  reasonable amount of time we reserve the right to cancel your
                  order and fully refund the fee paid for the fix.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.6</p>
                <p>
                  Team member: Wherever possible we attempt to appoint a
                  specific team member to complete a website fix. However, we
                  work as a team and any team member may work on your website
                  fix at any given time
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.7</p>
                <p>
                  Incomplete website fix: There will be occasions where it is
                  not possible to fix the problem, for example where the website
                  is irretrievably broken or where features of your website are
                  incompatible with other features or the hosting environment.
                  Where we are of the reasonably held view that it will not be
                  possible to complete a website fix regardless of the amount of
                  time our experts spend, we will notify you of this and provide
                  you with written confirmation setting out why it has not been
                  possible to complete the website fix.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.8</p>
                <p>
                  Best Effort Service: We will use reasonable skill and care to
                  complete any website fix or task. However, it is not possible
                  to guarantee any website fix or task will be error free. Where
                  errors arise you must notify us within 7 days. If the error is
                  as a direct result of the work undertaken by us we will
                  endeavour to resolve the error within a reasonable period of
                  time. Where it is not possible to fix and error we will refund
                  you for the task, and/or attempt to roll back our changes to a
                  backup.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">3.9</p>
                <p>
                  Completion of Fix: We will notify you via email when the task
                  is completed. You will have a chance to reply back to us with
                  a feedback on the same.
                </p>
              </li>
              <li className="flex">
                <p className="pr-3">3.10</p>
                <p>
                  3rd Parties: Express Shopify Support is not responsible for
                  any work done by third parties on your website, or for any
                  software or plugins that are utilised by you. There may be
                  occasions where actions by third party suppliers, such as
                  website hosts, software and plugin developers, web browsers,
                  email clients, domain name registrars or search engines, will
                  affect Express Shopify Support’s ability to complete a fix or
                  task. In the event of a third party interruption we will not
                  be liable for any delay in completing the fix or task. You
                  will not be entitled to a refund in the event that we are
                  unable to complete a website fix or task as a result of a
                  third party’s action.
                </p>
              </li>
            </ul>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              4. Your Responsibility{" "}
            </h3>
            <ul className="pb-5 pl-5">
              <li className="flex">
                <p className="pr-5">4.1</p>
                <p>
                  You agree to provide us with necessary access and information
                  that we need to complete your support ticket.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">4.2</p>
                <p>
                  You are fully responsible for the content available on your
                  website, and any harm resulting from that content. It is your
                  responsibility to ensure that your website’s content abides by
                  applicable laws and by the Agreement.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">4.3</p>
                <p>
                  We are not responsible for any harm resulting from anyone’s
                  access, use, purchase, or downloading of content, or for any
                  harm resulting from third-party websites. You are responsible
                  for taking the necessary precautions to protect yourself and
                  your computer systems from viruses, worms, Trojan horses, and
                  other harmful or destructive content.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">4.4</p>
                <p>
                  Any content that is for sale through any of our Services is
                  the seller’s sole responsibility, so you must look solely to
                  the seller for any damages that result from your purchase or
                  use of content.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">4.5</p>
                <p>
                  We are not a party to, and will have no responsibility or
                  liability for, any communications, transactions, interactions,
                  or disputes between you and the provider of any content.
                </p>
              </li>
            </ul>
            <p className="text-md pb-5">
              Please note that additional third-party terms and conditions may
              apply to Content you download, copy, purchase, or use.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              5. Price and Payment
            </h3>
            <ul className="pb-5 pl-5">
              <li className="flex">
                <p className="pr-5">5.1</p>
                <p>
                  The price of the service will be the price indicated on the
                  order page when you placed your order. We take all reasonable
                  care to ensure that the price of the service advised to you is
                  correct. Where GST is applicable (based on your location and
                  the services you order) it shall be detailed on the order
                  steps.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">5.2</p>
                <p>
                  You agree to pay all amounts due for services at the time you
                  order them. All amounts are non-refundable unless otherwise
                  stated in section 6 below.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">5.3</p>
                <p>
                  Invoices will be generated at the point of payment. Invoices
                  will be sent to the email address provided by you once the
                  payment has been successfully processed.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">5.4</p>
                <p>
                  If you think an invoice is wrong, please contact us to let us
                  know. We will send you an amended invoice.
                </p>
              </li>
            </ul>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              6. Refund Policy
            </h3>
            <p className="text-md pb-5">
              Any support service you purchase will be subject to our refund
              policy below. <br />
              <br />
              We endeavor to complete any website fix to your satisfaction
              within agreed timeframe with our chat agent. It may sometimes take
              us longer than anticipated. In case of a delay, we will advise you
              of an expected completion time and reason for a delay. If we are
              unable to complete a fix within a reasonable amount of time, we
              reserve the right to cancel your order and fully refund the fee
              fully paid for the fix.
              <br />
              If you are dissatisfied with our service, we will offer to re-work
              on it. If we are unable to fix your issue that is repair and not
              custom development, a full refund will be issued.
              <br />
              If a support request is cancelled before we had an opportunity to
              work on it or you are unable to provide the access we need, you
              will only be eligible for a 50% refund.
              <br />
              If our team have already started working on your request and you
              would like to cancel or not provide us with required access, no
              refund will be provided.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              7. Intellectual Property Rights
            </h3>
            <p className="text-md pb-5">
              Unless otherwise indicated, this site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the site
              and the trademarks, and logos contained therein are owned or
              controlled by us or licensed to us, and are protected by copyright
              and trademark laws. No part of the site nor content may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
              <br />
              Provided that you are eligible to use the site, you are granted a
              limited license to access and use the site and to download or
              print a copy of any portion of the content to which you have
              properly gained access solely for your personal, non-commercial
              use. We reserve all rights not expressly granted to you in and to
              the Site and content.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              8. Prohibited Activities
            </h3>
            <p className="text-md pb-5">
              You may not access or use the site for any purpose other than that
              for which we make the site available. The site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="text-md pb-5">
              As a user of the Site, you agree not to:
            </p>
            <ul className="pl-5 pb-5">
              <li className="flex">
                <p className="pr-5"> 8.1</p>
                <p>
                  Systematically retrieve data or other content from the Site to
                  create or compile, directly or indirectly, a collection,
                  compilation, database, or directory without written permission
                  from us.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.2</p>
                <p>
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.3</p>
                <p>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Site, including features that
                  prevent or restrict the use or copying of any Content or
                  enforce limitations on the use of the Site and/or the Content
                  contained therein.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5"> 8.4</p>
                <p>
                  Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Site.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.5</p>
                <p>
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.6</p>
                <p>
                  Use the Site in a manner inconsistent with any applicable laws
                  or regulations.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5"> 8.7 </p>
                <p>
                  {" "}
                  Engage in unauthorized framing of or linking to the Site.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.8</p>
                <p>
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party’s
                  uninterrupted use and enjoyment of the Site or modifies,
                  impairs, disrupts, alters, or interferes with the use,
                  features, functions, operation, or maintenance of the Site.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.9</p>
                <p>
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, robots, or similar data gathering and extraction
                  tools.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.10</p>
                <p>
                  Delete the copyright or other proprietary rights notice from
                  any Content.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5"> 8.11</p>
                <p>
                  Attempt to impersonate another user or person or use the
                  username of another user.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.12</p>
                <p>
                  Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information
                  collection or transmission mechanism, including without
                  limitation, clear graphics interchange formats (“gifs”), 1×1
                  pixels, web bugs, cookies, or other similar devices (sometimes
                  referred to as “spyware” or “passive collection mechanisms” or
                  “pcms”).
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.13</p>
                <p>
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing any portion of the Site to you.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5"> 8.14</p>
                <p>
                  {" "}
                  Attempt to bypass any measures of the Site designed to prevent
                  or restrict access to the Site, or any portion of the Site.
                </p>
              </li>
              <li className="flex">
                <p className="pr-5">8.15</p>
                <p>
                  {" "}
                  Copy or adapt the Site’s software, including but not limited
                  to Flash, PHP, HTML, JavaScript, or other code.
                </p>
              </li>
            </ul>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              9. Indemnification
            </h3>
            <p className="text-md pb-5">
              You agree to indemnify and hold Express Shopify Support, its
              contractors, their respective directors, officers, employees, and
              agents from and against any and all losses, liabilities, demands,
              damages, costs, claims, and expenses, including attorneys’ fees,
              arising out of or related to your use of our Services, including
              but not limited to your violation of the Agreement or any
              agreement with a provider of third-party services used in
              connection with the Services, Content that you post, and any
              e-commerce activities conducted through your or another user’s
              website.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              10. Feedback
            </h3>
            <p className="text-md pb-5">
              Your feedback, ideas or comments are important to us and we are
              always looking for ways to improve our Services. By sending us
              your comments, ideas and feedback, you consent to our use of them
              without restriction.
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              11. Disclaimer
            </h3>
            <p className="text-md pb-5">
              The site is not tailored to comply with industry-specific
              regulations (Health Insurance Portability and Accountability Act
              (HIPAA), Federal Information Security Management Act (FISMA),
              etc.). So, if your interactions would be subjected to such laws,
              you may not use this Site. You may not use the Site in a way that
              would violate the Gramm-Leach-Bliley Act (GLBA).
            </p>
            <h3 className="font-medium capitalize text-xl pb-2 text-dark-green">
              12. Other
            </h3>
            <p className="text-md pb-5">
              The agreement (together with any other terms we provide that apply
              to any specific Service) constitutes the entire agreement between
              Express Shopify Support and you concerning our Services. If any
              part of the Agreement is unlawful, void, or unenforceable, that
              part is severable from the Agreement, and does not affect the
              validity or enforceability of the rest of the Agreement. A waiver
              by either party of any term or condition of the Agreement or any
              breach thereof, in any one instance, will not waive such term or
              condition or any subsequent breach thereof.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
