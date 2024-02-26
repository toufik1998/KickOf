# Use the official Node.js 20 image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the default port (change it if your app runs on a different port)
EXPOSE 8081

# Start the React Native development server
CMD ["npm", "start"]