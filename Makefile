# This Makefile uses .ONESHELL option supported by Make 3.82
ifeq ($(filter oneshell,$(.FEATURES)),)
$(error error: Your version of make ($(shell make -v|head -1|cut -f 3 -d ' ')) does not support .ONESHELL)
endif

LANG := en_US.UTF-8
SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c # run '/bin/bash ... -c /bin/cmd'
.ONESHELL:
.DELETE_ON_ERROR:
.EXPORT_ALL_VARIABLES:
.DEFAULT_GOAL := all

node_version = $(shell cat .nvmrc)
marketplace_address = 0x2b3f2887c697b3f4f8d9f818c95482e1a3a759a5

define npm
	@$(eval npm_args=$(1))
	bash -l -c "source $(HOME)/.nvm/nvm.sh && nvm exec $(node_version) npm $(npm_args)"
endef

define graph
	@$(eval graph_args=$(1))
	bash -l -c "source $(HOME)/.nvm/nvm.sh && nvm exec $(node_version) graph $(graph_args)"
endef

.PHONY: graph-init
graph-init:
	$(call graph, init --from-contract $(marketplace_address) --network mainnet streamr-dev/streamr-marketplace thegraph.com-marketplace)

.PHONY: clean
clean:
	rm -rf build generated

.PHONY: graph-codegen
graph-codegen:
	$(call npm, run codegen)

.PHONY: graph-deploy
graph-deploy: graph-codegen
	$(call npm, run deploy)

.PHONY: graph-create-local
graph-create-local:
	$(call npm, run create-local)

.PHONY: graph-remove-local
graph-remove-local:
	$(call npm, run remove-local)

.PHONY: graph-deploy-local
graph-deploy-local:
	$(call npm, run deploy-local)
