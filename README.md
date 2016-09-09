# CPSC 310 Starter

This is a starter for CPSC310. Using it will help you get started with many of the tools we will use this term. While this is a great resource for getting your tools and environment setup on your computer, you will need to start again (although it will take under 5 minutes the second time) once the project is released. We will go over this in the first lecture, but if you are concerned you can follow the steps below in advance if you wish.

### Configure Environment

To start using this project you need to get your computer configured so you can build and execute the code. To do this, follow these steps; the specifics of each step (especially the first two) will vary based on which operating system your computer has:

1. Install git (you should be able to execute ```git -v``` on the command line).

1. Install Node, which will also install NPM (you should be able to execute ```node -v``` and ```npm -v``` the command line).

1. Check out the project: ```git clone https://github.com/rtholmes/cpsc310starter.git```

### Prepare project

Once your project is configured you need to further prepare the project's tooling and dependencies. In the ```cpsc310starter``` folder:

1. ```npm run clean```

1. ```npm run configure```

1. ```npm run build```

### Run unit tests

The sample project ships with some automated unit tests. These commands will execute the suites:
 
* Test: ```npm run test``` (or ```npm test```)
* Test coverage: ```npm run cover``` HTML reports: ```./coverage/lcov-report/index.html```

You can also run the tests as a Mocha target inside your favourite IDE (WebStorm and VSCode both work well and are free for academic use).

### Start the server (for use with UI or curl)

* ```npm run start``` (or ```npm start```)

### Developing the system

If you are developing in Typescript you will have to re-compile the Typescript code. This can be done with ```npm run build``` to build the system and get it ready to execute. New unit tests can be written and added to ```/test```; as long as the tests end in ```Spec.ts``` they will be executed automatically when you run ```npm run test```.

### Running and Testing in the IDE

While these instructions are for WebStorm, other IDEs (e.g., VSCode, Atom, etc.) and editors (e.g., Sublime) should be similar, or will at least be compatible with the command line options described above.

To run or test the system in WebStorm you will need to configure run targets. To run the system go to the ```Run->Edit Configurations``` and tap on the ```+``` and then ```Node.js```. Point the 'JavaScript file' argument to ```src/App.js```. To run the system tests, go to the ```Run->Edit Configurations``` and tap on the ```+``` and then ```Mocha```. Point the 'Test Directory' file argument to ```test/```.


