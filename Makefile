.DEFAULT_GOAL := all

.PHONY: all
all: deps
	echo "$@"

.PHONY: clean-deps
clean-deps: clean-deps-client

.PHONY: clean-deps-client
clean-deps-client:
	echo "$@"
	rm -rf node_modules

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

