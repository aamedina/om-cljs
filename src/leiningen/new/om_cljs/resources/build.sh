#!/usr/bin/sh

grunt less:CompileCore
mv dist/css/bootstrap.* ../../public/css
