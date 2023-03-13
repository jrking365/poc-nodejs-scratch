// package: protos
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as hello_pb from "./hello_pb";

interface IHelloWorldServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    hello: IHelloWorldServiceService_IHello;
}

interface IHelloWorldServiceService_IHello extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloResponse> {
    path: "/protos.HelloWorldService/Hello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloResponse>;
}

export const HelloWorldServiceService: IHelloWorldServiceService;

export interface IHelloWorldServiceServer extends grpc.UntypedServiceImplementation {
    hello: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloResponse>;
}

export interface IHelloWorldServiceClient {
    hello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloWorldServiceClient extends grpc.Client implements IHelloWorldServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public hello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
