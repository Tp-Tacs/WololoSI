FROM node:13.12.0-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./

RUN npm install --silent

COPY . ./

#EXPOSE 8002

CMD ["npm", "run", "start"]