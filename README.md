# PPA2
### Docker Database command
```
docker pull mysql:latest
docker run --name mysql -p 3306:3306 -p 50001:50000 -p 8080:8080 -d -e MYSQL_ROOT_PASSWORD='root' mysql:latest
```
- To set up the database you should run the included .sql file
##### Bug in code
> For whatever reason, `Jenkins` will not run my mock code that uses `Nock`. When run locally it runs fine, as shown in the video.
