/* ==========================================================================
   YAKA — VERSION TÉLÉPHONE : cartes plein écran, tap / swipe pour avancer
   Contenu issu de content.js (window.YAKA_CONTENT).
   ========================================================================== */
(function () {
  "use strict";
  const C = window.YAKA_CONTENT, S = C.slides, cf = C.coffee, I = C.images;
  const fmt = (s) => String(s ?? "").replace(/\[\[(.+?)\]\]/g, "$1").replace(/\n/g, "<br>");
  const a = (d) => `class="a" style="--d:${d}"`;
  const tel = (p) => p.replace(/\s/g, "");

  const cards = [
    // 1 · Couverture
    ["dark", "cover", `
      <div class="bg"><img src="${I.packFront}" alt="Paquet de café YAKA sur des rochers et des grains de café"></div>
      <div class="body stack">
        <p ${a(2)}><span class="eyebrow">${fmt(S.cover.eyebrow)}</span></p>
        <h1 ${a(3)}><span class="h">Un grand café.<br><em>Un geste qui compte.</em></span></h1>
        <p ${a(5)}><span class="p">${fmt(S.cover.lead)}</span></p>
        <p ${a(8)}><span class="hint">Faites défiler <i></i></span></p>
      </div>`],

    // 2 · Chacun y gagne
    ["sand", "gains", `
      <p ${a(1)}><span class="eyebrow">${S.model.label}</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h">Chacun y gagne,<br><em>à commencer par vous.</em></span></h2>
      <div class="grow"></div>
      <div ${a(4)}>${S.model.nodes.map((n) => `<div class="gain"><b>${n.name}</b><span>${n.gets}</span></div>`).join("")}</div>`],

    // 3 · Fonctionnement
    ["ivory", "turnkey", `
      <p ${a(1)}><span class="eyebrow">${S.turnkey.label}</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h">Vous nous accueillez.<br><em>Nous nous occupons du reste.</em></span></h2>
      <p class="a" style="--d:3;margin-top:14px"><span class="p">${fmt(S.turnkey.lead)}</span></p>
      <div class="grow"></div>
      <ul class="a ask steps" style="--d:4">${S.turnkey.yaka.map((x, i) => `<li data-n="0${i + 1}"><b>${x.who}</b> ${x.what}</li>`).join("")}</ul>
      <div class="a" style="--d:5;margin-top:16px"><div class="box you"><h4>${S.turnkey.storeTitle}</h4><ul>${S.turnkey.store.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div></div>`],

    // 4 · Notre engagement
    ["kaki", "engage", `
      <p ${a(1)}><span class="eyebrow">${S.cause.label}</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h" style="font-size:32px">Votre magasin prend part<br><em>à notre engagement.</em></span></h2>
      <p class="a" style="--d:3;margin-top:14px"><span class="p">${fmt(S.cause.body)}</span></p>
      <p class="a" style="--d:4;margin-top:18px"><span class="eyebrow">${S.cause.lightTitle}</span></p>
      <p class="a" style="--d:4;margin-top:8px"><span class="p">${fmt(S.cause.light)}</span></p>
      <div class="grow"></div>
      <div ${a(5)}>${S.cause.gifts.map(([h, t]) => `<div class="gain"><span>${h}</span><b>${t}</b></div>`).join("")}</div>
      <p class="a" style="--d:6;margin-top:14px"><span class="small">${fmt(S.cause.honesty)}</span></p>`],

    // 5 · Notre histoire
    ["ivory", "deaf", `
      ${I.ear ? `<div class="ear a" style="--d:1"><img src="${I.ear}" alt="Une oreille dessinée par une foule"></div>` : ""}
      <div class="stack">
        <p ${a(2)}><span class="eyebrow">${fmt(S.deaf.lead)}</span></p>
        <h2 ${a(3)}><span class="h" style="font-size:34px">${fmt(S.deaf.title)}</span></h2>
        ${S.deaf.paragraphs.map((x) => `<p ${a(5)}><span class="p">${fmt(x)}</span></p>`).join("")}
        <p ${a(6)}><span class="quote">${fmt(S.deaf.closing)}</span></p>
      </div>`],

    // 5 bis · Les associations
    ["sand", "asso", `
      <p ${a(1)}><span class="eyebrow">${S.associations.label}</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h" style="font-size:34px">Des causes qui<br><em>nous tiennent à cœur.</em></span></h2>
      <p class="a" style="--d:3;margin-top:12px"><span class="p">${fmt(S.associations.intro)}</span></p>
      <div class="grow"></div>
      <div ${a(4)}>${S.associations.items.map((it) => `<div class="asso"><div class="lg"${it.logoBg ? ` style="background:${it.logoBg}"` : ""}>${it.logo ? `<img src="${it.logo}" alt="Logo ${it.full}">` : `<span>${it.name}</span>`}</div><div><b>${it.full}</b><span>${it.text}</span></div></div>`).join("")}</div>
      <p class="a" style="--d:5;margin-top:12px"><span class="small">${fmt(S.associations.note)}</span></p>`],

    // 6 · Le café
    ["dark", "coffee", `
      <p ${a(1)}><span class="eyebrow">Le café</span></p>
      <div class="pack duo a" style="--d:2"><img src="${I.packBack}" alt="Sachet de grains Maison YAKA 250 g"><img src="${I.packCaps}" alt="Boîte de 20 capsules Maison YAKA"></div>
      <div class="stack">
        <h2 ${a(3)}><span class="h" style="font-size:32px">Deux références,<br><em>un même assemblage.</em></span></h2>
        <div ${a(4)}><div class="tags">${cf.products.map((p) => `<span>${p.format} · ${p.price}</span>`).join("")}</div></div>
        <p ${a(5)}><span class="small">100&#8239;% Arabica · Brésil, Pérou, Colombie, Éthiopie · medium-dark · profil doux et chocolaté</span></p>
      </div>`],

    // 7 · Présence en magasin
    ["kaki", "onsite", `
      <p ${a(1)}><span class="eyebrow">${S.meeting.label}</span></p>
      <ul class="a flow" style="--d:2;margin-top:16px">${S.meeting.steps.map(([h, t], i) => `<li><em>0${i + 1}</em><b>${h}</b><span>${fmt(t)}</span></li>`).join("")}</ul>
      <div class="a" style="--d:3;margin-top:18px"><div class="box us"><h4>${S.meeting.kitTitle}</h4><ul>${S.meeting.kit.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div></div>
      <p class="a" style="--d:4;margin-top:16px"><span class="p">${fmt(S.meeting.body)}</span></p>`],

    // 8 · Les étudiants
    ["sand", "people", `
      <p ${a(1)}><span class="eyebrow">${S.people.label}</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h">Faire grandir<br><em>les talents.</em></span></h2>
      <div class="grow"></div>
      <p ${a(3)}><span class="p">${fmt(S.people.body)}</span></p>
      <p class="a" style="--d:4;margin-top:12px"><span class="p">${fmt(S.people.mission)}</span></p>
      <div class="a" style="--d:5;margin-top:16px"><div class="tags">${S.people.skills.map((q) => `<span>${q}</span>`).join("")}</div></div>`],

    // 9 · Proposition
    ["sand", "pilot", `
      <p ${a(1)}><span class="eyebrow">${S.pilot.label}</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h">Construisons<br><em>un partenariat.</em></span></h2>
      <div class="grow"></div>
      <p ${a(3)}><span class="eyebrow">${S.pilot.askTitle}</span></p>
      <ul class="a ask" style="--d:4;margin-top:6px">${S.pilot.asks.map((x, i) => `<li data-n="0${i + 1}">${x}</li>`).join("")}</ul>
      <p class="a" style="--d:5;margin-top:10px"><span class="p">${fmt(S.pilot.askWhy)}</span></p>
      <p class="a" style="--d:6;margin-top:18px"><span class="eyebrow">${S.pilot.followTitle}</span></p>
      <p class="a" style="--d:6;margin-top:6px"><span class="p">${fmt(S.pilot.follow)} ${fmt(S.pilot.line)}</span></p>`],

    // 10 · Contact
    ["kaki", "contact", `
      <p ${a(1)}><span class="eyebrow">Contact</span></p>
      <h2 class="a" style="--d:2;margin-top:14px"><span class="h" style="font-size:34px">Accueillez Maison YAKA<br><em>dans votre magasin.</em></span></h2>
      <p class="a" style="--d:3;margin-top:12px"><span class="p">${fmt(S.cta.body)}</span></p>
      <div class="grow"></div>
      <div ${a(3)}><div class="people">${C.founders.map((p) => `<figure><img src="${p.image}" alt="${p.name}"><figcaption>${p.name}</figcaption></figure>`).join("")}</div></div>
      <div class="grow"></div>
      <div ${a(4)}><div class="btns">
        ${C.ctaEmail ? `<a class="btn gold" href="mailto:${C.ctaEmail}?subject=${encodeURIComponent("Accueillir Maison YAKA dans notre magasin")}">${S.cta.button} <small>${C.ctaEmail}</small></a>` : ""}
        ${C.founders[0].phone ? `<a class="btn" href="tel:${tel(C.founders[0].phone)}">Appeler Yanil <small>${C.founders[0].phone}</small></a>` : ""}
        ${C.founders.map((p) => `<a class="btn" href="mailto:${p.email}">Écrire à ${p.name.split(" ")[0]} <small>${p.email}</small></a>`).join("")}
        ${C.website ? `<a class="btn" href="https://${C.website}" target="_blank" rel="noopener">Notre site <small>${C.website}</small></a>` : ""}
      </div></div>`],
  ];

  /* ---------- Montage ---------- */
  const deck = document.getElementById("deck");
  deck.innerHTML = `
    ${cards.map(([theme, id, html]) => `<section class="card ${theme} c-${id}" id="${id}">${html}</section>`).join("")}`;
  const els = [...deck.querySelectorAll(".card")];

  if (/[?&]print\b/.test(location.search)) { els.forEach((e) => e.classList.add("on")); return; }

  /* ---------- Défilement vertical natif : une carte après l'autre ----------
     Aucun geste personnalisé : on fait simplement défiler la page au doigt. */
  deck.classList.add("scroll");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }), { threshold: 0.2 });
    els.forEach((e) => io.observe(e));
  } else els.forEach((e) => e.classList.add("on"));
  els[0].classList.add("on");
  const start = els.findIndex((e) => "#" + e.id === location.hash);
  if (start > 0) els[start].scrollIntoView();
})();
