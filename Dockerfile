# 1. Use an official Node.js runtime as the base image
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json first to cache layers
COPY app/package*.json .

# 4. Copy the rest of your application code
COPY app/ .

# 5. Install dependencies
RUN npm install && npm cache clean --force

# Install PM2 globally
RUN npm install pm2 -g

EXPOSE 3000

# CMD ["node", "app.js"]
CMD ["pm2-runtime", "start", "ecosystem.config.js"]