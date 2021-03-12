NPM=npm

run:
	$(NPM) start

clean:
	-rm -rf build

build:
	PUBLIC_URL=https://actunes.studio/ $(NPM) run $@

build.embedded:
	PUBLIC_URL=https://actunes.studio/ $(NPM) run embedded