FROM eclipse-temurin:25-jdk-alpine
WORKDIR /app
COPY . .
RUN ./gradlew build -x test
ENTRYPOINT ["java", "-jar", "build/libs/nonprofit-donation-tracker-0.0.1-SNAPSHOT.jar"]