#!/bin/bash

# Starts the dev server and saves the PID
npm run run-dev-server-mock &
P1=$!

# Starts the electron app and saves the PID
npm run start-dev-mock &
P2=$!

# We echo the PIDs so we can have a reference
echo 'Process ids: '
echo $P1
echo $P2
echo ' '

wait $P1 $P2