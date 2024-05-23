# ICT.DT.WEBD.RCS.19.t1.2021.2 (herkansing) - Dilemmamanager

# Run instructions

Install git first: https://git-scm.com/downloads

```
$ git clone https://gitlab.com/ekkebus/ict.dt.webd.rcs.19.t2.2021.git
```

Installed NPM packages
Je hebt een installatie van node.js nodig om NPM te kunnen runnen (https://nodejs.org/en/)
```
npm install --save-dev gulp-cli gulp gulp-concat gulp-order browser-sync gulp-jsdoc3
```

# Prepare student edition
## Remove the history from repro 
```
rm -rf .git
```

## recreate the repos from the current content only

```
git init
git add .
git commit -m "Deze versie is voor de studenten"
```
