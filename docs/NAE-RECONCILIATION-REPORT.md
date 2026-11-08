# Rapport de Réconciliation et d'Intégrité des Données NAE / CNRC
# تقرير مطابقة وسلامة بيانات المدونة الوطنية للأنشطة الاقتصادية (NAE / CNRC)

**Date d'audit :** Novembre 2026  
**Établissement :** الديوان العمومي للتوثيق — الأستاذ لعطب محمد / Office Notarial Maître Lattab Mohamed (Oran, Algérie)  
**Objet :** Réconciliation formelle entre l'instantané CSV du référentiel (2 136 codes, révision 2026-10-01) et la table de consultation en ligne UpGrowth (2 134 codes, relevé du 2026-11-02).

---

## 1. Contexte et Objectif

Le portail institutionnel de l'office notarial intègre le catalogue des Activités Économiques Algériennes (NAE / CNRC) pour l'assistance à la constitution et la préparation de projets juridiques et statutaires.

Une discordance apparente a été relevée entre :
1. **Le jeu de données du dépôt :** 2 136 enregistrements issus de l'export CSV officiel CNRC 2026 diffusé sous licence CC BY 4.0 par UpGrowth (SHA-256 : `d443511fa8b798acf4240de4eca3868fd7cb67879afa4397fa985a0106001ed5`, révision 2026-10-01).
2. **La table en ligne UpGrowth :** 2 134 enregistrements affichés sur la page web publique d'UpGrowth (relevé du 2026-11-02).

La mission d'ingénierie consistait à :
- Réconcilier ligne par ligne les 2 136 enregistrements avec la table en ligne ;
- Identifier la cause exacte des écarts de comptage par secteur (Secteur 3 : 185 vs 184 ; Secteur 5 : 365 vs 364) et par statut réglementaire (Statut bloqué / rouge : 145 vs 143) ;
- Valider s'il s'agissait d'ajouts, de suppressions, de modifications de libellés ou de retraits réglementaires ;
- Déterminer la politique de conservation des données conformément aux exigences d'intégrité notariée.

---

## 2. Résultats de la Comparaison Ligne à Ligne

L'audit comparatif exhaustif établit que :
- **2 134 codes** sont rigoureusement identiques entre l'export CSV du dépôt et la table en ligne en termes de codes, libellés arabes, libellés français, secteurs et statuts.
- **0 ajout** n'est présent dans la table en ligne par rapport à notre référentiel.
- **0 libellé** n'a subi de modification textuelle entre les deux versions.
- **0 changement de statut** n'a affecté les codes communs (1 641 activités libres `normal`, 350 activités réglementées `green`, 143 activités bloquées `red`).
- **Exactement 2 codes** manquent dans la table de consultation en ligne mais figurent dans l'export officiel du catalogue CNRC.

### Détail des 2 codes discordants

#### 1. Code `301205` (Secteur 3 — Commerce de gros)
- **Code :** `301205`
- **Secteur :** 3 (*Commerce de gros / تجارة بالجملة*)
- **Groupe / Sous-groupe :** `301` / `3012`
- **Libellé français :** *Commerce de gros de la charcuterie*
- **Libellé arabe :** *تجارة بالجملة للخنازيريات*
- **Libellé anglais :** *Wholesale trade in pork meat products*
- **Statut source :** `red` (Bloquée / محظور)
- **Contenu :** *Commerce de gros de la charcuterie.*
- **Cause de l'écart :** Explique la différence de 185 (dépôt) à 184 (table en ligne) dans le Secteur 3.

#### 2. Code `501308` (Secteur 5 — Commerce de détail)
- **Code :** `501308`
- **Secteur :** 5 (*Commerce de détail / تجارة بالتجزئة*)
- **Groupe / Sous-groupe :** `501` / `5013`
- **Libellé français :** *Commerce de détail de la charcuterie*
- **Libellé arabe :** *تجارة بالتجزئة للحوم الخنازير*
- **Libellé anglais :** *Retail trade services of pork meat products*
- **Statut source :** `red` (Bloquée / محظور)
- **Contenu :** *Vente au détail de la charcuterie, plats préparés, conserves de porc. (activité supprimée par la réglementation interdisant l'élevage et la commercialisation du porc).*
- **Accessoires :** *Vente de boissons non alcoolisées à emporter; | Vente au détail des produits de la conserverie et des produits laitiers.*
- **Cause de l'écart :** Explique la différence de 365 (dépôt) à 364 (table en ligne) dans le Secteur 5.

---

## 3. Analyse Juridique et Réglementaire

Le texte officiel du contenu du code `501308` explicite sans ambiguïté la situation légale :  
> *(activité supprimée par la réglementation interdisant l'élevage et la commercialisation du porc)*

En droit algérien, l'élevage et le commerce des produits porcins et de la charcuterie porcine font l'objet d'une interdiction légale formelle. Dans la nomenclature CNRC d'origine, le Centre National du Registre du Commerce a conservé l'historique de ces deux codes en leur attribuant le statut technique `red` (activité bloquée / محظورة).

Lors de la mise en ligne d'une vue de consultation simplifiée sur son site web le 2026-11-02, le diffuseur UpGrowth a appliqué un filtre d'affichage excluant ces deux activités interdites au grand public, aboutissant au total affiché de 2 134 codes ($2\,136 - 2 = 2\,134$).

---

## 4. Tableau Synthétique de Réconciliation

| Dimension | Référentiel Dépôt (CSV 2026-10-01) | Table en Ligne (Web 2026-11-02) | Écart ($\Delta$) | Motif technique & réglementaire |
|---|---:|---:|---:|---|
| **Total activités** | **2 136** | **2 134** | **-2** | Omission des 2 activités de charcuterie bloquées |
| Secteur 1 (Production/Extraction) | 452 | 452 | 0 | Parfaite identité |
| Secteur 2 (BTP/Artisanat) | 81 | 81 | 0 | Parfaite identité |
| **Secteur 3 (Gros)** | **185** | **184** | **-1** | Code `301205` (*Commerce de gros de la charcuterie*) filtré |
| Secteur 4 (Import/Export) | 278 | 278 | 0 | Parfaite identité |
| **Secteur 5 (Détail)** | **365** | **364** | **-1** | Code `501308` (*Commerce de détail de la charcuterie*) filtré |
| Secteur 6 (Services) | 754 | 754 | 0 | Parfaite identité |
| Secteur 7 (Activités diverses) | 21 | 21 | 0 | Parfaite identité |
| Statut libre (`normal` / حر) | 1 641 | 1 641 | 0 | Aucune modification |
| Statut réglementé (`green` / منظم) | 350 | 350 | 0 | Aucune modification |
| **Statut bloqué (`red` / محظور)** | **145** | **143** | **-2** | Codes `301205` et `501308` (tous deux `red`) |

---

## 5. Décision d'Ingénierie et Politique de Conservation

Conformément aux instructions strictes du projet notarial :
1. **Interdiction de supprimer des enregistrements sources :** Les deux codes `301205` et `501308` sont **maintenus** dans la base de données JSON partitionnée du dépôt (`sector-3.json` et `sector-5.json`). Un office notarial ne doit pas masquer artificiellement l'historique d'une codification CNRC officielle.
2. **Statut scrupuleusement préservé :** Les deux codes portent leur statut source réel `red` (محظور / Bloquée). Tout utilisateur consultant ces codes constate immédiatement leur caractère interdit/bloqué.
3. **Traçabilité dans le manifeste :** Le fichier `data/nae/manifest.json` inclut le bloc structuré `reconciliation` documentant l'écart avec la vue en ligne du 2026-11-02.
4. **Attribution et transparence de date :** Le jeu de données demeure attribué à UpGrowth sous licence CC BY 4.0, avec mention explicite qu'il s'agit d'un instantané arrêté et non d'une connexion en temps réel au registre CNRC.
5. **Couverture de tests automatisés :** Des tests unitaires spécifiques vérifient l'exactitude des totaux réconciliés ($2\,136 - 2 = 2\,134$, Secteur 3 : $185 \to 184$, Secteur 5 : $365 \to 364$, statut `red` : $145 \to 143$) et l'existence inaltérée des deux codes.
