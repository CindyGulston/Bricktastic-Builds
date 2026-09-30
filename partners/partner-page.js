(function(){
  var app=document.getElementById('partner-app');
  if(!app||!window.PARTNERS) return;
  var key=app.getAttribute('data-partner');
  var P=window.PARTNERS[key];
  if(!P){app.innerHTML='<div class="wrap" style="padding:60px 0"><p>Partner not found. <a href="/partners/">Back to partners</a></p></div>';return;}

  var preview=/[?&]preview=1/.test(location.search);
  var cur=P.currency||'$';
  var esc=function(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});};

  function affUrl(u){
    try{
      var x=new URL(u,P.shopUrl);
      var host=new URL(P.shopUrl).hostname.replace(/^www\./,'');
      if(x.hostname.replace(/^www\./,'')===host && P.ref && !x.searchParams.has(P.refParam||'ref')){
        x.searchParams.set(P.refParam||'ref',P.ref);
      }
      return x.toString();
    }catch(e){return u;}
  }

  var all=(P.products||[]).filter(function(p){return preview||!p.sample;});
  var cats=[];
  all.forEach(function(p){if(p.category&&cats.indexOf(p.category)<0)cats.push(p.category);});

  var state={q:'',cat:'All',sort:'featured'};
  var others=Object.keys(window.PARTNERS).filter(function(k){return k!==key;});

  var html='';
  html+='<div class="pp-topbar"><div class="wrap"><a href="/">← Bricktastic Builds</a><a href="/partners/">All partners &amp; affiliates</a></div></div>';
  html+='<header class="pp-hero"><div class="wrap">';
  html+='<span class="pp-badge">Official Partner</span>';
  html+='<h1>'+esc(P.emoji||'')+' '+esc(P.name)+'</h1>';
  html+='<p class="tag">'+esc(P.tagline)+'</p>';
  html+='<div class="pp-actions"><a class="btn" href="'+esc(affUrl(P.shopUrl))+'" target="_blank" rel="sponsored nofollow noopener">Visit '+esc(P.name)+' →</a>';
  if(P.code){html+='<span class="code-chip">Code <b id="pp-code">'+esc(P.code)+'</b>'+(P.codeNote?' · '+esc(P.codeNote):'')+' <button type="button" id="pp-copy">Copy</button></span>';}
  html+='</div></div></header>';

  html+='<main class="pp-body"><div class="wrap">';
  html+='<div class="pp-about"><div class="pp-card"><h2>About '+esc(P.name)+'</h2>'+(P.about||[]).map(function(t){return '<p>'+esc(t)+'</p>';}).join('')+'</div>';
  if(P.myTake){html+='<div class="pp-card"><h2>Our take</h2><p>'+esc(P.myTake)+'</p></div>';}
  else{html+='<div class="pp-card"><h2>Good to know</h2><p>Links on this page are affiliate links. If you buy through them we may earn a small commission, at no extra cost to you.</p></div>';}
  html+='</div>';

  if(preview){html+='<div class="pp-preview"><strong>Preview mode:</strong> sample products are showing. Visitors do not see them.</div>';}

  if(!all.length){
    html+='<div class="pp-empty"><h2>Products coming soon</h2><p>We are putting together our favourite picks from '+esc(P.name)+'. In the meantime you can browse their full range.</p><a class="btn" href="'+esc(affUrl(P.shopUrl))+'" target="_blank" rel="sponsored nofollow noopener">Browse '+esc(P.name)+' →</a></div>';
  }else{
    html+='<h2 style="font-family:\'Boogaloo\',cursive;font-size:32px;color:var(--black);margin:0 0 14px">Our picks</h2>';
    html+='<div class="pp-toolbar"><input type="search" id="pp-q" placeholder="Search products…" aria-label="Search products"><select id="pp-sort" aria-label="Sort products"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="az">Name: A to Z</option></select></div>';
    if(cats.length>1){html+='<div class="pp-chips" id="pp-chips">'+['All'].concat(cats).map(function(c){return '<button type="button" class="pp-chip" data-cat="'+esc(c)+'" aria-pressed="'+(c==='All')+'">'+esc(c)+'</button>';}).join('')+'</div>';}
    html+='<div class="pp-count" id="pp-count" aria-live="polite"></div><div class="pp-grid" id="pp-grid"></div>';
  }

  html+='<div class="pp-disclose"><strong>🔗 Affiliate disclosure:</strong> Bricktastic Builds is a partner of '+esc(P.name)+'. If you buy through links on this page we may earn a commission at no extra cost to you. See our <a href="/partners/">partners &amp; affiliates page</a> and <a href="/privacy/">privacy policy</a>.</div>';

  if(others.length){html+='<div class="pp-more"><h3>More partners</h3>'+others.map(function(k){var o=window.PARTNERS[k];return '<a class="pl" href="/partners/'+esc(k)+'/">'+esc(o.emoji||'')+' '+esc(o.name)+'</a>';}).join('')+'<a class="pl" href="/partners/">All partners &amp; affiliates</a></div>';}
  html+='<div class="pp-foot">© 2026 Bricktastic Builds · bricktasticbuilds.co.za</div>';
  html+='</div></main>';
  app.innerHTML=html;

  var grid=document.getElementById('pp-grid');
  function render(){
    if(!grid) return;
    var q=state.q.trim().toLowerCase();
    var list=all.filter(function(p){
      return (state.cat==='All'||p.category===state.cat) && (!q||((p.name||'')+' '+(p.note||'')+' '+(p.category||'')).toLowerCase().indexOf(q)>-1);
    });
    var num=function(p){return typeof p.price==='number'?p.price:Infinity;};
    if(state.sort==='low')list.sort(function(a,b){return num(a)-num(b);});
    if(state.sort==='high')list.sort(function(a,b){return (typeof b.price==='number'?b.price:-1)-(typeof a.price==='number'?a.price:-1);});
    if(state.sort==='az')list.sort(function(a,b){return (a.name||'').localeCompare(b.name||'');});
    document.getElementById('pp-count').textContent=list.length+(list.length===1?' product':' products');
    if(!list.length){grid.innerHTML='<div class="pp-empty" style="grid-column:1/-1"><h2>No matches</h2><p>Try a different search or category.</p></div>';return;}
    grid.innerHTML=list.map(function(p){
      var img=p.image?'<img src="'+esc(p.image)+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.remove()">':'';
      var flag=p.sample?'<span class="pp-flag sample">Sample</span>':(p.badge?'<span class="pp-flag">'+esc(p.badge)+'</span>':'');
      return '<article class="pp-prod"><div class="pp-img">🧱'+img+flag+'</div><div class="pp-info">'+
        (p.category?'<div class="pp-cat">'+esc(p.category)+'</div>':'')+
        '<div class="pp-name">'+esc(p.name)+'</div>'+
        (p.note?'<div class="pp-note">'+esc(p.note)+'</div>':'')+
        (typeof p.price==='number'?'<div class="pp-price">'+esc(cur)+p.price.toFixed(2)+'</div>':'')+
        '<a class="btn" href="'+esc(affUrl(p.url))+'" target="_blank" rel="sponsored nofollow noopener">View on '+esc(P.name)+' →</a></div></article>';
    }).join('');
  }
  var qEl=document.getElementById('pp-q'),sEl=document.getElementById('pp-sort'),chips=document.getElementById('pp-chips');
  if(qEl)qEl.addEventListener('input',function(){state.q=qEl.value;render();});
  if(sEl)sEl.addEventListener('change',function(){state.sort=sEl.value;render();});
  if(chips)chips.addEventListener('click',function(e){
    var b=e.target.closest('.pp-chip');if(!b)return;
    state.cat=b.getAttribute('data-cat');
    [].forEach.call(chips.children,function(c){c.setAttribute('aria-pressed',c===b?'true':'false');});
    render();
  });
  var cp=document.getElementById('pp-copy');
  if(cp)cp.addEventListener('click',function(){
    var t=document.getElementById('pp-code').textContent;
    var done=function(){cp.textContent='Copied!';setTimeout(function(){cp.textContent='Copy';},1500);};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,function(){});}
  });
  render();
})();
