# Base Image (includes Node.js and therefore npm)
FROM node:lts-alpine

# Working Directory
WORKDIR /app

# Install Dependencies (For Vite)
COPY package.json package-lock.json ./
RUN npm install
RUN npm install three

# Build for Production
RUN npm run build

# Install a simple HTTP server
RUN npm install -g http-server

# Copy the rest of the Project Files (including the built 'dist' folder)
COPY . .

# Start the Server
CMD ["http-server", "dist", "-p", "8080"]
