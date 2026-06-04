## Architechture Vues Js + supabase
### Vue js

De base vue js nous fournie cette **arborescence**

#### Projet vue de base
```bash
.
├── index.html
├── jsconfig.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   └── main.css
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── icons/
│   │   └── WelcomeItem.vue
│   └── main.js
├── vite.config.js
└── README.md

```

Dans notre cas les modification apporter son principalement la mise en places de **Vue-routeur** et la creation d'un dossier **View** qui permet de mieux reperer **les pages Vs les Composants**.

Vous pouvez voir l'aborecence du projet si dessous.



## Arborescence de l'Application
```bash
.
├── Doc                                     _
│   └── Documentation.md - Vous etes ici ! 0v0
├── index.html                               
├── jsconfig.json                            
├── package.json
├── package-lock.json
├── public
│   ├── eye-off.svg
│   ├── eye.svg
│   └── pdf
│       ├── Public.pdf
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── favicon.ico
│   │   ├── img
│   │   │   └── Lesimages.png ...
│   │   └── style
│   │       ├── button.css
│   │       ├── draganddrop.css
│   │       ├── main.css
│   │       ├── style.css
│   │       ├── styleform.css
│   │       └── stylegrid.css
│   ├── components
│   │   ├── document.vue
│   │   └── error.vue
│   ├── main.js
│   ├── utils
│   │   ├── connectionApp.js
│   │   ├── connectionSupabase.js
│   │   ├── deconnexion.js
│   │   ├── getSelectedFile.js
│   │   ├── supabaselist.js
│   │   └── supabaseObtentionPdf.js
│   └── Views
│       ├── authentification.vue
│       ├── grid.vue
│       └── home.vue
├── vite.config.js
└── README.md

11 directories, 30 files
```
---
<br> </br>


## Src

```bash
src
 ├── App.vue
 ├── assets/
 ├── components/
 ├── main.js
 ├── utils/
 └── Views/
```
pour faire simple le projet a different dossier et fichier

| Les dossier | leur utilité|
|:-------- |:--------|
|**Src**|Est le dossier general du projets il contient tout la production du site|
|**Views**|Il regroupe les pages de l'application qui seront appeler par le routeur|
|**Components**|Il regroupe les Components de l'application qui seront appeler par les pages dans view|
|**Utils**|Il regroupe la logique/fonction pour faire des appelles au back-end|
|**Public**|Tout element public au sites (fond/images/document)|


## Utils
```bash
utils
  ├── connectionApp.js
  ├── connectionSupabase.js
  ├── deconnexion.js
  ├── getSelectedFile.js
  ├── supabaselist.js
  └── supabaseObtentionPdf.js
```

#### Comment son gerer les fonctions
les fonctions reccuperer un code et essaye d'appeller les fonctions du backend via supabase edge fonction on le remarque avec lutilisation des fetch et la creation de body pour l'utiliser dans le fetch

les fonction et tout la configuration se trouve dans lautre depot qui est prive nommer Site Web et PDf Back
**[Site Web et PDf Back](https://github.com/renaudin-clement/Site-Web-et-PDf-Back)**


| Les fonction edge | leur utilité|
|:-------- |:--------|
|**connectionApp**|Controleur pour la connection|
|**connectionSupabase**|Controleur pour la connection supabase|
|**deconnexion**|Fonction deconnection basique|
|**getSelectedFile**|Fonction qui permet de reccuperer le fichier a afficher avec edge fonction|
|**supabaselist**|regroupe les appelle de fonction qui ajoute supp et modif les fichier dans la base|
|**supabaseObtentionPdf**|reccuperer l'url signier pour afficher le document via media|

### Public
le public contient uniquement ce que l'on veux afficher ou fournir des document non essentielle ou priver  
les types de fichier qu'on peux retrouver son:  
- Les pdf comme Commun.pdf  (explicatif si probleme)
- Les image comme image.png (fond et background)


## Les Packages Utils
  
les package utiliser son principalement le framework et les packages permettant de se connecter a supabase

| Les fonction edge | leur utilité|  la version pour le moment|
|:-------- |:--------|:--------:|
|**[bcrypt](https://www.npmjs.com/package/bcryptjs)**|library de **cryptage** utiliser au backend|"^**6.0.0**"|
|**[vue](https://vuejs.org/)**|Framework **VueJs**|"^**3.5.31**"|
|**[vue-router](https://router.vuejs.org/)**|libraries de **routages** VueJS|"^**4.6.4**"|
|**[@supabase/supabase-js](https://supabase.com/docs/reference/javascript/introduction)**|Api pour la base de donnees|"^**2.103.0**"|

