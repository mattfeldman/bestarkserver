#!/usr/bin/env bash
bower install
node steam-data.js
node build.js publish
cp CNAME dist/
./deploy.sh