
FROM maven:3.5.4-jdk-8-alpine as maven
COPY ./pom.xml ./pom.xml
COPY ./src ./src
RUN mvn dependency:go-offline -B
RUN mvn package



FROM openjdk:8u171-jre-alpine
EXPOSE 8080

COPY --from=maven target/flight-backend.jar ./SimpleJavaProject.jar

CMD ["java", "-jar", "./SimpleJavaProject.jar"]