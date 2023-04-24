import { ServerUnaryCall } from '@grpc/grpc-js';
import { HelloRequest, HelloResponse } from '../protos/hello_pb';

function sayHello(call: ServerUnaryCall<HelloRequest, HelloResponse>) {
  return call;
}

export default sayHello;
