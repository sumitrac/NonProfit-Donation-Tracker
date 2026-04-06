FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY . .
RUN ./gradlew build -x test
ENTRYPOINT ["java", "-jar", "build/libs/donation-tracker-0.0.1-SNAPSHOT.jar"]