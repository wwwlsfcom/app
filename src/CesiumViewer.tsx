const Cesium = require('cesium/Cesium');

const viewer = new Cesium.Viewer('root');


// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
    destination :  Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-15.0),
    }
});