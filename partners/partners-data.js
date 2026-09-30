/*
 * PARTNER DATA: this is the only file you need to edit to add or change products.
 *
 * HOW TO ADD A PRODUCT (each partner already has 6 ready-made slots below)
 *   1. Upload the product picture to  /partners/images/<partner>/products/<slug>.jpg
 *      (for example  /partners/images/lumibricks/products/product-1.jpg ). Wide or square, about 800 x 600, under 300 KB.
 *   2. Change  name,  url  (the product page on the partner's shop),  price  and  note  (your description).
 *   3. Delete  sample: true  from that line. The product then shows for visitors.
 *   Products that still say  sample: true  are hidden. Add ?preview=1 to a page address to see them.
 *
 * Product fields
 *   slug      picture file name, without .jpg. The picture is found automatically.
 *   name      product name (required)
 *   url       link to the product on the partner's shop. Your affiliate code is added automatically.
 *   price     a number such as 129.99, or null to hide the price. The currency symbol is set per partner.
 *   category  used for the filter buttons
 *   badge     optional small label, e.g. "New" or "Bestseller"
 *   note      your description, one or two sentences
 *   image     optional. Only needed if the picture is somewhere other than the automatic place.
 *
 * Partner fields
 *   banners   pictures that scroll across the top of the page (files in /partners/images/<partner>/). Missing files are skipped.
 *   shopUrl   the affiliate link. The Visit button is hidden while it is empty.
 *   code      optional discount code, shown with a copy button.
 */
window.PARTNERS = {

  lumibricks: {
    name: "Lumibricks",
    tagline: "Display building sets with the lighting built into the design.",
    banners: ["/partners/images/lumibricks/banner-1.jpg","/partners/images/lumibricks/banner-2.jpg","/partners/images/lumibricks/banner-3.jpg"],
    about: [
      "Lumibricks makes all-in-one building sets with integrated lighting, so what you build is ready to switch on and put on the shelf."
    ],
    myTake: "",            // TODO: your own experience with Lumibricks, 1-3 sentences. Hidden while empty.
    shopUrl: "https://www.lumibricks.com/",
    ref: "lktpglzs",
    refParam: "ref",
    code: "",              // optional discount code, e.g. "BRICKTASTIC10"
    codeNote: "",
    currency: "$",
    products: [
      { slug: "product-1", name: "Product 1 name", url: "https://www.lumibricks.com/", price: null, category: "Sets", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-2", name: "Product 2 name", url: "https://www.lumibricks.com/", price: null, category: "Sets", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-3", name: "Product 3 name", url: "https://www.lumibricks.com/", price: null, category: "Sets", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-4", name: "Product 4 name", url: "https://www.lumibricks.com/", price: null, category: "Accessories", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-5", name: "Product 5 name", url: "https://www.lumibricks.com/", price: null, category: "Accessories", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-6", name: "Product 6 name", url: "https://www.lumibricks.com/", price: null, category: "Accessories", badge: "", note: "Add a short description here.", sample: true }
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
      { slug: "product-1", name: "Product 1 name", url: "https://www.letbricks.com/", price: null, category: "MOC kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-2", name: "Product 2 name", url: "https://www.letbricks.com/", price: null, category: "MOC kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-3", name: "Product 3 name", url: "https://www.letbricks.com/", price: null, category: "Lighting", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-4", name: "Product 4 name", url: "https://www.letbricks.com/", price: null, category: "Lighting", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-5", name: "Product 5 name", url: "https://www.letbricks.com/", price: null, category: "Display", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-6", name: "Product 6 name", url: "https://www.letbricks.com/", price: null, category: "Display", badge: "", note: "Add a short description here.", sample: true }
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
    shopUrl: "https://gameofbricks.eu/?sca_ref=12448920.4G1M6YemPL",
    ref: "12448920.4G1M6YemPL",
    refParam: "sca_ref",   // Game of Bricks uses sca_ref instead of ref
    code: "BRICKTASTIC",
    codeNote: "",          // e.g. "10% off". Add the discount amount once you have confirmed it.
    currency: "€",
    products: [
      { slug: "product-1", name: "Product 1 name", url: "https://gameofbricks.eu/", price: null, category: "Light kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-2", name: "Product 2 name", url: "https://gameofbricks.eu/", price: null, category: "Light kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-3", name: "Product 3 name", url: "https://gameofbricks.eu/", price: null, category: "Light kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-4", name: "Product 4 name", url: "https://gameofbricks.eu/", price: null, category: "Light kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-5", name: "Product 5 name", url: "https://gameofbricks.eu/", price: null, category: "Light kits", badge: "", note: "Add a short description here.", sample: true },
      { slug: "product-6", name: "Product 6 name", url: "https://gameofbricks.eu/", price: null, category: "Light kits", badge: "", note: "Add a short description here.", sample: true }
    ]
  }

};
