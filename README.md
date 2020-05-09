# rhymer [![npm version](https://badge.fury.io/js/rhymer.svg)](https://badge.fury.io/js/rhymer) [![codecov](https://codecov.io/gh/pelhage/rhymer/branch/master/graph/badge.svg)](https://codecov.io/gh/pelhage/rhymer) [![circleci](https://circleci.com/gh/pelhage/rhymer.svg?style=svg)](https://app.circleci.com/jobs/github/pelhage/rhymer/)


CLI tool to find rhymes using DataMuse API allowing developers to find words that rhyme from the terminal. Basically rhymezone.com but as a CLI

## Getting started
Install
```bash
npm install -g rhymer
```
```console
# -r or --rhyme 
$ rhymer -r hello

go blow show know snow so throw flow though pro
quo grow row sew mow low o woe crow no yoe toe hoe
glow owe joe co dough slow beau doe ho foe glo 
....
```



## Todo

- Improve feature set of CLI
  - near rhymes
  - thesaurus
  - synonyms
- Work on roadmap
  - Publishing the most recent package
  - Creating a web app
    - Having some real-time web-socket fun could be interesting
    - Creating a graphql API for an internal project which gets opened up as a public API later
  - Creating a desktop APP
  - Creating a mobile app?

### Old Todos

- ~Simplify code and reduce number of files~
- ~Add mocks for API client~
- ~Publish as NPM package~
- ~Set up test checks on Github~
- ~Add Prettier and/or StandardJS and/or ESLint for code formatting~
- ~Allow a `verbose` flag that will further categorize words by syllable~
