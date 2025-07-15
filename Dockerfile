# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install any needed packages
RUN pnpm install

# Copy the rest of the application's code
COPY . .

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the app
CMD ["pnpm", "preview", "--host"]
