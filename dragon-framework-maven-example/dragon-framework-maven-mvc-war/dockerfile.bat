CHCP 65001

@echo off
echo.

cd ../

echo [32m编译项目开始[0m
call mvn clean package -Dmaven.test.skip=true
echo [32m编译项目完成[0m
echo.

cd dragon-framework-maven-mvc-war

for /F %%i in ('docker ps --all --quiet --filter "ancestor=dragon-framework-maven-mvc-war:1.0.0-SNAPSHOT" --filter "status=running"') do (
  echo [32m关闭容器开始[[31m%%i[32m][0m
  docker stop %%i
  echo [32m关闭容器完成[[31m%%i[32m][0m
  echo.
)

for /F %%i in ('docker ps --all --quiet --filter "ancestor=dragon-framework-maven-mvc-war:1.0.0-SNAPSHOT" --filter "status=exited"') do (
  echo [32m删除容器开始[[31m%%i[32m][0m
  docker rm %%i
  echo [32m删除容器完成[[31m%%i[32m][0m
  echo.
)

for /F %%i in ('docker images --all --quiet dragon-framework-maven-mvc-war:1.0.0-SNAPSHOT') do (
  echo [32m删除镜像开始[[31m%%i[32m][0m
  docker rmi %%i
  echo [32m删除镜像完成[[31m%%i[32m][0m
  echo.
)

echo [32m构建镜像开始[0m
docker build --no-cache=true --tag dragon-framework-maven-mvc-war:1.0.0-SNAPSHOT --file dockerfile .
echo [32m构建镜像完成[0m
echo.

docker inspect dragon-framework-maven-mvc-war:1.0.0-SNAPSHOT
echo.

if exist "inspect.info" (ren "inspect.info" "inspect.info.%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%.backup")
docker inspect dragon-framework-maven-mvc-war:1.0.0-SNAPSHOT > "inspect.info"

pause
