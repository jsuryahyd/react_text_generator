
## [Sample Text Generator - App](https://react-text-generator.firebaseapp.com/)
### My Practice to make and deploy a react app to firebase hosting

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Inspired by this video - [Build & Deploy A React JS Text Generator App](https://youtu.be/yU5DYccb77A) by traversy media
## Dependencies
- [axios](https://github.com/axios/axios)
  - ```npm install axios --save```
- [skeleton-css](http://getskeleton.com/)

## External apis
- [hipster-jesus](http://hipsterjesus.com/)
- [bacon-ipsum](https://baconipsum.com/)
## css
- [skeleton css](http://getskeleton.com/)

# Deployment
install firebase globally(also make sure ``` c:/Users/{name}/Appdata/Roaming/npm ``` is set as path variable)
``` npm install firebase -g```
``` npm install firebase-tools -g```
Goto your server folder,
``` firebase init```
select hosting
``` firebase deploy```

# Todo
 it is still buggy -
 - doesnot give number of sentences asked( only one sentence is given)
 - json is also ouput as text.
 - also, implementation with plain xhr doesnot give paras - gives only sentences.
