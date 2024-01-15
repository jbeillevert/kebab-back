# Utiliser une image de base Node.js
FROM node:18

#Use production node environment by default.
ENV NODE_ENV production

# Définir le répertoire de travail
WORKDIR /

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier les fichiers du projet dans le conteneur
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]