# IFT508 - Devoir 2 - Partie 1

Ce depot contient le code d'implémentation de la mise en situation de la partie 1 du devoir 2 au sein du cours d'IFT508

Le projet consiste de deux API:
- `api/` est l'api qui possède la vulnérabilité
- `hacker_api/` est l'api qui recois les tokens attaqués

le fichier `hack.html` contient le payload de l'attaque

*note: l'api vulnérable utilise le `localStorage` pour sauvegarder les tokens d'authentification. Cela fait en sorte que tester localement implique que seulement le token de la derniere personne connectée est présent.