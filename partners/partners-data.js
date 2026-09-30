/*
 * PARTNER DATA: this is the only file you need to edit to add or change products.
 *
 * HOW TO ADD A PRODUCT (each partner already has 6 ready-made slots below)
 *   1. Upload the product picture to  /partners/images/<partner>/products/<slug>.jpg
 *      (for example  /partners/images/lumibricks/products/product-1.jpg ). Square (or close to it), about 800 x 800, under 300 KB.
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
 *   myTake    optional "Our take" box with your own words about the partner. Hidden while empty.
 *   banners   pictures that scroll across the top of the page (files in /partners/images/<partner>/). Missing files are skipped.
 *   shopUrl   the affiliate link. The Visit button is hidden while it is empty.
 *   code      optional discount code, shown with a copy button.
 */
window.PARTNERS = {

  lumibricks: {
    name: "Lumibricks",
    tagline: "Display building sets with the lighting built into the design.",
    banners: ["/partners/images/lumibricks/banner-1.jpg","/partners/images/lumibricks/banner-2.jpg","/partners/images/lumibricks/banner-3.jpg","/partners/images/lumibricks/banner-4.jpg"],
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
    myTake: "",            // TODO: your own experience with Letbricks, 1-3 sentences. Hidden while empty.
    shopUrl: "https://www.letbricks.com/",
    extraLink: { label: "Shop the Halloween collection", url: "https://www.letbricks.com/product-category/best-gifts/halloween/" },   // second header button. Delete this line after the season.
    ref: "hxqfkedi",
    refParam: "ref",
    code: "Halloween15",
    codeNote: "Halloween offer",   // Delete the code and this note after the season.
    currency: "US$",
    products: [
      { slug: "product-1", name: "Big Boy Train Halloween Edition (Union Pacific 4014 Big Boy)", url: "https://www.letbricks.com/product/moc-19554-union-pacific-4014-big-boy/?ref=hxqfkedi", price: 264.99, category: "Halloween", badge: "", note: "The Star of Halloween. MOC-89126, 3200+ pieces, from designer Morningstrummer." },
      { slug: "product-2", name: "Raven Bird Building Blocks Set", url: "https://www.letbricks.com/product/moc-217187-raven-bird-building-blocks-set-357pcs-by-skarbam/?ref=hxqfkedi", price: 32.99, category: "Halloween", badge: "", note: "The Mysterious Guardian. MOC-217187, 357 pieces, by designer Skarbam." },
      { slug: "product-3", name: "Medieval Haunted Cemetery", url: "https://www.letbricks.com/product/moc-118177-medieval-haunted-cemetery/?ref=hxqfkedi", price: 169.99, category: "Halloween", badge: "", note: "Spooky Atmosphere. MOC-118177, 2025 pieces." },
      { slug: "product-4", name: "Baba Yaga’s Hut", url: "https://www.letbricks.com/product/baba-yagas-hut-model1464pcs/?ref=hxqfkedi", price: 75.99, category: "Halloween", badge: "", note: "The Witch’s Legend. Baba Yaga’s Hut model, 1464 pieces." },
      { slug: "product-5", name: "Necropolis", url: "https://www.letbricks.com/product/moc-214995-necropolis-building-blocks-set-2272pcs-by-suoppu7/?ref=hxqfkedi", price: 170.99, category: "Halloween", badge: "", note: "City of the Dead. MOC-214995, 2272 pieces." },
      { slug: "product-6", name: "Medieval Dark Magic Mountain", url: "https://www.letbricks.com/product/moc-233504-ucs-dol-guldur-complete-bundle-medieval-dark-magic-mountain-building-blocks-11441pcs-by-legomocloc/?ref=hxqfkedi", price: 863.99, category: "Halloween", badge: "", note: "The Epic Masterpiece. MOC-233504, 11,441 pieces." }
    ]
  },

  gameofbricks: {
    name: "Game of Bricks",
    tagline: "Premium light kits for your LEGO® sets.",
    banners: ["/partners/images/gameofbricks/banner-1.jpg","/partners/images/gameofbricks/banner-2.jpg","/partners/images/gameofbricks/banner-3.jpg","/partners/images/gameofbricks/banner-4.jpg"],
    myTake: "",            // TODO: your own experience with Game of Bricks. Hidden while empty.
    shopUrl: "https://gameofbricks.eu/?sca_ref=12448920.4G1M6YemPL",
    ref: "12448920.4G1M6YemPL",
    refParam: "sca_ref",   // Game of Bricks uses sca_ref instead of ref
    code: "BRICKTASTIC",
    codeNote: "20% off",
    currency: "€",
    products: [
      { slug: "product-1", name: "All Lights", url: "https://gameofbricks.eu/collections/lego-light-kits?sca_ref=12448920.4G1M6YemPL", price: null, category: "Light kits", badge: "", note: "All light kits. 763 kits." },
      { slug: "product-2", name: "Franchise Lights", url: "https://gameofbricks.eu/collections/lego-themes-light-kits?sca_ref=12448920.4G1M6YemPL", price: null, category: "Light kits", badge: "", note: "Light kits for LEGO® themes and franchises. 309 kits." },
      { slug: "product-3", name: "Vehicle Lights", url: "https://gameofbricks.eu/collections/lego-cars-and-trucks-light-kits?sca_ref=12448920.4G1M6YemPL", price: null, category: "Light kits", badge: "", note: "Light kits for cars and trucks. 284 kits." },
      { slug: "product-4", name: "Building Lights", url: "https://gameofbricks.eu/collections/lego-buildings-light-kits?sca_ref=12448920.4G1M6YemPL", price: null, category: "Light kits", badge: "", note: "Light kits for buildings. 266 kits." },
      { slug: "product-5", name: "Custom Creations", url: "https://gameofbricks.eu/collections/lego-light-kits-accessories?sca_ref=12448920.4G1M6YemPL", price: null, category: "Accessories", badge: "", note: "Lighting parts for your own builds. 47 parts." },
      { slug: "product-6", name: "LED Nameplates", url: "https://gameofbricks.eu/collections/led-nameplates-for-lego?sca_ref=12448920.4G1M6YemPL", price: null, category: "Accessories", badge: "", note: "Personalised LED nameplates for LEGO® displays." }
    ]
  }

};
