# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# Copiar el resto de los archivos
COPY . .

# Build de la aplicación
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copiar los archivos build desde el stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de nginx personalizada (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]
