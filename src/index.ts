// -----------------------------------------------------------
// Trivial ConeSource example ; You can start building your
// own stuff from here
// -----------------------------------------------------------

import 'vtk.js/Sources/favicon';
import 'vtk.js/Sources/Rendering/Profiles/Geometry';

import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkRenderer from 'vtk.js/Sources/Rendering/Core/Renderer';
import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';
import vtkTexture from 'vtk.js/Sources/Rendering/OpenGL/Texture';
import vtkDataArray from 'vtk.js/Sources/Common/Core/DataArray';

const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
  background: [0, 0, 0],
});
const renderer: vtkRenderer = fullScreenRenderer.getRenderer();
const renderWindow: vtkRenderWindow = fullScreenRenderer.getRenderWindow();

const width = 1024;
const height = 1024;
const depth = 620;
const numComps = 1;

const data = new Uint16Array(numComps * width * height * depth);
data.fill(127);
const arr = vtkDataArray.newInstance({
  numberOfComponents: numComps,
  values: data,
});

const texture = vtkTexture.newInstance();


texture.setOpenGLRenderWindow(fullScreenRenderer.getApiSpecificRenderWindow());


// console.time('create3dfilterablefromraw');
texture.create3DFilterableFromRaw(width, height, depth, numComps, arr.getDataType(), arr.getData());
// console.timeEnd('create3dfilterablefromraw');



renderer.resetCamera();
renderWindow.render();

// -----------------------------------------------------------
// You can expose some variables in the windows object to be 
// able to interact with it in the browser console
// -----------------------------------------------------------

// @ts-ignore
window.renderer = renderer;
// @ts-ignore
window.renderWindow = renderWindow;