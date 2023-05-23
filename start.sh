#!/bin/bash

# kill any stepper.py or trigger.py processes
sudo pkill -9 python3

# kill previous acquisition processes
for i in $(ps aux | grep acquire | awk '{print $2}'); do
	sudo kill -9 $i;
done

sleep 1

cd public/images

# start acquisition loop
../../bin/acquire.sh &

cd -

# start web server
node .

