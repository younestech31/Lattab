import { PriceRefCommune } from '../types';

export const tiziOuzouPriceReferenceLocations: PriceRefCommune[] = [
  {
    "commune": "Tizi Ouzou",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1000,
          "max": 1150
        },
        "centreVille": {
          "min": 2500,
          "max": 2875
        },
        "zonePeripherique": {
          "min": 400,
          "max": 460
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 1000,
          "max": 1150
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 500,
          "max": 575
        },
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux(02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façadessans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 50,
          "max": 58
        },
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleinepropriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 50,
          "max": 58
        },
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Industriel",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ]
  },
  {
    "commune": "Draa Ben Khedda",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 300,
          "max": 345
        },
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 140,
          "max": 161
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1500,
          "max": 1725
        },
        "zonePeripherique": {
          "min": 1200,
          "max": 1380
        },
        "zoneEloignement": {
          "min": 1000,
          "max": 1150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1000,
          "max": 1150
        },
        "centreVille": {
          "min": 1000,
          "max": 1150
        },
        "zonePeripherique": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 600,
          "max": 690
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zonePeripherique": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 400,
          "max": 460
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 800,
          "max": 920
        },
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zonePeripherique": {
          "min": 700,
          "max": 805
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 750,
          "max": 863
        },
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 35,
          "max": 40
        },
        "centreVille": {
          "min": 35,
          "max": 40
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sansraccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ]
  },
  {
    "commune": "Boghni",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 300,
          "max": 345
        },
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 140,
          "max": 161
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1500,
          "max": 1725
        },
        "zonePeripherique": {
          "min": 1200,
          "max": 1380
        },
        "zoneEloignement": {
          "min": 1000,
          "max": 1150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1000,
          "max": 1150
        },
        "centreVille": {
          "min": 1000,
          "max": 1150
        },
        "zonePeripherique": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 600,
          "max": 690
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zonePeripherique": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 400,
          "max": 460
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 800,
          "max": 920
        },
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zonePeripherique": {
          "min": 700,
          "max": 805
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 750,
          "max": 863
        },
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 35,
          "max": 40
        },
        "centreVille": {
          "min": 35,
          "max": 40
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sansraccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ]
  },
  {
    "commune": "Azazga",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 300,
          "max": 345
        },
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 140,
          "max": 161
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1500,
          "max": 1725
        },
        "zonePeripherique": {
          "min": 1200,
          "max": 1380
        },
        "zoneEloignement": {
          "min": 1000,
          "max": 1150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1000,
          "max": 1150
        },
        "centreVille": {
          "min": 1000,
          "max": 1150
        },
        "zonePeripherique": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 600,
          "max": 690
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zonePeripherique": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 400,
          "max": 460
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 800,
          "max": 920
        },
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zonePeripherique": {
          "min": 700,
          "max": 805
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 750,
          "max": 863
        },
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 35,
          "max": 40
        },
        "centreVille": {
          "min": 35,
          "max": 40
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sansraccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ]
  },
  {
    "commune": "Tigzirt",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 240,
          "max": 276
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 160,
          "max": 184
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 210,
          "max": 242
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Artèremoyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zonePeripherique": {
          "min": 400,
          "max": 460
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Azeffoun",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 240,
          "max": 276
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 160,
          "max": 184
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 210,
          "max": 242
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Artèremoyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zonePeripherique": {
          "min": 400,
          "max": 460
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Draa El Mizan",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 290,
          "max": 334
        },
        "zonePeripherique": {
          "min": 270,
          "max": 311
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 220,
          "max": 253
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 210,
          "max": 242
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 500,
          "max": 575
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        },
        "zoneEloignement": {
          "min": 550,
          "max": 633
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Pleine propriétéune (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "LarbaaNath Irathen",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 290,
          "max": 334
        },
        "zonePeripherique": {
          "min": 270,
          "max": 311
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 220,
          "max": 253
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 210,
          "max": 242
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 500,
          "max": 575
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        },
        "zoneEloignement": {
          "min": 550,
          "max": 633
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Pleine propriétéune (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Mekla",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 170,
          "max": 196
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 130,
          "max": 150
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleinepropriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Industriel",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Tizi Rached",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ouadhias",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ouaguenoun",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Tizi-Gheniff",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 290,
          "max": 334
        },
        "zonePeripherique": {
          "min": 270,
          "max": 311
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 220,
          "max": 253
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 210,
          "max": 242
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 500,
          "max": 575
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        },
        "zoneEloignement": {
          "min": 550,
          "max": 633
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Pleine propriétéune (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ain El Hammam",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Bouzeguene",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Beni Douala",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Maatkas",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Makouda",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 170,
          "max": 196
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 130,
          "max": 150
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleinepropriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Industriel",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Ouacifs",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Beni Yenni",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Iferhounene",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Tadmaït",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Sidi Naamane",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 300,
          "max": 345
        },
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 140,
          "max": 161
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1500,
          "max": 1725
        },
        "zonePeripherique": {
          "min": 1200,
          "max": 1380
        },
        "zoneEloignement": {
          "min": 1000,
          "max": 1150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1000,
          "max": 1150
        },
        "centreVille": {
          "min": 1000,
          "max": 1150
        },
        "zonePeripherique": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 600,
          "max": 690
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zonePeripherique": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 400,
          "max": 460
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 800,
          "max": 920
        },
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zonePeripherique": {
          "min": 700,
          "max": 805
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 750,
          "max": 863
        },
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 35,
          "max": 40
        },
        "centreVille": {
          "min": 35,
          "max": 40
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sansraccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ]
  },
  {
    "commune": "Freha",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Mechtras",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 300,
          "max": 345
        },
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 250,
          "max": 288
        },
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 200,
          "max": 230
        },
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 140,
          "max": 161
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1500,
          "max": 1725
        },
        "zonePeripherique": {
          "min": 1200,
          "max": 1380
        },
        "zoneEloignement": {
          "min": 1000,
          "max": 1150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 1000,
          "max": 1150
        },
        "centreVille": {
          "min": 1000,
          "max": 1150
        },
        "zonePeripherique": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 600,
          "max": 690
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zonePeripherique": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 400,
          "max": 460
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 800,
          "max": 920
        },
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zonePeripherique": {
          "min": 700,
          "max": 805
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 750,
          "max": 863
        },
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 150,
          "max": 173
        },
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 35,
          "max": 40
        },
        "centreVille": {
          "min": 35,
          "max": 40
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sansraccordements",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "zoneResidentielle": {
          "min": 30,
          "max": 35
        },
        "centreVille": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 25,
          "max": 29
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ]
  },
  {
    "commune": "Yakouren",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ain Zaouia",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Irdjen",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 290,
          "max": 334
        },
        "zonePeripherique": {
          "min": 270,
          "max": 311
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 220,
          "max": 253
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 210,
          "max": 242
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 500,
          "max": 575
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        },
        "zoneEloignement": {
          "min": 550,
          "max": 633
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Pleine propriétéune (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Souk ElThenine",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait YahiaMoussa",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Tirmitine",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait Aissa Mimoun",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Aghribs",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 240,
          "max": 276
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 160,
          "max": 184
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 210,
          "max": 242
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Artèremoyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zonePeripherique": {
          "min": 400,
          "max": 460
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Abi Youcef",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Iflissen",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Ait Chafaa",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 240,
          "max": 276
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 160,
          "max": 184
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 210,
          "max": 242
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 900,
          "max": 1035
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Artèremoyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zonePeripherique": {
          "min": 400,
          "max": 460
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 500,
          "max": 575
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Beni Aissi",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Illoula Oumalou",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait Mahmoud",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Akerrou",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 170,
          "max": 196
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 130,
          "max": 150
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleinepropriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Industriel",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Beni Zmenzer",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Akbil",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Illiltene",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Imsouhal",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Assi Youcef",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Bounouh",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Beni Zekki",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Idjeur",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Frikat",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait Aggouacha",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zoneEloignement": {
          "min": 250,
          "max": 288
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 290,
          "max": 334
        },
        "zonePeripherique": {
          "min": 270,
          "max": 311
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zoneEloignement": {
          "min": 180,
          "max": 207
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 220,
          "max": 253
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 240,
          "max": 276
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 210,
          "max": 242
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 800,
          "max": 920
        },
        "zoneEloignement": {
          "min": 500,
          "max": 575
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 750,
          "max": 863
        },
        "zonePeripherique": {
          "min": 650,
          "max": 748
        },
        "zoneEloignement": {
          "min": 550,
          "max": 633
        }
      }
    ],
    "hangars": [
      {
        "label": "Enzone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 180,
          "max": 207
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété une (01) façadeavec raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Pleine propriétéune (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 30,
          "max": 35
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait Khellili",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Ait Boumahdi",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Boudjima",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 170,
          "max": 196
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 120,
          "max": 138
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 130,
          "max": 150
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artèresecondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 110,
          "max": 127
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zoneurbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleinepropriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 50,
          "max": 58
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Pleinepropriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        },
        "zoneEloignement": {
          "min": 30,
          "max": 35
        }
      },
      {
        "label": "Terrain dansl'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 40,
          "max": 46
        },
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      },
      {
        "label": "Industriel",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Ait Toudert",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Iboudrarene",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Yatafene",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "AgouniGueghrane",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait Bouadou",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Tizi-N'Tlata",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ait Oumalou",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Souamaa",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Mizrana",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Timizart",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 160,
          "max": 184
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 45,
          "max": 52
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 140,
          "max": 161
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 95,
          "max": 109
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 300,
          "max": 345
        },
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 130,
          "max": 150
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 120,
          "max": 138
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 160,
          "max": 184
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "zonePeripherique": {
          "min": 250,
          "max": 288
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 40,
          "max": 46
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 40000,
          "max": 46000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "Ifigha",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  },
  {
    "commune": "M'Kira",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Zekri",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 125,
          "max": 144
        },
        "zonePeripherique": {
          "min": 110,
          "max": 127
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 95,
          "max": 109
        },
        "zoneEloignement": {
          "min": 95,
          "max": 109
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 90,
          "max": 104
        },
        "zonePeripherique": {
          "min": 70,
          "max": 81
        },
        "zoneEloignement": {
          "min": 70,
          "max": 81
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 80,
          "max": 92
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 60,
          "max": 69
        },
        "zonePeripherique": {
          "min": 50,
          "max": 58
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 250,
          "max": 288
        },
        "zonePeripherique": {
          "min": 190,
          "max": 219
        },
        "zoneEloignement": {
          "min": 190,
          "max": 219
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 70,
          "max": 81
        },
        "zonePeripherique": {
          "min": 60,
          "max": 69
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 90,
          "max": 104
        },
        "zoneEloignement": {
          "min": 90,
          "max": 104
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 20,
          "max": 23
        },
        "zonePeripherique": {
          "min": 15,
          "max": 17
        },
        "zoneEloignement": {
          "min": 10,
          "max": 12
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 50000,
          "max": 57500
        },
        "zoneEloignement": {
          "min": 30000,
          "max": 34500
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 10000,
          "max": 11500
        }
      }
    ]
  },
  {
    "commune": "Ait Yahia",
    "individuels": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 350,
          "max": 403
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 60,
          "max": 69
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "collectifsSemiCollectifs": [
      {
        "label": "Standing",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Amélioré",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Economique",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      },
      {
        "label": "Précaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 100,
          "max": 115
        }
      }
    ],
    "locauxCommerciaux": [
      {
        "label": "Artère hautement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 400,
          "max": 460
        },
        "zonePeripherique": {
          "min": 300,
          "max": 345
        },
        "zoneEloignement": {
          "min": 200,
          "max": 230
        }
      },
      {
        "label": "Artère moyennement commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère peu commerciale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 150,
          "max": 173
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "locauxUsageProfessionnels": [
      {
        "label": "Artère principale",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      },
      {
        "label": "Artère secondaire",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 200,
          "max": 230
        },
        "zonePeripherique": {
          "min": 200,
          "max": 230
        },
        "zoneEloignement": {
          "min": 150,
          "max": 173
        }
      }
    ],
    "hangars": [
      {
        "label": "En zone urbaine",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 150,
          "max": 173
        },
        "zonePeripherique": {
          "min": 100,
          "max": 115
        },
        "zoneEloignement": {
          "min": 80,
          "max": 92
        }
      }
    ],
    "terrainsNus": [
      {
        "label": "Pleine propriété deux (02) façades avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade avec raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété deux (02) façades sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Pleine propriété une (01) façade sans raccordements",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      },
      {
        "label": "Terrain dans l'indivision",
        "unit": "DA/m²/mois",
        "centreVille": {
          "min": 100,
          "max": 115
        },
        "zonePeripherique": {
          "min": 80,
          "max": 92
        },
        "zoneEloignement": {
          "min": 50,
          "max": 58
        }
      }
    ],
    "terrainsAgricolesPlaine": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 30000,
          "max": 34500
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ],
    "terrainsAgricolesPente": [
      {
        "label": "Potentialité élevée",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité moyenne",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      },
      {
        "label": "Potentialité faible",
        "unit": "DA/Ha/mois",
        "zonePeripherique": {
          "min": 20000,
          "max": 23000
        },
        "zoneEloignement": {
          "min": 20000,
          "max": 23000
        }
      }
    ]
  }
];
