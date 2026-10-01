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
    documentTitle: "Maison YAKA — Un partenariat café pour votre magasin",
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
    student: "assets/etudiant.webp",        // étudiant Maison YAKA en magasin
    ear: "assets/oreille.jpg",              // oreille formée par une foule
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
    status: "Démarche en construction, modalités à définir ensemble",
    partnerName: null,          // à renseigner uniquement lorsqu’un partenariat sera officiel
  },


  /* ---------- Écrans ----------------------------------------------------- */
  slides: {

    cover: {
      nav: "Maison YAKA",
      tagline: "L’animation café en magasin,\nsimple et solidaire.",
      eyebrow: "Maison YAKA · Animation café en magasin",
      headline: "Un grand café.\nUn geste qui compte.",
      lead: "Accueillez régulièrement un étudiant Maison YAKA : vos clients découvrent un café premium, un étudiant vit une expérience rémunérée et le projet soutient une démarche solidaire.",
      facts: [
        ["1", "petit emplacement, sans installation lourde"],
        ["1", "étudiant présent, principalement le samedi"],
        ["100 %", "Arabica, quatre origines"],
      ],
    },

    model: {
      nav: "Chacun y gagne",
      label: "Ce que Maison YAKA apporte",
      title: "Chacun y gagne,\nà commencer par vous.",
      hint: "Survolez le cercle",
      nodes: [
        { name: "Magasin",     does: "accueille un étudiant Maison YAKA",  gets: "Une présence qualitative et simple à accueillir, qui apporte une expérience supplémentaire à vos clients tout en soutenant une initiative étudiante et solidaire." },
        { name: "Étudiant",    does: "va à la rencontre des clients",      gets: "Une expérience commerciale concrète, rémunérée et professionnalisante, directement au contact des clients." },
        { name: "Client",      does: "découvre, échange, partage",          gets: "Une rencontre simple et humaine autour du café : l’histoire de Maison YAKA, notre engagement, puis un café premium à emporter s’il le souhaite." },
        { name: "Maison YAKA", does: "organise sa présence",               gets: "Une rencontre directe avec ses clients et la possibilité de développer la marque sur le terrain tout en faisant grandir ses engagements." },
      ],
      loop: "… et une démarche solidaire qui avance.",
    },

    turnkey: {
      nav: "Fonctionnement",
      label: "Comment ça fonctionne",
      title: "Vous nous accueillez.\nNous nous occupons du reste.",
      lead: "Installation, présence de l’étudiant, présentation du café, encaissement et rangement : Maison YAKA prend tout en charge.",
      yakaTitle: "Une journée Maison YAKA, en cinq étapes",
      yaka: [
        { who: "Votre magasin", what: "met à disposition un petit emplacement" },
        { who: "Maison YAKA",   what: "installe sa pancarte et ses références" },
        { who: "Un étudiant",   what: "présente Maison YAKA, raconte notre café et va à la rencontre de vos clients" },
        { who: "Maison YAKA",   what: "gère l’encaissement, avec son propre terminal" },
        { who: "Maison YAKA",   what: "range et libère l’emplacement" },
      ],
      storeTitle: "De votre côté",
      store: [
        "Un emplacement dans le hall d’entrée, le sas de sortie ou tout autre espace convenu avec vous",
        "Une présence régulière, principalement le samedi, à un rythme défini ensemble",
        "Horaires à discuter : environ 6 h 30 à 7 h le samedi, par exemple 10 h – 13 h et 14 h – 17 h 30 / 18 h",
      ],
      note: "Nous nous adaptons à la configuration et au fonctionnement de votre magasin.",
    },

    cause: {
      nav: "Notre engagement",
      label: "Notre engagement",
      title: "Votre magasin\nprend aussi part\nà notre engagement.",
      body: "En accueillant Maison YAKA, votre magasin participe concrètement à la dynamique qui nous permet de collecter des fonds et de développer notre engagement autour de la surdité et de la malentendance.",
      statusLabel: "Statut",
      honesty: "Cette démarche se construit avec nos partenaires ; ses modalités peuvent être discutées avec vous.",
      lightTitle: "Une présence volontairement légère",
      light: "Un étudiant, quelques références, notre pancarte Maison YAKA et un terminal de paiement. Aucune installation lourde n’est nécessaire. Si vous disposez d’une petite table, elle peut simplement servir de support ; dans le cas contraire, nous adaptons notre présence à votre espace.",
      gifts: [
        ["Une opportunité", "pour un étudiant"],
        ["Une découverte", "pour vos clients"],
        ["Une contribution collective", "à une démarche solidaire"],
      ],
    },

    deaf: {
      nav: "Notre histoire",
      label: "Notre histoire",
      lead: "Il existe des moments que l’on croit universels.",
      title: "Un repas partagé.\nUne conversation.\nUne pause café.",
      paragraphs: [
        "Pour beaucoup, ce sont des instants ordinaires. Pour d’autres, suivre une discussion lorsque les voix se croisent, que les regards se détournent ou que plusieurs personnes parlent en même temps peut transformer un moment collectif en moment de solitude.",
        "Yanil, cofondateur de Maison YAKA, a grandi aux côtés d’un frère malentendant. Très tôt, il a compris que communiquer ne consistait pas seulement à parler : il fallait regarder, attendre, s’adapter, et parfois apprendre à écouter autrement.",
        "En créant Maison YAKA, nous ne voulions pas chercher artificiellement une cause à associer à notre marque. Nous voulions que notre Maison serve, à son échelle, une cause qui faisait déjà partie de notre histoire.",
        "Le café portait naturellement ce lien. La pause café est précisément l’un de ces moments où l’on s’arrête pour parler, où les collègues se retrouvent, où l’on échange quelques minutes autrement. Nous voulons contribuer à ce que ces moments de lien n’oublient personne.",
      ],
      closing: "Une Maison ne se définit pas seulement par ce qu’elle vend.\nElle se définit aussi par ce qu’elle choisit de défendre.",
    },

    associations: {
      nav: "Les associations",
      label: "Les associations",
      title: "Des causes qui\nnous tiennent à cœur.",
      intro: "La surdité est au cœur de notre histoire. Au-delà, Maison YAKA souhaite soutenir des associations qui agissent pour les enfants, les familles et la santé.",
      items: [
        { name: "ANPEDA", full: "Fédération de parents d’enfants sourds ou malentendants", tag: "Surdité et malentendance", logo: "assets/asso-anpeda.png",
          text: "L’ANPEDA accompagne les familles et défend les droits des enfants sourds ou malentendants afin de favoriser leur inclusion, leur autonomie et leur épanouissement." },
        { name: "Petits Princes", full: "Association Petits Princes", tag: "Enfants malades", logo: "assets/asso-petits-princes.jpg",
          text: "L’Association Petits Princes réalise les rêves d’enfants et d’adolescents gravement malades afin de leur offrir des moments d’évasion, de joie et d’espoir pendant leur parcours de soins." },
        { name: "FRM", full: "Fondation pour la Recherche Médicale", tag: "Recherche médicale", logo: "assets/asso-frm.jpg",
          text: "La FRM soutient et finance la recherche médicale française sur de nombreuses maladies afin de faire progresser les connaissances, les traitements et, à terme, sauver des vies." },
      ],
      note: "Associations que Maison YAKA souhaite soutenir. Les modalités de soutien sont en cours de définition.",
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
      formula: [["1", "étudiant"], ["1", "pancarte"], ["2", "références"], ["1", "samedi"]],
      title: "Faire grandir\nles talents.",
      body: "Sur place, un étudiant va à la rencontre de vos clients, présente Maison YAKA et raconte notre café. Il est rémunéré et accompagné par Maison YAKA.",
      mission: "Chaque étudiant arrive avec un stock défini pour sa journée, autour d’une soixantaine de paquets selon l’organisation retenue. Il ne s’agit pas de lui mettre une pression artificielle, mais de lui confier une vraie mission commerciale, concrète et mesurable, où chaque vente fait avancer le projet et l’engagement de Maison YAKA.",
      skills: ["Aller vers les clients", "Présenter un café premium", "Raconter une histoire", "Expliquer notre engagement", "Argumenter", "Vendre", "Progresser sur le terrain"],
      quote: "Une journée de terrain.\nUne expérience qui compte.",
      network: "Accueillir, conseiller, vendre : des compétences utiles, acquises face à de vrais clients.",
      photoCaption: "Étudiant Maison YAKA en magasin",
    },

    meeting: {
      nav: "En magasin",
      label: "Notre présence en magasin",
      steps: [
        ["Un étudiant", "Il va à la rencontre de vos clients."],
        ["Le café et l’histoire", "Il présente Maison YAKA, explique notre café et raconte notre engagement."],
        ["L’échange", "Il échange simplement avec le client et répond à ses questions."],
        ["La vente", "Le client peut ensuite acheter l’une de nos références."],
      ],
      body: "Chaque étudiant est formé avant sa présence en magasin : connaissance du café, histoire de Maison YAKA, engagement et approche client. Notre dispositif reste volontairement épuré afin de créer un échange naturel, sans perturber le fonctionnement du magasin. Quelques minutes de conversation, la découverte d’un café et d’une histoire : un moment simple qui fait avancer un projet plus grand.",
      kitTitle: "L’étudiant dispose simplement",
      kit: ["De son stock de café", "D’une petite pancarte Maison YAKA présentant la marque, le café et notre engagement", "D’un terminal de paiement fourni par Maison YAKA", "D’une petite table, uniquement si vous souhaitez en mettre une à disposition"],
      optionsTitle: "Nos deux références",
      options: [
        ["Café en grains", "Sachet de 250 g · 14,90 €", "assets/pack-grains.webp"],
        ["Café en capsules", "Boîte de 20 capsules · 14,90 €", "assets/pack-capsules.webp"],
      ],
    },

    pilot: {
      nav: "Partenariat",
      label: "Notre proposition",
      titleGeneric: "Construisons\nun partenariat.",
      titlePartner: "Construisons\nun partenariat à {city}.",
      formula: [["1", "petit emplacement"], ["1", "étudiant formé"], ["2", "références"], ["1", "rendez-vous régulier, le samedi"]],
      askTitle: "Ce que nous recherchons",
      asks: [
        "Un petit emplacement dans une zone passante : hall, sas d’entrée ou de sortie, ou tout espace convenu avec vous",
        "Une présence principalement le samedi",
        "Un partenariat régulier plutôt qu’une animation isolée",
      ],
      askWhy: "Idéalement, cet emplacement est mis à disposition à titre gracieux ou à tarif solidaire : cela nous permet de consacrer nos moyens aux étudiants, au café et à notre engagement.",
      followTitle: "Suivi du partenariat",
      follow: "Un bilan peut être transmis en fin de mois afin de partager avec vous l’activité réalisée et l’évolution du partenariat.",
      line: "Si vous souhaitez aller plus loin, nous pourrons également échanger sur un éventuel référencement de Maison YAKA directement en rayon.",
    },

    founders: {
      nav: "Qui sommes-nous",
      label: "Qui sommes-nous",
      title: "Deux entrepreneurs.\nLe goût du terrain.\nUn engagement sincère.",
      body: "Maison YAKA est née d’une conviction simple : une belle marque ne se construit pas uniquement derrière un écran, mais au contact des personnes qui la découvrent. Yanil et Arthur, deux jeunes entrepreneurs, ont donc choisi de commencer sur le terrain.\n\nNotre café a été choisi avec la même exigence que celle que nous voulons donner à notre Maison : un café premium, accessible et agréable à boire. Le goût reste le point de départ ; l’humain lui donne du sens.\n\nÀ chaque rencontre en magasin, nous construisons une Maison qui réunit qualité, entrepreneuriat et engagement.",
    },

    cta: {
      nav: "Contact",
      title: "Accueillez Maison YAKA\ndans votre magasin.",
      body: "Proposez-nous un emplacement et une date : nous organisons le reste avec vous.",
      button: "Proposer une date",
    },
  },
};
