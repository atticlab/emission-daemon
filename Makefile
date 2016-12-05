ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent
CONTAINERS = $(shell docker ps -a -q)
VOLUMES = $(shell docker volume ls |awk 'NR>1 {print $2}')
list:
	sh -c "echo; $(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | grep -v 'Makefile'| sort"

#############################
# Docker machine states
#############################

stop:
	docker stop smartmoney-emission-node
	docker rm smartmoney-emission-node

build:
	docker build -t smartmoney/emission/node  .
	docker run --restart=always  -it -p 5050:5050 --name smartmoney-emission-node smartmoney/emission/node

