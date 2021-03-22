Projet d'application de gestion de listes de courses.
====

Contexte
---

Le dépôt contient un projet d'application visant à gérer les listes de courses d'un utilisateur. Elle utilise React-Native pour la partie front-end et Firebase pour la partie back-end. Le projet est réalisé par Julie Tilatti, Valentine Imoucha, Asmae Ziani, Omar Belkebir, Vikramaditya Bhati, Imad Boudroua et Clément Préaut.

Fonctionnalités
---
En l'état actuel, l'application permet à l'utilisateur :
* Concernant son compte :
1. De se connecter à un compte existant en utilisant les identifiants `Id@gmail.com` pour le nom d'utilisateur et `123456` pour le mot de passe.
2. De se déconnecter via le buton `log out` dans le menu.

* Concernant les liste :
1. De créer une liste.
2. De renommer une liste.
3. De supprimer une liste.

* Concerant les articles d'une liste :
1. D'ajouter des articles.

Instructions
---

L'application utilise expo comme plateforme d'éxécution de l'application. Elle utilise NodeJS et yarn pour installer expo

* `yarn global add expo-cli` : Installe expo.

* `yarn` : met à jour les modules importés.

* `yarn start` : Lance l'application.

Notes
---

Le projet est encore en cours d'avancement. Il a d'abord fait l'objet d'un travail conséquent d'état de l'art, d'organisation et de spécification. La production de code est donc assez récente. Le code présenté joue le rôle d'exemple d'implémentation mais non d'aboutissement.