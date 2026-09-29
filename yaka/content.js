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
    documentTitle: "Maison YAKA — Accueillir un stand café dans votre magasin",
    edition: "Animation café en magasin · Présentation magasins",
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
    type: "100 % Arabica",
    blend: "Assemblage de quatre origines",
    origins: "Brésil · Colombie · Pérou · Éthiopie",
    originsRole: "Brésil pour la rondeur, Colombie pour l’équilibre, Pérou pour la douceur, Éthiopie pour le parfum",
    roast: "Medium-dark",
    products: [
      { name: "Café en grains", format: "Sachet 250 g", price: "14,90 €", note: "Sachet à valve fraîcheur dégazante" },
      { name: "Café en capsules", format: "Boîte de 20 capsules", price: "14,90 €", note: "Capsules operculées une à une" },
    ],
    form: "Grains 250 g · 20 capsules",
    weight: "250 g",
    price: "14,90 € TTC",
    priceLabel: "Prix public",
    usage: "Grains : espresso, machine automatique, italienne, filtre, piston · Capsules : espresso",
    profile: ["Doux", "Chocolaté", "Medium-dark"],
  },

  /* ---------- L'association ---------------------------------------------- */
  cause: {
    audience: "les personnes sourdes et malentendantes",
    status: "Engagement en construction",
    partnerName: null,          // à renseigner uniquement lorsqu’un partenariat sera officiel
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
      tagline: "L’animation café en magasin,\nsimple et solidaire.",
      eyebrow: "Maison YAKA · Animation café en magasin",
      headline: "Un grand café.\nUn geste qui compte.",
      lead: "Accueillez ponctuellement un stand Maison YAKA : vos clients découvrent un café premium, un étudiant vit une expérience rémunérée et le projet soutient une démarche solidaire.",
      facts: [
        ["1", "emplacement de quelques mètres carrés"],
        ["1", "étudiant présent sur le stand"],
        ["100 %", "Arabica, quatre origines"],
      ],
    },

    model: {
      nav: "Chacun y gagne",
      label: "Ce que Maison YAKA apporte",
      title: "Chacun y gagne,\nà commencer par vous.",
      hint: "Survolez le cercle",
      nodes: [
        { name: "Magasin",     does: "accueille un stand Maison YAKA",  gets: "Une animation qualitative et simple à accueillir, qui apporte une expérience supplémentaire aux clients tout en soutenant une initiative étudiante et solidaire." },
        { name: "Étudiant",    does: "présente et vend le café",         gets: "Une expérience commerciale concrète, rémunérée et professionnalisante, directement au contact des clients." },
        { name: "Client",      does: "déguste et échange",               gets: "La découverte d’un café premium à travers un échange humain, directement dans son magasin habituel." },
        { name: "Maison YAKA", does: "organise l’animation",             gets: "Une rencontre directe avec ses clients et la possibilité de développer la marque sur le terrain tout en faisant grandir ses engagements." },
      ],
      loop: "… et une démarche solidaire qui avance.",
    },

    turnkey: {
      nav: "Fonctionnement",
      label: "Comment ça fonctionne",
      title: "Vous nous accueillez.\nNous nous occupons du reste.",
      lead: "Installation, présence de l’étudiant, présentation des produits, encaissement et rangement : Maison YAKA prend en charge l’animation du stand.",
      yakaTitle: "Une journée Maison YAKA, en cinq étapes",
      yaka: [
        { who: "Votre magasin", what: "met à disposition un petit emplacement" },
        { who: "Maison YAKA",   what: "installe et organise le stand" },
        { who: "Un étudiant",   what: "présente et vend les produits" },
        { who: "Maison YAKA",   what: "gère l’encaissement" },
        { who: "Maison YAKA",   what: "range et libère l’emplacement" },
      ],
      storeTitle: "De votre côté",
      store: [
        "Un emplacement dans une allée passante",
        "Surface : [[à préciser]]",
        "Une ou plusieurs dates, choisies avec vous",
        "Horaires : [[à caler ensemble]]",
      ],
      note: "Un fonctionnement simple pour vos équipes. Une table peut suffire.",
    },

    cause: {
      nav: "Notre engagement",
      label: "Notre engagement",
      title: "Votre magasin\nprend aussi part\nà notre engagement.",
      body: "En accueillant Maison YAKA et en mettant un emplacement à disposition, vous permettez à notre projet de se développer et contribuez indirectement à une démarche qui nous tient personnellement à cœur : agir autour de la surdité.",
      statusLabel: "Statut",
      honesty: "Les partenaires et les modalités de soutien seront présentés lorsqu’ils seront officialisés.",
      quote: "Un emplacement de quelques mètres carrés peut devenir bien plus qu’un simple stand.",
      gifts: [
        ["Une opportunité", "pour un étudiant"],
        ["Une découverte", "pour vos clients"],
        ["Une contribution indirecte", "à une démarche solidaire"],
      ],
    },

    deaf: {
      nav: "Notre histoire",
      label: "Notre histoire",
      lead: "Un café se choisit. Une cause se vit.",
      title: "Maison YAKA commence\npar un silence.",
      body: "L’un des fondateurs, Yanil, a grandi avec un frère sourd. Les conversations qui s’arrêtent au milieu d’un repas, l’isolement discret du quotidien. Autour d’un café, on se fait face : on lit sur les lèvres, on suit un regard, on répond avec les mains.",
      closing: "Maison YAKA est d’abord une marque de café. Cette histoire donne du sens à ce que nous construisons et oriente nos engagements autour de la surdité.",
    },

    interlude: {
      nav: "Quatre terres",
      label: "Les origines",
      title: "Quatre terres.\nUn même équilibre.",
      notes: "100 % Arabica · Doux et chocolaté · Medium-dark",
      origins: [["Brésil", "la rondeur"], ["Colombie", "l’équilibre"], ["Pérou", "la douceur"], ["Éthiopie", "le parfum"]],
    },

    product: {
      nav: "Le café",
      label: "Le café",
      title: "Deux références,\nun même assemblage.",
      promise: "Un profil doux et chocolaté, accessible à tous les amateurs de café.\nDeux formats simples : grains et capsules.",
    },

    people: {
      nav: "Les étudiants",
      label: "Les étudiants",
      formula: [["1", "étudiant"], ["1", "stand"], ["2", "références"], ["1", "journée"]],
      title: "Faire grandir\nles talents.",
      body: "Sur le stand, c’est un étudiant qui accueille vos clients, présente le café et le vend. Une expérience commerciale concrète, rémunérée et encadrée par Maison YAKA.",
      skills: ["Prise de parole", "Confiance", "Conseil", "Vente", "Relation client", "Responsabilité", "Expérience professionnelle"],
      quote: "Une journée de terrain.\nUne expérience qui compte.",
      network: "Accueillir, conseiller, vendre : des compétences utiles, acquises face à de vrais clients.",
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
      label: "Le stand en magasin",
      lines: ["Le produit attire.", "La dégustation convainc.", "L’échange fait vendre."],
      body: "Un étudiant formé, un stand épuré installé rapidement, des dégustations et un vrai échange avec vos clients.",
      qualities: ["Stand épuré", "Installation rapide", "Dégustations", "Encaissement géré par Maison YAKA"],
      optionsTitle: "Et si vous le souhaitez, en rayon",
      options: [
        ["Deux références", "Un sachet de grains 250 g et une boîte de 20 capsules, à 14,90 € chacun."],
        ["Kit de merchandising", "Display de comptoir épuré, fiches origines et argumentaire de vente fournis avec la première commande."],
      ],
    },

    pilot: {
      nav: "Notre proposition",
      label: "Notre proposition",
      titleGeneric: "Une première date\nMaison YAKA chez vous.",
      titlePartner: "Une première date\nMaison YAKA à {city}.",
      formula: [["1", "emplacement"], ["1", "étudiant"], ["1", "date à convenir"], ["1", "bilan partagé"]],
      askTitle: "Ce que nous vous demandons",
      asks: ["Un emplacement dans une allée passante", "Une première date, puis d’autres si l’expérience vous convient", "Cet emplacement mis à disposition gracieusement, ou à tarif solidaire"],
      askWhy: "Un emplacement gracieux ou solidaire nous permet de consacrer nos moyens au projet, aux étudiants et à nos engagements.",
      measureTitle: "Ce que vous recevez après chaque journée",
      measures: ["Ventes et transactions", "Retours de vos clients", "Retour de vos équipes"],
      line: "Une animation pour vos clients,\nune expérience pour un étudiant,\net si vous le souhaitez, un référencement en rayon.",
    },

    founders: {
      nav: "Qui sommes-nous",
      label: "Qui sommes-nous",
      title: "Deux entrepreneurs.\nLe goût du terrain.\nUn engagement sincère.",
      body: "Yanil et Arthur ont créé Maison YAKA. Ils recrutent, forment et accompagnent les étudiants qui présentent le café dans vos allées.\n\nUn café premium, une vente humaine et un engagement qui les touche de près.",
    },

    cta: {
      nav: "Contact",
      title: "Accueillez Maison YAKA\ndans votre magasin.",
      body: "Proposez-nous un emplacement et une date : nous organisons le reste avec vous.",
      button: "Proposer une date",
    },
  },
};
