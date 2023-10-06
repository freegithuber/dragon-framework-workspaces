#!/usr/bin/env bash

echo 编译项目开始
cd ../
sh gradlew clean build
echo 编译项目完成
echo

cd dragon-framework-gradle-webflux

for running_container_id in $(
  docker ps --all --quiet --filter "ancestor=dragon-framework-gradle-webflux:1.0.0-SNAPSHOT" --filter "status=running"
)
do
  echo 关闭容器开始[${running_container_id}]
  docker stop ${running_container_id}
  echo 关闭容器完成[${running_container_id}]
  echo
done

for exited_container_id in $(
  docker ps --all --quiet --filter "ancestor=dragon-framework-gradle-webflux:1.0.0-SNAPSHOT" --filter "status=exited"
)
do
  echo 删除容器开始[${exited_container_id}]
  docker rm ${exited_container_id}
  echo 删除容器完成[${exited_container_id}]
  echo
done

for image_id in $(docker images --all --quiet dragon-framework-gradle-webflux:1.0.0-SNAPSHOT)
do
  echo 删除镜像开始[${image_id}]
  docker rmi ${image_id}
  echo 删除镜像完成[${image_id}]
  echo
done

echo 构建镜像开始
docker build --tag dragon-framework-gradle-webflux:1.0.0-SNAPSHOT --file dockerfile .
echo 构建镜像完成
echo

docker inspect dragon-framework-gradle-webflux:1.0.0-SNAPSHOT
echo

if [[ -e 'inspect.info' ]]
then
  mv 'inspect.info' 'inspect.info.'$(date "+%Y%m%d%H%M%S")'.backup'
fi

docker inspect dragon-framework-gradle-webflux:1.0.0-SNAPSHOT > 'inspect.info'

read -p "Press any key to continue . . . "
