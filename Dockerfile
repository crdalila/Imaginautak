# Usa Node como base
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los package.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto de archivos
COPY . .

# Expone el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
