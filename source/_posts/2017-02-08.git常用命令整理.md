---
title: git常用命令整理
date: 2017-02-08 10:49:42
categories: [git]
tags: [git,常用命令]
---

```
//将文件加入版本库(修改的文件都需要做这步)
git add .

//提交带注释的源码
git commit -m "这里放注释"

//查看源码的状态
git status

//如果上传到github的文件太大了,需要设置上限值,譬如设置为500M
git config --global http.postBuffer 524288000
```
