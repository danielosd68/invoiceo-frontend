FROM node:22
LABEL author="daniel-chylinski"
WORKDIR "/app"
COPY package.json .
RUN "yarn"
COPY . .
CMD ["yarn", "run", "dev"]

EXPOSE 3000