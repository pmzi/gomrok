# gomrok

`gomrok` is a security advisor for files/folders which are served! `gomrok` basically analyzes your files and folders and gives you security advices.

## Introduction

Generally, any content which is going to be served must be checked for some security vulnerabilities. For example, any files starting with `.` (e.g `.git` folder) should be removed on production and **should not be served**. This is basically what `gomrok` does behind the scene and reports it back to you!

Best practice is to put it on your CI and use it to scan your folder which is going to be served. If there are any vulnerabilities found on your content, `gomrok` will report it to you and the job will be failed.

## Security Checks

For now, `gomrok` does three security checks:

1. Checks for **SensitiveFileExposure**; e.g `.env`
2. Checks for **SensitiveDataExposure**; e.g JWT tokens in the files
3. Checks for **SourceMapLeaks** for front-end apps

## Installation

```
$ npm i -g gomrok
```

## Usage

```
$ gomrok -p ./path/to/be/served
```

Example output:

![Output example](https://user-images.githubusercontent.com/11475858/119897526-c600d200-bf55-11eb-9b9a-6acb6ecb5c79.png)