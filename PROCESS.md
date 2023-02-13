So this is the strategy to build this sort of poc/example app

# Goal
Build a node js typescript service with docker and all that is based on Pillar Ruby code style.This implies to have kinda the same kind of file/structure.
* config folder

    config folder with environment .yml files (development.yml etc.)

* lib folder
    contains most of the files that are going to be used

    * a `grpc/` folder with the grpc server
    * a `grpc_interfaces/` folder with grpc interfaces
    * an `interfaces/` folder with all the interfaces
    * a `models/` folder with the mongodb Models
    * a `protos/` folder with the proto files
    * a `services/` folder with all the different services
    * a `utils/` folder with all the utils
    * a `spec/` folder with the tests
    * a `task` folder with the different tasks

other config giles are going to be at the root , such as : 
* `package.json`
* environment file such as `.env.development`, .`env.sample`
* lint config and related files (`eslint.rc`, `prettier` etc.)
* the version file `.version`
* server and maybe config files
* dockerfile


# How to
So the idea is to have this as a typsecript project , running with nodemon or running via docker on local . 
for the deployment we are going to leverage the github actions files in other maybe to convert this to js and deploy... an examole of that will be found in the dockerfile. 







