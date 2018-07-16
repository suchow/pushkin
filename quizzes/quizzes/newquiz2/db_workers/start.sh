#!/bin/bash
echo "newquiz2 db worker container loaded, waiting for rabbitmq"
while ! nc -z message-queue 5672; do sleep 3; done
echo "Rabbitmq loaded"
python -u worker.py
