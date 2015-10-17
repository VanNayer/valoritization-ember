#! /bin/bash

ember build --environment=production;
rm -rf ../valoritization-back/public/*
cp -R dist/* ../valoritization-back/public/
cp -R dist/index.html ../valoritization-back/app/views/application/index.html.erb

echo 'Youpi'
