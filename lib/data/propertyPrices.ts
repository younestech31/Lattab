export const availableRegions = [
  { id: "oran_est", name: "وهران - القسم الشرقي" },
  { id: "oran_ouest_sud", name: "وهران - القسم الغربي والجنوبي" },
  { id: "bir_el_djir", name: "بئر الجير" },
  { id: "hassi_bounif", name: "حاسي بونيف" },
  { id: "hassi_benokba", name: "حاسي بن عقبة" },
  { id: "gdyel", name: "قديل" },
  { id: "hassi_mefsoukh", name: "حاسي مفسوخ" },
  { id: "benfraha", name: "بن فريحة" },
  { id: "arzew", name: "أرزيو" },
  { id: "sidi_benyabka", name: "سيدي بن يبقى" },
  { id: "bethioua", name: "بطيوة" },
  { id: "mers_elhadjadj", name: "مرسى الحجاج" },
  { id: "ain_el_bia", name: "عين البية" },
  { id: "ain_turck", name: "عين الترك" },
  { id: "boufatis", name: "بوفاطيس" },
  { id: "tafraoui", name: "طفراوي" },
  { id: "mers_el_kebir", name: "المرسى الكبير" },
  { id: "bousfer", name: "بوسفر" },
  { id: "el_ancor", name: "العنصر" },
  { id: "es_senia", name: "السانية" },
  { id: "sidi_chami", name: "سيدي الشحمي" },
  { id: "el_kerma", name: "الكرمة" },
  { id: "boutlelis", name: "بوتليليس" },
  { id: "misserghine", name: "مسرغين" },
  { id: "ain_el_kerma", name: "عين الكرمة" },
  { id: "oued_tlelat", name: "وادي تليلات" },
  { id: "el_braya", name: "البرية" }
];

export const propertyDataMap: Record<string, any> = {
  "oran_est": {
    "id": "oran_est",
    "nom": "Oran - Partie Est",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Quartiers El-Barqui, Victor Hugo, Petit Lac, Bel Air, Saint-Eugène, Delmonte, Carteaux, Centre ville, Gambetta, Point du jour et Falaises",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": 162000, "max": 186000 }, "centre_ville": { "min": 147000, "max": 169000 }, "zone_peripherique": { "min": 109000, "max": 125000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": 140000, "max": 161000 }, "centre_ville": { "min": 127000, "max": 146000 }, "zone_peripherique": { "min": 94000, "max": 108000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": 121000, "max": 139000 }, "centre_ville": { "min": 111000, "max": 126000 }, "zone_peripherique": { "min": 81000, "max": 93000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": 104000, "max": 120000 }, "centre_ville": { "min": 96000, "max": 110000 }, "zone_peripherique": { "min": 70000, "max": 80000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": 99000, "max": 114000 }, "centre_ville": { "min": 85000, "max": 97000 }, "zone_peripherique": { "min": 79000, "max": 90000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": 86000, "max": 98000 }, "centre_ville": { "min": 73000, "max": 84000 }, "zone_peripherique": { "min": 68000, "max": 78000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": 75000, "max": 85000 }, "centre_ville": { "min": 63000, "max": 72000 }, "zone_peripherique": { "min": 59000, "max": 67000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": 67000, "max": 74000 }, "centre_ville": { "min": 56000, "max": 62000 }, "zone_peripherique": { "min": 51000, "max": 58000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          { "type": "Artère hautement commerciale", "zones": { "zone_residentielle": { "min": 241000, "max": 277000 }, "centre_ville": { "min": 188000, "max": 216000 }, "zone_peripherique": { "min": 158000, "max": 180000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Artère moyennement commerciale", "zones": { "zone_residentielle": { "min": 200000, "max": 240000 }, "centre_ville": { "min": 163000, "max": 187000 }, "zone_peripherique": { "min": 137000, "max": 157000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Artère peu commerciale", "zones": { "zone_residentielle": { "min": 166000, "max": 199000 }, "centre_ville": { "min": 141000, "max": 162000 }, "zone_peripherique": { "min": 118000, "max": 136000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          { "type": "Situé en zone urbaine", "zones": { "zone_residentielle": { "min": 120000, "max": 138000 }, "centre_ville": { "min": 103000, "max": 119000 }, "zone_peripherique": { "min": 91000, "max": 104000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Situé en zone rurale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 79000, "max": 90000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          { "type": "Pleine propriété deux (02) façades avec raccordements", "zones": { "zone_residentielle": { "min": 179000, "max": 206000 }, "centre_ville": { "min": 133000, "max": 153000 }, "zone_peripherique": { "min": 126000, "max": 146000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Pleine propriété une (01) façade avec raccordements", "zones": { "zone_residentielle": { "min": 163000, "max": 187000 }, "centre_ville": { "min": 120000, "max": 139000 }, "zone_peripherique": { "min": 107000, "max": 123000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Pleine propriété deux (02) façades sans raccordements", "zones": { "zone_residentielle": { "min": 149000, "max": 170000 }, "centre_ville": { "min": 118000, "max": 135000 }, "zone_peripherique": { "min": 106000, "max": 120000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Pleine propriété une (01) façade sans raccordements", "zones": { "zone_residentielle": { "min": 144000, "max": 165000 }, "centre_ville": { "min": 110000, "max": 126000 }, "zone_peripherique": { "min": 103000, "max": 118000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Dans l'indivision", "zones": { "zone_residentielle": { "min": 124000, "max": 142000 }, "centre_ville": { "min": 106000, "max": 121000 }, "zone_peripherique": { "min": 92000, "max": 105000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Industriel", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      }
    ]
  },
  "oran_ouest_sud": {
    "id": "oran_ouest_sud",
    "nom": "Oran - Partie Ouest et Sud",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Autres quartiers",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": 146000, "max": 167000 }, "centre_ville": { "min": 123000, "max": 140700 }, "zone_peripherique": { "min": 98700, "max": 113400 }, "zone_eloignement": { "min": 73500, "max": 84000 } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": 126000, "max": 144900 }, "centre_ville": { "min": 106500, "max": 121800 }, "zone_peripherique": { "min": 85000, "max": 98000 }, "zone_eloignement": { "min": 63000, "max": 72500 } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": 109200, "max": 125000 }, "centre_ville": { "min": 91500, "max": 105000 }, "zone_peripherique": { "min": 73500, "max": 84000 }, "zone_eloignement": { "min": 54600, "max": 62000 } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": 94500, "max": 108200 }, "centre_ville": { "min": 78750, "max": 90300 }, "zone_peripherique": { "min": 63000, "max": 72500 }, "zone_eloignement": { "min": 47500, "max": 53600 } } }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": 130000, "max": 150000 }, "centre_ville": { "min": 110000, "max": 130000 }, "zone_peripherique": { "min": 80000, "max": 90000 }, "zone_eloignement": { "min": 70000, "max": 80000 } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": 110000, "max": 130000 }, "centre_ville": { "min": 105000, "max": 129000 }, "zone_peripherique": { "min": 70000, "max": 79000 }, "zone_eloignement": { "min": 60000, "max": 69000 } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": 100000, "max": 110000 }, "centre_ville": { "min": 90000, "max": 104000 }, "zone_peripherique": { "min": 55000, "max": 69000 }, "zone_eloignement": { "min": 50000, "max": 59000 } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": 50000, "max": 80000 }, "centre_ville": { "min": 49000, "max": 57000 }, "zone_peripherique": { "min": 46000, "max": 54000 }, "zone_eloignement": { "min": 43000, "max": 49000 } } }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          { "type": "Artère hautement commerciale", "zones": { "zone_residentielle": { "min": 169800, "max": 195200 }, "centre_ville": { "min": 147000, "max": 169000 }, "zone_peripherique": { "min": 117000, "max": 134000 }, "zone_eloignement": { "min": 60000, "max": 68200 } } },
          { "type": "Artère moyennement commerciale", "zones": { "zone_residentielle": { "min": 147000, "max": 169000 }, "centre_ville": { "min": 127000, "max": 146000 }, "zone_peripherique": { "min": 101000, "max": 115500 }, "zone_eloignement": { "min": 52000, "max": 59000 } } },
          { "type": "Artère peu commerciale", "zones": { "zone_residentielle": { "min": 127200, "max": 146000 }, "centre_ville": { "min": 110000, "max": 126000 }, "zone_peripherique": { "min": 87000, "max": 99500 }, "zone_eloignement": { "min": 45000, "max": 51000 } } }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          { "type": "Situé en zone urbaine", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 85500, "max": 98000 }, "zone_peripherique": { "min": 71400, "max": 81900 }, "zone_eloignement": { "min": 60000, "max": 69000 } } },
          { "type": "Situé en zone rurale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 73500, "max": 84000 }, "zone_peripherique": { "min": 61950, "max": 70350 }, "zone_eloignement": { "min": 51450, "max": 58800 } } }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          { "type": "Pleine propriété deux (02) façades avec raccordements", "zones": { "zone_residentielle": { "min": 119000, "max": 136500 }, "centre_ville": { "min": 104000, "max": 119000 }, "zone_peripherique": { "min": 98200, "max": 106200 }, "zone_eloignement": { "min": 87000, "max": 99500 } } },
          { "type": "Pleine propriété une (01) façade avec raccordements", "zones": { "zone_residentielle": { "min": 106500, "max": 121300 }, "centre_ville": { "min": 92400, "max": 106300 }, "zone_peripherique": { "min": 78600, "max": 90100 }, "zone_eloignement": { "min": 75100, "max": 85500 } } },
          { "type": "Pleine propriété deux (02) façades sans raccordements", "zones": { "zone_residentielle": { "min": 103000, "max": 118000 }, "centre_ville": { "min": 90100, "max": 103000 }, "zone_peripherique": { "min": 79000, "max": 90100 }, "zone_eloignement": { "min": 67000, "max": 76500 } } },
          { "type": "Pleine propriété une (01) façade sans raccordements", "zones": { "zone_residentielle": { "min": 97700, "max": 111300 }, "centre_ville": { "min": 85000, "max": 97700 }, "zone_peripherique": { "min": 74600, "max": 85000 }, "zone_eloignement": { "min": 63000, "max": 71500 } } },
          { "type": "Dans l'indivision", "zones": { "zone_residentielle": { "min": 109000, "max": 124800 }, "centre_ville": { "min": 95000, "max": 109000 }, "zone_peripherique": { "min": 83200, "max": 95000 }, "zone_eloignement": { "min": 73000, "max": 83500 } } },
          { "type": "Industriel", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": null, "max": null }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 9000000, "max": 10000000 }, "zone_eloignement": { "min": 4315500, "max": 4956000 } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 7000000, "max": 8500000 }, "zone_eloignement": { "min": 3748500, "max": 4305000 } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 5000000, "max": 6000000 }, "zone_eloignement": { "min": 3255000, "max": 3738000 } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 6000000, "max": 7000000 }, "zone_eloignement": { "min": 3076500, "max": 3528000 } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 4000000, "max": 5900000 }, "zone_eloignement": { "min": 2667000, "max": 3066000 } } }
        ]
      }
    ]
  },
  "bir_el_djir": {
    "id": "bir_el_djir",
    "nom": "Bir El Djir",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Bir El Djir",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": 157000, "max": 180000 }, "centre_ville": { "min": 141000, "max": 162000 }, "zone_peripherique": { "min": 124000, "max": 142000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": 136000, "max": 156000 }, "centre_ville": { "min": 122000, "max": 140000 }, "zone_peripherique": { "min": 107000, "max": 123000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": 118000, "max": 135000 }, "centre_ville": { "min": 106000, "max": 121000 }, "zone_peripherique": { "min": 93000, "max": 106000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": 102000, "max": 117000 }, "centre_ville": { "min": 92000, "max": 105000 }, "zone_peripherique": { "min": 80000, "max": 92000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": 139000, "max": 159000 }, "centre_ville": { "min": 127000, "max": 146000 }, "zone_peripherique": { "min": 111000, "max": 126000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": 120000, "max": 138000 }, "centre_ville": { "min": 110000, "max": 126000 }, "zone_peripherique": { "min": 96000, "max": 110000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": 104000, "max": 119000 }, "centre_ville": { "min": 95000, "max": 109000 }, "zone_peripherique": { "min": 83000, "max": 95000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": 90000, "max": 103000 }, "centre_ville": { "min": 82000, "max": 94000 }, "zone_peripherique": { "min": 72000, "max": 82000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          { "type": "Artère hautement commerciale", "zones": { "zone_residentielle": { "min": 188000, "max": 216000 }, "centre_ville": { "min": 180000, "max": 207000 }, "zone_peripherique": { "min": 127000, "max": 146000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Artère moyennement commerciale", "zones": { "zone_residentielle": { "min": 163000, "max": 187000 }, "centre_ville": { "min": 156000, "max": 179000 }, "zone_peripherique": { "min": 110000, "max": 126000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Artère peu commerciale", "zones": { "zone_residentielle": { "min": 141000, "max": 162000 }, "centre_ville": { "min": 135000, "max": 155000 }, "zone_peripherique": { "min": 94000, "max": 109000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          { "type": "Situé en zone urbaine", "zones": { "zone_residentielle": { "min": 87000, "max": 100000 }, "centre_ville": { "min": 81000, "max": 93000 }, "zone_peripherique": { "min": 71000, "max": 80000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Situé en zone rurale", "zones": { "zone_residentielle": { "min": 75000, "max": 86000 }, "centre_ville": { "min": 70000, "max": 80000 }, "zone_peripherique": { "min": 61000, "max": 70000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          { "type": "Pleine propriété deux (02) façades avec raccordements", "zones": { "zone_residentielle": { "min": 143000, "max": 164450 }, "centre_ville": { "min": 135000, "max": 155000 }, "zone_peripherique": { "min": 120000, "max": 138000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Pleine propriété une (01) façade avec raccordements", "zones": { "zone_residentielle": { "min": 126000, "max": 144900 }, "centre_ville": { "min": 117000, "max": 134000 }, "zone_peripherique": { "min": 102000, "max": 117000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Pleine propriété deux (02) façades sans raccordements", "zones": { "zone_residentielle": { "min": 112000, "max": 128000 }, "centre_ville": { "min": 103000, "max": 118000 }, "zone_peripherique": { "min": 90000, "max": 103000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Pleine propriété une (01) façade sans raccordements", "zones": { "zone_residentielle": { "min": 105000, "max": 120000 }, "centre_ville": { "min": 97000, "max": 111000 }, "zone_peripherique": { "min": 82000, "max": 95000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Dans l'indivision", "zones": { "zone_residentielle": { "min": 101000, "max": 116000 }, "centre_ville": { "min": 95000, "max": 109000 }, "zone_peripherique": { "min": 80000, "max": 92000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Industriel", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 29000, "max": 33000 }, "zone_peripherique": { "min": 21000, "max": 24000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": 4700000, "max": 5400000 }, "centre_ville": { "min": 4200000, "max": 4800000 }, "zone_peripherique": { "min": 3800000, "max": 4300000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": 4000000, "max": 4600000 }, "centre_ville": { "min": 3600000, "max": 4100000 }, "zone_peripherique": { "min": 3300000, "max": 3700000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": 3400000, "max": 3900000 }, "centre_ville": { "min": 3100000, "max": 3500000 }, "zone_peripherique": { "min": 2800000, "max": 3200000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": 4300000, "max": 4900000 }, "centre_ville": { "min": 4000000, "max": 4600000 }, "zone_peripherique": { "min": 2900000, "max": 3300000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": 3700000, "max": 4200000 }, "centre_ville": { "min": 3400000, "max": 3900000 }, "zone_peripherique": { "min": 2400000, "max": 2800000 }, "zone_eloignement": { "min": null, "max": null } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": 3200000, "max": 3600000 }, "centre_ville": { "min": 2900000, "max": 3300000 }, "zone_peripherique": { "min": 2000000, "max": 2300000 }, "zone_eloignement": { "min": null, "max": null } } }
        ]
      }
    ]
  },
  "ain_el_bia": {
    "id": "ain_el_bia",
    "nom": "Ain El Bia",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Ain El Bia",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 81000, "max": 93000 }, "zone_peripherique": { "min": 73000, "max": 83000 }, "zone_eloignement": { "min": 66000, "max": 75000 } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 70000, "max": 80000 }, "zone_peripherique": { "min": 63000, "max": 72000 }, "zone_eloignement": { "min": 57000, "max": 65000 } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 60000, "max": 69000 }, "zone_peripherique": { "min": 54000, "max": 62000 }, "zone_eloignement": { "min": 49000, "max": 56000 } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 51000, "max": 59000 }, "zone_peripherique": { "min": 46000, "max": 53000 }, "zone_eloignement": { "min": 42000, "max": 48000 } } }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 56000, "max": 64000 }, "zone_peripherique": { "min": 46000, "max": 52000 }, "zone_eloignement": { "min": 43000, "max": 49000 } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 48000, "max": 55000 }, "zone_peripherique": { "min": 39000, "max": 45000 }, "zone_eloignement": { "min": 37000, "max": 42000 } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 41000, "max": 47000 }, "zone_peripherique": { "min": 33000, "max": 38000 }, "zone_eloignement": { "min": 32000, "max": 36000 } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 35000, "max": 40000 }, "zone_peripherique": { "min": 29000, "max": 32000 }, "zone_eloignement": { "min": 27000, "max": 31000 } } }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          { "type": "Artère hautement commerciale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 65000, "max": 74000 }, "zone_peripherique": { "min": 58000, "max": 66000 }, "zone_eloignement": { "min": 49000, "max": 56000 } } },
          { "type": "Artère moyennement commerciale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 56000, "max": 64000 }, "zone_peripherique": { "min": 50000, "max": 57000 }, "zone_eloignement": { "min": 42000, "max": 48000 } } },
          { "type": "Artère peu commerciale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 48000, "max": 55000 }, "zone_peripherique": { "min": 42000, "max": 49000 }, "zone_eloignement": { "min": 36000, "max": 41000 } } }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          { "type": "Situé en zone urbaine", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 64000, "max": 73000 }, "zone_peripherique": { "min": 57000, "max": 65000 }, "zone_eloignement": { "min": 51000, "max": 58000 } } },
          { "type": "Situé en zone rurale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 55000, "max": 63000 }, "zone_peripherique": { "min": 49000, "max": 56000 }, "zone_eloignement": { "min": 44000, "max": 50000 } } }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          { "type": "Pleine propriété deux (02) façades avec raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 63000, "max": 73000 }, "zone_peripherique": { "min": 57000, "max": 65000 }, "zone_eloignement": { "min": 51000, "max": 59000 } } },
          { "type": "Pleine propriété une (01) façade avec raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 60000, "max": 69000 }, "zone_peripherique": { "min": 53000, "max": 61000 }, "zone_eloignement": { "min": 47000, "max": 54000 } } },
          { "type": "Pleine propriété deux (02) façades sans raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 52000, "max": 60000 }, "zone_peripherique": { "min": 46000, "max": 53000 }, "zone_eloignement": { "min": 44000, "max": 50000 } } },
          { "type": "Pleine propriété une (01) façade sans raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 41000, "max": 48000 }, "zone_peripherique": { "min": 39000, "max": 45000 }, "zone_eloignement": { "min": 35000, "max": 40000 } } },
          { "type": "Dans l'indivision", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 35000, "max": 40000 }, "zone_peripherique": { "min": 30000, "max": 35000 }, "zone_eloignement": { "min": 29000, "max": 34000 } } },
          { "type": "Industriel", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 27000, "max": 31000 }, "zone_peripherique": { "min": 23000, "max": 26000 }, "zone_eloignement": { "min": 20000, "max": 23000 } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 5200000, "max": 5900000 }, "zone_peripherique": { "min": 4400000, "max": 5000000 }, "zone_eloignement": { "min": 3700000, "max": 4300000 } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 4500000, "max": 5100000 }, "zone_peripherique": { "min": 3800000, "max": 4300000 }, "zone_eloignement": { "min": 3300000, "max": 3600000 } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 3800000, "max": 4400000 }, "zone_peripherique": { "min": 3300000, "max": 3700000 }, "zone_eloignement": { "min": 2800000, "max": 3200000 } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 3700000, "max": 4200000 }, "zone_peripherique": { "min": 2700000, "max": 3100000 }, "zone_eloignement": { "min": 2400000, "max": 2700000 } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 3200000, "max": 3600000 }, "zone_peripherique": { "min": 2300000, "max": 2600000 }, "zone_eloignement": { "min": 2000000, "max": 2300000 } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 2700000, "max": 3100000 }, "zone_peripherique": { "min": 1900000, "max": 2200000 }, "zone_eloignement": { "min": 1700000, "max": 1900000 } } }
        ]
      }
    ]
  },
  "ain_el_kerma": {
    "id": "ain_el_kerma",
    "nom": "Ain El Kerma",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Ain El Kerma",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 35700, "max": 41000 }, "zone_peripherique": { "min": 33600, "max": 37800 }, "zone_eloignement": { "min": 27300, "max": 30500 } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 30500, "max": 34700 }, "zone_peripherique": { "min": 28400, "max": 32600 }, "zone_eloignement": { "min": 23100, "max": 26300 } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 26300, "max": 29400 }, "zone_peripherique": { "min": 24200, "max": 27300 }, "zone_eloignement": { "min": 20000, "max": 22100 } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 22100, "max": 25200 }, "zone_peripherique": { "min": 17900, "max": 20000 }, "zone_eloignement": { "min": 14700, "max": 16800 } } }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          { "type": "Standing", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 30500, "max": 34700 }, "zone_peripherique": { "min": 27300, "max": 30500 }, "zone_eloignement": { "min": 26300, "max": 29400 } } },
          { "type": "Amélioré", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 26300, "max": 29400 }, "zone_peripherique": { "min": 25200, "max": 28400 }, "zone_eloignement": { "min": 22100, "max": 25200 } } },
          { "type": "Economique", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 22100, "max": 25200 }, "zone_peripherique": { "min": 21000, "max": 24200 }, "zone_eloignement": { "min": 18900, "max": 21000 } } },
          { "type": "Précaire", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 20000, "max": 22100 }, "zone_peripherique": { "min": 17900, "max": 20000 }, "zone_eloignement": { "min": 15800, "max": 17900 } } }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          { "type": "Artère hautement commerciale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 30500, "max": 35000 }, "zone_peripherique": { "min": 26300, "max": 29400 }, "zone_eloignement": { "min": 23100, "max": 26300 } } },
          { "type": "Artère moyennement commerciale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 26300, "max": 29400 }, "zone_peripherique": { "min": 22100, "max": 25200 }, "zone_eloignement": { "min": 20000, "max": 22100 } } },
          { "type": "Artère peu commerciale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 22100, "max": 25200 }, "zone_peripherique": { "min": 18900, "max": 21000 }, "zone_eloignement": { "min": 16800, "max": 18900 } } }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          { "type": "Situé en zone urbaine", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 33600, "max": 37800 }, "zone_peripherique": { "min": 30500, "max": 34700 }, "zone_eloignement": { "min": 25200, "max": 28400 } } },
          { "type": "Situé en zone rurale", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 28400, "max": 32600 }, "zone_peripherique": { "min": 26300, "max": 29400 }, "zone_eloignement": { "min": 21000, "max": 24200 } } }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          { "type": "Pleine propriété deux (02) façades avec raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 29400, "max": 33600 }, "zone_peripherique": { "min": 25200, "max": 28400 }, "zone_eloignement": { "min": 21000, "max": 24200 } } },
          { "type": "Pleine propriété une (01) façade avec raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 29400, "max": 33600 }, "zone_peripherique": { "min": 28400, "max": 32600 }, "zone_eloignement": { "min": 24200, "max": 27300 } } },
          { "type": "Pleine propriété deux (02) façades sans raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 22100, "max": 25200 }, "zone_peripherique": { "min": 18900, "max": 21000 }, "zone_eloignement": { "min": 16800, "max": 18900 } } },
          { "type": "Pleine propriété une (01) façade sans raccordements", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 19950, "max": 23100 }, "zone_peripherique": { "min": 17900, "max": 20000 }, "zone_eloignement": { "min": 15800, "max": 17900 } } },
          { "type": "Dans l'indivision", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 22100, "max": 25200 }, "zone_peripherique": { "min": 18900, "max": 21000 }, "zone_eloignement": { "min": 16800, "max": 18900 } } },
          { "type": "Industriel", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": 24200, "max": 27300 }, "zone_peripherique": { "min": 28400, "max": 32600 }, "zone_eloignement": { "min": 30500, "max": 34700 } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 6000000, "max": 7000000 }, "zone_eloignement": { "min": 4000000, "max": 5000000 } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 4500000, "max": 5500000 }, "zone_eloignement": { "min": 3000000, "max": 3900000 } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 2500000, "max": 4000000 }, "zone_eloignement": { "min": 2000000, "max": 2900000 } } }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          { "type": "Potentialité élevée", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 5000000, "max": 6000000 }, "zone_eloignement": { "min": 2076500, "max": 2528000 } } },
          { "type": "Potentialité moyenne", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 3000000, "max": 4900000 }, "zone_eloignement": { "min": 1667000, "max": 2066000 } } },
          { "type": "Potentialité faible", "zones": { "zone_residentielle": { "min": null, "max": null }, "centre_ville": { "min": null, "max": null }, "zone_peripherique": { "min": 1500000, "max": 2900000 }, "zone_eloignement": { "min": 1000000, "max": 1600000 } } }
        ]
      }
    ]
  },
  "ain_turck": {
    "id": "ain_turck",
    "nom": "Ain Turck",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Ain Turck",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 130000, "max": 159000 },
              "centre_ville": { "min": 116600, "max": 134400 },
              "zone_peripherique": { "min": 81900, "max": 93500 },
              "zone_eloignement": { "min": 67200, "max": 76700 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 117600, "max": 138000 },
              "centre_ville": { "min": 100800, "max": 115500 },
              "zone_peripherique": { "min": 70400, "max": 80900 },
              "zone_eloignement": { "min": 58000, "max": 66200 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 101900, "max": 117000 },
              "centre_ville": { "min": 87200, "max": 99800 },
              "zone_peripherique": { "min": 61000, "max": 69500 },
              "zone_eloignement": { "min": 49500, "max": 56700 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 88200, "max": 100800 },
              "centre_ville": { "min": 74600, "max": 86100 },
              "zone_peripherique": { "min": 52500, "max": 59850 },
              "zone_eloignement": { "min": 42000, "max": 48300 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 120000, "max": 130000 },
              "centre_ville": { "min": 77400, "max": 89000 },
              "zone_peripherique": { "min": 68200, "max": 77400 },
              "zone_eloignement": { "min": 55500, "max": 63600 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 100000, "max": 119000 },
              "centre_ville": { "min": 65900, "max": 76300 },
              "zone_peripherique": { "min": 58900, "max": 67000 },
              "zone_eloignement": { "min": 47500, "max": 54300 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 80000, "max": 99000 },
              "centre_ville": { "min": 56600, "max": 64700 },
              "zone_peripherique": { "min": 50900, "max": 57800 },
              "zone_eloignement": { "min": 40500, "max": 46200 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 65000, "max": 79000 },
              "centre_ville": { "min": 48600, "max": 55500 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 34700, "max": 39300 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": 163000, "max": 187200 },
              "centre_ville": { "min": 138600, "max": 159400 },
              "zone_peripherique": { "min": 108600, "max": 124800 },
              "zone_eloignement": { "min": 54300, "max": 62400 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": 141000, "max": 161700 },
              "centre_ville": { "min": 120120, "max": 137500 },
              "zone_peripherique": { "min": 93600, "max": 107500 },
              "zone_eloignement": { "min": 46200, "max": 53200 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": 122500, "max": 139800 },
              "centre_ville": { "min": 104000, "max": 119000 },
              "zone_peripherique": { "min": 80900, "max": 92400 },
              "zone_eloignement": { "min": 39300, "max": 45100 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 86700, "max": 99400 },
              "zone_peripherique": { "min": 72800, "max": 83200 },
              "zone_eloignement": { "min": 60100, "max": 68200 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 75100, "max": 85500 },
              "zone_peripherique": { "min": 62400, "max": 71700 },
              "zone_eloignement": { "min": 52000, "max": 59000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": 113200, "max": 129500 },
              "centre_ville": { "min": 98200, "max": 112100 },
              "zone_peripherique": { "min": 92400, "max": 106300 },
              "zone_eloignement": { "min": 81000, "max": 92400 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": 100500, "max": 115500 },
              "centre_ville": { "min": 86700, "max": 99400 },
              "zone_peripherique": { "min": 78600, "max": 90100 },
              "zone_eloignement": { "min": 69300, "max": 79600 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 97100, "max": 110000 },
              "centre_ville": { "min": 84400, "max": 96000 },
              "zone_peripherique": { "min": 72800, "max": 79700 },
              "zone_eloignement": { "min": 61300, "max": 69300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 93500, "max": 103950 },
              "centre_ville": { "min": 79800, "max": 90300 },
              "zone_peripherique": { "min": 68300, "max": 75600 },
              "zone_eloignement": { "min": 57800, "max": 65100 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": 102800, "max": 117900 },
              "centre_ville": { "min": 89000, "max": 101700 },
              "zone_peripherique": { "min": 77400, "max": 89000 },
              "zone_eloignement": { "min": 67000, "max": 76300 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": null, "max": null },
              "zone_eloignement": { "min": null, "max": null }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 9000000, "max": 10000000 },
              "zone_eloignement": { "min": 4315500, "max": 4956000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 7000000, "max": 8500000 },
              "zone_eloignement": { "min": 3748500, "max": 4305000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 3255000, "max": 3738000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2310000, "max": 2656500 }
            }
          }
        ]
      }
    ]
  },
  "arzew": {
    "id": "arzew",
    "nom": "Arzew",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Arzew",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 111000, "max": 127000 },
              "centre_ville": { "min": 99000, "max": 113000 },
              "zone_peripherique": { "min": 87000, "max": 100000 },
              "zone_eloignement": { "min": 74000, "max": 85000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 96000, "max": 110000 },
              "centre_ville": { "min": 86000, "max": 98000 },
              "zone_peripherique": { "min": 75000, "max": 86000 },
              "zone_eloignement": { "min": 64000, "max": 73000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 83000, "max": 95000 },
              "centre_ville": { "min": 74000, "max": 85000 },
              "zone_peripherique": { "min": 65000, "max": 74000 },
              "zone_eloignement": { "min": 56000, "max": 63000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 71000, "max": 82000 },
              "centre_ville": { "min": 63000, "max": 73000 },
              "zone_peripherique": { "min": 56000, "max": 64000 },
              "zone_eloignement": { "min": 48000, "max": 55000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 97000, "max": 111000 },
              "centre_ville": { "min": 86000, "max": 98000 },
              "zone_peripherique": { "min": 71000, "max": 80000 },
              "zone_eloignement": { "min": 66000, "max": 75000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 84000, "max": 96000 },
              "centre_ville": { "min": 73000, "max": 84000 },
              "zone_peripherique": { "min": 61000, "max": 70000 },
              "zone_eloignement": { "min": 59000, "max": 65000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 73000, "max": 83000 },
              "centre_ville": { "min": 63000, "max": 72000 },
              "zone_peripherique": { "min": 53000, "max": 60000 },
              "zone_eloignement": { "min": 51000, "max": 58000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 62000, "max": 72000 },
              "centre_ville": { "min": 55000, "max": 62000 },
              "zone_peripherique": { "min": 47000, "max": 52000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": 129000, "max": 143000 },
              "centre_ville": { "min": 119000, "max": 135000 },
              "zone_peripherique": { "min": 110000, "max": 125000 },
              "zone_eloignement": { "min": 99000, "max": 113000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": 113000, "max": 128000 },
              "centre_ville": { "min": 105000, "max": 118000 },
              "zone_peripherique": { "min": 95000, "max": 109000 },
              "zone_eloignement": { "min": 86000, "max": 98000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": 98000, "max": 112000 },
              "centre_ville": { "min": 91000, "max": 104000 },
              "zone_peripherique": { "min": 82000, "max": 94000 },
              "zone_eloignement": { "min": 74000, "max": 85000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": 86000, "max": 95000 },
              "centre_ville": { "min": 76000, "max": 87000 },
              "zone_peripherique": { "min": 69000, "max": 78000 },
              "zone_eloignement": { "min": 62000, "max": 70000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": 77000, "max": 85000 },
              "centre_ville": { "min": 69000, "max": 75000 },
              "zone_peripherique": { "min": 60000, "max": 68000 },
              "zone_eloignement": { "min": 55000, "max": 61000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": 75000, "max": 87000 },
              "centre_ville": { "min": 70000, "max": 80000 },
              "zone_peripherique": { "min": 66000, "max": 75000 },
              "zone_eloignement": { "min": 61000, "max": 70000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": 71000, "max": 82000 },
              "centre_ville": { "min": 67000, "max": 77000 },
              "zone_peripherique": { "min": 62000, "max": 72000 },
              "zone_eloignement": { "min": 52000, "max": 60000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 68000, "max": 78000 },
              "centre_ville": { "min": 62000, "max": 72000 },
              "zone_peripherique": { "min": 56000, "max": 64000 },
              "zone_eloignement": { "min": 49000, "max": 56000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 66000, "max": 75000 },
              "centre_ville": { "min": 60000, "max": 69000 },
              "zone_peripherique": { "min": 46000, "max": 53000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": 60000, "max": 69000 },
              "centre_ville": { "min": 50000, "max": 58000 },
              "zone_peripherique": { "min": 36000, "max": 41000 },
              "zone_eloignement": { "min": 33000, "max": 37000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": 35000, "max": 40000 },
              "centre_ville": { "min": 31000, "max": 36000 },
              "zone_peripherique": { "min": 29000, "max": 34000 },
              "zone_eloignement": { "min": 27000, "max": 31000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3300000, "max": 3700000 },
              "zone_peripherique": { "min": 2800000, "max": 3200000 },
              "zone_eloignement": { "min": 2100000, "max": 2400000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2800000, "max": 3200000 },
              "zone_peripherique": { "min": 2400000, "max": 2700000 },
              "zone_eloignement": { "min": 1800000, "max": 2000000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2400000, "max": 2700000 },
              "zone_peripherique": { "min": 2000000, "max": 2300000 },
              "zone_eloignement": { "min": 1500000, "max": 1700000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2600000, "max": 2900000 },
              "zone_peripherique": { "min": 2200000, "max": 2500000 },
              "zone_eloignement": { "min": 1800000, "max": 2000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2200000, "max": 2500000 },
              "zone_peripherique": { "min": 1900000, "max": 2100000 },
              "zone_eloignement": { "min": 1500000, "max": 1700000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 1900000, "max": 2100000 },
              "zone_peripherique": { "min": 1600000, "max": 1800000 },
              "zone_eloignement": { "min": 1300000, "max": 1400000 }
            }
          }
        ]
      }
    ]
  },
  "benfraha": {
    "id": "benfraha",
    "nom": "Benfraha",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Benfraha",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68000, "max": 78000 },
              "zone_peripherique": { "min": 58000, "max": 66000 },
              "zone_eloignement": { "min": 50000, "max": 57000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 59000, "max": 67000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 43000, "max": 49000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 51000, "max": 58000 },
              "zone_peripherique": { "min": 43000, "max": 49000 },
              "zone_eloignement": { "min": 37000, "max": 42000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 44000, "max": 50000 },
              "zone_peripherique": { "min": 37000, "max": 42000 },
              "zone_eloignement": { "min": 32000, "max": 36000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 49000, "max": 56000 },
              "zone_peripherique": { "min": 43000, "max": 49000 },
              "zone_eloignement": { "min": 38000, "max": 43000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 42000, "max": 48000 },
              "zone_peripherique": { "min": 36000, "max": 42000 },
              "zone_eloignement": { "min": 33000, "max": 37000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 36000, "max": 41000 },
              "zone_peripherique": { "min": 31000, "max": 35000 },
              "zone_eloignement": { "min": 28000, "max": 32000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64000, "max": 70000 },
              "zone_peripherique": { "min": 56000, "max": 64000 },
              "zone_eloignement": { "min": 54000, "max": 60000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 63000 },
              "zone_peripherique": { "min": 49000, "max": 55000 },
              "zone_eloignement": { "min": 46000, "max": 53000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 51000, "max": 56000 },
              "zone_peripherique": { "min": 44000, "max": 48000 },
              "zone_eloignement": { "min": 41000, "max": 45000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 65000, "max": 69000 },
              "zone_peripherique": { "min": 53000, "max": 60000 },
              "zone_eloignement": { "min": 45000, "max": 54000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 56000, "max": 64000 },
              "zone_peripherique": { "min": 47000, "max": 52000 },
              "zone_eloignement": { "min": 40000, "max": 44000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 67000, "max": 77000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 52000, "max": 60000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 62000, "max": 72000 },
              "zone_peripherique": { "min": 55000, "max": 63000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 47000, "max": 54000 },
              "zone_eloignement": { "min": 40000, "max": 46000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 52000, "max": 60000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 34000, "max": 39000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 44000, "max": 50000 },
              "zone_peripherique": { "min": 34000, "max": 39000 },
              "zone_eloignement": { "min": 27000, "max": 31000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 27000, "max": 31000 },
              "zone_peripherique": { "min": 20000, "max": 24000 },
              "zone_eloignement": { "min": 15000, "max": 17000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3500000, "max": 4000000 },
              "zone_peripherique": { "min": 2700000, "max": 3100000 },
              "zone_eloignement": { "min": 2200000, "max": 2500000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3000000, "max": 3400000 },
              "zone_peripherique": { "min": 2300000, "max": 2600000 },
              "zone_eloignement": { "min": 1900000, "max": 2100000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2500000, "max": 2900000 },
              "zone_peripherique": { "min": 1900000, "max": 2200000 },
              "zone_eloignement": { "min": 1600000, "max": 1800000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2200000, "max": 2500000 },
              "zone_peripherique": { "min": 2000000, "max": 2300000 },
              "zone_eloignement": { "min": 1800000, "max": 2000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 1900000, "max": 2100000 },
              "zone_peripherique": { "min": 1700000, "max": 1900000 },
              "zone_eloignement": { "min": 1500000, "max": 1700000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 1600000, "max": 1800000 },
              "zone_peripherique": { "min": 1400000, "max": 1600000 },
              "zone_eloignement": { "min": 1200000, "max": 1400000 }
            }
          }
        ]
      }
    ]
  },
  "bethioua": {
    "id": "bethioua",
    "nom": "Bethioua",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Bethioua",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 107000, "max": 123000 },
              "centre_ville": { "min": 101000, "max": 115000 },
              "zone_peripherique": { "min": 94000, "max": 108000 },
              "zone_eloignement": { "min": 86000, "max": 98000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 93000, "max": 106000 },
              "centre_ville": { "min": 87000, "max": 100000 },
              "zone_peripherique": { "min": 81000, "max": 93000 },
              "zone_eloignement": { "min": 74000, "max": 85000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 80000, "max": 92000 },
              "centre_ville": { "min": 75000, "max": 86000 },
              "zone_peripherique": { "min": 70000, "max": 80000 },
              "zone_eloignement": { "min": 64000, "max": 73000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 69000, "max": 79000 },
              "centre_ville": { "min": 64000, "max": 74000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 55000, "max": 63000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 79000, "max": 90000 },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 58000, "max": 65000 },
              "zone_eloignement": { "min": 48000, "max": 55000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 68000, "max": 78000 },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 51000, "max": 57000 },
              "zone_eloignement": { "min": 43000, "max": 47000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 59000, "max": 67000 },
              "centre_ville": { "min": 51000, "max": 56000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 38000, "max": 42000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 50000, "max": 58000 },
              "centre_ville": { "min": 44000, "max": 50000 },
              "zone_peripherique": { "min": 37000, "max": 43000 },
              "zone_eloignement": { "min": 33000, "max": 37000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": 113000, "max": 129000 },
              "centre_ville": { "min": 105000, "max": 120000 },
              "zone_peripherique": { "min": 95000, "max": 109000 },
              "zone_eloignement": { "min": 84000, "max": 96000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": 99000, "max": 112000 },
              "centre_ville": { "min": 91000, "max": 104000 },
              "zone_peripherique": { "min": 82000, "max": 94000 },
              "zone_eloignement": { "min": 73000, "max": 83000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": 86000, "max": 98000 },
              "centre_ville": { "min": 79000, "max": 90000 },
              "zone_peripherique": { "min": 71000, "max": 81000 },
              "zone_eloignement": { "min": 63000, "max": 72000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": 80000, "max": 92000 },
              "centre_ville": { "min": 76000, "max": 87000 },
              "zone_peripherique": { "min": 70000, "max": 80000 },
              "zone_eloignement": { "min": 65000, "max": 74000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": 69000, "max": 79000 },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 56000, "max": 64000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": 80000, "max": 92000 },
              "centre_ville": { "min": 74000, "max": 86000 },
              "zone_peripherique": { "min": 68000, "max": 78000 },
              "zone_eloignement": { "min": 62000, "max": 72000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": 75000, "max": 87000 },
              "centre_ville": { "min": 70000, "max": 80000 },
              "zone_peripherique": { "min": 63000, "max": 73000 },
              "zone_eloignement": { "min": 55000, "max": 63000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 71000, "max": 82000 },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 51000, "max": 61000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 67000, "max": 77000 },
              "centre_ville": { "min": 62000, "max": 72000 },
              "zone_peripherique": { "min": 57000, "max": 65000 },
              "zone_eloignement": { "min": 51000, "max": 59000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": 60000, "max": 69000 },
              "centre_ville": { "min": 56000, "max": 64000 },
              "zone_peripherique": { "min": 50000, "max": 58000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": 46000, "max": 53000 },
              "centre_ville": { "min": 38000, "max": 41000 },
              "zone_peripherique": { "min": 37000, "max": 43000 },
              "zone_eloignement": { "min": 34000, "max": 39000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 4600000, "max": 5200000 },
              "zone_peripherique": { "min": 4200000, "max": 4800000 },
              "zone_eloignement": { "min": 4000000, "max": 4600000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 4000000, "max": 4500000 },
              "zone_peripherique": { "min": 3600000, "max": 4100000 },
              "zone_eloignement": { "min": 3400000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3400000, "max": 3900000 },
              "zone_peripherique": { "min": 3100000, "max": 3500000 },
              "zone_eloignement": { "min": 2900000, "max": 3300000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 4200000, "max": 4400000 },
              "zone_peripherique": { "min": 3800000, "max": 4300000 },
              "zone_eloignement": { "min": 3600000, "max": 4100000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3600000, "max": 4100000 },
              "zone_peripherique": { "min": 3300000, "max": 3700000 },
              "zone_eloignement": { "min": 3100000, "max": 3500000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3100000, "max": 3500000 },
              "zone_peripherique": { "min": 2800000, "max": 3200000 },
              "zone_eloignement": { "min": 2600000, "max": 3000000 }
            }
          }
        ]
      }
    ]
  },
  "boufatis": {
    "id": "boufatis",
    "nom": "Boufatis",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Boufatis",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 39300, "max": 45100 },
              "zone_peripherique": { "min": 37000, "max": 41600 },
              "zone_eloignement": { "min": 30100, "max": 33500 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33500, "max": 38200 },
              "zone_peripherique": { "min": 31200, "max": 35900 },
              "zone_eloignement": { "min": 25500, "max": 28900 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28900, "max": 32400 },
              "zone_peripherique": { "min": 26600, "max": 30100 },
              "zone_eloignement": { "min": 22000, "max": 24300 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24300, "max": 27800 },
              "zone_peripherique": { "min": 19700, "max": 22000 },
              "zone_eloignement": { "min": 16200, "max": 18500 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33500, "max": 38200 },
              "zone_peripherique": { "min": 30100, "max": 33500 },
              "zone_eloignement": { "min": 28900, "max": 32400 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28900, "max": 32400 },
              "zone_peripherique": { "min": 27800, "max": 31200 },
              "zone_eloignement": { "min": 24300, "max": 27800 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24300, "max": 27800 },
              "zone_peripherique": { "min": 23100, "max": 26600 },
              "zone_eloignement": { "min": 20800, "max": 23100 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22000, "max": 24300 },
              "zone_peripherique": { "min": 19700, "max": 22000 },
              "zone_eloignement": { "min": 17400, "max": 19700 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33500, "max": 38200 },
              "zone_peripherique": { "min": 28900, "max": 32400 },
              "zone_eloignement": { "min": 25500, "max": 28900 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28900, "max": 32400 },
              "zone_peripherique": { "min": 24300, "max": 27800 },
              "zone_eloignement": { "min": 22000, "max": 24300 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24300, "max": 27800 },
              "zone_peripherique": { "min": 20800, "max": 23100 },
              "zone_eloignement": { "min": 18500, "max": 20800 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33600, "max": 37800 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 25200, "max": 28400 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28400, "max": 32600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30800, "max": 35200 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 24200, "max": 27300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 25200, "max": 28400 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 23100 },
              "zone_peripherique": { "min": 17900, "max": 20000 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24200, "max": 27300 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 30500, "max": 34700 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 4000000, "max": 5000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4500000, "max": 5500000 },
              "zone_eloignement": { "min": 3000000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 4000000 },
              "zone_eloignement": { "min": 2000000, "max": 2900000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 2076500, "max": 2528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 3000000, "max": 4900000 },
              "zone_eloignement": { "min": 1667000, "max": 2066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 1500000, "max": 2900000 },
              "zone_eloignement": { "min": 1000000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  },
  "bousfer": {
    "id": "bousfer",
    "nom": "Bousfer",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Bousfer",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35700, "max": 41000 },
              "zone_peripherique": { "min": 34700, "max": 38900 },
              "zone_eloignement": { "min": 31500, "max": 34700 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30500, "max": 34700 },
              "zone_peripherique": { "min": 29400, "max": 33600 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 25200, "max": 28400 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 21000, "max": 24200 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 34700, "max": 38900 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 25200, "max": 28400 },
              "zone_peripherique": { "min": 22100, "max": 25200 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 21000, "max": 24200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30500, "max": 34700 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 24200, "max": 27300 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 22100, "max": 25200 },
              "zone_eloignement": { "min": 20000, "max": 23100 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33600, "max": 37800 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28400, "max": 32600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 31500, "max": 35700 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 27300, "max": 30500 },
              "zone_eloignement": { "min": 22100, "max": 25200 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 23100 },
              "zone_peripherique": { "min": 17900, "max": 20000 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 22100 },
              "zone_peripherique": { "min": 16800, "max": 18900 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 23100, "max": 26300 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 29400, "max": 33600 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 9000000, "max": 10000000 },
              "zone_eloignement": { "min": 4315500, "max": 4956000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 7000000, "max": 8500000 },
              "zone_eloignement": { "min": 3748500, "max": 4305000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 3255000, "max": 3738000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2310000, "max": 2656500 }
            }
          }
        ]
      }
    ]
  },
  "boutlelis": {
    "id": "boutlelis",
    "nom": "Boutlelis",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Boutlelis",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 78800, "max": 90300 },
              "zone_peripherique": { "min": 69300, "max": 78800 },
              "zone_eloignement": { "min": 58800, "max": 67200 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68300, "max": 77700 },
              "zone_peripherique": { "min": 59900, "max": 68300 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 58800, "max": 67200 },
              "zone_peripherique": { "min": 51500, "max": 58800 },
              "zone_eloignement": { "min": 43100, "max": 49400 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 50400, "max": 57800 },
              "zone_peripherique": { "min": 44100, "max": 50400 },
              "zone_eloignement": { "min": 36800, "max": 42000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 67200, "max": 76700 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57800, "max": 66200 },
              "zone_peripherique": { "min": 50400, "max": 57800 },
              "zone_eloignement": { "min": 43100, "max": 49400 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 49400, "max": 56700 },
              "zone_peripherique": { "min": 43100, "max": 49400 },
              "zone_eloignement": { "min": 36800, "max": 42000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 42000, "max": 48300 },
              "zone_peripherique": { "min": 36800, "max": 42000 },
              "zone_eloignement": { "min": 31500, "max": 35700 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 88200, "max": 95000 },
              "zone_peripherique": { "min": 77700, "max": 89300 },
              "zone_eloignement": { "min": 63000, "max": 72500 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 76700, "max": 87200 },
              "zone_peripherique": { "min": 67200, "max": 76700 },
              "zone_eloignement": { "min": 54600, "max": 62000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 66200, "max": 75600 },
              "zone_peripherique": { "min": 57800, "max": 66200 },
              "zone_eloignement": { "min": 47300, "max": 53600 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 62000, "max": 70400 },
              "zone_peripherique": { "min": 54600, "max": 62000 },
              "zone_eloignement": { "min": 49400, "max": 56700 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 53600, "max": 60900 },
              "zone_peripherique": { "min": 47300, "max": 53600 },
              "zone_eloignement": { "min": 42000, "max": 48300 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 90000, "max": 103000 },
              "zone_peripherique": { "min": 85000, "max": 97000 },
              "zone_eloignement": { "min": 75000, "max": 86000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 78000, "max": 89000 },
              "zone_peripherique": { "min": 73000, "max": 83000 },
              "zone_eloignement": { "min": 63000, "max": 72000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 65000, "max": 74000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 50000, "max": 57000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 61000, "max": 70000 },
              "zone_peripherique": { "min": 57000, "max": 65000 },
              "zone_eloignement": { "min": 47000, "max": 54000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80000, "max": 92000 },
              "zone_peripherique": { "min": 75000, "max": 86000 },
              "zone_eloignement": { "min": 65000, "max": 74000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 25000, "max": 28000 },
              "zone_peripherique": { "min": 28000, "max": 32000 },
              "zone_eloignement": { "min": 30000, "max": 34000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 4000000, "max": 5000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4500000, "max": 5500000 },
              "zone_eloignement": { "min": 3000000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 4000000 },
              "zone_eloignement": { "min": 2000000, "max": 2900000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 2076500, "max": 2528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 3000000, "max": 4900000 },
              "zone_eloignement": { "min": 1667000, "max": 2066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 1500000, "max": 2900000 },
              "zone_eloignement": { "min": 1000000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  },
  "el_ancor": {
    "id": "el_ancor",
    "nom": "El Ancor",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "El Ancor",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35700, "max": 41000 },
              "zone_peripherique": { "min": 34700, "max": 38900 },
              "zone_eloignement": { "min": 31500, "max": 34700 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30500, "max": 34700 },
              "zone_peripherique": { "min": 29400, "max": 33600 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 25200, "max": 28400 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 21000, "max": 24200 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 34700, "max": 38900 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 25200, "max": 28400 },
              "zone_peripherique": { "min": 22100, "max": 25200 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 21000, "max": 24200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30500, "max": 34700 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 24200, "max": 27300 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 22100, "max": 25200 },
              "zone_eloignement": { "min": 20000, "max": 23100 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33600, "max": 37800 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28400, "max": 32600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 31500, "max": 35700 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 27300, "max": 30500 },
              "zone_eloignement": { "min": 22100, "max": 25200 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 23100 },
              "zone_peripherique": { "min": 17900, "max": 20000 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 22100 },
              "zone_peripherique": { "min": 16800, "max": 18900 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 23100, "max": 26300 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 29400, "max": 33600 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 9000000, "max": 10000000 },
              "zone_eloignement": { "min": 4315500, "max": 4956000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 7000000, "max": 8500000 },
              "zone_eloignement": { "min": 3748500, "max": 4305000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 3255000, "max": 3738000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2310000, "max": 2656500 }
            }
          }
        ]
      }
    ]
  },
  "el_braya": {
    "id": "el_braya",
    "nom": "El Braya",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "El Braya",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 41100, "max": 47100 },
              "zone_peripherique": { "min": 38700, "max": 43500 },
              "zone_eloignement": { "min": 31400, "max": 35100 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35100, "max": 39900 },
              "zone_peripherique": { "min": 32600, "max": 37500 },
              "zone_eloignement": { "min": 26600, "max": 30200 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30200, "max": 33900 },
              "zone_peripherique": { "min": 27800, "max": 31400 },
              "zone_eloignement": { "min": 23000, "max": 25400 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 25400, "max": 29000 },
              "zone_peripherique": { "min": 20600, "max": 23000 },
              "zone_eloignement": { "min": 17000, "max": 19400 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 36600, "max": 41600 },
              "zone_peripherique": { "min": 32800, "max": 36600 },
              "zone_eloignement": { "min": 31500, "max": 35300 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 31500, "max": 35300 },
              "zone_peripherique": { "min": 30300, "max": 34000 },
              "zone_eloignement": { "min": 26500, "max": 30300 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26500, "max": 30300 },
              "zone_peripherique": { "min": 25200, "max": 29000 },
              "zone_eloignement": { "min": 22700, "max": 25200 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24000, "max": 26500 },
              "zone_peripherique": { "min": 21500, "max": 24000 },
              "zone_eloignement": { "min": 18900, "max": 21500 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 36600, "max": 41600 },
              "zone_peripherique": { "min": 31500, "max": 35300 },
              "zone_eloignement": { "min": 27800, "max": 31500 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 31500, "max": 35300 },
              "zone_peripherique": { "min": 26500, "max": 30300 },
              "zone_eloignement": { "min": 24000, "max": 26500 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26500, "max": 30300 },
              "zone_peripherique": { "min": 22700, "max": 25200 },
              "zone_eloignement": { "min": 20200, "max": 22700 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33600, "max": 37800 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 25200, "max": 28400 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28400, "max": 32600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30800, "max": 35200 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 24200, "max": 27300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 25200, "max": 28400 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 23100 },
              "zone_peripherique": { "min": 17900, "max": 20000 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24200, "max": 27300 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 30500, "max": 34700 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 4000000, "max": 5000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4500000, "max": 5500000 },
              "zone_eloignement": { "min": 3000000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 4000000 },
              "zone_eloignement": { "min": 2000000, "max": 2900000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 2076500, "max": 2528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 3000000, "max": 4900000 },
              "zone_eloignement": { "min": 1667000, "max": 2066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 1500000, "max": 2900000 },
              "zone_eloignement": { "min": 1000000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  },
  "el_kerma": {
    "id": "el_kerma",
    "nom": "El Kerma",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "El Kerma",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 90000, "max": 100000 },
              "zone_peripherique": { "min": 74000, "max": 85000 },
              "zone_eloignement": { "min": 62000, "max": 70400 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80000, "max": 89000 },
              "zone_peripherique": { "min": 65000, "max": 73900 },
              "zone_eloignement": { "min": 53600, "max": 60900 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 70000, "max": 79000 },
              "zone_peripherique": { "min": 60000, "max": 64900 },
              "zone_eloignement": { "min": 46200, "max": 52500 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 50000, "max": 69000 },
              "zone_peripherique": { "min": 45000, "max": 59000 },
              "zone_eloignement": { "min": 39900, "max": 45200 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 73500, "max": 84000 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 63000, "max": 72500 },
              "zone_peripherique": { "min": 53600, "max": 60900 },
              "zone_eloignement": { "min": 46200, "max": 52500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 54600, "max": 62000 },
              "zone_peripherique": { "min": 46200, "max": 52500 },
              "zone_eloignement": { "min": 39900, "max": 45200 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47300, "max": 53600 },
              "zone_peripherique": { "min": 39900, "max": 45200 },
              "zone_eloignement": { "min": 34700, "max": 38900 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 95600, "max": 109200 },
              "zone_peripherique": { "min": 81900, "max": 93500 },
              "zone_eloignement": { "min": 63000, "max": 72500 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 83000, "max": 94500 },
              "zone_peripherique": { "min": 70400, "max": 80900 },
              "zone_eloignement": { "min": 58800, "max": 67200 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 71400, "max": 81900 },
              "zone_peripherique": { "min": 60900, "max": 69300 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 67200, "max": 76700 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 52500, "max": 59900 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57800, "max": 66200 },
              "zone_peripherique": { "min": 50400, "max": 57800 },
              "zone_eloignement": { "min": 45200, "max": 51500 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 91000, "max": 103000 },
              "zone_peripherique": { "min": 89300, "max": 91000 },
              "zone_eloignement": { "min": 78800, "max": 90300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 83000, "max": 90900 },
              "zone_peripherique": { "min": 76700, "max": 87200 },
              "zone_eloignement": { "min": 66200, "max": 75600 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68300, "max": 77700 },
              "zone_peripherique": { "min": 63000, "max": 72500 },
              "zone_eloignement": { "min": 52500, "max": 59900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64100, "max": 73500 },
              "zone_peripherique": { "min": 59900, "max": 68300 },
              "zone_eloignement": { "min": 49400, "max": 56700 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 78800, "max": 90300 },
              "zone_peripherique": { "min": 73500, "max": 79000 },
              "zone_eloignement": { "min": 57800, "max": 66200 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 29400, "max": 33600 },
              "zone_eloignement": { "min": 31500, "max": 35700 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 9000000, "max": 10000000 },
              "zone_eloignement": { "min": 4315500, "max": 4956000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 7000000, "max": 8500000 },
              "zone_eloignement": { "min": 3748500, "max": 4305000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 3255000, "max": 3738000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2310000, "max": 2656500 }
            }
          }
        ]
      }
    ]
  },
  "es_senia": {
    "id": "es_senia",
    "nom": "Es Senia",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Es Senia",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 105200, "max": 120200 },
              "centre_ville": { "min": 93600, "max": 107500 },
              "zone_peripherique": { "min": 80900, "max": 92400 },
              "zone_eloignement": { "min": 68200, "max": 77400 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 90100, "max": 104000 },
              "centre_ville": { "min": 80900, "max": 92400 },
              "zone_peripherique": { "min": 69300, "max": 79700 },
              "zone_eloignement": { "min": 59000, "max": 67000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 78600, "max": 90100 },
              "centre_ville": { "min": 69300, "max": 79700 },
              "zone_peripherique": { "min": 60100, "max": 68200 },
              "zone_eloignement": { "min": 50900, "max": 57800 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 67000, "max": 77400 },
              "centre_ville": { "min": 55500, "max": 63600 },
              "zone_peripherique": { "min": 52000, "max": 59000 },
              "zone_eloignement": { "min": 43900, "max": 50000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": 90100, "max": 102800 },
              "centre_ville": { "min": 80900, "max": 92400 },
              "zone_peripherique": { "min": 64700, "max": 74000 },
              "zone_eloignement": { "min": 55500, "max": 63600 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": 77400, "max": 89000 },
              "centre_ville": { "min": 69300, "max": 80000 },
              "zone_peripherique": { "min": 60000, "max": 67000 },
              "zone_eloignement": { "min": 50900, "max": 57800 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": 67000, "max": 76300 },
              "centre_ville": { "min": 60100, "max": 68200 },
              "zone_peripherique": { "min": 50900, "max": 57800 },
              "zone_eloignement": { "min": 43900, "max": 49700 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": 57800, "max": 65900 },
              "centre_ville": { "min": 52000, "max": 59000 },
              "zone_peripherique": { "min": 43900, "max": 49700 },
              "zone_eloignement": { "min": 38200, "max": 42800 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": 118500, "max": 136100 },
              "centre_ville": { "min": 114700, "max": 131100 },
              "zone_peripherique": { "min": 98300, "max": 112200 },
              "zone_eloignement": { "min": 75600, "max": 87000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": 102100, "max": 117200 },
              "centre_ville": { "min": 99600, "max": 113400 },
              "zone_peripherique": { "min": 84500, "max": 97100 },
              "zone_eloignement": { "min": 70600, "max": 80700 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": 88200, "max": 100800 },
              "centre_ville": { "min": 85700, "max": 98300 },
              "zone_peripherique": { "min": 73100, "max": 83200 },
              "zone_eloignement": { "min": 60500, "max": 69300 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": 74000, "max": 84400 },
              "centre_ville": { "min": 74000, "max": 84400 },
              "zone_peripherique": { "min": 64700, "max": 74000 },
              "zone_eloignement": { "min": 57800, "max": 65900 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": 63600, "max": 72800 },
              "centre_ville": { "min": 63600, "max": 72800 },
              "zone_peripherique": { "min": 55500, "max": 63600 },
              "zone_eloignement": { "min": 49700, "max": 56600 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": 110900, "max": 127100 },
              "centre_ville": { "min": 104000, "max": 119000 },
              "zone_peripherique": { "min": 98200, "max": 112100 },
              "zone_eloignement": { "min": 86700, "max": 99400 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": 101700, "max": 116700 },
              "centre_ville": { "min": 90100, "max": 102800 },
              "zone_peripherique": { "min": 84400, "max": 95900 },
              "zone_eloignement": { "min": 72800, "max": 83200 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 80900, "max": 92400 },
              "centre_ville": { "min": 75100, "max": 85500 },
              "zone_peripherique": { "min": 69300, "max": 79700 },
              "zone_eloignement": { "min": 57800, "max": 65900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": 76700, "max": 87200 },
              "centre_ville": { "min": 70400, "max": 80900 },
              "zone_peripherique": { "min": 65100, "max": 75600 },
              "zone_eloignement": { "min": 54600, "max": 62000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": 92400, "max": 106300 },
              "centre_ville": { "min": 86700, "max": 99400 },
              "zone_peripherique": { "min": 80900, "max": 92400 },
              "zone_eloignement": { "min": 63600, "max": 72800 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": 23100, "max": 26600 },
              "centre_ville": { "min": 28900, "max": 32300 },
              "zone_peripherique": { "min": 32400, "max": 37000 },
              "zone_eloignement": { "min": 34700, "max": 39300 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 9000000, "max": 10000000 },
              "zone_eloignement": { "min": 4315500, "max": 4956000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 7000000, "max": 8500000 },
              "zone_eloignement": { "min": 3748500, "max": 4305000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 3255000, "max": 3738000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2310000, "max": 2656500 }
            }
          }
        ]
      }
    ]
  },
  "gdyel": {
    "id": "gdyel",
    "nom": "Gdyel",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Gdyel",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 106000, "max": 120000 },
              "zone_peripherique": { "min": 91000, "max": 104000 },
              "zone_eloignement": { "min": 81000, "max": 93000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 93000, "max": 105000 },
              "zone_peripherique": { "min": 79000, "max": 90000 },
              "zone_eloignement": { "min": 70000, "max": 80000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80000, "max": 92000 },
              "zone_peripherique": { "min": 68000, "max": 78000 },
              "zone_eloignement": { "min": 60000, "max": 69000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 69000, "max": 79000 },
              "zone_peripherique": { "min": 59000, "max": 67000 },
              "zone_eloignement": { "min": 52000, "max": 59000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 88000, "max": 100000 },
              "zone_peripherique": { "min": 78000, "max": 89000 },
              "zone_eloignement": { "min": 68000, "max": 78000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 76000, "max": 87000 },
              "zone_peripherique": { "min": 67000, "max": 77000 },
              "zone_eloignement": { "min": 59000, "max": 67000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 58000, "max": 66000 },
              "zone_eloignement": { "min": 51000, "max": 58000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 131000, "max": 150000 },
              "zone_peripherique": { "min": 115000, "max": 132000 },
              "zone_eloignement": { "min": 96000, "max": 110000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 114000, "max": 130000 },
              "zone_peripherique": { "min": 99000, "max": 114000 },
              "zone_eloignement": { "min": 83000, "max": 95000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 98000, "max": 113000 },
              "zone_peripherique": { "min": 86000, "max": 98000 },
              "zone_eloignement": { "min": 72000, "max": 82000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 61000, "max": 70000 },
              "zone_peripherique": { "min": 54000, "max": 62000 },
              "zone_eloignement": { "min": 46000, "max": 53000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 53000, "max": 60000 },
              "zone_peripherique": { "min": 47000, "max": 53000 },
              "zone_eloignement": { "min": 40000, "max": 45000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 87000, "max": 100000 },
              "zone_peripherique": { "min": 79000, "max": 90000 },
              "zone_eloignement": { "min": 71000, "max": 81000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80000, "max": 92000 },
              "zone_peripherique": { "min": 75000, "max": 85000 },
              "zone_eloignement": { "min": 67000, "max": 75000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 82000, "max": 94000 },
              "zone_peripherique": { "min": 73000, "max": 83000 },
              "zone_eloignement": { "min": 65000, "max": 74000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 69000, "max": 79000 },
              "zone_peripherique": { "min": 62000, "max": 70000 },
              "zone_eloignement": { "min": 55000, "max": 63000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 58000, "max": 66000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 43000, "max": 49000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29000, "max": 33000 },
              "zone_peripherique": { "min": 26000, "max": 29000 },
              "zone_eloignement": { "min": 24000, "max": 27000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 440000, "max": 500000 },
              "zone_peripherique": { "min": 4000000, "max": 4600000 },
              "zone_eloignement": { "min": 3500000, "max": 4000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3800000, "max": 4300000 },
              "zone_peripherique": { "min": 3400000, "max": 3900000 },
              "zone_eloignement": { "min": 3000000, "max": 3400000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3300000, "max": 3700000 },
              "zone_peripherique": { "min": 2900000, "max": 3300000 },
              "zone_eloignement": { "min": 2600000, "max": 2900000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3400000, "max": 3900000 },
              "zone_peripherique": { "min": 2900000, "max": 3300000 },
              "zone_eloignement": { "min": 2500000, "max": 2800000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2900000, "max": 3300000 },
              "zone_peripherique": { "min": 2500000, "max": 2800000 },
              "zone_eloignement": { "min": 2100000, "max": 2400000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2500000, "max": 2800000 },
              "zone_peripherique": { "min": 2100000, "max": 2400000 },
              "zone_eloignement": { "min": 1800000, "max": 2000000 }
            }
          }
        ]
      }
    ]
  },
  "hassi_benokba": {
    "id": "hassi_benokba",
    "nom": "Hassi Benokba",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Hassi Benokba",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 60000, "max": 69000 },
              "zone_peripherique": { "min": 55000, "max": 63000 },
              "zone_eloignement": { "min": 43000, "max": 49000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 52000, "max": 59000 },
              "zone_peripherique": { "min": 47000, "max": 54000 },
              "zone_eloignement": { "min": 37000, "max": 42000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 45000, "max": 51000 },
              "zone_peripherique": { "min": 40000, "max": 46000 },
              "zone_eloignement": { "min": 32000, "max": 36000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 39000, "max": 44000 },
              "zone_peripherique": { "min": 34000, "max": 39000 },
              "zone_eloignement": { "min": 27000, "max": 31000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47000, "max": 54000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 37000, "max": 42000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 40000, "max": 46000 },
              "zone_peripherique": { "min": 38000, "max": 43000 },
              "zone_eloignement": { "min": 32000, "max": 36000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35000, "max": 39000 },
              "zone_peripherique": { "min": 33000, "max": 37000 },
              "zone_eloignement": { "min": 27000, "max": 31000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30000, "max": 34000 },
              "zone_peripherique": { "min": 28000, "max": 32000 },
              "zone_eloignement": { "min": 23000, "max": 26000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 88000, "max": 101000 },
              "zone_peripherique": { "min": 79000, "max": 90000 },
              "zone_eloignement": { "min": 68000, "max": 78000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 76000, "max": 87000 },
              "zone_peripherique": { "min": 68000, "max": 78000 },
              "zone_eloignement": { "min": 59000, "max": 67000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 58000, "max": 67000 },
              "zone_eloignement": { "min": 51000, "max": 58000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64000, "max": 72000 },
              "zone_peripherique": { "min": 55000, "max": 63000 },
              "zone_eloignement": { "min": 47000, "max": 54000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 63000 },
              "zone_peripherique": { "min": 47000, "max": 54000 },
              "zone_eloignement": { "min": 40000, "max": 46000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 69000, "max": 79000 },
              "zone_peripherique": { "min": 65000, "max": 74000 },
              "zone_eloignement": { "min": 57000, "max": 65000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 65000, "max": 74000 },
              "zone_peripherique": { "min": 56000, "max": 64000 },
              "zone_eloignement": { "min": 52000, "max": 59000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 63000, "max": 72000 },
              "zone_peripherique": { "min": 55000, "max": 62000 },
              "zone_eloignement": { "min": 50000, "max": 57000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 51000, "max": 58000 },
              "zone_peripherique": { "min": 47000, "max": 54000 },
              "zone_eloignement": { "min": 40000, "max": 46000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 49000, "max": 56000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 36000, "max": 41000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28000, "max": 32000 },
              "zone_peripherique": { "min": 21000, "max": 24000 },
              "zone_eloignement": { "min": 18000, "max": 20000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3400000, "max": 3900000 },
              "zone_peripherique": { "min": 3200000, "max": 3600000 },
              "zone_eloignement": { "min": 2500000, "max": 2800000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2900000, "max": 3300000 },
              "zone_peripherique": { "min": 2700000, "max": 3100000 },
              "zone_eloignement": { "min": 2100000, "max": 2400000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2500000, "max": 2800000 },
              "zone_peripherique": { "min": 2300000, "max": 2600000 },
              "zone_eloignement": { "min": 1800000, "max": 2000000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2800000, "max": 3200000 },
              "zone_peripherique": { "min": 2200000, "max": 2500000 },
              "zone_eloignement": { "min": 1800000, "max": 2000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2400000, "max": 2700000 },
              "zone_peripherique": { "min": 1900000, "max": 2100000 },
              "zone_eloignement": { "min": 1500000, "max": 1700000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2000000, "max": 2300000 },
              "zone_peripherique": { "min": 1600000, "max": 1800000 },
              "zone_eloignement": { "min": 1300000, "max": 1400000 }
            }
          }
        ]
      }
    ]
  },
  "hassi_bounif": {
    "id": "hassi_bounif",
    "nom": "Hassi Bounif",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Hassi Bounif",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 95000, "max": 109000 },
              "zone_peripherique": { "min": 78000, "max": 89000 },
              "zone_eloignement": { "min": 61000, "max": 69000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 82000, "max": 94000 },
              "zone_peripherique": { "min": 67000, "max": 77000 },
              "zone_eloignement": { "min": 52000, "max": 60000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 71000, "max": 81000 },
              "zone_peripherique": { "min": 58000, "max": 66000 },
              "zone_eloignement": { "min": 45000, "max": 51000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 61000, "max": 70000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 40000, "max": 44000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 74000, "max": 85000 },
              "zone_peripherique": { "min": 59000, "max": 67000 },
              "zone_eloignement": { "min": 48000, "max": 55000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64000, "max": 73000 },
              "zone_peripherique": { "min": 51000, "max": 58000 },
              "zone_eloignement": { "min": 41000, "max": 47000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 55000, "max": 63000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 35000, "max": 40000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47000, "max": 54000 },
              "zone_peripherique": { "min": 38000, "max": 43000 },
              "zone_eloignement": { "min": 30000, "max": 34000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 110000, "max": 126000 },
              "zone_peripherique": { "min": 101000, "max": 116000 },
              "zone_eloignement": { "min": 91000, "max": 104000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 95000, "max": 109000 },
              "zone_peripherique": { "min": 87000, "max": 100000 },
              "zone_eloignement": { "min": 79000, "max": 90000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 82000, "max": 94000 },
              "zone_peripherique": { "min": 75000, "max": 86000 },
              "zone_eloignement": { "min": 68000, "max": 78000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 83000, "max": 95000 },
              "zone_peripherique": { "min": 58000, "max": 66000 },
              "zone_eloignement": { "min": 47000, "max": 54000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 72000, "max": 82000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 40000, "max": 46000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 82000, "max": 94000 },
              "zone_peripherique": { "min": 74000, "max": 85000 },
              "zone_eloignement": { "min": 66000, "max": 75000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 77000, "max": 88000 },
              "zone_peripherique": { "min": 72000, "max": 82000 },
              "zone_eloignement": { "min": 62000, "max": 71000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 74000, "max": 85000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 55000, "max": 63000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 59000, "max": 67000 },
              "zone_peripherique": { "min": 52000, "max": 59000 },
              "zone_eloignement": { "min": 47000, "max": 54000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 43000, "max": 49000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 43000, "max": 50000 },
              "zone_peripherique": { "min": 39000, "max": 44000 },
              "zone_eloignement": { "min": 35000, "max": 40000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 4000000, "max": 4600000 },
              "zone_peripherique": { "min": 3800000, "max": 4300000 },
              "zone_eloignement": { "min": 3400000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3400000, "max": 3900000 },
              "zone_peripherique": { "min": 3300000, "max": 3700000 },
              "zone_eloignement": { "min": 2900000, "max": 3300000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2900000, "max": 3300000 },
              "zone_peripherique": { "min": 2800000, "max": 3200000 },
              "zone_eloignement": { "min": 2500000, "max": 2800000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3200000, "max": 3600000 },
              "zone_peripherique": { "min": 2500000, "max": 2700000 },
              "zone_eloignement": { "min": 2000000, "max": 2300000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2700000, "max": 3100000 },
              "zone_peripherique": { "min": 2100000, "max": 2400000 },
              "zone_eloignement": { "min": 1700000, "max": 1900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2300000, "max": 2600000 },
              "zone_peripherique": { "min": 1800000, "max": 2000000 },
              "zone_eloignement": { "min": 1400000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  },
  "hassi_mefsoukh": {
    "id": "hassi_mefsoukh",
    "nom": "Hassi Mefsoukh",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Hassi Mefsoukh",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 74000, "max": 85000 },
              "zone_peripherique": { "min": 66000, "max": 75000 },
              "zone_eloignement": { "min": 58000, "max": 65000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64000, "max": 73000 },
              "zone_peripherique": { "min": 56000, "max": 65000 },
              "zone_eloignement": { "min": 50000, "max": 57000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 55000, "max": 63000 },
              "zone_peripherique": { "min": 49000, "max": 55000 },
              "zone_eloignement": { "min": 43000, "max": 49000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47000, "max": 54000 },
              "zone_peripherique": { "min": 42000, "max": 48000 },
              "zone_eloignement": { "min": 36000, "max": 42000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68000, "max": 78000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 49000, "max": 56000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 59000, "max": 67000 },
              "zone_peripherique": { "min": 51000, "max": 59000 },
              "zone_eloignement": { "min": 42000, "max": 48000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 51000, "max": 58000 },
              "zone_peripherique": { "min": 45000, "max": 50000 },
              "zone_eloignement": { "min": 36000, "max": 41000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 44000, "max": 50000 },
              "zone_peripherique": { "min": 39000, "max": 44000 },
              "zone_eloignement": { "min": 30000, "max": 35000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 79000, "max": 90000 },
              "zone_peripherique": { "min": 68000, "max": 78000 },
              "zone_eloignement": { "min": 59000, "max": 67000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 67000, "max": 78000 },
              "zone_peripherique": { "min": 59000, "max": 67000 },
              "zone_eloignement": { "min": 51000, "max": 58000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 59000, "max": 66000 },
              "zone_peripherique": { "min": 51000, "max": 58000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 71000, "max": 81000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 56000, "max": 64000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 61000, "max": 70000 },
              "zone_peripherique": { "min": 53000, "max": 59000 },
              "zone_eloignement": { "min": 48000, "max": 55000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 70000, "max": 80000 },
              "zone_peripherique": { "min": 62000, "max": 72000 },
              "zone_eloignement": { "min": 71000, "max": 82000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 60000, "max": 69000 },
              "zone_eloignement": { "min": 52000, "max": 60000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 62000, "max": 72000 },
              "zone_peripherique": { "min": 55000, "max": 63000 },
              "zone_eloignement": { "min": 48000, "max": 55000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 55000, "max": 63000 },
              "zone_peripherique": { "min": 50000, "max": 58000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47000, "max": 54000 },
              "zone_peripherique": { "min": 41000, "max": 48000 },
              "zone_eloignement": { "min": 35000, "max": 40000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26000, "max": 30000 },
              "zone_peripherique": { "min": 20000, "max": 24000 },
              "zone_eloignement": { "min": 17000, "max": 20000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3500000, "max": 4000000 },
              "zone_peripherique": { "min": 3000000, "max": 3400000 },
              "zone_eloignement": { "min": 2700000, "max": 3100000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3000000, "max": 3400000 },
              "zone_peripherique": { "min": 2600000, "max": 2900000 },
              "zone_eloignement": { "min": 2300000, "max": 2600000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2500000, "max": 2900000 },
              "zone_peripherique": { "min": 2200000, "max": 2500000 },
              "zone_eloignement": { "min": 1900000, "max": 2200000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2400000, "max": 2700000 },
              "zone_peripherique": { "min": 2100000, "max": 2300000 },
              "zone_eloignement": { "min": 1500000, "max": 1700000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 210000, "max": 230000 },
              "zone_peripherique": { "min": 1800000, "max": 2000000 },
              "zone_eloignement": { "min": 1300000, "max": 1400000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 1700000, "max": 2000000 },
              "zone_peripherique": { "min": 1500000, "max": 1700000 },
              "zone_eloignement": { "min": 1100000, "max": 1200000 }
            }
          }
        ]
      }
    ]
  },
  "mers_el_kebir": {
    "id": "mers_el_kebir",
    "nom": "Mers El Kebir",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Mers El Kebir",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 42000, "max": 48300 },
              "zone_peripherique": { "min": 39900, "max": 45200 },
              "zone_eloignement": { "min": 31500, "max": 35700 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35700, "max": 41000 },
              "zone_peripherique": { "min": 34700, "max": 39000 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30500, "max": 34700 },
              "zone_peripherique": { "min": 29400, "max": 33600 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 25200, "max": 28400 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 37800, "max": 43100 },
              "zone_peripherique": { "min": 33600, "max": 37800 },
              "zone_eloignement": { "min": 31500, "max": 35700 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 32600, "max": 36800 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 27300, "max": 31500 },
              "zone_peripherique": { "min": 24200, "max": 27300 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 23100, "max": 26300 },
              "zone_peripherique": { "min": 20000, "max": 23100 },
              "zone_eloignement": { "min": 19900, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 32600, "max": 36800 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 25200, "max": 28400 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 27300, "max": 31500 },
              "zone_peripherique": { "min": 24200, "max": 27300 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 23100, "max": 26300 },
              "zone_peripherique": { "min": 20000, "max": 23100 },
              "zone_eloignement": { "min": 17900, "max": 20000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33600, "max": 37800 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 23100, "max": 26300 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28400, "max": 32600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 42000, "max": 48300 },
              "zone_peripherique": { "min": 24200, "max": 27300 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade avec raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 32600, "max": 36800 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 25200, "max": 28400 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 23100, "max": 26300 },
              "zone_eloignement": { "min": 20000, "max": 22100 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24200, "max": 27300 },
              "zone_peripherique": { "min": 21000, "max": 24200 },
              "zone_eloignement": { "min": 18900, "max": 20000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 32600, "max": 36800 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24200, "max": 27300 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 33600, "max": 37800 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 8000000 },
              "zone_eloignement": { "min": 3500000, "max": 4000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2500000, "max": 3400000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 1500000, "max": 2400000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2000000, "max": 2600000 }
            }
          }
        ]
      }
    ]
  },
  "mers_elhadjadj": {
    "id": "mers_elhadjadj",
    "nom": "Mers El Hadjadj",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Mers El Hadjadj",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68000, "max": 78000 },
              "zone_peripherique": { "min": 64000, "max": 73000 },
              "zone_eloignement": { "min": 58000, "max": 66000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 59000, "max": 67000 },
              "zone_peripherique": { "min": 55000, "max": 63000 },
              "zone_eloignement": { "min": 50000, "max": 57000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 51000, "max": 58000 },
              "zone_peripherique": { "min": 47000, "max": 54000 },
              "zone_eloignement": { "min": 43000, "max": 49000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 44000, "max": 50000 },
              "zone_peripherique": { "min": 40000, "max": 46000 },
              "zone_eloignement": { "min": 37000, "max": 42000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 48000, "max": 55000 },
              "zone_peripherique": { "min": 41000, "max": 48000 },
              "zone_eloignement": { "min": 35000, "max": 40000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 41000, "max": 47000 },
              "zone_peripherique": { "min": 36000, "max": 40000 },
              "zone_eloignement": { "min": 31000, "max": 34000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35000, "max": 40000 },
              "zone_peripherique": { "min": 32000, "max": 35000 },
              "zone_eloignement": { "min": 27000, "max": 30000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 31000, "max": 34000 },
              "zone_peripherique": { "min": 27000, "max": 31000 },
              "zone_eloignement": { "min": 23000, "max": 26000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 72000, "max": 82000 },
              "zone_peripherique": { "min": 59000, "max": 67000 },
              "zone_eloignement": { "min": 49000, "max": 55000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 62000, "max": 71000 },
              "zone_peripherique": { "min": 51000, "max": 58000 },
              "zone_eloignement": { "min": 42000, "max": 48000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 53000, "max": 61000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 37000, "max": 41000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 66000, "max": 75000 },
              "zone_peripherique": { "min": 59000, "max": 67000 },
              "zone_eloignement": { "min": 54000, "max": 62000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 50000, "max": 58000 },
              "zone_eloignement": { "min": 46000, "max": 53000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 60000, "max": 69000 },
              "zone_peripherique": { "min": 55000, "max": 63000 },
              "zone_eloignement": { "min": 48000, "max": 55000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 56000, "max": 64000 },
              "zone_peripherique": { "min": 50000, "max": 58000 },
              "zone_eloignement": { "min": 44000, "max": 50000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 53000, "max": 60000 },
              "zone_peripherique": { "min": 46000, "max": 52000 },
              "zone_eloignement": { "min": 42000, "max": 49000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47000, "max": 54000 },
              "zone_peripherique": { "min": 39000, "max": 45000 },
              "zone_eloignement": { "min": 36000, "max": 41000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 41000, "max": 48000 },
              "zone_peripherique": { "min": 36000, "max": 41000 },
              "zone_eloignement": { "min": 34000, "max": 39000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26000, "max": 30000 },
              "zone_peripherique": { "min": 24000, "max": 27000 },
              "zone_eloignement": { "min": 22000, "max": 25000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 4800000, "max": 5500000 },
              "zone_peripherique": { "min": 4000000, "max": 4500000 },
              "zone_eloignement": { "min": 3600000, "max": 4100000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 4100000, "max": 4700000 },
              "zone_peripherique": { "min": 3400000, "max": 3900000 },
              "zone_eloignement": { "min": 3100000, "max": 3500000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3500000, "max": 4000000 },
              "zone_peripherique": { "min": 2900000, "max": 3300000 },
              "zone_eloignement": { "min": 2600000, "max": 3000000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3300000, "max": 3700000 },
              "zone_peripherique": { "min": 2300000, "max": 2600000 },
              "zone_eloignement": { "min": 2000000, "max": 2300000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2800000, "max": 3200000 },
              "zone_peripherique": { "min": 1900000, "max": 2100000 },
              "zone_eloignement": { "min": 1700000, "max": 1900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2400000, "max": 2700000 },
              "zone_peripherique": { "min": 1600000, "max": 1800000 },
              "zone_eloignement": { "min": 1400000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  },
  "misserghine": {
    "id": "misserghine",
    "nom": "Misserghine",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Misserghine",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 85100, "max": 97700 },
              "zone_peripherique": { "min": 73500, "max": 84000 },
              "zone_eloignement": { "min": 62000, "max": 70400 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 73500, "max": 84000 },
              "zone_peripherique": { "min": 63000, "max": 72500 },
              "zone_eloignement": { "min": 53600, "max": 60900 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 63000, "max": 72500 },
              "zone_peripherique": { "min": 54600, "max": 62000 },
              "zone_eloignement": { "min": 46200, "max": 52500 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 50400, "max": 57800 },
              "zone_peripherique": { "min": 47300, "max": 53600 },
              "zone_eloignement": { "min": 39900, "max": 45200 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 73500, "max": 84000 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 63000, "max": 72500 },
              "zone_peripherique": { "min": 53600, "max": 60900 },
              "zone_eloignement": { "min": 46200, "max": 52500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 54600, "max": 62000 },
              "zone_peripherique": { "min": 46200, "max": 52500 },
              "zone_eloignement": { "min": 39900, "max": 45200 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47300, "max": 53600 },
              "zone_peripherique": { "min": 39900, "max": 45200 },
              "zone_eloignement": { "min": 34700, "max": 38900 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 95600, "max": 109200 },
              "zone_peripherique": { "min": 81900, "max": 93500 },
              "zone_eloignement": { "min": 63000, "max": 72500 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 83000, "max": 94500 },
              "zone_peripherique": { "min": 70400, "max": 80900 },
              "zone_eloignement": { "min": 58800, "max": 67200 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 71400, "max": 81900 },
              "zone_peripherique": { "min": 60900, "max": 69300 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 67200, "max": 76700 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 52500, "max": 59900 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57800, "max": 66200 },
              "zone_peripherique": { "min": 50400, "max": 57800 },
              "zone_eloignement": { "min": 45200, "max": 51500 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 90000, "max": 103000 },
              "zone_peripherique": { "min": 89300, "max": 101900 },
              "zone_eloignement": { "min": 78800, "max": 90300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 78000, "max": 89000 },
              "zone_peripherique": { "min": 76700, "max": 87200 },
              "zone_eloignement": { "min": 66200, "max": 75600 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68300, "max": 77700 },
              "zone_peripherique": { "min": 63000, "max": 72500 },
              "zone_eloignement": { "min": 52500, "max": 59900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64100, "max": 73500 },
              "zone_peripherique": { "min": 59900, "max": 68300 },
              "zone_eloignement": { "min": 49400, "max": 56700 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80000, "max": 92000 },
              "zone_peripherique": { "min": 75000, "max": 86000 },
              "zone_eloignement": { "min": 65000, "max": 74000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 29400, "max": 33600 },
              "zone_eloignement": { "min": 31500, "max": 35700 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 9000000, "max": 10000000 },
              "zone_eloignement": { "min": 4315500, "max": 4956000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 7000000, "max": 8500000 },
              "zone_eloignement": { "min": 3748500, "max": 4305000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 3255000, "max": 3738000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2310000, "max": 2656500 }
            }
          }
        ]
      }
    ]
  },
  "oued_tlelat": {
    "id": "oued_tlelat",
    "nom": "Oued Tlelat",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Oued Tlelat",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80000, "max": 90000 },
              "zone_peripherique": { "min": 70000, "max": 80000 },
              "zone_eloignement": { "min": 60000, "max": 70000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68000, "max": 79900 },
              "zone_peripherique": { "min": 58000, "max": 69900 },
              "zone_eloignement": { "min": 54000, "max": 59900 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 55000, "max": 67900 },
              "zone_peripherique": { "min": 45000, "max": 57900 },
              "zone_eloignement": { "min": 43000, "max": 53900 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 40000, "max": 50000 },
              "zone_peripherique": { "min": 35000, "max": 44900 },
              "zone_eloignement": { "min": 32000, "max": 42900 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 50000, "max": 60000 },
              "zone_peripherique": { "min": 40000, "max": 50000 },
              "zone_eloignement": { "min": 32400, "max": 37000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35000, "max": 49000 },
              "zone_peripherique": { "min": 35000, "max": 39000 },
              "zone_eloignement": { "min": 27800, "max": 31200 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 32400, "max": 34900 },
              "zone_peripherique": { "min": 30000, "max": 34000 },
              "zone_eloignement": { "min": 23100, "max": 26600 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 27800, "max": 31200 },
              "zone_peripherique": { "min": 25000, "max": 29000 },
              "zone_eloignement": { "min": 19700, "max": 22000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 70000, "max": 80000 },
              "zone_peripherique": { "min": 60000, "max": 70000 },
              "zone_eloignement": { "min": 50000, "max": 60000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 60000, "max": 69900 },
              "zone_peripherique": { "min": 50000, "max": 59900 },
              "zone_eloignement": { "min": 45000, "max": 49900 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 50000, "max": 59900 },
              "zone_peripherique": { "min": 45000, "max": 49900 },
              "zone_eloignement": { "min": 40000, "max": 44900 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47300, "max": 53600 },
              "zone_peripherique": { "min": 39900, "max": 45200 },
              "zone_eloignement": { "min": 34700, "max": 38900 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 41000, "max": 46200 },
              "zone_peripherique": { "min": 34700, "max": 38900 },
              "zone_eloignement": { "min": 29400, "max": 33600 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 80900, "max": 92400 },
              "zone_peripherique": { "min": 75600, "max": 86100 },
              "zone_eloignement": { "min": 59900, "max": 68300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 75600, "max": 86100 },
              "zone_peripherique": { "min": 65100, "max": 74600 },
              "zone_eloignement": { "min": 54600, "max": 62000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 56700, "max": 65100 },
              "zone_peripherique": { "min": 49400, "max": 56700 },
              "zone_eloignement": { "min": 43100, "max": 49400 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 53600, "max": 60900 },
              "zone_peripherique": { "min": 46200, "max": 53600 },
              "zone_eloignement": { "min": 39900, "max": 46200 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 59900, "max": 68300 },
              "zone_peripherique": { "min": 51500, "max": 58800 },
              "zone_eloignement": { "min": 44100, "max": 50400 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 21000, "max": 24200 },
              "zone_peripherique": { "min": 24200, "max": 27300 },
              "zone_eloignement": { "min": 27300, "max": 30500 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 4000000, "max": 5000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4500000, "max": 5500000 },
              "zone_eloignement": { "min": 3000000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 4000000 },
              "zone_eloignement": { "min": 2000000, "max": 2900000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 2076500, "max": 2528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 3000000, "max": 4900000 },
              "zone_eloignement": { "min": 1667000, "max": 2066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 1500000, "max": 2900000 },
              "zone_eloignement": { "min": 1000000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  },
  "sidi_benyabka": {
    "id": "sidi_benyabka",
    "nom": "Sidi Benyabka",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Sidi Benyabka",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 55000, "max": 63000 },
              "zone_peripherique": { "min": 44000, "max": 50000 },
              "zone_eloignement": { "min": 42000, "max": 48000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47000, "max": 54000 },
              "zone_peripherique": { "min": 38000, "max": 43000 },
              "zone_eloignement": { "min": 36000, "max": 41000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 40000, "max": 46000 },
              "zone_peripherique": { "min": 33000, "max": 37000 },
              "zone_eloignement": { "min": 31000, "max": 35000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 34000, "max": 39000 },
              "zone_peripherique": { "min": 28000, "max": 32000 },
              "zone_eloignement": { "min": 26000, "max": 30000 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 49000, "max": 55000 },
              "zone_peripherique": { "min": 41000, "max": 47000 },
              "zone_eloignement": { "min": 34000, "max": 39000 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 42000, "max": 48000 },
              "zone_peripherique": { "min": 35000, "max": 40000 },
              "zone_eloignement": { "min": 29000, "max": 33000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 36000, "max": 41000 },
              "zone_peripherique": { "min": 30000, "max": 34000 },
              "zone_eloignement": { "min": 25000, "max": 28000 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30000, "max": 35000 },
              "zone_peripherique": { "min": 25000, "max": 29000 },
              "zone_eloignement": { "min": 20000, "max": 24000 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 65000, "max": 74000 },
              "zone_peripherique": { "min": 56000, "max": 64000 },
              "zone_eloignement": { "min": 49000, "max": 56000 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 56000, "max": 64000 },
              "zone_peripherique": { "min": 48000, "max": 55000 },
              "zone_eloignement": { "min": 42000, "max": 48000 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 48000, "max": 55000 },
              "zone_peripherique": { "min": 41000, "max": 47000 },
              "zone_eloignement": { "min": 36000, "max": 41000 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57000, "max": 65000 },
              "zone_peripherique": { "min": 50000, "max": 57000 },
              "zone_eloignement": { "min": 42000, "max": 48000 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 49000, "max": 56000 },
              "zone_peripherique": { "min": 42000, "max": 49000 },
              "zone_eloignement": { "min": 36000, "max": 41000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 39000, "max": 45000 },
              "zone_peripherique": { "min": 30000, "max": 35000 },
              "zone_eloignement": { "min": 26000, "max": 30000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 36000, "max": 41000 },
              "zone_peripherique": { "min": 28000, "max": 32000 },
              "zone_eloignement": { "min": 22000, "max": 25000 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29000, "max": 34000 },
              "zone_peripherique": { "min": 27000, "max": 31000 },
              "zone_eloignement": { "min": 19000, "max": 22000 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26000, "max": 30000 },
              "zone_peripherique": { "min": 20000, "max": 23000 },
              "zone_eloignement": { "min": 16000, "max": 19000 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 23000, "max": 26000 },
              "zone_peripherique": { "min": 17000, "max": 20000 },
              "zone_eloignement": { "min": 14000, "max": 16000 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 21000, "max": 24000 },
              "zone_peripherique": { "min": 15000, "max": 17000 },
              "zone_eloignement": { "min": 13000, "max": 14000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3700000, "max": 4200000 },
              "zone_peripherique": { "min": 3500000, "max": 4000000 },
              "zone_eloignement": { "min": 2900000, "max": 3300000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3200000, "max": 3600000 },
              "zone_peripherique": { "min": 3000000, "max": 3400000 },
              "zone_eloignement": { "min": 2500000, "max": 2800000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2700000, "max": 3100000 },
              "zone_peripherique": { "min": 2500000, "max": 2900000 },
              "zone_eloignement": { "min": 2000000, "max": 2400000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 3000000, "max": 3400000 },
              "zone_peripherique": { "min": 2600000, "max": 2900000 },
              "zone_eloignement": { "min": 2200000, "max": 2500000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2600000, "max": 2900000 },
              "zone_peripherique": { "min": 2200000, "max": 2500000 },
              "zone_eloignement": { "min": 1900000, "max": 2100000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 2100000, "max": 2500000 },
              "zone_peripherique": { "min": 1800000, "max": 2100000 },
              "zone_eloignement": { "min": 1600000, "max": 1800000 }
            }
          }
        ]
      }
    ]
  },
  "sidi_chami": {
    "id": "sidi_chami",
    "nom": "Sidi Chami",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Sidi Chami",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 85100, "max": 97700 },
              "zone_peripherique": { "min": 73500, "max": 84000 },
              "zone_eloignement": { "min": 62000, "max": 70400 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 73500, "max": 84000 },
              "zone_peripherique": { "min": 63000, "max": 72500 },
              "zone_eloignement": { "min": 53600, "max": 60900 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 63000, "max": 72500 },
              "zone_peripherique": { "min": 54600, "max": 62000 },
              "zone_eloignement": { "min": 46200, "max": 52500 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 50400, "max": 57800 },
              "zone_peripherique": { "min": 47300, "max": 53600 },
              "zone_eloignement": { "min": 39900, "max": 45200 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 73500, "max": 84000 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 63000, "max": 72500 },
              "zone_peripherique": { "min": 53600, "max": 60900 },
              "zone_eloignement": { "min": 46200, "max": 52500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 54600, "max": 62000 },
              "zone_peripherique": { "min": 46200, "max": 52500 },
              "zone_eloignement": { "min": 39900, "max": 45200 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 47300, "max": 53600 },
              "zone_peripherique": { "min": 39900, "max": 45200 },
              "zone_eloignement": { "min": 34700, "max": 38900 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 95600, "max": 109200 },
              "zone_peripherique": { "min": 81900, "max": 93500 },
              "zone_eloignement": { "min": 63000, "max": 72500 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 83000, "max": 94500 },
              "zone_peripherique": { "min": 70400, "max": 80900 },
              "zone_eloignement": { "min": 58800, "max": 67200 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 71400, "max": 81900 },
              "zone_peripherique": { "min": 60900, "max": 69300 },
              "zone_eloignement": { "min": 50400, "max": 57800 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 67200, "max": 76700 },
              "zone_peripherique": { "min": 58800, "max": 67200 },
              "zone_eloignement": { "min": 52500, "max": 59900 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 57800, "max": 66200 },
              "zone_peripherique": { "min": 50400, "max": 57800 },
              "zone_eloignement": { "min": 45200, "max": 51500 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 94500, "max": 108200 },
              "zone_peripherique": { "min": 89300, "max": 101900 },
              "zone_eloignement": { "min": 78800, "max": 90300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 81900, "max": 93500 },
              "zone_peripherique": { "min": 76700, "max": 87200 },
              "zone_eloignement": { "min": 66200, "max": 75600 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 68300, "max": 77700 },
              "zone_peripherique": { "min": 63000, "max": 72500 },
              "zone_eloignement": { "min": 52500, "max": 59900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 64100, "max": 73500 },
              "zone_peripherique": { "min": 59900, "max": 68300 },
              "zone_eloignement": { "min": 49400, "max": 56700 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 78800, "max": 90300 },
              "zone_peripherique": { "min": 73500, "max": 84000 },
              "zone_eloignement": { "min": 57800, "max": 66200 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26300, "max": 29400 },
              "zone_peripherique": { "min": 29400, "max": 33600 },
              "zone_eloignement": { "min": 31500, "max": 35700 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 8000000 },
              "zone_eloignement": { "min": 3500000, "max": 4000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2500000, "max": 3400000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 1500000, "max": 2400000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 3076500, "max": 3528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4000000, "max": 5900000 },
              "zone_eloignement": { "min": 2667000, "max": 3066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 3900000 },
              "zone_eloignement": { "min": 2000000, "max": 2600000 }
            }
          }
        ]
      }
    ]
  },
  "tafraoui": {
    "id": "tafraoui",
    "nom": "Tafraoui",
    "wilaya": "Oran",
    "wilaya_code": 31,
    "periode": "2025-2026",
    "description": "Tafraoui",
    "prix": [
      {
        "categorie": "Individuels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 42900, "max": 49200 },
              "zone_peripherique": { "min": 40400, "max": 45400 },
              "zone_eloignement": { "min": 32800, "max": 36600 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 36600, "max": 41600 },
              "zone_peripherique": { "min": 34100, "max": 39100 },
              "zone_eloignement": { "min": 27800, "max": 31500 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 31500, "max": 35300 },
              "zone_peripherique": { "min": 29000, "max": 32800 },
              "zone_eloignement": { "min": 24000, "max": 26500 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 26500, "max": 30300 },
              "zone_peripherique": { "min": 21500, "max": 24000 },
              "zone_eloignement": { "min": 17700, "max": 20200 }
            }
          }
        ]
      },
      {
        "categorie": "Collectifs et Semi-Collectifs",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Standing",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 35100, "max": 40000 },
              "zone_peripherique": { "min": 31400, "max": 35100 },
              "zone_eloignement": { "min": 30200, "max": 33900 }
            }
          },
          {
            "type": "Amélioré",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30200, "max": 33900 },
              "zone_peripherique": { "min": 29000, "max": 32700 },
              "zone_eloignement": { "min": 25400, "max": 29000 }
            }
          },
          {
            "type": "Economique",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 25400, "max": 29000 },
              "zone_peripherique": { "min": 24200, "max": 27800 },
              "zone_eloignement": { "min": 21800, "max": 24200 }
            }
          },
          {
            "type": "Précaire",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 23000, "max": 25400 },
              "zone_peripherique": { "min": 20600, "max": 23000 },
              "zone_eloignement": { "min": 18200, "max": 20600 }
            }
          }
        ]
      },
      {
        "categorie": "Locaux Commerciaux et Locaux à Usage Professionnels",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Artère hautement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33500, "max": 38200 },
              "zone_peripherique": { "min": 28900, "max": 32400 },
              "zone_eloignement": { "min": 25500, "max": 28900 }
            }
          },
          {
            "type": "Artère moyennement commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28900, "max": 32400 },
              "zone_peripherique": { "min": 24300, "max": 27800 },
              "zone_eloignement": { "min": 22000, "max": 24300 }
            }
          },
          {
            "type": "Artère peu commerciale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24300, "max": 27800 },
              "zone_peripherique": { "min": 20800, "max": 23100 },
              "zone_eloignement": { "min": 18500, "max": 20800 }
            }
          }
        ]
      },
      {
        "categorie": "Hangars",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Situé en zone urbaine",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 33600, "max": 37800 },
              "zone_peripherique": { "min": 30500, "max": 34700 },
              "zone_eloignement": { "min": 25200, "max": 28400 }
            }
          },
          {
            "type": "Situé en zone rurale",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 28400, "max": 32600 },
              "zone_peripherique": { "min": 26300, "max": 29400 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Nus",
        "unite": "DA_M2",
        "types": [
          {
            "type": "Pleine propriété deux (02) façades with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 30800, "max": 35200 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 24200, "max": 27300 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade with raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 29400, "max": 33600 },
              "zone_peripherique": { "min": 25200, "max": 28400 },
              "zone_eloignement": { "min": 21000, "max": 24200 }
            }
          },
          {
            "type": "Pleine propriété deux (02) façades sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Pleine propriété une (01) façade sans raccordements",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 20000, "max": 23100 },
              "zone_peripherique": { "min": 17900, "max": 20000 },
              "zone_eloignement": { "min": 15800, "max": 17900 }
            }
          },
          {
            "type": "Dans l'indivision",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 22100, "max": 25200 },
              "zone_peripherique": { "min": 18900, "max": 21000 },
              "zone_eloignement": { "min": 16800, "max": 18900 }
            }
          },
          {
            "type": "Industriel",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": 24200, "max": 27300 },
              "zone_peripherique": { "min": 28400, "max": 32600 },
              "zone_eloignement": { "min": 30500, "max": 34700 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Plaine",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 6000000, "max": 7000000 },
              "zone_eloignement": { "min": 4000000, "max": 5000000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 4500000, "max": 5500000 },
              "zone_eloignement": { "min": 3000000, "max": 3900000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 2500000, "max": 4000000 },
              "zone_eloignement": { "min": 2000000, "max": 2900000 }
            }
          }
        ]
      },
      {
        "categorie": "Terrains Agricoles en Pente",
        "unite": "DA_Ha",
        "types": [
          {
            "type": "Potentialité élevée",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 5000000, "max": 6000000 },
              "zone_eloignement": { "min": 2076500, "max": 2528000 }
            }
          },
          {
            "type": "Potentialité moyenne",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 3000000, "max": 4900000 },
              "zone_eloignement": { "min": 1667000, "max": 2066000 }
            }
          },
          {
            "type": "Potentialité faible",
            "zones": {
              "zone_residentielle": { "min": null, "max": null },
              "centre_ville": { "min": null, "max": null },
              "zone_peripherique": { "min": 1500000, "max": 2900000 },
              "zone_eloignement": { "min": 1000000, "max": 1600000 }
            }
          }
        ]
      }
    ]
  }
};

export const translations: Record<string, string> = {
  "Individuels": "سكنات فردية (فيلات/منازل)",
  "Collectifs et Semi-Collectifs": "سكنات جماعية (شقق)",
  "Locaux Commerciaux et Locaux à Usage Professionnels": "محلات تجارية ومهنية",
  "Hangars": "مستودعات (Hangars)",
  "Terrains Nus": "أراضي بيضاء (صالحة للبناء)",
  "Terrains Agricoles en Plaine": "أراضي فلاحية في السهول",
  "Terrains Agricoles en Pente": "أراضي فلاحية منحدرة",
  "Standing": "فاخر (Standing)",
  "Amélioré": "محسن",
  "Economique": "اقتصادي",
  "Précaire": "هش (Précaire)",
  "Artère hautement commerciale": "شارع تجاري بامتياز",
  "Artère moyennement commerciale": "شارع متوسط النشاط التجاري",
  "Artère peu commerciale": "شارع قليل النشاط التجاري",
  "Situé en zone urbaine": "يقع في منطقة حضرية",
  "Situé en zone rurale": "يقع في منطقة ريفية",
  "Pleine propriété deux (02) façades avec raccordements": "ملكية تامة واجهتين (02) مع التوصيلات",
  "Pleine propriété une (01) façade avec raccordements": "ملكية تامة واجهة واحدة (01) مع التوصيلات",
  "Pleine propriété deux (02) façades sans raccordements": "ملكية تامة واجهتين (02) بدون توصيلات",
  "Pleine propriété une (01) façade sans raccordements": "ملكية تامة واجهة واحدة (01) بدون توصيلات",
  "Dans l'indivision": "في حالة شيوع",
  "Industriel": "صناعي",
  "Potentialité élevée": "إمكانيات عالية",
  "Potentialité moyenne": "إمكانيات متوسطة",
  "Potentialité faible": "إمكانيات ضعيفة",
  "zone_residentielle": "منطقة سكنية",
  "centre_ville": "وسط المدينة",
  "zone_peripherique": "الضاحية (محيط المدينة)",
  "zone_eloignement": "منطقة نائية",
};
