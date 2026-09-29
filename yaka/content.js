/* ==========================================================================
   YAKA — CONTENU DE LA PRÉSENTATION
   --------------------------------------------------------------------------
   Toutes les données susceptibles de changer sont ici : textes, chiffres,
   prix, café, association, contacts, images.
   Modifier ce fichier suffit : le design ne bouge pas.

   Conventions :
   - "\n"            → retour à la ligne
   - "[[texte]]"     → élément À COMPLÉTER, affiché comme placeholder visible
   - image: null     → un emplacement photo premium s'affiche à la place
   - partner: null   → présentation générique « votre magasin »
                       (renseigner { name, city } pour personnaliser une version)
   ========================================================================== */

window.YAKA_CONTENT = {

  /* ---------- Général ---------------------------------------------------- */
  meta: {
    brand: "Maison YAKA",
    documentTitle: "Maison YAKA — L’animation café solidaire pour votre magasin",
    edition: "Animation café solidaire · Présentation magasins",
    audience: "Magasins partenaires",
  },

  /* null = version générique. Exemple de version personnalisée :
     partner: { name: "Magasin", city: "Ville" }, */
  partner: null,

  founders: [
    { name: "Yanil Bey-Omar", role: "Cofondateur", image: "assets/yanil.jpg", phone: "06 17 99 14 80", email: "yanil@webonestudio.fr" },
    { name: "Arthur Mignon",  role: "Cofondateur", image: "assets/arthur.jpg", phone: null, email: "arthur@webonestudio.fr" },
  ],

  /* Adresse utilisée par le bouton final. null → le bouton renvoie aux contacts. */
  ctaEmail: "contact@webonestudio.fr",
  contactEmail: "contact@webonestudio.fr",

  /* Site de la marque (affiché sur l’écran contact) */
  website: "maison-yaka.fr",

  images: {
    packaging: "assets/paquet.webp",        // paquet seul (fond de l’écran contact)
    hero: "assets/recolte.webp",            // couverture : récolte vue du ciel (comme maison-yaka.fr)
    terroir: "assets/terroir.webp",         // panorama des terres d’origine
    logoGold: "assets/logo-or.webp",        // logo Maison YAKA doré
    packFront: "assets/recolte-mobile.webp", // couverture sur téléphone
    packBack: "assets/pack-grains.webp",    // sachet de grains 250 g (détouré)
    packCaps: "assets/pack-capsules.webp",  // boîte de 20 capsules (détourée)
    beans: "assets/recolte.webp",           // récolte des cerises de café, vue aérienne
    student: "assets/etudiant.webp",        // étudiant Maison YAKA au stand
    ear: "assets/oreille.jpg",              // oreille formée par une foule
    onsite: "assets/stand.webp",            // le stand Maison YAKA en magasin
  },

  /* ---------- Le café ---------------------------------------------------- */
  coffee: {
    type: "100 % Arabica d’altitude",
    blend: "Assemblage de quatre origines",
    origins: "Brésil · Colombie · Pérou · Éthiopie",
    originsRole: "Brésil pour la rondeur, Colombie pour l’équilibre, Pérou pour la douceur, Éthiopie pour le parfum",
    roast: "Medium-dark, par des maîtres torréfacteurs européens",
    products: [
      { name: "Café en grains", format: "Sachet 250 g", price: "14,90 €", note: "Sachet à valve fraîcheur dégazante" },
      { name: "Café en capsules", format: "Boîte de 20 capsules", price: "14,90 €", note: "Capsules operculées une à une" },
    ],
    form: "Grains 250 g · 20 capsules",
    weight: "250 g",
    price: "14,90 € TTC",
    priceLabel: "Prix public",
    usage: "Grains : espresso, machine automatique, italienne, filtre, piston · Capsules : espresso",
    profile: ["Cacao", "Noisette", "Rond"],
  },

  /* ---------- L'association ---------------------------------------------- */
  cause: {
    perPack: 1,                 // € reversés par produit acheté
    raised: "1 160 €",          // montant déjà reversé (source : maison-yaka.fr/engagement)
    example: 1000,              // exemple mis en avant : 1 000 produits = 1 000 €
    simulatorMax: 3000,         // borne haute du simulateur
    audience: "les personnes sourdes et malentendantes",
    partnerStatus: "Association en cours de sélection",
    partnerName: null,          // renseigner lorsque le partenariat sera officiel
  },

  /* ---------- Vente terrain (autre catégorie de produit) ----------------- */
  field: {
    target: 240,
    average: 340,
    founderRevenue: 416,
    best: 750,
    lowest: 180,
    founderSales: 34,
    salesHypothesis: 24,
    disclaimer: "Résultats observés lors d’une journée de vente sur stand, avec une autre catégorie de produit. Ce sont des observations, pas une prévision ni une garantie de performance pour Maison YAKA.",
  },

  /* ---------- Écrans ----------------------------------------------------- */
  slides: {

    cover: {
      nav: "Maison YAKA",
      tagline: "L’animation café solidaire,\nclé en main.",
      promise: "1 produit acheté = 1 € reversé\naux personnes sourdes et malentendantes.",
      eyebrow: "Maison YAKA · Animation café solidaire",
      headline: "Un grand café.\nUn geste qui compte.",
      lead: "Chaque samedi, nos étudiants font déguster Maison YAKA dans vos allées. Chaque produit acheté reverse 1 € pour accompagner les personnes sourdes et malentendantes.",
      facts: [
        ["1 €", "reversé sur chaque produit acheté"],
        ["1 160 €", "déjà reversés à ce jour"],
        ["0", "contrainte pour vos équipes"],
      ],
    },

    model: {
      nav: "Chacun y gagne",
      label: "Ce que Maison YAKA apporte",
      title: "Chacun y gagne,\nà commencer par vous.",
      hint: "Survolez le cercle",
      nodes: [
        { name: "Magasin",     does: "accueille Maison YAKA le samedi",       gets: "Une animation qui fait tourner les ventes, sans effort pour vos équipes." },
        { name: "Clients",     does: "dégustent et découvrent le café",        gets: "Un grand café, en grains ou en capsules, et un geste utile." },
        { name: "Association", does: "reçoit 1 € par produit acheté",          gets: "Un soutien régulier pour les personnes sourdes et malentendantes." },
        { name: "Étudiants",   does: "présentent le café et racontent la cause", gets: "Un revenu et une première vraie expérience." },
      ],
      loop: "… et le cercle recommence, chaque samedi.",
    },

    turnkey: {
      nav: "Clé en main",
      label: "Clé en main",
      title: "Nous apportons tout.\nVous ouvrez la porte.",
      yakaTitle: "Maison YAKA apporte",
      yaka: [
        "Les deux références et tout le stock",
        "Deux étudiants formés, rémunérés et accompagnés",
        "Un stand épuré, monté en dix minutes",
        "Les dégustations, toute la journée",
        "Le kit de merchandising : display de comptoir, fiches origines, argumentaire",
        "Le bilan de la journée",
      ],
      storeTitle: "Votre magasin fournit",
      store: [
        "Un emplacement dans une allée passante",
        "Surface : [[à préciser]]",
        "Le samedi (et d’autres jours si vous le souhaitez)",
        "Horaires : [[à caler ensemble]]",
      ],
      note: "Pas de stock à acheter pour l’animation. Pas de personnel détaché.",
    },

    cause: {
      nav: "Écouter, vraiment",
      label: "Notre engagement",
      title: "Chaque tasse\nfait un geste.",
      body: "1 € est reversé sur chaque produit acheté, chaque jour, sans exception, pour accompagner et équiper les personnes sourdes et malentendantes.",
      raisedLabel: "reversés à ce jour",
      example: "produits achetés",
      exampleResult: "reversés à l’association",
      simLabel: "Faites glisser pour simuler",
      simNote: "Simulation illustrative : 1 € par produit acheté.",
      honesty: "Nous choisissons actuellement l’association qui recevra chaque euro reversé. Son nom et ses actions seront présentés très bientôt.",
    },

    deaf: {
      nav: "Notre histoire",
      label: "Notre histoire",
      lead: "Un café se choisit. Une cause se vit.",
      title: "Maison YAKA commence\npar un silence.",
      body: "L’un des fondateurs a grandi avec un frère sourd. Les conversations qui s’arrêtent net au milieu d’un repas, l’isolement discret du quotidien. Le café est l’un des rares moments où l’on se fait face : on peut lire sur les lèvres, suivre un regard, répondre avec les mains.",
      closing: "« On n’a pas voulu créer une marque de café qui soutient une cause. On a voulu créer une cause qui se sert du café pour exister. »",
    },

    interlude: {
      nav: "Quatre terres",
      label: "Quatre terres",
      title: "Quatre terres.\nUn même équilibre.",
      notes: "Cacao · Noisette · Rond",
      origins: [["Brésil", "la rondeur"], ["Colombie", "l’équilibre"], ["Pérou", "la douceur"], ["Éthiopie", "le parfum"]],
    },

    product: {
      nav: "Le café",
      label: "Le café",
      title: "Deux références,\nun même assemblage.",
      promise: "Un café ample et chocolaté, que l’on peut servir à tout le monde.\nDeux formats nets, faciles à mettre en rayon.",
    },

    people: {
      nav: "Les étudiants",
      label: "Les étudiants",
      formula: [["2", "étudiants"], ["1", "stand"], ["1", "café"], ["1", "samedi"]],
      title: "Faire grandir\nles talents.",
      body: "En magasin, ce sont des étudiants qui présentent le café et racontent la cause. Ils apprennent le conseil, la vente et la confiance en soi, rémunérés et accompagnés à chaque étape.",
      skills: ["Prise de parole", "Confiance", "Conseil", "Vente", "Relation client", "Responsabilité", "Expérience professionnelle"],
      quote: "Un samedi de travail.\nUne expérience qui reste.",
      network: "Faire grandir des talents fait partie du projet, au même titre que l’euro reversé.",
      photoCaption: "Étudiant Maison YAKA au stand",
    },

    proof: {
      nav: "Le terrain",
      label: "Le terrain",
      title: "La vente en direct,\nnous savons la faire.",
      claim: "Des chiffres observés face à de vrais clients.",
    },

    meeting: {
      nav: "Le stand",
      label: "Le samedi en rayon",
      lines: ["Le produit attire.", "La dégustation convainc.", "L’histoire fait vendre."],
      body: "Deux étudiants formés, un stand monté en dix minutes, des dégustations et une cause racontée en direct à vos clients.",
      qualities: ["Stand épuré", "Dégustations", "Kit de merchandising", "Aucune charge pour vos équipes"],
      optionsTitle: "Et ensuite, en rayon",
      options: [
        ["Deux références", "Un sachet de grains 250 g et une boîte de 20 capsules, à 14,90 €, faciles à mettre en rayon."],
        ["Kit de merchandising", "Display de comptoir épuré, fiches origines et argumentaire de vente fournis avec la première commande."],
      ],
    },

    pilot: {
      nav: "Notre proposition",
      label: "Notre proposition",
      titleGeneric: "Maison YAKA chez vous,\nchaque samedi.",
      titlePartner: "Maison YAKA à {city},\nchaque samedi.",
      formula: [["2", "étudiants"], ["1", "stand"], ["Tous", "les samedis"], ["1 €", "par produit"]],
      askTitle: "Ce que nous vous demandons",
      asks: ["Un emplacement dans une allée passante", "Une présence chaque samedi, et d’autres jours si vous le souhaitez", "Une mise à disposition gracieuse ou à tarif solidaire"],
      askWhy: "Un emplacement gracieux ou solidaire nous permet de consacrer nos moyens au projet et à l’association.",
      measureTitle: "Ce que vous recevez après chaque journée",
      measures: ["Ventes et transactions", "Retours clients", "Retour de vos équipes", "Montant reversé grâce à vos clients"],
      line: "Une animation qui fait tourner les ventes,\nune cause qui avance,\net si vous le souhaitez, un référencement en rayon.",
    },

    founders: {
      nav: "Qui sommes-nous",
      label: "Qui sommes-nous",
      title: "Deux entrepreneurs.\nLe goût du terrain.\nUne cause à servir.",
      body: "Yanil et Arthur ont créé Maison YAKA. En magasin, ce sont des étudiants qui présentent le café et racontent la cause à vos clients : Yanil et Arthur les recrutent, les forment et les accompagnent.\n\nMaison YAKA réunit un grand café, une vente humaine et une cause qui touche les fondateurs de près.",
    },

    cta: {
      nav: "Contact",
      title: "Faisons de vos samedis\ndes samedis Maison YAKA.",
      body: "Un rendez-vous fixe, chaque samedi, dans votre magasin.",
      button: "Nous écrire",
    },
  },
};
