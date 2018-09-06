FROM node:alpine

COPY *.json ./
RUN npm install .

COPY node_server.js .
ENTRYPOINT ["node", "node_server.js"]
