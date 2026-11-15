# 🧮 Les maths du quotidien

Calculatrice simple et pédagogique : règle de trois, soldes et pourcentages, conversions de mesures.
Deux modes : **⚡ Calcul rapide** (le résultat seul) et **🎓 Apprendre la méthode** (le calcul pas à pas).

Tout le logiciel tient dans **un seul fichier, `index.html`** (textes, couleurs et calculs). Les autres fichiers servent seulement à pouvoir l'installer comme une appli.

| Fichier | Rôle |
|---|---|
| `index.html` | Le logiciel complet |
| `manifest.webmanifest` | Nom, couleurs et icônes de l'appli installée |
| `sw.js` | Fonctionnement sans connexion Internet |
| `icones/` | Les icônes (abaque coloré) |
| `README.md` | Ce mode d'emploi |

Pour l'essayer : double-clique sur `index.html`. Les calculs marchent, mais l'installation comme appli n'est possible que depuis l'adresse en ligne.

## Mettre en ligne sur GitHub

1. Va sur [github.com/Babas50/Maths-du-quotidien](https://github.com/Babas50/Maths-du-quotidien), puis **Add file > Upload files**.
2. Glisse **tout le contenu de ce dossier** (pas le dossier lui-même) : `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` et le dossier `icones`. Clique sur **Commit changes**.
3. Si le dépôt contient encore `style.css` et `app.js` (ancienne version), supprime-les : ils ne servent plus.
4. **Settings > Pages** : Branch `main`, dossier `/ (root)`, **Save**.
5. Une ou deux minutes plus tard : **https://babas50.github.io/Maths-du-quotidien/**

`index.html` doit être à la racine du dépôt, sinon l'adresse affiche une erreur 404.

## Installer l'appli

Ouvre d'abord https://babas50.github.io/Maths-du-quotidien/ puis :

- **iPhone / iPad** : dans **Safari**, bouton **Partager**, puis **Sur l'écran d'accueil**, puis **Ajouter**.
- **Android** : dans **Chrome**, menu **⋮**, puis **Installer l'application** (ou **Ajouter à l'écran d'accueil**).
- **Windows** : dans **Chrome** ou **Edge**, icône d'installation à droite de la barre d'adresse (ou menu, puis **Installer**).
- **Mac** : dans **Safari**, **Fichier > Ajouter au Dock**, ou dans **Chrome**, icône d'installation dans la barre d'adresse.

## Mettre à jour

1. Modifie `index.html`.
2. **Ouvre `sw.js` et augmente le numéro** : `const VERSION = "v1";` devient `"v2"`, puis `"v3"`... Sans ça, les appareils où l'appli est installée gardent l'ancienne version.
3. Envoie sur GitHub `index.html` et `sw.js` (**Add file > Upload files**, **Commit changes**).
4. Sur un appareil où l'appli est installée, ferme-la et rouvre-la (parfois deux fois).
