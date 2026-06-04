# Livret Accueil

Realisation d'une application qui permet de reccuperer des information stocker dans un back end priver.
et permet ainsi d'afficher des document via html et java

## 🚀 Fonctionnalités
- Reccuperation d'un document pdf de facon securiser
- ajout,supression et management de fichier stocker en DB
- Access a des donnees "priver"
- Identification via un systeme couplet a backend et DB

## 🛠️ Technologies utilisées

- Langage : **JavaScript**,
- Framework : **VueJS**
- Base de données : **Postgret** et **Supabase**

## 📦 Installation

instalation projet

### coter front-end:
#### Cloner le projet :
```bash
git clone <url-du-repo>
cd <nom-du-projet>

npm install

npm run dev
```

#### .ENV necessaire
```bash
VITE_SUPABASE_URL = (lien base de donnees)
VITE_DATABASE_KEY = (cle public supabase)
```


### Point de vue back-end

#### intitialisation des Tables
init table mdp -> en priver  

>utiliser les documents dans edge fonction pour pouvoir les mettres en place dans supabase

#### Les edges fonction de supabase definie
| Les fonction edge | leur utilité|
|:-------- |:--------|
|**addfil**|Il permet avec un code d'ajouter un   grand nombre de fichier a la base de donnees|
|**get-file-url**|Il permet de reccuperer l'url signier d'un fichier le rendant disponible 1h|
|**getSelect**|Il permet de savoir le nom du fichier qui sera afficher dans l'application|
|**list-pdf-storage**|permet d'avoir la liste des fichiers|
|**suppfile**|permet de supprimer une liste de fichier dans la base de donnees|
|**update-select**|permet de changer le fichier qui sera afficher a tous le monde|

#### Attention !
>Chaque fonction edge demande un code pour etre actif il rest alors a utiliser une librarie de cryptage comme **bcrypte** pour ainsi hashed les code clef et mettre une securiter contre **les brutes forces**.

creation de Edge fonction pour gerer securiter si loggin special et 

dans les fonctions Edge si connection Anon turn off

> Verify JWT with legacy secret
> Requires a JWT signed only by the legacy secret in the Authorization header. The anon key satisfies this.
> Recommended: OFF with JWT and custom auth logic in your function code.

Mise en place de policie pour securiter


## TODO
1. **UpdateFile**     [X]  
2. **Supprimer**      [X]  
3. **Ajouter**        [X]  
4. **refreshlist**    [X]  
5. **Code et secu**   [X]
6. **Qrcode**         [X]  
7. **nfc**            [ ]  
8. **Mettre Bcrypte** [ ]  


## 📄 Licence

Copyright © Clément Renaudin.

Tous droits réservés.

Ce code est la propriété exclusive de l’auteur. Aucune copie, modification, distribution, publication ou exploitation commerciale n’est autorisée sans autorisation écrite préalable.

