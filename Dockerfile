# Select Base Image with Node.js
FROM node:lts-alpine

# Create Working Directory
WORKDIR /app

# Install (Project-Specific) Dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy Your Application Code
COPY . .

# Specify the Start Command
CMD ["npm", "run", "dev"]

