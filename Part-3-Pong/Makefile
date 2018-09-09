run:
	echo "" > out.csv
	docker run --rm -p 8080:8080 -v $(shell pwd)/out.csv:/out.csv -d clipper/strata-nodejs
