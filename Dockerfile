FROM node:8-alpine

ENV PORT 3333
ENV NODE_ENV production

COPY . /home/node/app

WORKDIR /home/node/app

RUN yarn

USER node

CMD ["node", "index.js"]
