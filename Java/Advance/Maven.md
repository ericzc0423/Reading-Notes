## Maven ##

**什么是Maven**

Maven包括一个复杂的、分布的依赖关系关系管理系统，也赋予了其一定的规则，用于sqvfyiet程序包（如JAR,WAR,EAR)及部署一毓不同的目标。Ant的构建文件集中在如何构建，而Maven文件主要关注你想要什么。

**pom.xml**

``` XML
    <project xmlns="http://maven.apache.org/POM/4.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                          http://maven.apache.org/xsd/maven-4.0.0.xsd">
      <modelVersion>4.0.0</modelVersion>

      <!-- The Basics -->
      <groupId>...</groupId>
      <artifactId>...</artifactId>
      <version>...</version>
      <packaging>...</packaging>
      <dependencies>...</dependencies>
      <parent>...</parent>
      <dependencyManagement>...</dependencyManagement>
      <modules>...</modules>
      <properties>...</properties>

      <!-- Build Settings -->
      <build>...</build>
      <reporting>...</reporting>

      <!-- More Project Information -->
      <name>...</name>
      <description>...</description>
      <url>...</url>
      <inceptionYear>...</inceptionYear>
      <licenses>...</licenses>
      <organization>...</organization>
      <developers>...</developers>
      <contributors>...</contributors>

      <!-- Environment Settings -->
      <issueManagement>...</issueManagement>
      <ciManagement>...</ciManagement>
      <mailingLists>...</mailingLists>
      <scm>...</scm>
      <prerequisites>...</prerequisites>
      <repositories>...</repositories>
      <pluginRepositories>...</pluginRepositories>
      <distributionManagement>...</distributionManagement>
      <profiles>...</profiles>
    </project>
```

 **Maven 命令行**
```bash
mvn archetype:genrate

```
