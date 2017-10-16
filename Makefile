ifeq ($(origin SOURCE_DIR),undefined)
SOURCE_DIR=./source
endif #($(origin SOURCE_DIR),undefined)
ifeq ($(VERBOSE),1)
$(info SOURCE_DIR:$(SOURCE_DIR))
endif #($(VERBOSE),1)

ifeq ($(origin SOURCE),undefined)
SOURCE=$(wildcard $(SOURCE_DIR)/*.js
endif #($(origin SOURCE),undefined)
ifeq ($(VERBOSE),1)
$(info SOURCE:$(SOURCE))
endif #($(VERBOSE),1)

ifeq ($(origin MAIN),undefined)
MAIN=$(SOURCE_DIR)/main.js
endif #($(origin MAIN),undefined)
ifeq ($(VERBOSE),1)
$(info MAIN:$(MAIN))
endif #($(VERBOSE),1)

run: $(MAIN)
	node $^
