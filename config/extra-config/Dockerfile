FROM alpine:3.20
RUN apk add --no-cache bash sed
COPY confs/ /confs/
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
