FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . ./

ENV MONGO_URL=mongodb+srv://abinsha:9744146360@zomato-master.ml2mm.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=76109439422-udkj576so8dtidhekgg9sk1iq3am87f6.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=5jV1A4RIG1B-2nwkCvVJqq-N
ENV MAILGUN__API__KEY=c878cd5d7addd818db938b4bed962de8-443ec20e-349d147b
ENV MAILGUN__DOMAIN=sandboxaf6cd5c29d6b4d91823cc1f6fb67e726.mailgun.org
ENV AWS_ACCESS_KEY=AKIA6QDY7YE2RLNMJTL3
ENV AWS_SECRET_KEY=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
ENV RAZORPAY_KEY_ID=rzp_test_DDFlA7UaCcL00M
ENV RAZORPAY_SECRET_ID=bdk9HRBDE0MAIm1PQ6RqMlcc

CMD ["npm", "run", "start"]