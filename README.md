# Docker example for Angular4 running on Nginx


## 1. Creation of the angular4 application through command line
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

The command used for that is:

```sh
sudo npm install -g @angular/cli
ng new angular4-on-nginx-with-docker
```

The installed npm packages are:

```sh
npm ls --depth=0
# angular4-on-nginx-with-docker@0.0.0 /home/amine/docker-project/angular4-on-nginx-with-docker/nginx/frontend
# ├── @angular/animations@4.3.1
# ├── @angular/cli@1.2.3
# ├── @angular/common@4.3.1
# ├── @angular/compiler@4.3.1
# ├── @angular/compiler-cli@4.3.1
# ├── @angular/core@4.3.1
# ├── @angular/forms@4.3.1
# ├── @angular/http@4.3.1
# ├── @angular/language-service@4.3.1
# ├── @angular/platform-browser@4.3.1
# ├── @angular/platform-browser-dynamic@4.3.1
# ├── @angular/router@4.3.1
# ├── @types/jasmine@2.5.53
# ├── @types/jasminewd2@2.0.2
# ├── @types/node@6.0.85
# ├── codelyzer@3.0.1
# ├── core-js@2.4.1
# ├── jasmine-core@2.6.4
# ├── jasmine-spec-reporter@4.1.1
# ├── karma@1.7.0
# ├── karma-chrome-launcher@2.1.1
# ├── karma-cli@1.0.1
# ├── karma-coverage-istanbul-reporter@1.3.0
# ├── karma-jasmine@1.1.0
# ├── karma-jasmine-html-reporter@0.2.2
# ├── protractor@5.1.2
# ├── rxjs@5.4.2
# ├── ts-node@3.0.6
# ├── tslint@5.3.2
# ├── typescript@2.3.4
# └── zone.js@0.8.14
```

The angular application is working correctly through `npm start`

## 2. Compiling the angular4 application

```sh
ng build --prod
```

Probably, the compilation will not go as it should be. In this case, disable the AOT as follows:

```sh
ng build --prod --aot=false
```

## 3. Building the image and running the container

```sh
docker-compose up -d --build
```

## 4. Identification of the IP address of the container

```sh
docker inspect angular4onnginxwithdocker_nginx_1 | grep IPA
            "SecondaryIPAddresses": null,
            "IPAddress": "",
                    "IPAMConfig": null,
                    "IPAddress": "172.18.0.2",
```

Open your browser on [172.18.0.2](http://172.18.0.2/)
