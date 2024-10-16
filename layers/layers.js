var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bangunan_Clip_1 = new ol.format.GeoJSON();
var features_Bangunan_Clip_1 = format_Bangunan_Clip_1.readFeatures(json_Bangunan_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Clip_1.addFeatures(features_Bangunan_Clip_1);
var lyr_Bangunan_Clip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Clip_1, 
                style: style_Bangunan_Clip_1,
                popuplayertitle: "Bangunan_Clip",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Clip_1.png" /> Bangunan_Clip'
            });
var format_Batas_Desa_Clip_2 = new ol.format.GeoJSON();
var features_Batas_Desa_Clip_2 = format_Batas_Desa_Clip_2.readFeatures(json_Batas_Desa_Clip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_Clip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_Clip_2.addFeatures(features_Batas_Desa_Clip_2);
var lyr_Batas_Desa_Clip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Desa_Clip_2, 
                style: style_Batas_Desa_Clip_2,
                popuplayertitle: "Batas_Desa_Clip",
                interactive: true,
                title: '<img src="styles/legend/Batas_Desa_Clip_2.png" /> Batas_Desa_Clip'
            });
var format_Danau_Clip_3 = new ol.format.GeoJSON();
var features_Danau_Clip_3 = format_Danau_Clip_3.readFeatures(json_Danau_Clip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danau_Clip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danau_Clip_3.addFeatures(features_Danau_Clip_3);
var lyr_Danau_Clip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Danau_Clip_3, 
                style: style_Danau_Clip_3,
                popuplayertitle: "Danau_Clip",
                interactive: true,
                title: '<img src="styles/legend/Danau_Clip_3.png" /> Danau_Clip'
            });
var format_Desa_Clip_4 = new ol.format.GeoJSON();
var features_Desa_Clip_4 = format_Desa_Clip_4.readFeatures(json_Desa_Clip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Clip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Clip_4.addFeatures(features_Desa_Clip_4);
var lyr_Desa_Clip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Clip_4, 
                style: style_Desa_Clip_4,
                popuplayertitle: "Desa_Clip",
                interactive: true,
                title: '<img src="styles/legend/Desa_Clip_4.png" /> Desa_Clip'
            });
var format_Desa_Dissolve_5 = new ol.format.GeoJSON();
var features_Desa_Dissolve_5 = format_Desa_Dissolve_5.readFeatures(json_Desa_Dissolve_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Dissolve_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Dissolve_5.addFeatures(features_Desa_Dissolve_5);
var lyr_Desa_Dissolve_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Dissolve_5, 
                style: style_Desa_Dissolve_5,
                popuplayertitle: "Desa_Dissolve",
                interactive: true,
                title: '<img src="styles/legend/Desa_Dissolve_5.png" /> Desa_Dissolve'
            });
var format_Jalan_Clip_6 = new ol.format.GeoJSON();
var features_Jalan_Clip_6 = format_Jalan_Clip_6.readFeatures(json_Jalan_Clip_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Clip_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Clip_6.addFeatures(features_Jalan_Clip_6);
var lyr_Jalan_Clip_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Clip_6, 
                style: style_Jalan_Clip_6,
                popuplayertitle: "Jalan_Clip",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Clip_6.png" /> Jalan_Clip'
            });
var format_Kebun_Clip_7 = new ol.format.GeoJSON();
var features_Kebun_Clip_7 = format_Kebun_Clip_7.readFeatures(json_Kebun_Clip_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_Clip_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_Clip_7.addFeatures(features_Kebun_Clip_7);
var lyr_Kebun_Clip_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_Clip_7, 
                style: style_Kebun_Clip_7,
                popuplayertitle: "Kebun_Clip",
                interactive: true,
                title: '<img src="styles/legend/Kebun_Clip_7.png" /> Kebun_Clip'
            });
var format_Ladang_Clip_8 = new ol.format.GeoJSON();
var features_Ladang_Clip_8 = format_Ladang_Clip_8.readFeatures(json_Ladang_Clip_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladang_Clip_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladang_Clip_8.addFeatures(features_Ladang_Clip_8);
var lyr_Ladang_Clip_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladang_Clip_8, 
                style: style_Ladang_Clip_8,
                popuplayertitle: "Ladang_Clip",
                interactive: true,
                title: '<img src="styles/legend/Ladang_Clip_8.png" /> Ladang_Clip'
            });
var format_Pemukiman_Clip_9 = new ol.format.GeoJSON();
var features_Pemukiman_Clip_9 = format_Pemukiman_Clip_9.readFeatures(json_Pemukiman_Clip_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Clip_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Clip_9.addFeatures(features_Pemukiman_Clip_9);
var lyr_Pemukiman_Clip_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_Clip_9, 
                style: style_Pemukiman_Clip_9,
                popuplayertitle: "Pemukiman_Clip",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_Clip_9.png" /> Pemukiman_Clip'
            });
var format_Sawah_Clip1_10 = new ol.format.GeoJSON();
var features_Sawah_Clip1_10 = format_Sawah_Clip1_10.readFeatures(json_Sawah_Clip1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_Clip1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_Clip1_10.addFeatures(features_Sawah_Clip1_10);
var lyr_Sawah_Clip1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_Clip1_10, 
                style: style_Sawah_Clip1_10,
                popuplayertitle: "Sawah_Clip1",
                interactive: true,
                title: '<img src="styles/legend/Sawah_Clip1_10.png" /> Sawah_Clip1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bangunan_Clip_1.setVisible(true);lyr_Batas_Desa_Clip_2.setVisible(true);lyr_Danau_Clip_3.setVisible(true);lyr_Desa_Clip_4.setVisible(true);lyr_Desa_Dissolve_5.setVisible(true);lyr_Jalan_Clip_6.setVisible(true);lyr_Kebun_Clip_7.setVisible(true);lyr_Ladang_Clip_8.setVisible(true);lyr_Pemukiman_Clip_9.setVisible(true);lyr_Sawah_Clip1_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bangunan_Clip_1,lyr_Batas_Desa_Clip_2,lyr_Danau_Clip_3,lyr_Desa_Clip_4,lyr_Desa_Dissolve_5,lyr_Jalan_Clip_6,lyr_Kebun_Clip_7,lyr_Ladang_Clip_8,lyr_Pemukiman_Clip_9,lyr_Sawah_Clip1_10];
lyr_Bangunan_Clip_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Batas_Desa_Clip_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Danau_Clip_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Desa_Clip_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Desa_Dissolve_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_Clip_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Kebun_Clip_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Ladang_Clip_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pemukiman_Clip_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sawah_Clip1_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Bangunan_Clip_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Batas_Desa_Clip_2.set('fieldImages', {'OBJECTID': '', 'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', });
lyr_Danau_Clip_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Desa_Clip_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', });
lyr_Desa_Dissolve_5.set('fieldImages', {'OBJECTID': '', 'WADMKC': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Jalan_Clip_6.set('fieldImages', {'OBJECTID': '', 'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', });
lyr_Kebun_Clip_7.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Ladang_Clip_8.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Pemukiman_Clip_9.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Sawah_Clip1_10.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Bangunan_Clip_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Batas_Desa_Clip_2.set('fieldLabels', {'OBJECTID': 'no label', 'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', });
lyr_Danau_Clip_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Desa_Clip_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', });
lyr_Desa_Dissolve_5.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_Clip_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', });
lyr_Kebun_Clip_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Ladang_Clip_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pemukiman_Clip_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sawah_Clip1_10.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sawah_Clip1_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});