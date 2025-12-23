# Use lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose app port (change if needed)
EXPOSE 3000

# Start app
CMD ["npm", "start"]