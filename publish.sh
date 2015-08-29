#!/usr/bin/env bash
bower install
hugo
cp CNAME dist/
./deploy.sh