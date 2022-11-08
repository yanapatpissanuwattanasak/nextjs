FROM --platform=linux/amd64 node:16.2.0
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY pages ./pages
COPY public ./public
COPY next.config.js ./next.config.js
COPY styles ./styles
COPY tsconfig.json ./tsconfig.json
COPY components ./components
# COPY ./constants/private.key ./dist/constants
# COPY tsconfig.build.json .

#COPY .env.development ./
# COPY .env.production ./

# RUN npm install -g @nestjs/cli
RUN npm install
EXPOSE 80

# CMD ["npm", "run", "build"]
CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "start:prod"]
