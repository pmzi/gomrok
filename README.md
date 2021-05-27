# jongun

`Jongun` is a security advisor for files/folders which are served! `Jongun` basically analyzes your files and folders and gives you security advices.

## Introduction

Generally, any content which is going to be served must be checked for some security vulnerabilities. For example, any files starting with `.` (e.g `.git` folder) should be removed on production and **should not be served**. This is basically what `jongun` does behind the scene and reports it back to you!

Best practice is to put it on your CI and use it to scan your folder which is going to be served. If there are any vulnerabilities found on your content, `jongun` will report it to you and the job will be failed.

## Security Checks

For now, `jongun` does three security checks:

1. Checks for **SensitiveFileExposure**; e.g `.env`
2. Checks for **SensitiveDataExposure**; e.g JWT tokens in the files
3. Checks for **SourceMapLeaks** for front-end apps

## Installation

```
$ npm i -g jongun
```

## Usage

```
# jongun -p ./path/to/be/served
```