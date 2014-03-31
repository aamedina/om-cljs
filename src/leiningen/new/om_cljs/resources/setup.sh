#!/usr/bin/sh

bower install bootstrap
cd components/bootstrap
npm install
grunt less:CompileCore
mv dist/css/bootstrap.* ../../public/css
cp -R fonts ../../public 
