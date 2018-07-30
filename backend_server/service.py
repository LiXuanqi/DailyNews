import pyjsonrpc

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):
	""" Test method """
	@pyjsonrpc.rpcmethod
	def add(self, a, b):
		return a + b

http_server = pyjsonrpc.ThreadingHttpServer(
	server_address = (SERVER_HOST, SERVER_PORT),
	RequestHandlerClass = RequestHandler
)

print "Starting Http server on %s:%d" % (SERVER_HOST, SERVER_PORT)

http_server.serve_forever()


