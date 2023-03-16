# Typescript NodeJS GRPC app
Node JS + typescript poc app using GRPC.

To format protobuf file I currently use the buf cli locally https://docs.buf.build/installation
it would be good to add it to the docker-compose and be able to run buf format accordingly

## grpc proto
need to install dep grpc-tools, google-protobuf, @grpc/grpc-js, 
need to install dev-dep: @types/google-protobuf, grpc_tools_node_protoc_ts
 the command 
 ```zsh
 docker-compose run poc-nodejs yarn grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./lib/protos -I ./protos ./protos/hello.proto
 ```
 weirdly enough the grpc_tools_node_protoc_ts generates only .d.ts file to be used from the js generated files... using it while exploring another package that generates directly typescript files. (we don't want JS in our codebase)