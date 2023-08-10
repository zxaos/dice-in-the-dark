release: clean release-dir 
	cp module.json release/
	zip --recurse-paths ./release/module.zip module.json readme.md license.txt templates scripts/ styles/ packs/ language/ lang/ -x "*.DS_Store"

release-dir:
	mkdir -p release

clean:
	rm -rf release

