.DEFAULT_GOAL := all

.PHONY: all
all:
	echo "$@"

.PHONY: deps
deps: deps-client

.PHONY: deps-client
deps-client:
	echo "$@"
	yarn

.PHONY: dev
dev:
	echo "$@"
	yarn dev

