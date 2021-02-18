FROM node@sha256:5edad160011cc8cfb69d990e9ae1cb2681c0f280178241d58eba05b5bfc34047
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]