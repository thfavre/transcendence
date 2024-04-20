# Base image (still using Node.js)
FROM node:lts-alpine

# Working directory
RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
COPY . /app

RUN npm install
RUN npm run build

# Copy project source code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the Vite development server
CMD [ "npm", "run", "dev" ]

