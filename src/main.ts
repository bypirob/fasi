import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/', function (request, reply) {
  request.log.info('Some info about the current request');
  reply.send({ hello: 'world' });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});