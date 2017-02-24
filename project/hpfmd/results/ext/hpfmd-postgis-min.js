function emptyMarkers(){markerList1A.innerHTML=""}function getColor(e){return e>0?"#3355ee":"#333"}function getOpacity(e){return e>0?1:.6}function pipesStyle(e){return{color:getColor(e.properties.size_inches),weight:2.5,opacity:getOpacity(e.properties.size_inches),lineJoin:"miter"}}function getGeoJSON(){map.hasLayer(cartoDBPoints)&&map.removeLayer(cartoDBPoints),map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+sqlQuery,function(e){cartoDBPoints=L.geoJson(e,{pointToLayer:function(e,r){var t=L.marker(r,{icon:nullIcon});"Replace"==e.properties.recommendation?t.setIcon(redIcon):"Repairs"==e.properties.recommendation?t.setIcon(orangeIcon):"Maintenance"==e.properties.recommendation?t.setIcon(yellowIcon):"Do Nothing"==e.properties.recommendation&&t.setIcon(blueIcon);var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.cartodb_id=e.properties.cartodb_id,t.on("click",function(e){t.closePopup(),info.innerHTML=o}),t}}).addTo(map)})}function getPipes(){map.hasLayer(cartoDBLines)&&map.removeLayer(cartoDBLines),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+sqlQuery1,function(e){cartoDBLines=L.geoJson(e,{style:pipesStyle,onEachFeature:function(e,r){r.bindPopup(e.properties.cartodb_id+". "+e.properties.size_inches+'" '+e.properties.type),r.cartodb_id=e.properties.cartodb_id}}).addTo(map)})}function getFiling1A(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing1AQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList1A.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling3(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing3Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList3.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling22(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing22Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList22.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling23A(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing23AQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList23A.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling23B(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing23BQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList23B.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling24A(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing24AQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList24A.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling24B(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing24BQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList24B.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling24C(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing24CQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList24C.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling26A(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing26AQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList26A.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling26B(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing26BQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList26B.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling27(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing27Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList27.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling28A(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing28AQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList28A.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling28B(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing28BQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList28B.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling28C(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing28CQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList28C.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling29A(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing29AQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList29A.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling29B(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing29BQuery,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList29B.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling30(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing30Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList30.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling31(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing31Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList31.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling32(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing32Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList32.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function getFiling33(){map.hasLayer(filingPoints)&&map.removeLayer(filingPoints),emptyMarkers(),$.getJSON("https://"+cartoDBUsername+".cartodb.com/api/v2/sql?format=GeoJSON&q="+filing33Query,function(e){filingPoints=L.geoJson(e,{pointToLayer:function(e,r){return L.circleMarker(r,circleStyle)},onEachFeature:function(e,r){var t=markerList33.appendChild(document.createElement("li"));t.innerHTML=r.toGeoJSON().properties.cartodb_id+". "+r.toGeoJSON().properties.generation+" "+r.toGeoJSON().properties.type;var o="<div><h4>"+e.properties.cartodb_id+". "+e.properties.generation+" "+e.properties.type+"</h4><small>"+e.properties.latitude+", "+e.properties.longitude+"</small><br />Purpose: <b>"+e.properties.purpose+"</b><br />Sediment: <b>"+e.properties.sediment+"</b><br />Debris: <b>"+e.properties.debris+"</b><br />Condition: <b>"+e.properties.condition+"</b><br />Recommendation: <b>"+e.properties.recommendation+"</b><br />Notes: "+e.properties.notes+'<br /><a href="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/'+e.properties.photo+"."+e.properties.extension+'" target="blank"><img src="//s3-us-west-2.amazonaws.com/iconeng/hpfmd-img/thumbs/'+e.properties.photo+"."+e.properties.extension+'"></a></div>';return t.onclick=function(e){map.setView(r.getLatLng(),18),r.closePopup(),info.innerHTML=o},r.on("click",function(e){r.closePopup(),info.innerHTML=o}),r}}).addTo(map)})}function empty(){info.innerHTML="<div><h4>Click a marker</h4></div>"}L.mapbox.accessToken="pk.eyJ1IjoiZWJlbmRlbm5pcyIsImEiOiJ1M2tMMC0wIn0.HL9nr43JrA_mzhGVBI_B_Q";var info=document.getElementById("info"),markerList1A=document.getElementById("marker-list1A"),markerList3=document.getElementById("marker-list3"),markerList22=document.getElementById("marker-list22"),markerList23A=document.getElementById("marker-list23A"),markerList23B=document.getElementById("marker-list23B"),markerList24A=document.getElementById("marker-list24A"),markerList24B=document.getElementById("marker-list24B"),markerList24C=document.getElementById("marker-list24C"),markerList26A=document.getElementById("marker-list26A"),markerList26B=document.getElementById("marker-list26B"),markerList27=document.getElementById("marker-list27"),markerList28A=document.getElementById("marker-list28A"),markerList28B=document.getElementById("marker-list28B"),markerList28C=document.getElementById("marker-list28C"),markerList29A=document.getElementById("marker-list29A"),markerList29B=document.getElementById("marker-list29B"),markerList30=document.getElementById("marker-list30"),markerList31=document.getElementById("marker-list31"),markerList32=document.getElementById("marker-list32"),markerList33=document.getElementById("marker-list33"),map=L.mapbox.map("map",null,{attributionControl:!1}).setView([39.443,-104.73],14),layers={Satellite:L.mapbox.tileLayer("iconeng.ld19b8nf").setZIndex(1),Terrain:L.mapbox.tileLayer("iconeng.7c262e9b").setZIndex(2)};layers.Terrain.addTo(map),L.control.layers(layers).addTo(map);var cartoDBPoints=null,cartoDBLines=null,filingPoints=null,cartoDBUsername="ebendennis",sqlQuery="SELECT * FROM hpfmd_data_collector";sqlQuery1="SELECT * FROM hpfmd_pipes",filing1AQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '1A' AND ST_Intersects(r.the_geom, m.the_geom)",filing3Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '3' AND ST_Intersects(r.the_geom, m.the_geom)",filing22Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '22' AND ST_Intersects(r.the_geom, m.the_geom)",
filing23AQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '23A' AND ST_Intersects(r.the_geom, m.the_geom)",filing23BQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '23B' AND ST_Intersects(r.the_geom, m.the_geom)",filing24AQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '24A' AND ST_Intersects(r.the_geom, m.the_geom)",filing24BQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '24B' AND ST_Intersects(r.the_geom, m.the_geom)",filing24CQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '24C' AND ST_Intersects(r.the_geom, m.the_geom)",filing26AQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '26A' AND ST_Intersects(r.the_geom, m.the_geom)",filing26BQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '26B' AND ST_Intersects(r.the_geom, m.the_geom)",filing27Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '27' AND ST_Intersects(r.the_geom, m.the_geom)",filing28AQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '28A' AND ST_Intersects(r.the_geom, m.the_geom)",filing28BQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '28B' AND ST_Intersects(r.the_geom, m.the_geom)",filing28CQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '28C' AND ST_Intersects(r.the_geom, m.the_geom)",filing29AQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '29A' AND ST_Intersects(r.the_geom, m.the_geom)",filing29BQuery="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '29B' AND ST_Intersects(r.the_geom, m.the_geom)",filing30Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '30' AND ST_Intersects(r.the_geom, m.the_geom)",filing31Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '31' AND ST_Intersects(r.the_geom, m.the_geom)",filing32Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '32' AND ST_Intersects(r.the_geom, m.the_geom)",filing33Query="SELECT ST_Intersection(r.the_geom, m.the_geom) AS intersection_geom, r.* FROM hpfmd_data_collector AS r, hpfmd_filings AS m WHERE r.recommendation != 'Do Nothing' AND m.filing = '33' AND ST_Intersects(r.the_geom, m.the_geom)";var blueIcon=L.icon({iconUrl:"css/images/blue_marker.svg",iconSize:[12.5,17.5],iconAnchor:[5,17.5],popupAnchor:[0,-35]});greenIcon=L.icon({iconUrl:"css/images/green_marker.svg",iconSize:[25,35],iconAnchor:[10,35],popupAnchor:[0,-35]}),yellowIcon=L.icon({iconUrl:"css/images/yellow_marker.svg",iconSize:[25,35],iconAnchor:[10,35],popupAnchor:[0,-35]}),orangeIcon=L.icon({iconUrl:"css/images/orange_marker.svg",iconSize:[37.5,52.5],iconAnchor:[15,52.5],popupAnchor:[0,-52]}),redIcon=L.icon({iconUrl:"css/images/red_marker.svg",iconSize:[37.5,52.5],iconAnchor:[15,52.5],popupAnchor:[0,-52]}),nullIcon=L.icon({iconUrl:"css/images/gray_marker.svg",iconSize:[25,35],iconAnchor:[10,35],popupAnchor:[0,-35]});var circleStyle={radius:8,fillColor:"#556270",color:"#fff",weight:1,opacity:0,fillOpacity:0};$(document).ready(function(){getGeoJSON(),getPipes()}),map.on("click",empty),empty();var filings=L.mapbox.tileLayer("iconeng.HPFMD_Base").setZIndex(9).addTo(map),filingsLink=document.getElementById("filingsLayer");filingsLink.onclick=function(e){e.preventDefault(),e.stopPropagation(),map.hasLayer(filings)?(map.removeLayer(filings),this.className=""):(map.addLayer(filings),this.className="active")};var pointsLink=document.getElementById("pointsLayer");pointsLink.onclick=function(e){e.preventDefault(),e.stopPropagation(),map.hasLayer(cartoDBPoints)?(map.removeLayer(cartoDBPoints),this.className=""):(map.addLayer(cartoDBPoints),this.className="active")};var pipesLink=document.getElementById("pipesLayer");pipesLink.onclick=function(e){e.preventDefault(),e.stopPropagation(),map.hasLayer(cartoDBLines)?(map.removeLayer(cartoDBLines),this.className=""):(map.addLayer(cartoDBLines),this.className="active")};