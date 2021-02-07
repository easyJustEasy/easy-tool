#!/bin/bash
echo "start build  code... "
root=" /opt/app/source/front"
codefolder=" $root/easy-tool"
ngpath=" /usr/local/nginx/html/easy-tool"
gitpath="https://github.com/easyJustEasy/easy-tool.git"
cd  $root
if [ ! -d  $codefolder  ];then
    git clone $gitpath
    cd  $codefolder
else
    cd  $codefolder
    git pull
fi
yarn config set registry https://registry.npm.taobao.org/
yarn && yarn build
if [ ! -d  $ngpath  ];then
    echo "will done ,pleash wait"
else
    rm -rf $ngpath
fi
cp -r  $codefolder/docs $ngpath
echo "build success... "
