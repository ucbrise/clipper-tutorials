# Clipper Tutorial

Welcome to Clipper Tutorial! To reproduce the environment, there are two approaches:
1. Launch an EC2 instance from our AMI (ami-0213a0d82c7061779). Once launched, the instance will have a jupyter lab environment running at port 8888. The password for jupyterlab is "clipper"

2. Clone the repo and install the following dependencies:
	- Docker
	- Python packages: 
	```
		matplotlib
		numpy
		pandas
		scipy
		scikit-learn
		pillow
		clipper_admin
		cloudpickle==0.5.3
		jupyterlab
		torch==0.4.0
		torchvision
		jinja2
	```
	- Start Nodejs server that writes pong games status to a file
		1. `cd $REPO/other/nodejs; make` will build the image
		2. `cd $REPO; make` will run the image


Please post any issue relating to the tutorial on the issue page. 