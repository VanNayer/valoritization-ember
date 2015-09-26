#! /bin/bash

ember build --environment=production;
rm -rf ../valoritization-back/public/*
cp -R dist/* ../valoritization-back/public/

echo 'Youpi'
