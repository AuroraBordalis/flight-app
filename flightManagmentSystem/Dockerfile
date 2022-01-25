FROM openjdk:8
EXPOSE 8080
ADD target/flight-backend.jar flight-backend.jar
ENTRYPOINT [ "java","-jar","/flight-backend.jar" ]