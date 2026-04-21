# Livret Accueil

Realisation d'une application qui permet de reccuperer des information stocker dans un back end priver.
et permet ainsi d'afficher des document via html et java

## 🚀 Fonctionnalités
- Reccuperation d'un document pdf de facon securiser
- ajout,supression et management de fichier stocker en DB
- Access a des donnees "priver"
- Identification via un systeme couplet a backend et DB

## 🛠️ Technologies utilisées

- Langage(s) : JavaScript,
- Framework(s) : VueJS
- Base de données : Postgret et Supabase

## 📦 Installation

instalation projet

### coter front end:
Cloner le projet :
```bash
git clone <url-du-repo>
cd <nom-du-projet>

npm install

npm run dev

.ENV necessaire

VITE_SUPABASE_URL = (lien base de donnees)
VITE_DATABASE_KEY = (cle public supabase)
```


### coter backend

init table mdp -> en priver

creation de Edge fonction pour gerer securiter si loggin special et 

dans les fonctions Edge si connection Anon turn off

> Verify JWT with legacy secret
> Requires a JWT signed only by the legacy secret in the Authorization header. The anon key satisfies this.
> Recommended: OFF with JWT and custom auth logic in your function code.

Mise en place de policie pour securiter


## TODO
- UpdateFile    [X]  
- Supprimer     [X]  
- Ajouter       [X]  
- refreshlist   [X]  
- nfc           [ ]  
- Qrcode        [X]  
- Code et secu  [X]  


## 📄 Licence

Copyright © Clément Renaudin.

Tous droits réservés.

Ce code est la propriété exclusive de l’auteur. Aucune copie, modification, distribution, publication ou exploitation commerciale n’est autorisée sans autorisation écrite préalable.

