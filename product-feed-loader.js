/**
 * ============================================================
 * Bricktastic Builds – Product Feed Loader v1.0
 * ============================================================
 * Drop this file in your site root alongside products.json
 * Add <script src="product-feed-loader.js"></script> to index.html
 *
 * What this does:
 *  - Loads products.json automatically
 *  - Renders shop cards dynamically (replaces hardcoded HTML)
 *  - Populates "Shop This Post" cards in blog posts by product ID
 *  - Generates YouTube video description text with affiliate links
 *  - Ready to swap in Rakuten XML feed data when approved
 * ============================================================
 */

(function () {
  'use strict';

  // ── Config ────────────────────────────────────────────────
  const FEED_URL = './products.json';          // path to your feed
  const LEGO_PIXEL = (offerId) =>
    `<img border="0" width="1" height="1" src="https://ad.linksynergy.com/fs-bin/show?id=ht%2azY%2aRuBhQ&bids=${offerId}&type=2&subid=0" alt="">`;

  // ── State ─────────────────────────────────────────────────
  let _products = [];
  let _loaded   = false;

  // ── Fetch the feed ────────────────────────────────────────
  async function loadFeed() {
    try {
      const res  = await fetch(FEED_URL + '?v=' + Date.now());
      const data = await res.json();
      _products  = data.products || [];
      _loaded    = true;
      console.log(`[BB Feed] Loaded ${_products.length} products`);
      onFeedLoaded();
    } catch (err) {
      console.warn('[BB Feed] Could not load products.json:', err);
    }
  }

  // ── Called once feed is ready ─────────────────────────────
  function onFeedLoaded() {
    renderShopCards();
    renderBlogShopSections();
    exposeAPI();
  }

  // ── Helpers ───────────────────────────────────────────────
  function getProduct(id) {
    return _products.find(p => p.id === id) || null;
  }

  function getByCategory(cat) {
    if (cat === 'all') return _products;
    return _products.filter(p => p.category.includes(cat));
  }

  function getByTag(tag) {
    return _products.filter(p => p.tags && p.tags.includes(tag));
  }

  function getFeatured() {
    return _products.filter(p => p.featured);
  }

  // ── Build a shop card element ─────────────────────────────
  function buildShopCard(product) {
    const div = document.createElement('div');
    div.className = 'pc';
    div.setAttribute('data-cat', product.category.join(' '));
    div.setAttribute('data-product-id', product.id);

    const primaryUrl = product.lego_url || product.buy_url || product.amazon_url || '#';
    const isOwn      = !!product.buy_url && !product.lego_url;
    const btnLabel   = isOwn
      ? (product.buy_label || '🛒 Buy Now')
      : '🛒 Buy on LEGO.com';
    const btnClass   = isOwn ? 'buy-btn own' : 'buy-btn lego';

    const piecesLine = product.pieces
      ? `<span style="font-size:11px;color:#888">${product.pieces.toLocaleString()} pieces</span>`
      : `<span style="font-size:11px;color:#888">Check price →</span>`;

    div.innerHTML = `
      <div style="width:100%;aspect-ratio:1;overflow:hidden;background:#f7f5f0;display:flex;align-items:center;justify-content:center">
        <img src="${product.image}" alt="${product.name}"
          style="width:100%;height:100%;object-fit:contain;padding:12px"
          loading="lazy">
      </div>
      <div style="padding:14px">
        <div style="font-weight:900;font-size:13px;line-height:1.35;margin-bottom:6px;color:var(--black)">
          ${product.name}
        </div>
        ${piecesLine}
        <a href="${primaryUrl}" target="_blank" rel="nofollow sponsored"
          class="${btnClass}"
          style="display:block;margin-top:10px;padding:9px 12px;background:var(--red);color:#fff;
                 font-family:'Boogaloo',cursive;font-size:14px;text-align:center;
                 border-radius:6px;text-decoration:none;transition:background .15s"
          onmouseover="this.style.background='#b8000a'"
          onmouseout="this.style.background='var(--red)'">
          ${btnLabel}
        </a>
        ${product.amazon_url
          ? `<a href="${product.amazon_url}" target="_blank" rel="nofollow sponsored"
              style="display:block;margin-top:6px;padding:7px 12px;background:#FF9900;color:#111;
                     font-family:'Boogaloo',cursive;font-size:13px;text-align:center;
                     border-radius:6px;text-decoration:none">
              🛒 Check on Amazon
            </a>`
          : ''}
      </div>`;
    return div;
  }

  // ── Render dynamic shop grid ──────────────────────────────
  // Target: any element with id="dynamicShopGrid" or data-feed-shop
  function renderShopCards() {
    const grids = document.querySelectorAll('[data-feed-shop], #dynamicShopGrid');
    if (!grids.length) return;

    grids.forEach(grid => {
      const cat = grid.getAttribute('data-feed-cat') || 'all';
      const items = getByCategory(cat);
      grid.innerHTML = '';
      items.forEach(p => grid.appendChild(buildShopCard(p)));
    });
  }

  // ── Build a small "Shop This Post" card ───────────────────
  function buildSTPCard(product) {
    const url = product.lego_url || product.buy_url || product.amazon_url || '#';
    const div = document.createElement('div');
    div.className = 'stp-card';
    div.setAttribute('data-product-id', product.id);
    div.innerHTML = `
      <img class="stp-img" src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="stp-name">${product.name}</div>
      <a class="stp-btn" href="${url}" target="_blank" rel="nofollow sponsored">
        ${product.buy_url ? (product.buy_label || 'Buy Now') : 'Buy on LEGO.com →'}
      </a>`;
    return div;
  }

  // ── Populate [data-stp-ids] sections in blog posts ────────
  // Usage in HTML:  <div class="stp-grid" data-stp-ids="lego-10327,lego-10302"></div>
  function renderBlogShopSections() {
    const grids = document.querySelectorAll('[data-stp-ids]');
    grids.forEach(grid => {
      const ids = grid.getAttribute('data-stp-ids').split(',').map(s => s.trim());
      grid.innerHTML = '';
      ids.forEach(id => {
        const p = getProduct(id);
        if (p) grid.appendChild(buildSTPCard(p));
        else console.warn(`[BB Feed] Product not found: ${id}`);
      });
    });
  }

  // ── YouTube description generator ─────────────────────────
  // Call: BB_FEED.generateYTDescription(['lego-10327','lego-42143'])
  function generateYTDescription(productIds, videoTitle = '') {
    const lines = [];
    if (videoTitle) lines.push(`🧱 ${videoTitle}\n`);
    lines.push('🛒 PRODUCTS FEATURED IN THIS VIDEO:');
    lines.push('(Affiliate links – buying through these supports the channel at no extra cost to you)\n');

    productIds.forEach(id => {
      const p = getProduct(id);
      if (!p) return;
      const url = p.lego_url || p.buy_url || p.amazon_url || '';
      lines.push(`▶ ${p.name}`);
      if (p.lego_url)   lines.push(`  LEGO.com: ${p.lego_url}`);
      if (p.amazon_url) lines.push(`  Amazon:   ${p.amazon_url}`);
      if (p.buy_url)    lines.push(`  Download: ${p.buy_url}`);
      lines.push('');
    });

    lines.push('─────────────────────────────────');
    lines.push('📺 Subscribe: https://www.youtube.com/@BricktasticBuilds');
    lines.push('🌐 Website:   https://www.bricktasticbuilds.co.za');
    lines.push('─────────────────────────────────');
    lines.push('#LEGO #LEGOReview #BricktasticBuilds');

    return lines.join('\n');
  }

  // ── Rakuten XML feed parser (ready for when approved) ─────
  // When Rakuten delivers their XML to your FTP, parse it like this:
  async function loadRakutenXML(xmlUrl) {
    try {
      const res  = await fetch(xmlUrl);
      const text = await res.text();
      const parser = new DOMParser();
      const xml    = parser.parseFromString(text, 'text/xml');
      const items  = xml.querySelectorAll('product, item');
      const mapped = [];

      items.forEach(item => {
        const get = tag => item.querySelector(tag)?.textContent?.trim() || '';
        mapped.push({
          id:           'rakuten-' + get('pid'),
          set_number:   get('manufacturerpartnumber') || get('sku'),
          name:         get('productname') || get('name'),
          category:     ['lego'],
          tags:         (get('keywords') || '').split(',').map(s => s.trim()),
          image:        get('imageurl') || get('largeimageurl'),
          lego_url:     get('buyurl') || get('clickurl'),
          amazon_url:   '',
          availability: get('instock') !== 'no',
          pieces:       0,
          price:        parseFloat(get('price') || 0),
          currency:     get('currency') || 'EUR',
          description:  get('description'),
          featured:     false,
          source:       'rakuten'
        });
      });

      console.log(`[BB Feed] Loaded ${mapped.length} products from Rakuten XML`);
      // Merge with local products (Rakuten overrides if same set_number)
      mapped.forEach(rp => {
        const idx = _products.findIndex(p => p.set_number === rp.set_number);
        if (idx > -1) _products[idx] = { ..._products[idx], ...rp };
        else _products.push(rp);
      });

      onFeedLoaded(); // re-render with merged data
    } catch (err) {
      console.warn('[BB Feed] Could not load Rakuten XML:', err);
    }
  }

  // ── Public API ────────────────────────────────────────────
  function exposeAPI() {
    window.BB_FEED = {
      products:              () => [..._products],
      getProduct,
      getByCategory,
      getByTag,
      getFeatured,
      buildShopCard,
      buildSTPCard,
      generateYTDescription,
      loadRakutenXML,       // call this when Rakuten approves you
      reload:               loadFeed,
    };
    // Fire a custom event so other scripts can react
    document.dispatchEvent(new CustomEvent('bb:feedloaded', { detail: { count: _products.length } }));
  }

  // ── Boot ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFeed);
  } else {
    loadFeed();
  }

})();
