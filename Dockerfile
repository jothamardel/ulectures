FROM node:10.23.3

WORKDIR /usr/src/ulecture

COPY ./ ./

RUN yarn

CMD [ "/bin/bash" ]
