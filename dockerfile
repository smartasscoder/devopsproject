# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present) to the container
COPY package*.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your application will run on (e.g., 3000)
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
