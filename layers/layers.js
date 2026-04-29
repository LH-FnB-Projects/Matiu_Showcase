ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([19465464.460703, -5050697.842155, 19466861.828846, -5049803.919477]);
var wms_layers = [];

var lyr_MatiuGEsatellite_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Matiu-GE-satellite<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MatiuGEsatellite_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [19465322.213979, -5051218.014806, 19466492.528474, -5049319.880760]
        })
    });
var format_Matiutrack_1 = new ol.format.GeoJSON();
var features_Matiutrack_1 = format_Matiutrack_1.readFeatures(json_Matiutrack_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matiutrack_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matiutrack_1.addFeatures(features_Matiutrack_1);
var lyr_Matiutrack_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matiutrack_1, 
                style: style_Matiutrack_1,
                popuplayertitle: 'Matiu-track',
                interactive: false,
                title: '<img src="styles/legend/Matiutrack_1.png" /> Matiu-track'
            });
var format_Surveyaug2023_2 = new ol.format.GeoJSON();
var features_Surveyaug2023_2 = format_Surveyaug2023_2.readFeatures(json_Surveyaug2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surveyaug2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surveyaug2023_2.addFeatures(features_Surveyaug2023_2);
var lyr_Surveyaug2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surveyaug2023_2, 
                style: style_Surveyaug2023_2,
                popuplayertitle: 'Survey-aug2023',
                interactive: true,
                title: '<img src="styles/legend/Surveyaug2023_2.png" /> Survey-aug2023'
            });
var format_Future_planting_site_3 = new ol.format.GeoJSON();
var features_Future_planting_site_3 = format_Future_planting_site_3.readFeatures(json_Future_planting_site_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Future_planting_site_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Future_planting_site_3.addFeatures(features_Future_planting_site_3);
var lyr_Future_planting_site_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Future_planting_site_3, 
                style: style_Future_planting_site_3,
                popuplayertitle: 'Future_planting_site',
                interactive: true,
                title: '<img src="styles/legend/Future_planting_site_3.png" /> Future_planting_site'
            });
var format_plantsite2025_4 = new ol.format.GeoJSON();
var features_plantsite2025_4 = format_plantsite2025_4.readFeatures(json_plantsite2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plantsite2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plantsite2025_4.addFeatures(features_plantsite2025_4);
var lyr_plantsite2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plantsite2025_4, 
                style: style_plantsite2025_4,
                popuplayertitle: 'plant-site-2025',
                interactive: true,
                title: '<img src="styles/legend/plantsite2025_4.png" /> plant-site-2025'
            });
var format_Showcase_5 = new ol.format.GeoJSON();
var features_Showcase_5 = format_Showcase_5.readFeatures(json_Showcase_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Showcase_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Showcase_5.addFeatures(features_Showcase_5);
var lyr_Showcase_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Showcase_5, 
                style: style_Showcase_5,
                popuplayertitle: 'Showcase',
                interactive: true,
                title: '<img src="styles/legend/Showcase_5.png" /> Showcase'
            });

lyr_MatiuGEsatellite_0.setVisible(true);lyr_Matiutrack_1.setVisible(true);lyr_Surveyaug2023_2.setVisible(true);lyr_Future_planting_site_3.setVisible(true);lyr_plantsite2025_4.setVisible(true);lyr_Showcase_5.setVisible(true);
var layersList = [lyr_MatiuGEsatellite_0,lyr_Matiutrack_1,lyr_Surveyaug2023_2,lyr_Future_planting_site_3,lyr_plantsite2025_4,lyr_Showcase_5];
lyr_Matiutrack_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Surveyaug2023_2.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Ground': 'Ground', 'Environment': 'Environment', 'Seed source': 'Seed source', 'Suitable plants': 'Suitable plants', 'Present plants': 'Present plants', 'Notes': 'Notes', 'Comment': 'Comment', 'other': 'other', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Site': 'Site', });
lyr_Future_planting_site_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_plantsite2025_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Showcase_5.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Plants': 'Plants', 'Notes': 'Notes', 'Photo': 'Photo', 'Photo-2': 'Photo-2', 'Date 2': 'Date 2', 'Photo 1a': 'Photo 1a', 'Plants 2': 'Plants 2', 'Notes 2': 'Notes 2', 'Photo 2a': 'Photo 2a', 'Point': 'Point', });
lyr_Matiutrack_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Surveyaug2023_2.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Ground': 'TextEdit', 'Environment': 'TextEdit', 'Seed source': 'TextEdit', 'Suitable plants': 'TextEdit', 'Present plants': 'TextEdit', 'Notes': 'TextEdit', 'Comment': 'TextEdit', 'other': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Site': 'TextEdit', });
lyr_Future_planting_site_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_plantsite2025_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Showcase_5.set('fieldImages', {'fid': 'TextEdit', 'Date': 'DateTime', 'Plants': 'TextEdit', 'Notes': 'TextEdit', 'Photo': 'ExternalResource', 'Photo-2': 'ExternalResource', 'Date 2': 'TextEdit', 'Photo 1a': 'ExternalResource', 'Plants 2': 'TextEdit', 'Notes 2': 'TextEdit', 'Photo 2a': 'ExternalResource', 'Point': 'Range', });
lyr_Matiutrack_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'inline label - always visible', 'link1_text': 'inline label - always visible', 'link1_type': 'inline label - always visible', 'link2_href': 'inline label - always visible', 'link2_text': 'header label - always visible', 'link2_type': 'inline label - visible with data', 'number': 'inline label - always visible', 'type': 'no label', });
lyr_Surveyaug2023_2.set('fieldLabels', {'fid': 'hidden field', 'Date': 'hidden field', 'Ground': 'hidden field', 'Environment': 'hidden field', 'Seed source': 'hidden field', 'Suitable plants': 'hidden field', 'Present plants': 'hidden field', 'Notes': 'hidden field', 'Comment': 'hidden field', 'other': 'hidden field', 'Photo': 'inline label - always visible', 'Photo-2': 'inline label - always visible', 'Site': 'no label', });
lyr_Future_planting_site_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'header label - always visible', 'link1_text': 'inline label - always visible', 'link1_type': 'inline label - always visible', 'link2_href': 'hidden field', 'link2_text': 'no label', 'link2_type': 'hidden field', 'number': 'hidden field', 'type': 'hidden field', });
lyr_plantsite2025_4.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'hidden field', 'desc': 'hidden field', 'src': 'hidden field', 'link1_href': 'hidden field', 'link1_text': 'hidden field', 'link1_type': 'hidden field', 'link2_href': 'hidden field', 'link2_text': 'hidden field', 'link2_type': 'hidden field', 'number': 'hidden field', 'type': 'hidden field', });
lyr_Showcase_5.set('fieldLabels', {'fid': 'hidden field', 'Date': 'hidden field', 'Plants': 'hidden field', 'Notes': 'hidden field', 'Photo': 'inline label - always visible', 'Photo-2': 'hidden field', 'Date 2': 'hidden field', 'Photo 1a': 'hidden field', 'Plants 2': 'hidden field', 'Notes 2': 'hidden field', 'Photo 2a': 'hidden field', 'Point': 'hidden field', });
lyr_Showcase_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});