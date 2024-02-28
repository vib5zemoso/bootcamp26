FROM maven:3.6.3-openjdk-11-slim AS MAVEN_JAR
WORKDIR /code
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:11.0-jdk-slim
COPY --from=MAVEN_JAR code/target/*.jar app.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar","app.jar"]