#!/bin/bash
set -f
echo "$SSH_PRIVATE_KEY" > aws.pem
chmod 600 aws.pem
mkdir ~/.ssh
ssh-keyscan $DEPLOY_SERVER >> ~/.ssh/known_hosts

scp -i aws.pem target/* ubuntu@$DEPLOY_SERVER:/var/www/html/
