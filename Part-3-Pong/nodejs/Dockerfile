FROM node:alpine

COPY *.json ./
RUN npm install .

COPY node_server.js .
RUN touch out.csv
ENTRYPOINT ["node", "node_server.js"]
