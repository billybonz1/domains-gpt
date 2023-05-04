.PHONY: help up down restart install tail-logs jumpin redis test migrate

.DEFAULT_GOAL := help

docker_file=docker-compose.yml

APP_CONTAINER=php
NGINX_CONTAINER=nginx

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
# --- [ Application ] -------------------------------------------------------------------------------------------------

up: ## Start all containers (in background) for development
	docker-compose -f ${docker_file} up -d --build

down: ## Stop all started for development containers
	docker-compose -f ${docker_file} down -v --remove-orphans

restart: ## Restart all started for development containers
	docker-compose -f ${docker_file} restart

install: ## Install application dependencies
	docker-compose -f ${docker_file} run --user 1000:1000 ${APP_CONTAINER} composer install

migrate: ## Run migrations
	docker-compose -f ${docker_file} run --user 1000:1000 ${APP_CONTAINER} php artisan migrate

tail-logs: ## Display all logs from containers
	docker-compose -f ${docker_file} logs -f ${APP_CONTAINER}

jumpin: ## Start shell into application container
	docker-compose -f ${docker_file} exec --user root:root ${APP_CONTAINER} /bin/bash

redis: ## Redis commands
	docker-compose exec redis redis-cli

test: ## Test application
	docker-compose -f ${docker_file} exec ${APP_CONTAINER} php vendor/bin/phpunit
