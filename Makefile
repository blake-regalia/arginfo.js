.PHONY: all index test

all: index test

index:
	node src/generate-index.js > index.js

test:
	node src/generate-test.js > test/test.js