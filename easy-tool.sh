#!/bin/bash
echo "start build  code... "
root=" /opt/app/source/front"
codefolder=" $root/easy-tool"
gitpath="https://github.com/easyJustEasy/easy-tool.git"
cd $root
if [ ! -d $codefolder ]; then
    echo "processing... "
else
    rm -rf $codefolder
    echo "processing... "
fi
git clone $gitpath
cd $codefolder
echo "clone success... "
yarn config set registry https://registry.npm.taobao.org/
yarn && yarn build

echo "build success... "
