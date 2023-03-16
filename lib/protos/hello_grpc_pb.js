// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');

function serialize_protos_HelloRequest(arg) {
  if (!(arg instanceof hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type protos.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_HelloRequest(buffer_arg) {
  return hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_HelloResponse(arg) {
  if (!(arg instanceof hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type protos.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_HelloResponse(buffer_arg) {
  return hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldServiceService = exports.HelloWorldServiceService = {
  hello: {
    path: '/protos.HelloWorldService/Hello',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloRequest,
    responseType: hello_pb.HelloResponse,
    requestSerialize: serialize_protos_HelloRequest,
    requestDeserialize: deserialize_protos_HelloRequest,
    responseSerialize: serialize_protos_HelloResponse,
    responseDeserialize: deserialize_protos_HelloResponse,
  },
};

exports.HelloWorldServiceClient = grpc.makeGenericClientConstructor(HelloWorldServiceService);
