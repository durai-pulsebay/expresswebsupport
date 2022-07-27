const pages = {
  "home": {
    title: "Express Shopify Support – Trusted Experts In Shopify Customization",
    description: "Our Shopify experts provide the best Shopify technical help for those who need it. Live chat with an agent now to get an instant quote.",
    thumbnail: "https://expresswebsupport.com/assets/images/seo-img.png"
  },
  "how-can-we-help": {
    title: "Express Shopify Support - Get Instant Help For Your Shopify Site",
    description: "Get your Shopify site customized in less than 48 hours. Just a little help or extensive support, Express Shopify Support is your ultimate solution.",
    thumbnail: "https://expresswebsupport.com/assets/images/seo-img.png"
  },
  "contact": {
    title: "Express Shopify Support - Get it all done! From just $49",
    description: "Express Shopify Support can help you with anything from building a new store to fixing any issue you’re having. Talk to an expert now.",
    thumbnail: "https://expresswebsupport.com/assets/images/seo-img.png"
  },
  "404": {
    title: "Express Shopify Support - 404 Page",
    description: "Express Shopify Support",
    thumbnail: "https://expresswebsupport.com/assets/images/seo-img.png"
  }
}
module.exports.getPageBySlug = slug => (pages[slug] !== undefined) ? pages[slug] : pages["404"];