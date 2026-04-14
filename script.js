// ============================================================
// CONFIGURACIÓN GLOW SITE
// ============================================================
const WHATSAPP_NUMERO   = "541135888575";
const INSTAGRAM_USUARIO = "glow.site";
// ============================================================

const desc = n => Math.round(n * 0.85);
const fmt  = n => "$" + n.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const productos = [
  { n: "Colágeno sachetera x 36 u.",                                    img: "", p: 20968 },
  { n: "Keratina Express sachetera x 36 u.",                            img: "", p: 15923 },
  { n: "Keratina en Crema sachetera x 36 u.",                           img: "", p: 21209 },
  { n: "Crema de Argan Express sachetera x 36 u.",                      img: "", p: 16782 },
  { n: "Crema de Argan sachetera x 36 u.",                              img: "", p: 21209 },
  { n: "Crema de Coco sachetera x 36 u.",                               img: "", p: 20967 },
  { n: "Rubios Totales sachetera x 36 u.",                              img: "", p: 22194 },
  { n: "Tratamiento 3 Minutos sachetera x 36 u.",                       img: "", p: 21209 },
  { n: "Palta en crema sachetera x 36 u.",                              img: "", p: 20982 },
  { n: "Aceite de Almendras sachetera x 36 u.",                         img: "", p: 20074 },
  { n: "Shock ácido sachetera x 36 u.",                                 img: "", p: 21089 },
  { n: "Botoxx Sachetera x 36 u.",                                      img: "", p: 20857 },
  { n: "911 con enjuague sachetera x 36 u.",                            img: "", p: 21312 },
  { n: "Cicatri total Tratamiento reparador Intensivo sachetera x 36 u.", img: "", p: 20967 },
  { n: "Lifting en crema sachetera x 36 u.",                            img: "", p: 21209 },
  { n: "Tratamiento 60 Segundos x 36 u.",                               img: "", p: 20209 },
  { n: "Brillo 3D sachetera x 36 u.",                                   img: "", p: 34731 },
  { n: "Ablandador de Canas sachetera x 36 u.",                         img: "", p: 15697 },
  { n: "Cristales de Keratina sachetera x 36 u.",                       img: "", p: 15817 },
  { n: "Glaseado sachetera x 36 u.",                                    img: "", p: 35310 },
  { n: "Oleo crema keratina + argan sachetera x 36 u.",                 img: "", p: 21209 },
  { n: "911 capilar sachetera x 36 u.",                                 img: "", p: 18976 },
  { n: "Shampoo neutro PH7 sachetera x 36 u.",                          img: "", p: 15485 },
  { n: "Oleo keratina + argan sachetera x 36 u.",                       img: "", p: 37537 },
  { n: "Tratamiento Pro B5 sachetera x 36 u.",                          img: "", p: 21311 },
  { n: "Shock ácido express sachetera x 36 u.",                         img: "", p: 15875 },
  { n: "Shampoo Pro K sachetera x 36 u.",                               img: "", p: 19239 },
  { n: "Acondicionador Pro K sachetera x 36 u.",                        img: "", p: 14706 },
  { n: "Exprimido de nutrición en crema sachetera x 36 u.",             img: "", p: 20017 },
  { n: "Cáctel extra ácido en crema sachetera x 36 u.",                 img: "", p: 21050 },
  { n: "Batido de vitaminas en crema sachetera x 36 u.",                img: "", p: 21050 },
  { n: "Tratamiento Pro B5 Doy pack",                                   img: "", p:  3852 },
  { n: "Cicatri total Tratamiento reparador Intensivo doy pack",        img: "", p:  3770 },
  { n: "Oleo crema keratina + argan doy pack",                          img: "", p:  3827 },
  { n: "Lifting en crema doy pack",                                     img: "", p:  3827 },
  { n: "Rubios totales doy pack",                                       img: "", p:  4063 },
  { n: "60 seg doy pack",                                               img: "", p:  3827 },
  { n: "Crema de coco doy pack",                                        img: "", p:  3755 },
  { n: "Palta en crema doy pack",                                       img: "", p:  3773 },
  { n: "Tratamiento 3 min doy pack",                                    img: "", p:  3827 },
  { n: "Botox doy pack",                                                img: "", p:  3743 },
  { n: "Crema de argan doy pack",                                       img: "", p:  3828 },
  { n: "Keratina en crema doy pack",                                    img: "", p:  3827 },
  { n: "Shock ácido doy pack",                                          img: "", p:  3799 },
  { n: "Batido de vitaminas en crema Doy pack",                         img: "", p:  3789 },
  { n: "Cáctel extra ácido en crema Doy pack",                          img: "", p:  3735 },
  { n: "Exprimido de nutrición en crema Doy pack",                      img: "", p:  3543 },
  { n: "Doy pack 911 con enjuague",                                     img: "", p:  3582 },
  { n: "Doy pack Colágeno",                                             img: "", p:  3769 },
  { n: "Ampolla ablandador de canas x 10ml",                            img: "", p:  1135 },
  { n: "Ampolla botox x 10ml",                                          img: "", p:  1952 },
  { n: "Ampolla glaseado x 10ml",                                       img: "", p:  1850 },
  { n: "Ampolla espuma estructurante x 10ml",                           img: "", p:  1467 },
  { n: "Crema de Argan express en pomo",                                img: "", p:  4489 },
  { n: "Keratina Express en Pomo",                                      img: "", p:  4119 },
  { n: "Emulsión Hidratante Anti-frizz en Pomo",                        img: "", p:  3332 },
  { n: "Oleo keratina + argan en Botella x 60grs",                      img: "", p:  6674 },
  { n: "911 Capilar en Botella x 60g",                                  img: "", p:  3536 },
  { n: "Aceite de almendras en botellita x 50ml",                       img: "", p:  3500 },
  { n: "Oleo Laminante Reparador",                                      img: "", p:  3070 },
  { n: "Crema de Argan Express en sachet",                              img: "", p:   520 },
  { n: "Tratamiento Pro B5 en Pote",                                    img: "", p:  4620 },
  { n: "Tratamiento Pro B5 sachet",                                     img: "", p:   661 },
  { n: "Colágeno en sachet",                                            img: "", p:   650 },
  { n: "Tratamiento Keratina en Pote",                                  img: "", p:  4496 },
  { n: "Polvo Decolorante x 30gr",                                      img: "", p:  1108 },
  { n: "Polvo Decolorante x 70gr",                                      img: "", p:  2192 },
  { n: "Coloración Capilar Con Oxidante",                               img: "", p:  1569 },
  { n: "Oxidante en sachet",                                            img: "", p:   480 },
  { n: "Coloración Semipermanente",                                     img: "", p:  1329 },
  { n: "Cicatri total Tratamiento reparador Intensivo sachet",          img: "", p:   850 },
  { n: "Acondicionador Pro K sachet",                                   img: "", p:   456 },
  { n: "Shampoo Pro K sachet",                                          img: "", p:   596 },
  { n: "911 Capilar Sachet",                                            img: "", p:   588 },
  { n: "Tratamiento 60 Segundos en Sachet",                             img: "", p:   657 },
  { n: "Oleo crema de keratina + argan sachet",                         img: "", p:   657 },
  { n: "Rubios totales en sachet",                                      img: "", p:   888 },
  { n: "Ablandador de Canas en Sachet",                                 img: "", p:   486 },
  { n: "Tratamiento 3 Minutos Sachet",                                  img: "", p:   657 },
  { n: "Palta en crema sachet",                                         img: "", p:   650 },
  { n: "Tratamiento Crema de Argan En Sachet",                          img: "", p:   644 },
  { n: "Botox Sachet",                                                  img: "", p:   646 },
  { n: "Oleo Keratina + Argan Sachet",                                  img: "", p:  1163 },
  { n: "Shampoo PH7 sachet",                                            img: "", p:   480 },
  { n: "Brillo 3D Sachet",                                              img: "", p:  1076 },
  { n: "Lifting en crema sachet",                                       img: "", p:   657 },
  { n: "Aceite Natural de Almendras Sachet",                            img: "", p:   622 },
  { n: "Cristales de Keratina en Sachet",                               img: "", p:   490 },
  { n: "Shock Ácido en Sachet",                                         img: "", p:   654 },
  { n: "Crema de Coco Sachet",                                          img: "", p:   648 },
  { n: "Glaseado Blindaje de Keratina sachet",                          img: "", p:  1095 },
  { n: "Keratina en Crema Sachet",                                      img: "", p:   657 },
  { n: "Keratina Express Sachet",                                       img: "", p:   494 },
  { n: "Shock ácido express en sachet",                                 img: "", p:   492 },
  { n: "Batido de vitaminas en crema sachet",                           img: "", p:   645 },
  { n: "Exprimido de nutrición en crema sachet",                        img: "", p:   620 },
  { n: "Cáctel extra ácido en crema sachet",                            img: "", p:   652 },
  { n: "911 con enjuague en sachet",                                    img: "", p:   660 },
  { n: "Ampolla 911 con enjuague",                                      img: "", p:  1952 },
];

// ── DOM refs ──────────────────────────────────────────────────
const gridEl   = document.getElementById("grid");
const countEl  = document.getElementById("count");
const buscador = document.getElementById("buscador");
const modal    = document.getElementById("detalle");

// ── Placeholder SVG ───────────────────────────────────────────
const placeholderSVG =
  '<div class="img-placeholder">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.2">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
      '<circle cx="8.5" cy="8.5" r="1.5"/>' +
      '<polyline points="21 15 16 10 5 21"/>' +
    '</svg>' +
  '</div>';

// ── Render grilla ─────────────────────────────────────────────
function render(lista) {
  countEl.textContent = lista.length + " productos encontrados";
  gridEl.innerHTML = "";

  lista.forEach(function(p) {
    var pN   = desc(p.p);
    var card = document.createElement("div");
    card.className = "card";

    var imgTag = p.img
      ? '<img src="images/' + p.img + '" alt="' + p.n + '" loading="lazy" />'
      : placeholderSVG;

    card.innerHTML =
      '<div class="img-box">' +
        imgTag +
        '<div class="disc-tag">−15%</div>' +
      '</div>' +
      '<div class="card-body">' +
        '<p class="card-name">' + p.n + '</p>' +
        '<div class="price-row">' +
          '<span class="precio-nuevo">' + fmt(pN) + '</span>' +
          '<span class="precio-viejo">' + fmt(p.p) + '</span>' +
        '</div>' +
        '<button class="ver-btn">Ver producto →</button>' +
      '</div>';

    card.addEventListener("click", function() { abrirProducto(p); });
    gridEl.appendChild(card);
  });
}

// ── Orden ─────────────────────────────────────────────────────
var ordenActual = "default";

function ordenar(lista) {
  var copia = lista.slice();
  if (ordenActual === "az")    return copia.sort(function(a, b) { return a.n.localeCompare(b.n, "es"); });
  if (ordenActual === "za")    return copia.sort(function(a, b) { return b.n.localeCompare(a.n, "es"); });
  if (ordenActual === "mayor") return copia.sort(function(a, b) { return b.p - a.p; });
  if (ordenActual === "menor") return copia.sort(function(a, b) { return a.p - b.p; });
  return copia;
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".orden-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".orden-btn").forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      ordenActual = btn.dataset.orden;
      filtrarYRenderizar();
    });
  });
});

// ── Buscador ──────────────────────────────────────────────────
function filtrarYRenderizar() {
  var q = buscador.value.toLowerCase().trim();
  var filtrados = q
    ? productos.filter(function(p) { return p.n.toLowerCase().includes(q); })
    : productos;
  render(ordenar(filtrados));
}

buscador.addEventListener("input", filtrarYRenderizar);

// ── Modal ─────────────────────────────────────────────────────
function abrirProducto(p) {
  document.getElementById("det-nombre").textContent = p.n;
  document.getElementById("det-viejo").textContent  = fmt(p.p);
  document.getElementById("det-nuevo").textContent  = fmt(desc(p.p));

  var mainEl  = document.getElementById("det-img-main");
  var thumbEl = document.getElementById("det-img-thumb");
  if (p.img) {
    mainEl.innerHTML  = '<img src="images/' + p.img + '" alt="' + p.n + '" />';
    thumbEl.innerHTML = '<img src="images/' + p.img + '" alt="' + p.n + '" />';
  } else {
    mainEl.innerHTML  = placeholderSVG;
    thumbEl.innerHTML = placeholderSVG;
  }

  var msg = encodeURIComponent("Hola Glow Site! Me interesa: " + p.n + " — Precio con descuento: " + fmt(desc(p.p)));
  document.getElementById("btn-wa").href =
    "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + msg;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function cerrar() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modal.addEventListener("click", function(e) {
  if (e.target === modal) cerrar();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") cerrar();
});

// ── Init ──────────────────────────────────────────────────────
filtrarYRenderizar();
