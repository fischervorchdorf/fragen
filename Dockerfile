FROM node:20-alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# Package-Dateien kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Den Rest des Projekts kopieren
COPY . .

# Uploads Ordner erstellen und Rechte setzen
RUN mkdir -p uploads && chmod 777 uploads

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]
