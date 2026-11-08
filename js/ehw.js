// Approved EHW Win2000 mirror checkpoint: v16 defaults, v15 local time-only clock.
(function(){
const BASE='assets/ehw/windows/';
const SLIDES='assets/ehw/slides/';
const IG_GLYPH='<svg class="ig-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>';
const MAIL_GLYPH='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4 7.5 L12 13 L20 7.5"/></svg>';
const PWR_GLYPH_BLACK='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5v6.2" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M4.4 3.7a5.4 5.4 0 1 0 7.2 0" stroke="#000" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>';
const CRED_FOOT=
  '<div class="cred-foot">'+
    '<div class="icons">'+
      '<a href="https://www.instagram.com/thisisjyyeung/" target="_blank" rel="noopener" aria-label="Instagram">'+IG_GLYPH+'</a>'+
      '<a href="mailto:thisisjyyeung@gmail.com" aria-label="Email">'+MAIL_GLYPH+'</a>'+
    '</div>'+
    '<p class="copy">© 2026 JY YEÜNG. ALL RIGHTS RESERVED</p>'+
    '<p class="credit">WEBSITE BY JY YEÜNG</p>'+
    '<a class="privacy" href="privacy/">Privacy</a>'+
  '</div>';

const W={
 dang:{t:'DANG',c:'#597C86',cover:'cover-lilies-blue.jpg',stage:'stage-01-dang.jpg',carRatio:'16-9',
  body:'<h3 class="song-title">Dang</h3><p class="song-quote">"I wanted to explore the duality where I\'m good at making things look designed, while being pretty lost at making a corporate slide deck."</p>',
  slides:["01-dang/SELF INTRO_20261105_172740_0000.webp", "01-dang/SELF INTRO_20261105_172740_0001.webp", "01-dang/SELF INTRO_20261105_172740_0002.webp", "01-dang/SELF INTRO_20261105_172740_0003.webp", "01-dang/SELF INTRO_20261105_172740_0004.webp", "01-dang/SELF INTRO_20261105_172740_0005.webp", "01-dang/SELF INTRO_20261105_172740_0006.webp", "01-dang/SELF INTRO_20261105_172740_0007.webp", "01-dang/SELF INTRO_20261105_172740_0008.webp", "01-dang/SELF INTRO_20261105_172740_0009.webp", "01-dang/SELF INTRO_20261105_172740_0010.webp", "01-dang/SELF INTRO_20261105_172740_0011.webp", "01-dang/SELF INTRO_20261105_172740_0012.webp", "01-dang/SELF INTRO_20261105_172740_0013.webp", "01-dang/SELF INTRO_20261105_172740_0014.webp", "01-dang/SELF INTRO_20261105_172740_0015.webp", "01-dang/SELF INTRO_20261105_172740_0016.webp"],
  ig:'https://www.instagram.com/p/DbvWOeOEgox/?exln=eWRhMmNxYjVnMmU=',
  apple:{src:'https://embed.music.apple.com/us/song/1712185273',listen:'https://music.apple.com/us/album/dang-single/1712185258?i=1712185273',title:'Caroline Polachek – Dang',kind:'song'},
  spot:{src:'https://open.spotify.com/embed/track/7ddHGUPt5bOpVFAtX6TJN8?utm_source=generator',listen:'https://open.spotify.com/track/7ddHGUPt5bOpVFAtX6TJN8',title:'Dang on Spotify'}},
 mas:{t:'MAIN ANTAGONIST SYNDROME',c:'#B9270E',cover:'cover-orange-tongue.jpg',stage:'stage-02-mas.jpg',carRatio:'4-5',
  body:'<h3 class="song-title">Main Antagonist Syndrome</h3><p class="song-quote">"Main Character Syndrome is boring. I\'d rather have Main Antagonist Syndrome."</p>',
  slides:["02-mas/MAS_02_mix.webp", "02-mas/MAS_03.webp", "02-mas/MAS_04.webp", "02-mas/MAS_05.webp", "02-mas/MAS_06.webp", "02-mas/MAS_07.webp", "02-mas/MAS_08.webp", "02-mas/MAS_09.webp", "02-mas/MAS_10.webp"],
  ig:'https://www.instagram.com/p/DcgYMkEkuu3/?mdxt=MnR2d2x3andxYTJ4',
  apple:{src:'https://embed.music.apple.com/hk/playlist/pl.u-jV89b1Wud12y6xr',listen:'https://music.apple.com/hk/playlist/main-antagonist-syndrome/pl.u-jV89b1Wud12y6xr?l=en&ls',title:'Main Antagonist Syndrome on Apple Music',kind:'playlist'},
  spotSoon:true},
 ehw:{t:'EVERYTHING HE WANTED',c:'#096C71',cover:'cover-teal-smile.jpg',stage:'stage-03-ehw.jpg',carRatio:'4-5',
  body:'<h3 class="song-title">everything he wanted</h3><p class="song-quote"><span class="q-line">"Fueled by fantasy.</span><span class="q-line">In love with a feeling.</span><span class="q-line">Addicted to an architecture."</span></p>',
  slides:["03-ehw/EHW-_45crop-02.webp", "03-ehw/EHW-_45crop-03.webp", "03-ehw/EHW-_45crop-04.webp", "03-ehw/EHW-_45crop-05.webp", "03-ehw/EHW-_45crop-06.webp", "03-ehw/EHW-_45crop-07.webp", "03-ehw/EHW-_45crop-08.webp", "03-ehw/EHW-_45crop-09.webp", "03-ehw/EHW-_45crop-10.webp"],
  ig:'https://www.instagram.com/p/Deo-DPsnztj/?psln=MTYweXJsd290eDR5MA==',
  apple:{src:'https://embed.music.apple.com/us/song/1490336500',listen:'https://music.apple.com/us/album/in-the-afternoon/1490336497?i=1490336500',title:'MGMT – In the Afternoon',kind:'song'},
  spot:{src:'https://open.spotify.com/embed/track/3d9aUOk1b0muVMSt8eXeiV?utm_source=generator',listen:'https://open.spotify.com/track/3d9aUOk1b0muVMSt8eXeiV',title:'In the Afternoon on Spotify'}},
 about:{t:'ABOUT',c:'#0A246A',body:'<h3>everything he wanted</h3><p class="ph">[PLACEHOLDER] Art description — Jy copy coming next pass. Mustard field, three untidy portraits, stacked title. Full credit and process notes TBD.</p>'},
 credits:{t:'SPECIAL THANKS / CREDITS',c:'#0A246A',body:'<h3>CREDITS</h3><p class="ph">[PLACEHOLDER] Photography — Name here</p><p class="ph">[PLACEHOLDER] Styling — Name here</p><p class="ph">[PLACEHOLDER] Mix / Master — Name here</p><p class="ph">[PLACEHOLDER] Website — JY YEÜNG</p><h3>SPECIAL THANKS</h3><p class="ph">[PLACEHOLDER] Text here — Jy copy coming next pass</p><p class="ph">[PLACEHOLDER] Text here</p>'+CRED_FOOT}
};

const desk=innerWidth>800, B=document.body;
if(desk) B.classList.add('ehw-w2k-desk');
B.classList.add('ehw-w2k-align-left');
document.getElementById('ehw-stage').classList.add('is-entered');

const cue=document.getElementById('ehw-interact-cue');
cue.textContent='Tap each element to interact';
cue.classList.add('rect','is-on');
function placeBalloon(){
  if(!desk) return;
  const st=document.getElementById('ehw-stage').getBoundingClientRect();
  const m=document.querySelector('.ehw-main').getBoundingClientRect();
  cue.style.right='auto';
  cue.style.left=((st.right+innerWidth)/2 - m.left)+'px';
  cue.style.transform='translate(-50%,-50%)';
  cue.style.top=(st.top+st.height/2 - m.top)+'px';
}
placeBalloon();
addEventListener('resize',placeBalloon);

const L=document.createElement('div');L.id='wlayer';B.appendChild(L);
let Z=10,tabs,clockEl;

function headerBottom(){
  const topbar=document.querySelector('.topbar');
  if(topbar){
    const b=topbar.getBoundingClientRect().bottom;
    if(b>0) return b;
  }
  const cs=getComputedStyle(document.documentElement);
  const th=parseFloat(cs.getPropertyValue('--top-h'))||52;
  return th;
}

function fmtClock(d){
  let time;
  try{ time=new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit',hour12:true}).format(d); }
  catch(e){ const h=d.getHours(); time=(h%12||12)+':'+String(d.getMinutes()).padStart(2,'0')+' '+(h<12?'AM':'PM'); }
  return time;
}
function tickClock(){ if(clockEl) clockEl.textContent=fmtClock(new Date()); }

if(desk){
  const tb=document.createElement('div');tb.id='taskbar';
  tb.innerHTML='<button class="tbtn power" title="Shut Down">'+PWR_GLYPH_BLACK+'Shut Down</button><span class="sep"></span><div class="tabs"></div><div class="clock" aria-live="off"></div>';
  B.appendChild(tb);tabs=tb.querySelector('.tabs');clockEl=tb.querySelector('.clock');
  tickClock(); setInterval(tickClock, 60*1000);
  tb.querySelector('.power').onclick=()=>showPower();
}

function showPower(){
  let dlg=document.getElementById('pwr-dlg');
  if(dlg){dlg.hidden=false;return;}
  dlg=document.createElement('div');dlg.id='pwr-dlg';dlg.setAttribute('role','alertdialog');dlg.setAttribute('aria-labelledby','pwr-title');
  dlg.innerHTML='<div class="scrim"></div><div class="box"><div class="tb"><span class="t" id="pwr-title">Shut Down</span><span class="btns"><button class="wb x" aria-label="Close">✕</button></span></div><div class="body"><div class="ico" aria-hidden="true">'+PWR_GLYPH_BLACK+'</div><div class="msg">Are you sure?</div></div><div class="acts"><button type="button" data-a="yes">Yes</button><button type="button" data-a="no">No</button></div></div>';
  B.appendChild(dlg);
  const dismiss=()=>{dlg.hidden=true;};
  dlg.querySelector('.scrim').onclick=dismiss;
  dlg.querySelector('.x').onclick=dismiss;
  dlg.querySelector('[data-a="no"]').onclick=dismiss;
  dlg.querySelector('[data-a="yes"]').onclick=()=>{ location.href='./'; };
}

let lastFocus=null;
const win=id=>L.querySelector('.win[data-id="'+id+'"]');
const tab=id=>tabs&&tabs.querySelector('[data-id="'+id+'"]');
function sync(){if(!tabs)return;L.querySelectorAll('.win').forEach(w=>{const t=tab(w.dataset.id);if(t)t.classList.toggle('on',!w.classList.contains('inactive')&&!w.classList.contains('min'));});}
function focus(el){L.querySelectorAll('.win').forEach(w=>w.classList.add('inactive'));el.classList.remove('inactive','min');el.style.zIndex=++Z;sync();}
function minimise(id){const w=win(id);if(!w)return;w.classList.add('min','inactive');const vis=[...L.querySelectorAll('.win:not(.min)')].sort((a,b)=>(+b.style.zIndex||0)-(+a.style.zIndex||0));if(vis[0])focus(vis[0]);else sync();}
function dispose(w){w._phoneDualObserver?.disconnect();w._scrollObserver?.disconnect();w._scrollTimers?.forEach(clearTimeout);}
function close(id){const w=win(id);if(!w)return;dispose(w);w.remove();if(tab(id))tab(id).remove();if(!desk){L.innerHTML='';B.classList.remove('ehw-w2k-pop');}sync();if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});}

function dualHTML(d){
  if(!d.cover||!d.stage) return '';
  return `<div class="dual"><div class="cell"><img src="${BASE+d.cover}" alt=""></div><div class="cell"><img src="${BASE+d.stage}" alt=""></div></div>`;
}
function listenHTML(d){
  if(!d.apple) return '';
  // Locked platform label: LISTEN ON APPLE MUSIC SPOTIFY.
  let links=`<span class="listen-lead">LISTEN ON</span> <button type="button" class="tog is-on" data-prov="apple">APPLE MUSIC</button>`;
  if(d.spot) links+=` <button type="button" class="tog" data-prov="spot">SPOTIFY</button>`;
  else if(d.spotSoon) links+=` <span class="soon">SPOTIFY · SOON</span>`;
  return `<div class="listen-row">${links}</div>`;
}
function embedHTML(d){
  if(!d.apple) return '';
  const cls=d.apple.kind==='playlist'?'playlist':'song';
  let html=`<div class="embed-slot"><iframe class="apple-frame ${cls} is-on" data-prov="apple" title="${d.apple.title}" src="${d.apple.src}" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>`;
  if(d.spot){
    html+=`<iframe class="spot-frame" data-prov="spot" title="${d.spot.title}" src="${d.spot.src}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" frameborder="0" scrolling="no"></iframe>`;
  }
  html+='</div>';
  return html;
}
function wireToggle(el){
  const row=el.querySelector('.listen-row');
  const slot=el.querySelector('.embed-slot');
  if(!row||!slot) return;
  row.querySelectorAll('button.tog').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault(); e.stopPropagation();
      const prov=btn.dataset.prov;
      row.querySelectorAll('button.tog').forEach(b=>b.classList.toggle('is-on',b===btn));
      slot.querySelectorAll('iframe').forEach(f=>f.classList.toggle('is-on',f.dataset.prov===prov));
    });
  });
}
function igHTML(href){
  if(!href) return '';
  return `<a class="ig-link" href="${href}" target="_blank" rel="noopener">${IG_GLYPH}<span>View on Instagram</span></a>`;
}
function slideshowLabel(d){
  if(!d.slides||!d.slides.length) return '';
  return '<div class="slideshow-label">VIEW THE SLIDESHOW</div>';
}

function slideSrc(rel){
  return SLIDES + rel.split('/').map(encodeURIComponent).join('/');
}

function fmtCounter(i,n){
  const w=Math.max(2, String(n).length);
  return String(i+1).padStart(w,'0')+'/'+String(n).padStart(w,'0');
}

function carouselHTML(d){
  if(!d.slides||!d.slides.length) return '';
  const ratio=d.carRatio||'4-5';
  const slides=d.slides.map((s,i)=>{
    return `<div class="car-slide" data-i="${i}"><img src="${slideSrc(s)}" alt="" draggable="false"></div>`;
  }).join('');
  return `<div class="car ratio-${ratio}" data-i="0" aria-roledescription="carousel">`+
    `<div class="car-stage">`+
      `<button type="button" class="car-nav prev" aria-label="Previous slide">‹</button>`+
      `<div class="car-viewport"><div class="car-track">${slides}</div></div>`+
      `<button type="button" class="car-nav next" aria-label="Next slide">›</button>`+
    `</div>`+
    `<div class="car-meta"><span class="car-idx">${fmtCounter(0,d.slides.length)}</span></div>`+
  `</div>`;
}

function wireCarousel(el){
  const car=el.querySelector('.car');
  if(!car) return;
  const track=car.querySelector('.car-track');
  const slides=[...car.querySelectorAll('.car-slide')];
  const idxEl=car.querySelector('.car-idx');
  const n=slides.length;
  let i=0;
  function go(ni, animate){
    i=(ni+n)%n;
    car.dataset.i=String(i);
    if(animate===false){
      track.style.transition='none';
    } else {
      track.style.transition='';
    }
    track.style.transform=`translateX(${-i*100}%)`;
    if(idxEl) idxEl.textContent=fmtCounter(i,n);
  }
  car.querySelector('.car-nav.prev').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();go(i-1);});
  car.querySelector('.car-nav.next').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();go(i+1);});
  car._go=go;
  go(0,false);
}


function wirePhoneDual(el){
  if(desk) return;
  const row=el.querySelector('.dual');
  if(!row) return;
  const imgs=[...row.querySelectorAll('img')];
  const fit=()=>{
    if(imgs.some(img=>!img.naturalWidth||!img.naturalHeight)) return;
    const gap=parseFloat(getComputedStyle(row).columnGap)||0;
    const ratios=imgs.map(img=>img.naturalWidth/img.naturalHeight);
    // Round down to Chrome's layout unit so rounding can never cause overflow.
    const h=Math.floor(((row.clientWidth-gap)/ratios.reduce((a,b)=>a+b,0))*64)/64;
    row.style.height=h+'px';
    imgs.forEach((img,i)=>{img.parentElement.style.width=(h*ratios[i])+'px';});
  };
  imgs.forEach(img=>img.addEventListener('load',fit,{once:true}));
  fit();
  const ro=new ResizeObserver(fit);ro.observe(row);
  el._phoneDualObserver=ro;
}


function wireScrollbar(el){
  const content=el.querySelector('.content');
  const sb=el.querySelector('.sb');
  if(!content||!sb) return;
  const th=sb.querySelector('.th');
  const tr=sb.querySelector('.tr');
  const up=sb.querySelector('.up');
  const dn=sb.querySelector('.dn');
  const LINE=48;

  function metrics(){
    const sh=content.scrollHeight;
    const ch=content.clientHeight;
    const st=content.scrollTop;
    const maxScroll=Math.max(0, sh-ch);
    const trackH=tr.clientHeight;
    const ratio=sh>0? Math.min(1, ch/sh) : 1;
    const thH=Math.max(18, Math.min(trackH, Math.round(trackH*ratio)));
    const maxTop=Math.max(0, trackH-thH);
    const top=maxScroll>0 ? Math.round((st/maxScroll)*maxTop) : 0;
    return {sh,ch,st,maxScroll,trackH,thH,maxTop,top};
  }
  function syncThumb(){
    const m=metrics();
    th.style.height=m.thH+'px';
    th.style.top=m.top+'px';
    // Always show classic chrome; dim when no overflow
    sb.style.opacity=m.maxScroll>0?'1':'0.55';
  }

  content.addEventListener('scroll', syncThumb, {passive:true});
  if(window.ResizeObserver){
    const ro=new ResizeObserver(()=>syncThumb());
    ro.observe(content);
    ro.observe(tr);
    el._scrollObserver=ro;
  }
  content.querySelectorAll('img').forEach(img=>{
    if(!img.complete) img.addEventListener('load', syncThumb);
    else syncThumb();
  });
  // iframes / late layout
  el._scrollTimers=[80,400,1200].map(ms=>setTimeout(syncThumb,ms));

  // Hold-to-repeat on arrows (classic feel) — covers click + hold
  function hold(btn, dir){
    let timer=null, first=null;
    const step=()=>{ content.scrollTop += dir*LINE; };
    const clear=()=>{ if(first) clearTimeout(first); if(timer) clearInterval(timer); first=timer=null; };
    btn.addEventListener('pointerdown', e=>{
      e.preventDefault();
      try{ btn.setPointerCapture(e.pointerId); }catch(_){}
      step();
      first=setTimeout(()=>{ timer=setInterval(step, 60); }, 350);
    });
    btn.addEventListener('pointerup', clear);
    btn.addEventListener('pointercancel', clear);
    btn.addEventListener('lostpointercapture', clear);
  }
  hold(up, -1); hold(dn, 1);

  // Track page jump
  tr.addEventListener('pointerdown', e=>{
    if(e.target===th || th.contains(e.target)) return;
    e.preventDefault();
    const rect=tr.getBoundingClientRect();
    const y=e.clientY-rect.top;
    const m=metrics();
    const clickTop=y - m.thH/2;
    content.scrollTop = m.maxTop>0 ? (Math.max(0, Math.min(m.maxTop, clickTop))/m.maxTop)*m.maxScroll : 0;
  });

  // Thumb drag
  th.addEventListener('pointerdown', e=>{
    e.preventDefault(); e.stopPropagation();
    try{ th.setPointerCapture(e.pointerId); }catch(_){}
    const startY=e.clientY;
    const startTop=th.offsetTop;
    const mv=ev=>{
      const m=metrics();
      const dy=ev.clientY-startY;
      const newTop=Math.max(0, Math.min(m.maxTop, startTop+dy));
      content.scrollTop = m.maxTop>0 ? (newTop/m.maxTop)*m.maxScroll : 0;
    };
    const upEv=()=>{
      th.removeEventListener('pointermove', mv);
      th.removeEventListener('pointerup', upEv);
      th.removeEventListener('pointercancel', upEv);
    };
    th.addEventListener('pointermove', mv);
    th.addEventListener('pointerup', upEv);
    th.addEventListener('pointercancel', upEv);
  });

  el._syncScroll=syncThumb;
}

// Desktop defaults: top already >= header (~52). Phone untouched.
const DB={dang:[540,56,400,720],mas:[660,56,440,740],ehw:[800,56,400,720],about:[480,360,360,260],credits:[720,80,380,520]};
const PB={dang:[12,48,366,780],mas:[12,48,366,780],ehw:[12,48,366,780],about:[24,110,342,560],credits:[16,90,358,640]};

function open(id){
  if(!W[id])return;
  lastFocus=document.activeElement;
  if(!desk){L.querySelectorAll('.win').forEach(w=>dispose(w));L.innerHTML='<div class="dim"></div>';B.classList.add('ehw-w2k-pop');L.firstChild.onclick=()=>{L.querySelectorAll('.win').forEach(w=>dispose(w));L.innerHTML='';B.classList.remove('ehw-w2k-pop');};}
  else if(win(id)){focus(win(id));return;}
  const d=W[id],b=(desk?DB:PB)[id],el=document.createElement('div');
  el.className='win '+id;el.dataset.id=id;el.setAttribute('role','dialog');el.setAttribute('aria-label',d.t);if(!desk)el.setAttribute('aria-modal','true');
  const btns=desk?'<button class="wb mn" aria-label="Minimise window" title="Minimise"></button><button class="wb mx" disabled aria-disabled="true" title="Maximise (disabled)"></button><button class="wb x" aria-label="Close window">✕</button>':'<button class="wb x" aria-label="Close window">✕</button>';
  // Song windows: dual → title+quote → listen → embed → VIEW THE SLIDESHOW → carousel → IG
  const body=dualHTML(d)+d.body+listenHTML(d)+embedHTML(d)+slideshowLabel(d)+carouselHTML(d)+igHTML(d.ig);
  el.innerHTML=`<div class="tb"><span class="t">${d.t}</span><span class="btns">${btns}</span></div><div class="client"><div class="content">${body}</div><div class="sb" aria-hidden="true"><div class="a up" role="button" aria-label="Scroll up"></div><div class="tr"><div class="th"></div></div><div class="a dn" role="button" aria-label="Scroll down"></div></div></div>`;
  let top=b[1];
  if(desk) top=Math.max(top, headerBottom());
  Object.assign(el.style,{left:b[0]+'px',top:top+'px',width:b[2]+'px',height:b[3]+'px'});
  L.appendChild(el);
  wirePhoneDual(el);
  wireToggle(el);
  wireCarousel(el);
  wireScrollbar(el);
  el.querySelector('.x').onclick=()=>close(id);
  el.addEventListener('pointerdown',()=>focus(el));
  if(desk){
    el.querySelector('.mn').onclick=e=>{e.stopPropagation();minimise(id);};
    const t=document.createElement('button');t.className='tbtn tab';t.dataset.id=id;
    t.innerHTML=`<i style="background:${d.c}"></i><span>${d.t}</span>`;tabs.appendChild(t);
    t.onclick=()=>{if(t.classList.contains('on'))minimise(id);else focus(el);};
    drag(el);
  }
  focus(el);
  el.querySelector('.x').focus({preventScroll:true});
}
function drag(el){
  const tb=el.querySelector('.tb');
  tb.addEventListener('pointerdown',e=>{
    if(e.target.closest('.wb'))return;
    tb.setPointerCapture(e.pointerId);
    const sx=e.clientX-el.offsetLeft,sy=e.clientY-el.offsetTop;
    const mv=ev=>{
      let x=ev.clientX-sx,y=ev.clientY-sy;
      const hb=headerBottom();
      x=Math.min(Math.max(x,60-el.offsetWidth),L.clientWidth-60);
      // Header is a restricted zone — never let window top enter the site header
      y=Math.min(Math.max(y,hb),L.clientHeight-30);
      el.style.left=x+'px';el.style.top=y+'px';
    };
    const up=()=>{tb.removeEventListener('pointermove',mv);tb.removeEventListener('pointerup',up);};
    tb.addEventListener('pointermove',mv);tb.addEventListener('pointerup',up);
  });
}

const map={dang:'dang',mas:'mas',ehw:'ehw',art:'about'};
document.querySelectorAll('.ehw-hotspot').forEach(h=>h.addEventListener('click',e=>{e.preventDefault();open(map[h.dataset.modal]);}));
document.querySelector('.topbar .brand').addEventListener('click',e=>{e.preventDefault();open('credits');});
// Escape closes the focused window; no delayed open/close animation.
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  const power=document.getElementById('pwr-dlg');
  if(power&&!power.hidden){power.hidden=true;return;}
  const active=L.querySelector('.win:not(.inactive):not(.min)');
  if(active){e.preventDefault();close(active.dataset.id);}
});
// Preserve the established first-open load gate; never wait on third-party embeds.
const gate=document.getElementById('loadGate');
if(gate){
  const started=performance.now();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const images=[...document.querySelectorAll('.ehw-stage img')];
  const loaded=Promise.all(images.map(img=>img.complete?Promise.resolve():new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});})));
  Promise.race([loaded,new Promise(resolve=>setTimeout(resolve,reduced?400:2200))]).then(()=>{
    setTimeout(()=>{gate.classList.add('is-done');gate.setAttribute('aria-busy','false');setTimeout(()=>gate.remove(),700);},Math.max(0,(reduced?0:320)-(performance.now()-started)));
  });
}
})();
