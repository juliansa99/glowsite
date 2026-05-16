// ============================================================
// CONFIGURACIÓN GLOW SITE
// ============================================================
const WHATSAPP_NUMERO   = "541135888575";
const INSTAGRAM_USUARIO = "glow.site";
// ============================================================

const fmt = n => "$" + n.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ── ZONAS DE ENVÍO ────────────────────────────────────────────
const COSTOS_ENVIO = { "CABA": 4000, "Z1": 7000, "Z2": 8000, "Z3": 10000 };
const NOMBRES_ZONA = {
  "CABA": "CABA — $4.000",
  "Z1":   "Zona 1 — $7.000",
  "Z2":   "Zona 2 — $8.000",
  "Z3":   "Zona 3 — $10.000",
};

function detectarZona(cp) {
  var n = parseInt(cp, 10);
  if (isNaN(n)) return null;

  // CABA: 1000 a 1499
  if (n >= 1000 && n <= 1499) return "CABA";

  // ZONA 1
  // Avellaneda
  if (n >= 1870 && n <= 1875) return "Z1";
  // Hurlingham
  if (n >= 1686 && n <= 1688) return "Z1";
  // Ituzaingó
  if (n >= 1714 && n <= 1715) return "Z1";
  // La Matanza Norte
  if (n >= 1752 && n <= 1758) return "Z1";
  // Lanús
  if (n >= 1820 && n <= 1829) return "Z1";
  // Lomas de Zamora
  if (n >= 1830 && n <= 1836) return "Z1";
  // Morón
  if (n >= 1708 && n <= 1713) return "Z1";
  // Vicente López
  if (n >= 1600 && n <= 1609) return "Z1";
  if (n >= 1636 && n <= 1639) return "Z1";
  // San Isidro
  if (n >= 1640 && n <= 1643) return "Z1";
  // San Martín
  if (n >= 1650 && n <= 1659) return "Z1";
  // Tres de Febrero
  if (n >= 1670 && n <= 1685) return "Z1";
  // San Fernando
  if (n >= 1644 && n <= 1646) return "Z1";

  // ZONA 2
  // Almirante Brown
  if (n >= 1840 && n <= 1859) return "Z2";
  // Esteban Echeverría
  if (n >= 1804 && n <= 1813) return "Z2";
  // Ezeiza
  if (n >= 1800 && n <= 1803) return "Z2";
  // Florencio Varela
  if (n >= 1886 && n <= 1895) return "Z2";
  // José C. Paz
  if (n >= 1665 && n <= 1669) return "Z2";
  // La Matanza Sur
  if (n >= 1759 && n <= 1780) return "Z2";
  // Malvinas Argentinas
  if (n >= 1613 && n <= 1617) return "Z2";
  // Merlo
  if (n >= 1716 && n <= 1731) return "Z2";
  // Moreno
  if (n >= 1740 && n <= 1751) return "Z2";
  // Quilmes
  if (n >= 1876 && n <= 1885) return "Z2";
  // San Miguel
  if (n >= 1660 && n <= 1664) return "Z2";
  // Tigre
  if (n >= 1618 && n <= 1635) return "Z2";

  // ZONA 3
  // Pilar
  if (n >= 1629 && n <= 1634) return "Z3";
  // Escobar
  if (n >= 1624 && n <= 1628) return "Z3";
  // La Plata
  if (n >= 1900 && n <= 1924) return "Z3";
  // Ensenada / Berisso
  if (n >= 1925 && n <= 1929) return "Z3";
  // Marcos Paz
  if (n >= 1732 && n <= 1733) return "Z3";
  // Cañuelas
  if (n === 1814) return "Z3";
  // San Vicente
  if (n === 1960) return "Z3";
  // Gral Rodríguez
  if (n >= 1748 && n <= 1749) return "Z3";

  return null;
}

const productos = [
  { n: "Colágeno sachetera x 36 u.",                                    img: "colageno-capilar.png", p: 28600, marca: "Mary Bosques" },
  { n: "Keratina Express sachetera x 36 u.",                            img: "keratina-express.jpg", p: 21000, marca: "Mary Bosques" },
  { n: "Keratina en Crema sachetera x 36 u.",                           img: "keratina-crema.jpg", p: 28900, marca: "Mary Bosques" },
  { n: "Crema de Argan Express sachetera x 36 u.",                      img: "crema-argan-express.jpg", p: 28100, marca: "Mary Bosques" },
  { n: "Crema de Argan sachetera x 36 u.",                              img: "crema-argan.jpg", p: 28900, marca: "Mary Bosques" },
  { n: "Crema de Coco sachetera x 36 u.",                               img: "crema-coco.jpg", p: 28400, marca: "Mary Bosques" },
  { n: "Rubios Totales sachetera x 36 u.",                              img: "rubios-totales.jpg", p: 29200, marca: "Mary Bosques" },
  { n: "Tratamiento 3 Minutos sachetera x 36 u.",                       img: "3-minutos.jpg", p: 28100, marca: "Mary Bosques" },
  { n: "Palta en crema sachetera x 36 u.",                              img: "palta-crema.jpg", p: 28500, marca: "Mary Bosques" },
  { n: "Aceite de Almendras sachetera x 36 u.",                         img: "aceite-almendras.jpg", p: 26600, marca: "Mary Bosques" },
  { n: "Shock ácido sachetera x 36 u.",                                 img: "shock-acido.png", p: 27900, marca: "Mary Bosques" },
  { n: "Botoxx Sachetera x 36 u.",                                      img: "botoxx.jpg", p: 27700, marca: "Mary Bosques" },
  { n: "911 con enjuague sachetera x 36 u.",                            img: "911-enguaje.png", p: 29000, marca: "Mary Bosques" },
  { n: "Cicatri total Tratamiento reparador Intensivo sachetera x 36 u.", img: "cicatri-total.png", p: 28500, marca: "Mary Bosques" },
  { n: "Lifting en crema sachetera x 36 u.",                            img: "lifting-crema.png", p: 28900, marca: "Mary Bosques" },
  { n: "Tratamiento 60 Segundos x 36 u.",                               img: "60-segundos.jpg", p: 28900, marca: "Mary Bosques" },
  { n: "Brillo 3D sachetera x 36 u.",                                   img: "brillo-3d.png", p: 46000, marca: "Mary Bosques" },
  { n: "Ablandador de Canas sachetera x 36 u.",                         img: "ablandador-canas.jpg", p: 20800, marca: "Mary Bosques" },
  { n: "Cristales de Keratina sachetera x 36 u.",                       img: "cristales-keratina.jpg", p: 21000, marca: "Mary Bosques" },
  { n: "Glaseado sachetera x 36 u.",                                    img: "glaseado.jpg", p: 46800, marca: "Mary Bosques" },
  { n: "Oleo crema keratina + argan sachetera x 36 u.",                 img: "oleo-crema.png", p: 28900, marca: "Mary Bosques" },
  { n: "911 capilar sachetera x 36 u.",                                 img: "911-capilar.jpg", p: 25200, marca: "Mary Bosques" },
  { n: "Shampoo neutro PH7 sachetera x 36 u.",                          img: "shampoo-neutro.jpg", p: 20500, marca: "Mary Bosques" },
  { n: "Oleo keratina + argan sachetera x 36 u.",                       img: "oleo-keratina.jpg", p: 49700, marca: "Mary Bosques" },
  { n: "Tratamiento Pro B5 sachetera x 36 u.",                          img: "tratamiento-pro-b5.jpg", p: 29000, marca: "Mary Bosques" },
  { n: "Shock ácido express sachetera x 36 u.",                         img: "shock-acido-express.png", p: 21100, marca: "Mary Bosques" },
  { n: "Shampoo Pro K sachetera x 36 u.",                               img: "shampoo-pro-k.jpg", p: 26000, marca: "Mary Bosques" },
  { n: "Acondicionador Pro K sachetera x 36 u.",                        img: "acondicionador-pro-k.jpg", p: 19400, marca: "Mary Bosques" },
  { n: "Exprimido de nutrición en crema sachetera x 36 u. (Banana y Kiwi)", img: "exprimido-reparacion.jpg", p: 27100, marca: "Mary Bosques" },
  { n: "Coctel extra ácido en crema sachetera x 36 u. (Naranja y Papaya)", img: "coctel-acido.jpg", p: 28300, marca: "Mary Bosques" },
  { n: "Batido de vitaminas en crema sachetera x 36 u. (Mango y Café verde)", img: "batido-vitaminas.jpg", p: 28600, marca: "Mary Bosques" },
  { n: "Tratamiento Pro B5 Doy pack",                                   img: "pack-911.jpg", p: 5000, marca: "Mary Bosques" },
  { n: "Cicatri total Tratamiento reparador Intensivo doy pack",        img: "pack-colageno.jpg", p: 4800, marca: "Mary Bosques" },
  { n: "Oleo crema keratina + argan doy pack",                          img: "pack-oleo-crema.jpg", p: 4900, marca: "Mary Bosques" },
  { n: "Lifting en crema doy pack",                                     img: "pack-lifting-crema.png", p: 4900, marca: "Mary Bosques" },
  { n: "Rubios totales doy pack",                                       img: "pack-rubios.png", p: 5000, marca: "Mary Bosques" },
  { n: "60 seg doy pack",                                               img: "pack-60-segundos.jpg", p: 4900, marca: "Mary Bosques" },
  { n: "Crema de coco doy pack",                                        img: "pack-crema-coco.png", p: 4900, marca: "Mary Bosques" },
  { n: "Palta en crema doy pack",                                       img: "pack-palta.jpg", p: 4800, marca: "Mary Bosques" },
  { n: "Tratamiento 3 min doy pack",                                    img: "pack-3-minutos.jpg", p: 4900, marca: "Mary Bosques" },
  { n: "Botox doy pack",                                                img: "pack-botox.jpg", p: 4800, marca: "Mary Bosques" },
  { n: "Crema de argan doy pack",                                       img: "pack-crema-argan.png", p: 4700, marca: "Mary Bosques" },
  { n: "Keratina en crema doy pack",                                    img: "pack-keratina-crema.png", p: 4900, marca: "Mary Bosques" },
  { n: "Shock ácido doy pack",                                          img: "pack-shock-acido.jpg", p: 4900, marca: "Mary Bosques" },
  { n: "Batido de vitaminas en crema Doy pack (Mango y Café verde)",    img: "pack-batido.jpg", p: 4600, marca: "Mary Bosques" },
  { n: "Coctel extra ácido en crema Doy pack (Naranja y Papaya)",       img: "pack-coctel.jpg", p: 4600, marca: "Mary Bosques" },
  { n: "Exprimido de nutrición en crema Doy pack (Banana y Kiwi)",      img: "pack-exprimido.jpg", p: 4400, marca: "Mary Bosques" },
  { n: "Doy pack 911 con enjuague",                                     img: "911-enguaje.png", p: 4700, marca: "Mary Bosques" },
  { n: "Doy pack Colágeno",                                             img: "pack-colageno.jpg", p: 4800, marca: "Mary Bosques" },
  { n: "Ampolla ablandador de canas x 10ml",                            img: "ampolla-ablandador.jpg", p: 1500, marca: "Mary Bosques" },
  { n: "Ampolla botox x 10ml",                                          img: "ampolla-botox.jpg", p: 2600, marca: "Mary Bosques" },
  { n: "Ampolla glaseado x 10ml",                                       img: "ampolla-glaseado.jpg", p: 2400, marca: "Mary Bosques" },
  { n: "Ampolla espuma estructurante x 10ml",                           img: "ampolla-espuma.jpg", p: 2000, marca: "Mary Bosques" },
  { n: "Crema de Argan express en pomo",                                img: "pomo-crema-argan.jpg", p: 6300, marca: "Mary Bosques" },
  { n: "Keratina Express en Pomo",                                      img: "pomo-keratina.jpg", p: 5800, marca: "Mary Bosques" },
  { n: "Emulsión Hidratante Anti-frizz en Pomo",                        img: "pomo-emulsion.png", p: 4700, marca: "Mary Bosques" },
  { n: "Oleo keratina + argan en Botella x 60grs",                      img: "botella-oleo-keratina.jpg", p: 8800, marca: "Mary Bosques" },
  { n: "911 Capilar en Botella x 60g",                                  img: "botella-911.jpg", p: 4700, marca: "Mary Bosques" },
  { n: "Aceite de almendras en botellita x 50ml",                       img: "botella-aceite-almendra.jpg", p: 5000, marca: "Mary Bosques" },
  { n: "Oleo Laminante Reparador",                                      img: "oleo-laminante.png", p: 4100, marca: "Mary Bosques" },
  { n: "Crema de Argan Express en sachet",                              img: "crema-argan-sachet.jpg", p: 680, marca: "Mary Bosques" },
  { n: "Tratamiento Pro B5 en Pote",                                    img: "pote-prob5.jpg", p: 6100, marca: "Mary Bosques" },
  { n: "Tratamiento Pro B5 sachet",                                     img: "sachet-prob5.jpg", p: 850, marca: "Mary Bosques" },
  { n: "Colágeno en sachet",                                            img: "sachet-colageno.jpg", p: 850, marca: "Mary Bosques" },
  { n: "Tratamiento Keratina en Pote",                                  img: "pote-keratina.jpg", p: 6400, marca: "Mary Bosques" },
  { n: "Polvo Decolorante x 30gr",                                      img: "polvo-30g.jpg", p: 1700, marca: "Mary Bosques" },
  { n: "Polvo Decolorante x 70gr",                                      img: "polvo-70g.jpg", p: 3400, marca: "Mary Bosques" },
  { n: "Cicatri total Tratamiento reparador Intensivo sachet",          img: "cicatri-total-chico.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Acondicionador Pro K sachet",                                   img: "pro-k.png", p: 660, marca: "Mary Bosques" },
  { n: "Shampoo Pro K sachet",                                          img: "shampoo-prok.png", p: 850, marca: "Mary Bosques" },
  { n: "911 Capilar Sachet",                                            img: "sachet-911.jpg", p: 850, marca: "Mary Bosques" },
  { n: "Tratamiento 60 Segundos en Sachet",                             img: "sachet-60segs.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Oleo crema de keratina + argan sachet",                         img: "sachet-oleo.jpg", p: 860, marca: "Mary Bosques" },
  { n: "Rubios totales en sachet",                                      img: "rusachet-rubio.jpg", p: 990, marca: "Mary Bosques" },
  { n: "Ablandador de Canas en Sachet",                                 img: "sachet-ablandador.jpg", p: 640, marca: "Mary Bosques" },
  { n: "Tratamiento 3 Minutos Sachet",                                  img: "sachet-3mins.jpg", p: 860, marca: "Mary Bosques" },
  { n: "Palta en crema sachet",                                         img: "sachet-palta.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Tratamiento Crema de Argan En Sachet",                          img: "sachet-crema-argan.png", p: 860, marca: "Mary Bosques" },
  { n: "Botox Sachet",                                                  img: "sachet-botox.png", p: 850, marca: "Mary Bosques" },
  { n: "Oleo Keratina + Argan Sachet",                                  img: "sachet-oleo.jpg", p: 1500, marca: "Mary Bosques" },
  { n: "Shampoo PH7 sachet",                                            img: "shampoo-ph7.jpg", p: 630, marca: "Mary Bosques" },
  { n: "Brillo 3D Sachet",                                              img: "sachet-brillo3d.jpg", p: 1420, marca: "Mary Bosques" },
  { n: "Lifting en crema sachet",                                       img: "sachet-lifting.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Aceite Natural de Almendras Sachet",                            img: "sachet-aceite.jpg", p: 820, marca: "Mary Bosques" },
  { n: "Cristales de Keratina en Sachet",                               img: "sachet-cristal.jpg", p: 700, marca: "Mary Bosques" },
  { n: "Shock Ácido en Sachet",                                         img: "sachet-shock.jpg", p: 860, marca: "Mary Bosques" },
  { n: "Crema de Coco Sachet",                                          img: "sachet-crema-coco.jpg", p: 900, marca: "Mary Bosques" },
  { n: "Glaseado Blindaje de Keratina sachet",                          img: "glaseado.jpg", p: 1440, marca: "Mary Bosques" },
  { n: "Keratina en Crema Sachet",                                      img: "sachet-keratina.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Keratina Express Sachet",                                       img: "sachet-keratina-express.jpg", p: 650, marca: "Mary Bosques" },
  { n: "Shock ácido express en sachet",                                 img: "sachet-shock-express.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Batido de vitaminas en crema sachet (Mango y Café verde)",      img: "batido-vitaminas.jpg", p: 900, marca: "Mary Bosques" },
  { n: "Exprimido de nutrición en crema sachet (Banana y Kiwi)",        img: "exprimido-reparacion.jpg", p: 900, marca: "Mary Bosques" },
  { n: "Coctel extra ácido en crema sachet (Naranja y Papaya)",         img: "coctel-acido.jpg", p: 900, marca: "Mary Bosques" },
  { n: "911 con enjuague en sachet",                                    img: "sachet-911.jpg", p: 950, marca: "Mary Bosques" },
  { n: "Ampolla 911 con enjuague",                                      img: "ampolla-911.jpg", p: 3000, marca: "Mary Bosques" },
  // ── FITHOCOLOR ──────────────────────────────────────────────
  { n: "Polvo Decolorante Go Blonder Plex 9+",          img: "fithocolor/polvo.jpg", p: 26900, marca: "Fithocolor" },
  { n: "Protector Termico Rosa de Jerico x 125ml",      img: "fithocolor/protector-rosa.jpg", p: 9130, marca: "Fithocolor" },
  { n: "Shampoo Neutro x 350ml",                        img: "fithocolor/shampoo-neutro.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Acondicionador Neutro x 350ml",                 img: "fithocolor/acondicionador-neutro.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Shampoo Extra Acido x 350ml",                   img: "fithocolor/shampoo-extra-acido.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Acondicionador Extra Acido x 350ml",            img: "fithocolor/acond-extra-acido.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Shampoo Proteccion Color x 350ml",              img: "fithocolor/shampoo-protec-color.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Acondicionador Proteccion Color x 350ml",       img: "fithocolor/acondicionador-protec-color.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Shampoo Restaurador Nutritivo x 350ml",         img: "fithocolor/shampoo-rest-nutri.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Acondicionador Restaurador Nutritivo x 350ml",  img: "fithocolor/acond-rest-nutri.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Crema de Peinar Protulina Antiestatica",        img: "fithocolor/crema-protulina.jpg", p: 4620, marca: "Fithocolor" },
  { n: "Shampoo Hidroplex x 350ml",                     img: "fithocolor/shampoo-hidroplex.jpg", p: 7500, marca: "Fithocolor" },
  { n: "Hidratacion Nutritiva Hidroplex",               img: "fithocolor/hidra-nutritiva.jpg", p: 9130, marca: "Fithocolor" },
  { n: "Mascara Hidro Plex x 300ml",                    img: "fithocolor/mascara-hidroplex.jpg", p: 12165, marca: "Fithocolor" },
  { n: "Crema de Peinar Hidro-Plex Triple Accion",      img: "fithocolor/crema-peinar-hidroplex.jpg", p: 9735, marca: "Fithocolor" },
  { n: "Shampoo Glycolic Biotin x 300ml",               img: "fithocolor/shampoo-glycolic.jpg", p: 9900, marca: "Fithocolor" },
  { n: "Acondicionador Glycolic Biotin x 300ml",        img: "fithocolor/acond-glycolic.jpg", p: 9900, marca: "Fithocolor" },
  { n: "Mascara Glycolic Biotin x 300ml",               img: "fithocolor/mascara-glycolic.jpg", p: 10560, marca: "Fithocolor" },
  { n: "Serum Glycolic Biotin x 125ml",                 img: "fithocolor/serum-glycolic.jpg", p: 6050, marca: "Fithocolor" },
  { n: "Crema de Peinar Glycolic Biotin",               img: "fithocolor/crema-peinar-glycolic.jpg", p: 5650, marca: "Fithocolor" },
  { n: "Protector Termico Glycolic Biotin Final Gloss", img: "fithocolor/protector-glycolic.jpg", p: 10825, marca: "Fithocolor" },
  { n: "Gel de Peinado NON OIL",                        img: "fithocolor/gel-non.jpg", p: 5780, marca: "Fithocolor" },
  { n: "Crema de Peinar Eco Styling",                   img: "fithocolor/crema-eco.jpg", p: 4620, marca: "Fithocolor" },
  { n: "Shampoo Liss Pro",                              img: "fithocolor/shampoo-liss.jpg", p: 9600, marca: "Fithocolor" },
  { n: "Acondicionador Liss Pro",                       img: "fithocolor/acond-liss.jpg", p: 9600, marca: "Fithocolor" },
  { n: "Crema Alisadora x 300ml Liss Pro",              img: "fithocolor/crema-liss.jpg", p: 17600, marca: "Fithocolor" },
  { n: "Mascara Rosa de Jerico x 300ml",                img: "fithocolor/mascara-rosa.jpg", p: 12170, marca: "Fithocolor" },
  { n: "Oleo Activador de Argan x 60ml",                img: "fithocolor/oleo-activador.jpg", p: 17320, marca: "Fithocolor" },
  { n: "Spray Protector Savia x 125ml",                 img: "fithocolor/spray.jpg", p: 11450, marca: "Fithocolor" },
  { n: "Spray Revitalizador con Celulas Madre",         img: "fithocolor/spray-revitalizador.jpg", p: 13750, marca: "Fithocolor" },
  { n: "Shampoo Rosa de Jerico x 300ml",                img: "fithocolor/shampoo-rosa.jpg", p: 6950, marca: "Fithocolor" },
  { n: "Tratamiento Rosa de Jerico x 50ml",             img: "fithocolor/tratamiento-rosa.jpg", p: 2500, marca: "Fithocolor" },
  { n: "Tratamiento Rosa de Jerico x 50ml Display x 24 unidades", img: "fithocolor/tratamiento-rosa-pack.jpg", p: 45750, marca: "Fithocolor" },
  // ── BRAZILIAN KERATIN ────────────────────────────────────────
  { n: "Mascara Biotina & Acido Glicolico x 250gr",     img: "brazil/mascara-braz.jpg", p: 11000, marca: "Brazilian Keratin" },
  { n: "Crema Alisado sin Formol x 250gr",              img: "brazil/crema-braz.jpg", p: 21000, marca: "Brazilian Keratin" },
  { n: "Protector Termico x 200ml",                     img: "brazil/prot-termico-braz.jpg", p: 8500, marca: "Brazilian Keratin" },
  { n: "Mascara Capilar con Celulas Madre x 250gr",     img: "brazil/mascara-cap-braz.jpg", p: 10000, marca: "Brazilian Keratin" },
  { n: "Mascara Capilar Maca & Colageno x 250gr",       img: "brazil/mascara-cap-col-braz.jpg", p: 11000, marca: "Brazilian Keratin" },
  { n: "Alisado sin Formol con Biotina y Acido Glicolico", img: "brazil/alisado-braz.jpg", p: 24000, marca: "Brazilian Keratin" },
  // ── KARSEELL ─────────────────────────────────────────────────
  { n: "Acondicionador Repair x 500ml",         img: "acond-karseell.jpg", p: 31000, marca: "Karseell" },
  { n: "Shampoo Moisture x 500ml",              img: "shampoo-karseell.jpg", p: 31000, marca: "Karseell" },
  { n: "Mascara Purple x 500ml",                img: "purple-karseell.jpg", p: 38000, marca: "Karseell" },
  { n: "Protein Leave in x 200ml Sin Enjuague", img: "protein-karseell.jpg", p: 31000, marca: "Karseell" },
  { n: "Mascara Maca Power x 500gr",            img: "mascara-karseell.jpg", p: 28000, marca: "Karseell" },
  { n: "Maca Essence Oil",                      img: "oil-karseell.jpg", p: 26000, marca: "Karseell" },
];

// ── CARRITO ───────────────────────────────────────────────────
var carrito = [];
var envioZona = null;
var envioCosto = 0;

function carritoSubtotal() { return carrito.reduce(function(s,i){ return s+i.p*i.qty; },0); }
function carritoTotal()    { return carritoSubtotal() + envioCosto; }
function carritoCount()    { return carrito.reduce(function(s,i){ return s+i.qty; },0); }

function agregarAlCarrito(prod) {
  var idx = carrito.findIndex(function(i){ return i.n===prod.n; });
  if (idx>=0) { carrito[idx].qty++; } else { carrito.push({n:prod.n,p:prod.p,qty:1}); }
  actualizarBadgeCarrito(); renderCarrito(); mostrarToast(prod.n);
}

function cambiarCantidad(nombre, delta) {
  var idx = carrito.findIndex(function(i){ return i.n===nombre; });
  if (idx<0) return;
  carrito[idx].qty += delta;
  if (carrito[idx].qty<=0) carrito.splice(idx,1);
  actualizarBadgeCarrito(); renderCarrito();
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(function(i){ return i.n!==nombre; });
  actualizarBadgeCarrito(); renderCarrito();
}

function vaciarCarrito() {
  carrito=[]; envioZona=null; envioCosto=0;
  actualizarBadgeCarrito(); renderCarrito();
}

function actualizarBadgeCarrito() {
  var badge = document.getElementById("cart-badge");
  var cnt = carritoCount();
  badge.textContent = cnt;
  badge.style.display = cnt>0 ? "flex" : "none";
  var fab = document.getElementById("cart-fab");
  if (cnt>0) {
    fab.classList.add("visible");
    document.getElementById("cart-fab-badge").textContent = cnt+" producto"+(cnt>1?"s":"");
    document.getElementById("cart-fab-total").textContent = fmt(carritoTotal());
  } else { fab.classList.remove("visible"); }
}

function aplicarCP() {
  var cp = document.getElementById("cp-input").value.trim();
  var msgEl = document.getElementById("cp-msg");
  if (!cp) { msgEl.textContent=""; envioZona=null; envioCosto=0; renderCarrito(); return; }
  var zona = detectarZona(cp);
  if (!zona) {
    msgEl.className="cp-msg cp-error";
    msgEl.textContent="⚠ CP no encontrado en nuestra zona. Consultanos por WhatsApp.";
    envioZona=null; envioCosto=0;
  } else {
    envioZona=zona; envioCosto=COSTOS_ENVIO[zona];
    msgEl.className="cp-msg cp-ok";
    msgEl.textContent="✓ "+NOMBRES_ZONA[zona];
  }
  actualizarBadgeCarrito(); renderCarrito();
}

function renderCarrito() {
  var lista     = document.getElementById("cart-lista");
  var vacioEl   = document.getElementById("cart-vacio");
  var accionesEl= document.getElementById("cart-acciones");

  if (carrito.length===0) {
    lista.innerHTML=""; vacioEl.style.display="flex"; accionesEl.style.display="none"; return;
  }
  vacioEl.style.display="none"; accionesEl.style.display="flex";
  document.getElementById("cart-subtotal-val").textContent = fmt(carritoSubtotal());
  document.getElementById("cart-envio-val").textContent    = envioCosto>0 ? fmt(envioCosto) : "—";
  document.getElementById("cart-total-val").textContent    = fmt(carritoTotal());

  lista.innerHTML = carrito.map(function(item){
    var n = item.n.replace(/\\/g,"\\\\").replace(/'/g,"\\'");
    return '<div class="cart-item">'+
      '<div class="cart-item-info">'+
        '<p class="cart-item-name">'+item.n+'</p>'+
        '<p class="cart-item-sub">'+fmt(item.p)+' c/u · Sub: '+fmt(item.p*item.qty)+'</p>'+
      '</div>'+
      '<div class="cart-item-qty">'+
        '<button class="qty-btn" onclick="cambiarCantidad(\''+n+'\',-1)">−</button>'+
        '<span class="qty-num">'+item.qty+'</span>'+
        '<button class="qty-btn" onclick="cambiarCantidad(\''+n+'\',1)">+</button>'+
        '<button class="qty-del" onclick="eliminarDelCarrito(\''+n+'\')">✕</button>'+
      '</div>'+
    '</div>';
  }).join("");
}

function generarMensajeCarrito() {
  var lineas=["🛒 *Mi pedido en Glow Site:*\n"];
  carrito.forEach(function(item,i){
    lineas.push((i+1)+". "+item.n+" x"+item.qty+" — "+fmt(item.p*item.qty));
  });
  lineas.push("\n📦 *Subtotal: "+fmt(carritoSubtotal())+"*");
  if (envioCosto>0) lineas.push("🚚 *Envío ("+NOMBRES_ZONA[envioZona]+"): "+fmt(envioCosto)+"*");
  lineas.push("\n💰 *TOTAL: "+fmt(carritoTotal())+"*");
  lineas.push("\n(Precios con 15% OFF incluido)");
  return lineas.join("\n");
}

function consultarCarritoWhatsapp() {
  if (!carrito.length) return;
  window.open("https://wa.me/"+WHATSAPP_NUMERO+"?text="+encodeURIComponent(generarMensajeCarrito()),"_blank");
}

function consultarCarritoInstagram() {
  if (!carrito.length) return;
  if (navigator.clipboard) navigator.clipboard.writeText(generarMensajeCarrito()).then(function(){ mostrarToastInfo("¡Pedido copiado! Pegalo en Instagram 📋"); });
  setTimeout(function(){ window.open("https://www.instagram.com/"+INSTAGRAM_USUARIO+"/","_blank"); },800);
}

function mostrarToast(nombre) {
  var t=document.getElementById("toast");
  t.innerHTML='<span class="toast-icon">🛒</span> <strong>'+nombre.substring(0,28)+(nombre.length>28?"…":"")+'</strong> agregado';
  t.classList.add("show"); clearTimeout(t._timer);
  t._timer=setTimeout(function(){ t.classList.remove("show"); },2500);
}
function mostrarToastInfo(msg) {
  var t=document.getElementById("toast");
  t.innerHTML=msg; t.classList.add("show"); clearTimeout(t._timer);
  t._timer=setTimeout(function(){ t.classList.remove("show"); },3500);
}

function abrirCarrito() {
  document.getElementById("cart-panel").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow="hidden"; renderCarrito();
}
function cerrarCarrito() {
  document.getElementById("cart-panel").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow="";
}

// ── DOM ───────────────────────────────────────────────────────
const gridEl   = document.getElementById("grid");
const countEl  = document.getElementById("count");
const buscador = document.getElementById("buscador");
const modal    = document.getElementById("detalle");

const placeholderSVG =
  '<div class="img-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.2">'+
  '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>'+
  '<polyline points="21 15 16 10 5 21"/></svg></div>';

function render(lista) {
  countEl.textContent = lista.length+" productos encontrados";
  gridEl.innerHTML="";
  lista.forEach(function(p){
    var card=document.createElement("div");
    card.className="card";
    var imgTag=p.img?'<img src="images/'+p.img+'" alt="'+p.n+'" loading="lazy" />':placeholderSVG;
    var marcaClass="marca-"+p.marca.toLowerCase().replace(/\s+/g,"-");
    card.innerHTML=
      '<div class="img-box">'+
        imgTag+
        '<div class="disc-tag">15% OFF</div>'+
        '<span class="marca-tag '+marcaClass+'">'+p.marca+'</span>'+
      '</div>'+
      '<div class="card-body">'+
        '<p class="card-name">'+p.n+'</p>'+
        '<div class="price-row"><span class="precio-nuevo">'+fmt(p.p)+'</span></div>'+
        '<p class="precio-incluye">✦ Precio con 15% OFF incluido</p>'+
        '<div class="card-btns">'+
          '<button class="ver-btn">Ver detalle →</button>'+
          '<button class="add-cart-btn" title="Agregar al carrito">'+
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'+
          '</button>'+
        '</div>'+
      '</div>';
    card.querySelector(".ver-btn").addEventListener("click",function(e){ e.stopPropagation(); abrirProducto(p); });
    card.querySelector(".add-cart-btn").addEventListener("click",function(e){ e.stopPropagation(); agregarAlCarrito(p); });
    card.addEventListener("click",function(){ abrirProducto(p); });
    gridEl.appendChild(card);
  });
}

var ordenActual="default", marcaActual="todas";

function ordenar(lista){
  var c=lista.slice();
  if (ordenActual==="az")    return c.sort(function(a,b){ return a.n.localeCompare(b.n,"es"); });
  if (ordenActual==="za")    return c.sort(function(a,b){ return b.n.localeCompare(a.n,"es"); });
  if (ordenActual==="mayor") return c.sort(function(a,b){ return b.p-a.p; });
  if (ordenActual==="menor") return c.sort(function(a,b){ return a.p-b.p; });
  return c;
}

document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".orden-btn").forEach(function(btn){
    btn.addEventListener("click",function(){
      document.querySelectorAll(".orden-btn").forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active"); ordenActual=btn.dataset.orden; filtrarYRenderizar();
    });
  });
  document.querySelectorAll(".marca-btn").forEach(function(btn){
    btn.addEventListener("click",function(){
      document.querySelectorAll(".marca-btn").forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active"); marcaActual=btn.dataset.marca; filtrarYRenderizar();
    });
  });
  document.getElementById("cart-overlay").addEventListener("click",cerrarCarrito);
  document.getElementById("cp-input").addEventListener("keydown",function(e){ if(e.key==="Enter") aplicarCP(); });
});

function filtrarYRenderizar(){
  var q=buscador.value.toLowerCase().trim();
  var f=productos;
  if (marcaActual!=="todas") f=f.filter(function(p){ return p.marca===marcaActual; });
  if (q) f=f.filter(function(p){ return p.n.toLowerCase().includes(q); });
  render(ordenar(f));
}
buscador.addEventListener("input",filtrarYRenderizar);

function abrirProducto(p){
  document.getElementById("det-nombre").textContent=p.n;
  document.getElementById("det-viejo").textContent="";
  document.getElementById("det-nuevo").textContent=fmt(p.p);
  document.getElementById("btn-add-cart-modal").onclick=function(){ agregarAlCarrito(p); };
  var mainEl=document.getElementById("det-img-main");
  var thumbEl=document.getElementById("det-img-thumb");
  if(p.img){
    mainEl.innerHTML='<img src="images/'+p.img+'" alt="'+p.n+'" />';
    thumbEl.innerHTML='<img src="images/'+p.img+'" alt="'+p.n+'" />';
  } else { mainEl.innerHTML=placeholderSVG; thumbEl.innerHTML=placeholderSVG; }
  document.getElementById("btn-wa").href="https://wa.me/"+WHATSAPP_NUMERO+"?text="+encodeURIComponent("Hola Glow Site! Me interesa: "+p.n+" — Precio: "+fmt(p.p)+" (con 15% OFF incluido)");
  modal.classList.add("open"); document.body.style.overflow="hidden";
}

function cerrar(){ modal.classList.remove("open"); document.body.style.overflow=""; }
modal.addEventListener("click",function(e){ if(e.target===modal) cerrar(); });
document.addEventListener("keydown",function(e){ if(e.key==="Escape"){ cerrar(); cerrarCarrito(); } });

filtrarYRenderizar();
actualizarBadgeCarrito();