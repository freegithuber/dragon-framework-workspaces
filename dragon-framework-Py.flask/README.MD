# 1、创建运行环境

## 1.1、创建虚拟环境

```
D:\ProgramTools\Python\Python38\python.exe -m venv .venv
```

```
C:\Users\wutenghui>H:

H:\>cd H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask

H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>D:\ProgramTools\Python\Python38\python.exe -m venv .venv

H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>
```

## 1.2、激活虚拟环境

```
.venv\Scripts\activate.bat
```

```
H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>.venv\Scripts\activate.bat

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>python -V
Python 3.8.10

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>pip -V
pip 21.1.1 from h:\workspaces\dragon-framework-workspaces\dragon-framework-py.flask\.venv\lib\site-packages\pip (python 3.8)

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>
```

## 1.3、退出虚拟环境

```
.venv\Scripts\deactivate.bat
```

```
H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>.venv\Scripts\activate.bat

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>python -V
Python 3.8.10

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>pip -V
pip 21.1.1 from h:\workspaces\dragon-framework-workspaces\dragon-framework-py.flask\.venv\lib\site-packages\pip (python 3.8)

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>.venv\Scripts\deactivate.bat

H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>
```

## 1.4、删除虚拟环境

```
直接删除目录（H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask\.venv）
```

## 1.5、管理项目依赖

### 1.5.1、升级相关依赖

```
.venv\Scripts\python -m pip install --upgrade pip==22.1.2
```

```
.venv\Scripts\pip install --upgrade setuptools==56.2.0
```

```
(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>.venv\Scripts\python -m pip install --upgrade pip==22.1.2
Looking in indexes: https://mirrors.aliyun.com/pypi/simple/
Collecting pip==22.1.2
  Downloading https://mirrors.aliyun.com/pypi/packages/96/2f/caec18213f6a67852f6997fb0673ae08d2e93d1b81573edb93ba4ef06970/pip-22.1.2-py3-none-any.whl (2.1 MB)
     |████████████████████████████████| 2.1 MB 1.3 MB/s
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 21.1.1
    Uninstalling pip-21.1.1:
      Successfully uninstalled pip-21.1.1
Successfully installed pip-22.1.2

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>
```

```
(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>.venv\Scripts\pip install --upgrade setuptools==56.2.0
Looking in indexes: https://mirrors.aliyun.com/pypi/simple/
Collecting setuptools==56.2.0
  Downloading https://mirrors.aliyun.com/pypi/packages/d0/15/5041473f5d142ee93bf1593deb8f932e27a078f6f04e2020cf44044f72c5/setuptools-56.2.0-py3-none-any.whl (785 kB)
     ---------------------------------------- 785.3/785.3 kB 2.5 MB/s eta 0:00:00
Installing collected packages: setuptools
  Attempting uninstall: setuptools
    Found existing installation: setuptools 56.0.0
    Uninstalling setuptools-56.0.0:
      Successfully uninstalled setuptools-56.0.0
Successfully installed setuptools-56.2.0

[notice] A new release of pip available: 22.1.2 -> 23.2.1
[notice] To update, run: python.exe -m pip install --upgrade pip

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>
```

### 1.5.2、依赖提取工具

```
.venv\Scripts\pip install pipreqs==0.4.11    （不装也行，就用 .venv\Scripts\pip freeze 命令提取）
```

```
(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>.venv\Scripts\pip install pipreqs==0.4.11
Looking in indexes: https://mirrors.aliyun.com/pypi/simple/
Collecting pipreqs==0.4.11
  Downloading https://mirrors.aliyun.com/pypi/packages/1a/cd/74bbb901d65c375e2e8ab5601a4071d4ef38c745f6d4da74add61f964b9a/pipreqs-0.4.11-py2.py3-none-any.whl (32 kB)
Collecting docopt
  Using cached https://mirrors.aliyun.com/pypi/packages/a2/55/8f8cab2afd404cf578136ef2cc5dfb50baa1761b68c9da1fb1e4eed343c9/docopt-0.6.2.tar.gz (25 kB)
  Preparing metadata (setup.py) ... done
Collecting yarg
  Downloading https://mirrors.aliyun.com/pypi/packages/8b/90/89a2ff242ccab6a24fbab18dbbabc67c51a6f0ed01f9a0f41689dc177419/yarg-0.1.9-py2.py3-none-any.whl (19 kB)
Collecting requests
  Downloading https://mirrors.aliyun.com/pypi/packages/70/8e/0e2d847013cb52cd35b38c009bb167a1a26b2ce6cd6965bf26b47bc0bf44/requests-2.31.0-py3-none-any.whl (62 kB)
     ---------------------------------------- 62.6/62.6 kB 1.1 MB/s eta 0:00:00
Collecting certifi>=2017.4.17
  Downloading https://mirrors.aliyun.com/pypi/packages/4c/dd/2234eab22353ffc7d94e8d13177aaa050113286e93e7b40eae01fbf7c3d9/certifi-2023.7.22-py3-none-any.whl (158 kB)
     ---------------------------------------- 158.3/158.3 kB 3.2 MB/s eta 0:00:00
Collecting charset-normalizer<4,>=2
  Downloading https://mirrors.aliyun.com/pypi/packages/6b/b2/9d0c8fe83572a37bd66150399e289d8e96d62eca359ffa67c021b4120887/charset_normalizer-3.2.0-cp38-cp38-win_amd64.whl (96 kB)
     ---------------------------------------- 96.2/96.2 kB 789.0 kB/s eta 0:00:00
Collecting urllib3<3,>=1.21.1
  Downloading https://mirrors.aliyun.com/pypi/packages/37/dc/399e63f5d1d96bb643404ee830657f4dfcf8503f5ba8fa3c6d465d0c57fe/urllib3-2.0.5-py3-none-any.whl (123 kB)
     ---------------------------------------- 123.8/123.8 kB 908.4 kB/s eta 0:00:00
Collecting idna<4,>=2.5
  Downloading https://mirrors.aliyun.com/pypi/packages/fc/34/3030de6f1370931b9dbb4dad48f6ab1015ab1d32447850b9fc94e60097be/idna-3.4-py3-none-any.whl (61 kB)
     ---------------------------------------- 61.5/61.5 kB 1.7 MB/s eta 0:00:00
Using legacy 'setup.py install' for docopt, since package 'wheel' is not installed.
Installing collected packages: docopt, urllib3, idna, charset-normalizer, certifi, requests, yarg, pipreqs
  Running setup.py install for docopt ... done
Successfully installed certifi-2023.7.22 charset-normalizer-3.2.0 docopt-0.6.2 idna-3.4 pipreqs-0.4.11 requests-2.31.0 urllib3-2.0.5 yarg-0.1.9

[notice] A new release of pip available: 22.1.2 -> 23.2.1
[notice] To update, run: python.exe -m pip install --upgrade pip

(.venv) H:\workspaces\dragon-framework-workspaces\dragon-framework-Py.flask>
```

### 1.5.3、提取项目依赖

```
.venv\Scripts\pipreqs ./ --debug --force --encoding=utf-8    扫描整个项目目录，发现使用了哪些库，生成依赖清单。（建议使用但可能失败哦~）
```

```
.venv\Scripts\pip freeze > requirements.txt                  扫描整个项目环境，发现使用的所有库，生成依赖清单。
```

### 1.5.4、安装项目依赖

```
.venv\Scripts\pip install -r requirements.txt
```

# 2、生产环境部署

## 2.1、安装服务依赖

```
pip install gunicorn==20.1.0
```

## 2.2、服务启动命令

```
gunicorn --workers 4 --bind 0.0.0.0:8080 main:webapp
```

# 3、服务镜像构建

## 3.1、登录私服

```
docker login 10.10.10.10:18080
Username: admin
Password: Harbor123456
Login Succeeded
```

## 3.2、镜像构建

```
docker build --tag dragon-framework-py_flask:1.0.0 --no-cache=true --file dockerfile .
```

## 3.3、运行镜像

```
docker run -d --name dragon-framework-py_flask -e PORT=8080 -e WORKERS=8 -p 8080:8080 dragon-framework-py_flask:1.0.0
```

## 3.4、标记镜像

```
docker tag dragon-framework-py_flask:1.0.0 10.10.10.10:18080/freeimage/dragon-framework-py_flask:1.0.0
```

## 3.5、上传镜像

```
docker push 10.10.10.10:18080/freeimage/dragon-framework-py_flask:1.0.0
```

## 3.6、下载镜像

```
docker pull 10.10.10.10:18080/freeimage/dragon-framework-py_flask:1.0.0
```

## 3.7、导出镜像

```
docker save -o dragon-framework-py_flask.1.0.0.tar.gz 10.10.10.10:18080/freeimage/dragon-framework-py_flask:1.0.0
```

## 3.8、导入镜像

```
docker load < dragon-framework-py_flask.1.0.0.tar.gz
```

