# node-server
Nodejs Express MongoDB

##
``` shell
npm install
``` 
To install packages in package.json

##Mongo

Download mongo from:  https://www.mongodb.com/

create data folder inside root folder

open console and start mongod :
``` shell
mongod --dbpath Node-server/data/
``` 
open another console and start mongo and create db:

``` shell
mongo
use movies
``` 

insert some data
``` shell
db.movies.insert({title:'test1',year'2016',posters:{'thumbnail':'http://<Express Server ip>:3000/pic.jpg'}})
``` 
check that data is added
``` shell
db.movies.find().pretty()

{
        "_id" : ObjectId("572cda2d9367da668f443714"),
        "title" : "test1",
        "year" : 2016,
        "posters" : {
                "thumbnail" : "http://<Express Server ip>:3000/pic.jpg"
        }
}
``` 

##React-native front-end
https://github.com/vulp/react-native



