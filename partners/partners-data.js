/*
 * PARTNER DATA — this is the only file you need to edit to add or change products.
 *
 * Each product:
 *   name      (required) product name
 *   url       (required) link to the product on the partner's site. Your affiliate ref is added automatically.
 *   price     number, e.g. 129.99 (leave out if unknown). Currency symbol is set per partner below.
 *   category  used for the filter buttons, e.g. "Lighting kits"
 *   image     full https image URL, or leave "" to show a brick placeholder. Only use images you have permission to use.
 *   badge     optional small label, e.g. "New", "Bestseller"
 *   note      optional one-line description or your own take
 *
 * banners: pictures that scroll across the top of the page. Put the files in /partners/images/<partner>/ and list them here.
 *           Files that are missing are skipped, and with none the header stays plain black.
 * shopUrl:  leave "" until you have the affiliate link. The Visit button is hidden while it is empty.
 *
 * Products marked  sample: true  are hidden from visitors. Add ?preview=1 to the page address to see them.
 * Delete the sample entries once you have added real products.
 */
window.PARTNERS = {

  lumibricks: {
    name: "Lumibricks",
    tagline: "Display building sets with the lighting built into the design.",
    banners: ["/partners/images/lumibricks/banner-1.jpg","/partners/images/lumibricks/banner-2.jpg","/partners/images/lumibricks/banner-3.jpg","/partners/images/lumibricks/banner-4.jpg"],
    about: [
      "Lumibricks makes all-in-one building sets with integrated lighting, so what you build is ready to switch on and put on the shelf."
    ],
    myTake: "",            // TODO: your own experience with Lumibricks, 1-3 sentences. Hidden while empty.
    shopUrl: "https://www.lumibricks.com/",
    ref: "lktpglzs",       // your affiliate code
    refParam: "ref",
    code: "",              // optional discount code, e.g. "BRICKTASTIC10". Leave "" to hide.
    codeNote: "",          // e.g. "10% off your first order"
    currency: "$",         // symbol shown before prices
    products: [
      { name: "Sample set one (replace me)", url: "https://www.lumibricks.com/", price: 99.99, category: "Sets", image: "", badge: "Sample", note: "Example entry so you can see the layout.", sample: true },
      { name: "Sample set two (replace me)", url: "https://www.lumibricks.com/", price: 149.99, category: "Sets", image: "", note: "Example entry so you can see the layout.", sample: true },
      { name: "Sample accessory (replace me)", url: "https://www.lumibricks.com/", price: 19.99, category: "Accessories", image: "", note: "Example entry so you can see the layout.", sample: true }
    ]
  },

  letbricks: {
    name: "Letbricks",
    tagline: "Kits and accessories for LEGO® fans.",
    banners: ["/partners/images/letbricks/banner-1.jpg","/partners/images/letbricks/banner-2.jpg","/partners/images/letbricks/banner-3.jpg","/partners/images/letbricks/banner-4.jpg"],
    about: [
      "Letbricks makes building-block kits for LEGO fans, including MOC kits, conversion kits, lighting kits and accessories, and display boxes."
    ],
    myTake: "",            // TODO: your own experience with Letbricks, 1-3 sentences. Hidden while empty.
    shopUrl: "https://www.letbricks.com/",
    ref: "hxqfkedi",
    refParam: "ref",
    code: "",
    codeNote: "",
    currency: "$",
    products: [
      { name: "Sample MOC kit (replace me)", url: "https://www.letbricks.com/", price: 79.99, category: "MOC kits", image: "", badge: "Sample", note: "Example entry so you can see the layout.", sample: true },
      { name: "Sample lighting kit (replace me)", url: "https://www.letbricks.com/", price: 34.99, category: "Lighting", image: "", note: "Example entry so you can see the layout.", sample: true },
      { name: "Sample display box (replace me)", url: "https://www.letbricks.com/", price: 24.99, category: "Display", image: "", note: "Example entry so you can see the layout.", sample: true }
    ]
  },
  gameofbricks: {
    name: "Game of Bricks",
    tagline: "Premium light kits for your LEGO® sets.",
    banners: ["/partners/images/gameofbricks/banner-1.jpg","/partners/images/gameofbricks/banner-2.jpg","/partners/images/gameofbricks/banner-3.jpg","/partners/images/gameofbricks/banner-4.jpg"],
    about: [
      "Game of Bricks specialises in set-specific lighting kits that turn LEGO® sets into illuminated display pieces."
    ],
    myTake: "",            // TODO: your own experience with Game of Bricks. Hidden while empty.
    shopUrl: "",           // TODO: add the affiliate link once your account is active
    ref: "",
    refParam: "ref",
    code: "BRICKTASTIC",
    codeNote: "",          // e.g. "10% off". Add the discount amount once you have confirmed it.
    currency: "€",
    products: [
      { name: "Sample light kit (replace me)", url: "", price: 49.99, category: "Light kits", image: "", badge: "Sample", note: "Example entry so you can see the layout.", sample: true },
      { name: "Sample light kit two (replace me)", url: "", price: 69.99, category: "Light kits", image: "", note: "Example entry so you can see the layout.", sample: true }
    ]
  }

};
