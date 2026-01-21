# 🎭 RobeSénégal - Plateforme de Location de Tenues de Cérémonie

Une plateforme moderne de location de robes et tenues de luxe pour cérémonies au Sénégal, inspirée de 1robepour1soir.com.

## ✨ Fonctionnalités

### 🌐 Frontend (Site Client)
- ✅ Page d'accueil élégante avec design premium
- ✅ Navigation par catégories (Robes longues, courtes, smokings, accessoires)
- ✅ Filtrage par occasions (Mariages, Baptêmes, Tabaski, Galas)
- 🔲 Catalogue de produits avec recherche et filtres
- 🔲 Page détail produit avec galerie d'images
- 🔲 Système de panier et gestion des dates de location
- 🔲 Authentification utilisateur (inscription/connexion)
- 🔲 Espace client (réservations, favoris)
- 🔲 Paiement en ligne (Wave, Orange Money, Free Money, Carte bancaire)

### 🔧 Backoffice (Administration)
- ✅ Dashboard avec statistiques en temps réel
- ✅ Gestion des produits (CRUD complet)
- ✅ Interface responsive et moderne
- 🔲 Gestion des réservations
- 🔲 Gestion des clients
- 🔲 Gestion des paiements
- 🔲 Upload d'images
- 🔲 Paramètres et configuration

## 🛠️ Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Base de données**: MongoDB avec Prisma ORM
- **Styling**: TailwindCSS
- **Authentification**: JWT
- **Icons**: Lucide React
- **Validation**: Zod

## 📦 Installation

### Prérequis
- Node.js 18+ 
- MongoDB (local ou Atlas)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
cd c:/gravity/robe
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de l'environnement**

Créez un fichier `.env` à la racine (ou copiez `.env.example`) :

```env
# Base de données MongoDB
DATABASE_URL="mongodb://localhost:27017/robe-senegal"
# Ou pour MongoDB Atlas:
# DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/robe-senegal"

# JWT Secret
JWT_SECRET="votre-secret-jwt-tres-securise-changez-moi"

# Next Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-nextauth-tres-securise-changez-moi"
```

4. **Initialiser Prisma**
```bash
npx prisma generate
npx prisma db push
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

6. **Ouvrir dans le navigateur**
- Frontend: http://localhost:3000
- Backoffice: http://localhost:3000/admin

## 📊 Modèles de Données

### User (Utilisateur)
- Informations personnelles (nom, prénom, email, téléphone)
- Rôle (CLIENT, ADMIN, SUPER_ADMIN)
- Réservations, favoris et avis

### Product (Produit)
- Détails (nom, description, marque, catégorie)
- Prix de location (3, 4, 7 jours)
- Images et disponibilité
- Tailles, couleurs, occasions

### Booking (Réservation)
- Dates de location
- Client et produit associés
- Statut (PENDING, CONFIRMED, IN_USE, RETURNED, etc.)
- Paiement (méthode, montant, statut)

### Categories
- ROBES_LONGUES
- ROBES_COURTES_MIDI
- SMOKINGS_ENSEMBLES
- SACS_ACCESSOIRES
- CHAUSSURES
- COSTUMES_HOMMES
- etc.

### Occasions
- MARIAGE
- BAPTEME
- TABASKI
- KORITÉ
- GALA
- SOIREE
- etc.

### Méthodes de Paiement
- Wave
- Orange Money
- Free Money
- Carte Bancaire
- Espèces

## 🎨 Design

Le design suit les principes modernes du web design :
- **Glassmorphism** pour les effets de transparence
- **Gradients dynamiques** (violet/doré)
- **Micro-animations** pour l'engagement
- **Typographie élégante** (Inter + Playfair Display)
- **Responsive** mobile-first

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Variables d'environnement en production
Configurez les mêmes variables que dans `.env` dans votre tableau de bord Vercel/hosting.

## 📝 API Routes

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion

### Produits
- `GET /api/products` - Liste des produits (avec filtres)
- `POST /api/products` - Créer un produit (Admin)
- `GET /api/products/[id]` - Détails d'un produit
- `PATCH /api/products/[id]` - Modifier un produit (Admin)
- `DELETE /api/products/[id]` - Supprimer un produit (Admin)

### Réservations (À implémenter)
- `GET /api/bookings` - Liste des réservations
- `POST /api/bookings` - Créer une réservation
- `PATCH /api/bookings/[id]` - Modifier une réservation

## 🔐 Sécurité

- Mots de passe hashés avec bcrypt
- Authentification JWT
- Protection des routes admin
- Validation des données avec Zod
- Variables d'environnement sécurisées

## 📱 Responsive Design

L'application est entièrement responsive :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🎯 Prochaines Étapes

1. [ ] Implémenter le catalogue de produits
2. [ ] Créer les pages de détail produit
3. [ ] Ajouter le système de panier
4. [ ] Intégrer le calendrier de disponibilité
5. [ ] Implémenter les paiements (Wave/Orange Money)
6. [ ] Ajouter l'upload d'images (Cloudinary)
7. [ ] Créer les notifications par email
8. [ ] Ajouter les avis clients
9. [ ] Optimiser les performances
10. [ ] Tests et déploiement en production

## 👥 Contribution

Ce projet est développé pour le marché sénégalais. Les contributions sont les bienvenues !

## 📄 Licence

MIT License - Libre d'utilisation

## 📞 Contact

Pour toute question ou support :
- Email: contact@robesenegal.com
- Téléphone: +221 77 123 45 67

---

**Développé avec ❤️ pour le Sénégal**
