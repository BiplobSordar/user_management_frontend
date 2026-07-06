# ===========================
# Stage 1 - Build Application
# ===========================
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (Docker Layer Caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build production files
RUN npm run build


# ===========================
# Stage 2 - Production Server
# ===========================
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
