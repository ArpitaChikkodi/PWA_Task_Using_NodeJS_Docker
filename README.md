# PWA_Task_Using_NodeJS_Docker
This is simple progressive web application using NodeJS and Docker

The tasks performed are
1. Introduction to PWA
2. Tools to measure PWA
3. Manifest file
4. Service Worker
5. Life cycle of a service worker
6. Caching and Offline sync
7. Installing App
8. Adding to Home screen
9. Auditing with lighthouse plugin

The commands to be used to run

>npm install

>node server.js

To create package.json file
>npm init 

To list down docker running
>sudo docker ps

To list all docker images
>sudo docker images

To build docker image
>sudo docker build -t pwa_task_node  .
pwa_task_node is the name of the image


>docker run -it -d -p 7001:9005 pwa_task_node
de0ed886113cf9ac6129805db0f40a82a82e79edff9d30877177caab983632b1

>sudo docker save -o pwa_task_image.tar pwa_task_node

