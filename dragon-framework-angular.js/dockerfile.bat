@echo off

setlocal enabledelayedexpansion

set name=%1
set version=%2
set env=%3

for /f "tokens=1,2,3,* delims= " %%a in (package.json) do (
  if "%%a"==""name":" (
    set name=%%b
    set name=!name:~1,-2!
  )
  if "%%a"==""version":" (
    set version=%%b
    set version=!version:~1,-2!
  )
)
echo The resolved name is: %name%
echo.
echo The resolved version is: %version%
echo.

if "%env%"=="" (
  set /p "env=Please select an environment (production, release): "
)
:set_env
if not "%env%"=="production" ( if not "%env%"=="release" (
  echo Sorry, the selection of environment is illegal.
  echo.
  set /p "env=Please select an environment (production, release): "
  goto :set_env
))
echo.

if exist "%cd%\dist\dragon-framework-angular.js" (
  echo 开始清理文件: "%cd%\dist\dragon-framework-angular.js"
  rd /s /q "%cd%\dist\dragon-framework-angular.js"
  echo 成功清理文件: "%cd%\dist\dragon-framework-angular.js"
) else (
  echo 无需清理文件: "%cd%\dist\dragon-framework-angular.js"
)

call npm run build:%env%

for /f "tokens=1,2,3,* delims= " %%a in ('docker ps -a') do (
  if "%%b"=="%name%:%version%-%env%" (
    echo 关闭容器开始: %%a
    docker stop %%a
    echo 关闭容器成功: %%a
    echo.
    echo 删除容器开始: %%a
    docker rm %%a
    echo 删除容器成功: %%a
    echo.
  )
)

docker rmi %name%:%version%-%env%

docker build --no-cache=true ^
  --tag %name%:%version%-%env% ^
  --build-arg NAME=%name% ^
  --build-arg VERSION=%version% ^
  --build-arg ENV=%env% ^
  --file dockerfile .

rem docker login 10.10.10.10:18080

rem docker rmi 10.10.10.10:18080/freeimage/%name%:%version%-%env%

rem docker tag %name%:%version%-%env% 10.10.10.10:18080/freeimage/%name%:%version%-%env%

rem docker save -o %name%-%version%-%env%.tar.gz 10.10.10.10:18080/freeimage/%name%:%version%-%env%

rem docker push 10.10.10.10:18080/freeimage/%name%:%version%-%env%

pause
