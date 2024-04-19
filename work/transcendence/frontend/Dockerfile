FROM	nginx:1.25-alpine

RUN		apk add --no-cache openssl nghttp2 npm

# RUN		npm install --save vite

RUN		mkdir -p /etc/nginx/ssl

RUN		openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/nginx.key -out /etc/ssl/certs/nginx.crt -subj "/C=FR/ST=Paris/L=Paris/O=42/OU=42/CN=localhost"

RUN		mkdir -p /var/www/html
RUN		chmod 755 /var/www/html

COPY	srcs/ /var/www/html

COPY	./conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE	443

CMD 	["nginx", "-g", "daemon off;"]
