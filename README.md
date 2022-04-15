## Template typescript application with custom VTK.js

order is important:
- Clone this repository
- run `npm install`
- cd into your local vtk.js folder
- run `npm link`
- cd back into this template
- run `npm link vtk.js`

Get started with `npm run start`
Changes in your local VTK.js folder will be reflected into your application.
Know issue: you have to re-run `npm run start` every time you update your VTK.js folder or the application won't take use your latest changes.
No solution found for now.

note: if later you decide to install another package it can break the symlink so you have to re-run `npm link vtk.js` and it will work fine again. (in theory)

if you want to get rid of typescript you can just set a highly permissive compiler configuration in `tsconfig.json`, please see the typescript documentation.