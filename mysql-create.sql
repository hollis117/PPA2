create database if not exists ppa2;
use ppa2;
create table if not exists bmi (
	feet int,
    inches int,
    weight decimal(5,1),
    output varchar(255),
    timeIn timestamp
);
create table if not exists shortestDistance(
	x1 decimal(10,2),
    y1 decimal(10,2),
    x2 decimal(10,2),
    y2 decimal(10,2),
    output varchar(255),
    timeIn timestamp
);
# show tables;
CREATE USER if not exists 'tester'@'%' IDENTIFIED WITH mysql_native_password BY 'tester';
grant all privileges on ppa2.* to 'tester'@'%';
flush privileges;

#select * from bmi;

delete from bmi;

#select * from shortestDistance;

delete from shortestDistance;

