/* Bricktastic Builds - site header (announcement bar + nav) for the standalone partner pages.
   Links go to the main site using /?page=NAME, which index.html understands. */
(function () {
  var css = '' +
  '#sh-wrap{position:sticky;top:0;z-index:1000;font-family:Inter,Nunito,Arial,sans-serif}' +
  '#sh-wrap a{text-decoration:none}' +
  '#sh-ann{background:#E3000B;color:#fff;display:flex;align-items:stretch;height:38px;font-size:12px;font-weight:700;border-bottom:2px solid rgba(0,0,0,.2)}' +
  '#sh-play{background:#006CB7;color:#fff;font-family:Boogaloo,cursive;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;padding:0 20px;display:flex;align-items:center;gap:7px;flex-shrink:0;border-right:2px solid rgba(0,0,0,.25)}' +
  '#sh-play:hover{background:#0058a3}' +
  '#sh-center{flex:1;display:flex;align-items:center;justify-content:center;gap:18px;overflow:hidden;padding:0 12px}' +
  '#sh-center span{white-space:nowrap;opacity:.9}#sh-center .sep{opacity:.35}' +
  '#sh-signup{background:#FFD700;color:#1A1A1A;font-family:Boogaloo,cursive;font-size:12px;letter-spacing:1px;text-transform:uppercase;padding:0 18px;display:flex;align-items:center;gap:6px;flex-shrink:0;border-left:2px solid rgba(0,0,0,.15);white-space:nowrap}' +
  '#sh-signup:hover{background:#ffe100}' +
  '#sh-nav{background:#FFD700;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;box-shadow:0 2px 16px rgba(0,0,0,.12)}' +
  '#sh-logo{display:flex;align-items:center;gap:12px;flex-shrink:0}' +
  '#sh-logo i{width:44px;height:44px;background:#E3000B;border-radius:8px;box-shadow:0 4px 0 #8b0000;display:flex;align-items:center;justify-content:center}' +
  '#sh-logo b{font-family:Boogaloo,cursive;font-size:18px;line-height:1.1;color:#1A1A1A;font-weight:400;letter-spacing:.5px}' +
  '#sh-links{list-style:none;margin:0;padding:0;display:flex;gap:4px;flex:1;justify-content:center}' +
  '#sh-links a{font-weight:700;font-size:14px;color:#1A1A1A;padding:8px 14px;border-radius:8px;transition:background .15s;white-space:nowrap}' +
  '#sh-links a:hover,#sh-links a.on{background:rgba(0,0,0,.1)}' +
  '#sh-all{background:#fff;color:#E3000B;border:2px solid #E3000B;border-radius:8px;padding:8px 16px;font-weight:900;font-size:13px;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}' +
  '#sh-all:hover{background:#E3000B;color:#fff}' +
  '@media(max-width:900px){#sh-nav{padding:0 12px;height:auto;min-height:56px;flex-wrap:wrap;gap:4px 8px;padding-top:6px;padding-bottom:6px}#sh-all{display:none}#sh-links{order:3;flex-basis:100%;justify-content:flex-start;overflow-x:auto}#sh-logo b{font-size:15px}}' +
  '@media(max-width:640px){#sh-center span:not(:first-child),#sh-center .sep{display:none}#sh-signup span{display:none}#sh-play{padding:0 12px;font-size:11px}}';

  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var wrap = document.createElement('div');
  wrap.id = 'sh-wrap';
  wrap.innerHTML =
  '<div id="sh-ann">' +
    '<a id="sh-play" href="/?page=game"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>Play Zone</a>' +
    '<div id="sh-center"><span>\uD83E\uDDF1 Free digital delivery after purchase</span><span class="sep">|</span><span>All prices in South African Rand (ZAR)</span><span class="sep">|</span><span>New MOC instructions added weekly!</span></div>' +
    '<a id="sh-signup" href="/?page=home&scroll=home-subscribe"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>Sign Up</span></a>' +
  '</div>' +
  '<div id="sh-nav">' +
    '<a id="sh-logo" href="/"><i><svg width="26" height="18" viewBox="0 0 32 22"><rect y="6" width="32" height="16" rx="2" fill="#fff" fill-opacity=".25"/><ellipse cx="9" cy="6" rx="5" ry="3.5" fill="#fff" fill-opacity=".35"/><ellipse cx="23" cy="6" rx="5" ry="3.5" fill="#fff" fill-opacity=".35"/></svg></i><b>Bricktastic<br>Builds</b></a>' +
    '<ul id="sh-links">' +
      '<li><a href="/">Home</a></li><li><a href="/?page=shop">Shop</a></li><li><a href="/?page=mocs">MOC Gallery</a></li>' +
      '<li><a href="/?page=blog">Blog</a></li><li><a href="/?page=about">About</a></li><li><a class="on" href="/partners/">Partners</a></li>' +
    '</ul>' +
    '<a id="sh-all" href="/?page=shop">All<br>Builds</a>' +
  '</div>';

  var me = document.currentScript;
  if (me && me.parentNode) me.parentNode.insertBefore(wrap, me); else document.body.insertBefore(wrap, document.body.firstChild);
})();
