# Video-Download

Este proyecto permite descargar videos y música de YouTube proporcionando únicamente la URL.

## Tecnologías utilizadas

### Frontend
- **Framework:** [Ionic](https://ionicframework.com/)

### Backend
- **Lenguaje/Entorno:** Node.js
- **Dependencias principales:**
  - `cors`
  - `express`
  - `fluent-ffmpeg`
  - `youtube-dl-exec`
  - `ytdl-core`

## Instalación

Sigue los pasos a continuación para configurar y ejecutar el proyecto:

### Requisitos previos
1. Tener instalado:
   - [Node.js](https://nodejs.org/)
   - [npm](https://www.npmjs.com/) (incluido con Node.js)
   - [Ionic CLI](https://ionicframework.com/docs/cli)
2. Acceso a Internet para descargar las dependencias.

### Configuración del backend
1. Navega al directorio del backend:
   ```bash
   cd backend/DownloaderYoutube
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor backend:
   ```bash
   node servidor.js
   ```

### Configuración del frontend
1. Navega al directorio del frontend:
   ```bash
   cd app
   ```
2. Instala las dependencias de Ionic:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo de Ionic:
   ```bash
   ionic serve
   ```

## Uso del proyecto
1. Abre el frontend en tu navegador. (Normalmente estará disponible en `http://localhost:8100`).
2. Introduce la URL del video o música de YouTube que deseas descargar.
3. Selecciona el formato deseado (video o audio).
4. Descarga el archivo directamente desde la aplicación.

## Notas importantes
- **Legalidad:** Este proyecto es para fines educativos. Asegúrate de cumplir con los términos de uso de YouTube y las leyes locales relacionadas con la descarga de contenido.
