// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:3857",wgs84Center:{lat:-33.9186982458,lon:23.040128695},proj:"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs",title:"index",baseExtent:[2503698.51262,-4053719.77186,2625932.27565,-3982061.0367],rotation:0,zShift:0.0,width:100.0,zExaggeration:3.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"DEM_Knysna_EA"}));
