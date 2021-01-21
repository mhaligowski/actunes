NPM=npm

run:
	$(NPM) start

clean:
	-rm -rf build

build:
	$(NPM) run $@