# -----------------------------------------------
# Stage 1: Build Stage
# -----------------------------------------------
FROM node:20-alpine AS build

WORKDIR /app

# ১. dependency ইনস্টলের জন্য package.json ফাইল কপি করা
COPY package*.json ./

# ২. package-lock.json অনুযায়ী ক্লিন ইনস্টল করা
RUN npm ci

# ৩. Build Time-এ Variable ডিক্লেয়ার করা
ARG VITE_API_BASE_URL=/api/v1
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# ৪. প্রজেক্টের সমস্ত সোর্স কোড কপি করা
COPY . .

# ৫. Vite Production Build তৈরি করা (dist ফোল্ডার তৈরি হবে)
RUN npm run build

# -----------------------------------------------
# Stage 2: Production Stage (Nginx দিয়ে সার্ভ করা)
# -----------------------------------------------
FROM nginx:alpine

# ১. Vite-এর তৈরি হওয়া dist ফোল্ডারটি Nginx-এর html ডিরেক্টরিতে কপি করা
COPY --from=build /app/dist /usr/share/nginx/html

# ২. React/Vite Client-side Routing সমর্থনের জন্য Nginx Config (ঐচ্ছিক কিন্তু রিকমেন্ডেড)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
