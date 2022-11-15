// 1.How to compare two JSON have the same properties without order?
//var obj1 = { name: "Person 1", age: 5 };
//var obj2 = { age: 5, name: "Person 1" };

//Declare two variables

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

//Import lodash script link in html and console the two variables with _.isEqual
console.log(_.isEqual(obj1, obj2));

//OUTPUT: true;

//2.Use the rest countries" API URL-> https://restcountries.eu/rest/v2/all and display all the country flags in the console

//Initialize http request
let xhr = new XMLHttpRequest();

//Open a request and pass url to open methods

xhr.open("GET", "https://restcountries.com/v2/all");

//Process the request on server side and retrive the data

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response);
    console.log(data);

    for (let i = 0; i <= data.length; i++) {
      let place = data[i];
      console.log(`${place.flag}`);
    }
  }
};
//Send request to server
xhr.send();

/*OUTPUT:

https://flagcdn.com/ax.svg
script.js:31 https://flagcdn.com/al.svg
script.js:31 https://flagcdn.com/dz.svg
script.js:31 https://flagcdn.com/as.svg
script.js:31 https://flagcdn.com/ad.svg
script.js:31 https://flagcdn.com/ao.svg
script.js:31 https://flagcdn.com/ai.svg
script.js:31 https://flagcdn.com/aq.svg
script.js:31 https://flagcdn.com/ag.svg
script.js:31 https://flagcdn.com/ar.svg
script.js:31 https://flagcdn.com/am.svg
script.js:31 https://flagcdn.com/aw.svg
script.js:31 https://flagcdn.com/au.svg
script.js:31 https://flagcdn.com/at.svg
script.js:31 https://flagcdn.com/az.svg
script.js:31 https://flagcdn.com/bs.svg
script.js:31 https://flagcdn.com/bh.svg
script.js:31 https://flagcdn.com/bd.svg
script.js:31 https://flagcdn.com/bb.svg
script.js:31 https://flagcdn.com/by.svg
script.js:31 https://flagcdn.com/be.svg
script.js:31 https://flagcdn.com/bz.svg
script.js:31 https://flagcdn.com/bj.svg
script.js:31 https://flagcdn.com/bm.svg
script.js:31 https://flagcdn.com/bt.svg
script.js:31 https://flagcdn.com/bo.svg
script.js:31 https://flagcdn.com/bq.svg
script.js:31 https://flagcdn.com/ba.svg
script.js:31 https://flagcdn.com/bw.svg
script.js:31 https://flagcdn.com/bv.svg
script.js:31 https://flagcdn.com/br.svg
script.js:31 https://flagcdn.com/io.svg
script.js:31 https://flagcdn.com/um.svg
script.js:31 https://flagcdn.com/vg.svg
script.js:31 https://flagcdn.com/vi.svg
script.js:31 https://flagcdn.com/bn.svg
script.js:31 https://flagcdn.com/bg.svg
script.js:31 https://flagcdn.com/bf.svg
script.js:31 https://flagcdn.com/bi.svg
script.js:31 https://flagcdn.com/kh.svg
script.js:31 https://flagcdn.com/cm.svg
script.js:31 https://flagcdn.com/ca.svg
script.js:31 https://flagcdn.com/cv.svg
script.js:31 https://flagcdn.com/ky.svg
script.js:31 https://flagcdn.com/cf.svg
script.js:31 https://flagcdn.com/td.svg
script.js:31 https://flagcdn.com/cl.svg
script.js:31 https://flagcdn.com/cn.svg
script.js:31 https://flagcdn.com/cx.svg
script.js:31 https://flagcdn.com/cc.svg
script.js:31 https://flagcdn.com/co.svg
script.js:31 https://flagcdn.com/km.svg
script.js:31 https://flagcdn.com/cg.svg
script.js:31 https://flagcdn.com/cd.svg
script.js:31 https://flagcdn.com/ck.svg
script.js:31 https://flagcdn.com/cr.svg
script.js:31 https://flagcdn.com/hr.svg
script.js:31 https://flagcdn.com/cu.svg
script.js:31 https://flagcdn.com/cw.svg
script.js:31 https://flagcdn.com/cy.svg
script.js:31 https://flagcdn.com/cz.svg
script.js:31 https://flagcdn.com/dk.svg
script.js:31 https://flagcdn.com/dj.svg
script.js:31 https://flagcdn.com/dm.svg
script.js:31 https://flagcdn.com/do.svg
script.js:31 https://flagcdn.com/ec.svg
script.js:31 https://flagcdn.com/eg.svg
script.js:31 https://flagcdn.com/sv.svg
script.js:31 https://flagcdn.com/gq.svg
script.js:31 https://flagcdn.com/er.svg
script.js:31 https://flagcdn.com/ee.svg
script.js:31 https://flagcdn.com/et.svg
script.js:31 https://flagcdn.com/fk.svg
script.js:31 https://flagcdn.com/fo.svg
script.js:31 https://flagcdn.com/fj.svg
script.js:31 https://flagcdn.com/fi.svg
script.js:31 https://flagcdn.com/fr.svg
script.js:31 https://flagcdn.com/gf.svg
script.js:31 https://flagcdn.com/pf.svg
script.js:31 https://flagcdn.com/tf.svg
script.js:31 https://flagcdn.com/ga.svg
script.js:31 https://flagcdn.com/gm.svg
script.js:31 https://flagcdn.com/ge.svg
script.js:31 https://flagcdn.com/de.svg
script.js:31 https://flagcdn.com/gh.svg
script.js:31 https://flagcdn.com/gi.svg
script.js:31 https://flagcdn.com/gr.svg
script.js:31 https://flagcdn.com/gl.svg
script.js:31 https://flagcdn.com/gd.svg
script.js:31 https://flagcdn.com/gp.svg
script.js:31 https://flagcdn.com/gu.svg
script.js:31 https://flagcdn.com/gt.svg
script.js:31 https://flagcdn.com/gg.svg
script.js:31 https://flagcdn.com/gn.svg
script.js:31 https://flagcdn.com/gw.svg
script.js:31 https://flagcdn.com/gy.svg
script.js:31 https://flagcdn.com/ht.svg
script.js:31 https://flagcdn.com/hm.svg
script.js:31 https://flagcdn.com/va.svg
script.js:31 https://flagcdn.com/hn.svg
script.js:31 https://flagcdn.com/hu.svg
script.js:31 https://flagcdn.com/hk.svg
script.js:31 https://flagcdn.com/is.svg
script.js:31 https://flagcdn.com/in.svg
script.js:31 https://flagcdn.com/id.svg
script.js:31 https://flagcdn.com/ci.svg
script.js:31 https://flagcdn.com/ir.svg
script.js:31 https://flagcdn.com/iq.svg
script.js:31 https://flagcdn.com/ie.svg
script.js:31 https://flagcdn.com/im.svg
script.js:31 https://flagcdn.com/il.svg
script.js:31 https://flagcdn.com/it.svg
script.js:31 https://flagcdn.com/jm.svg
script.js:31 https://flagcdn.com/jp.svg
script.js:31 https://flagcdn.com/je.svg
script.js:31 https://flagcdn.com/jo.svg
script.js:31 https://flagcdn.com/kz.svg
script.js:31 https://flagcdn.com/ke.svg
script.js:31 https://flagcdn.com/ki.svg
script.js:31 https://flagcdn.com/kw.svg
script.js:31 https://flagcdn.com/kg.svg
script.js:31 https://flagcdn.com/la.svg
script.js:31 https://flagcdn.com/lv.svg
script.js:31 https://flagcdn.com/lb.svg
script.js:31 https://flagcdn.com/ls.svg
script.js:31 https://flagcdn.com/lr.svg
script.js:31 https://flagcdn.com/ly.svg
script.js:31 https://flagcdn.com/li.svg
script.js:31 https://flagcdn.com/lt.svg
script.js:31 https://flagcdn.com/lu.svg
script.js:31 https://flagcdn.com/mo.svg
script.js:31 https://flagcdn.com/mk.svg
script.js:31 https://flagcdn.com/mg.svg
script.js:31 https://flagcdn.com/mw.svg
script.js:31 https://flagcdn.com/my.svg
script.js:31 https://flagcdn.com/mv.svg
script.js:31 https://flagcdn.com/ml.svg
script.js:31 https://flagcdn.com/mt.svg
script.js:31 https://flagcdn.com/mh.svg
script.js:31 https://flagcdn.com/mq.svg
script.js:31 https://flagcdn.com/mr.svg
script.js:31 https://flagcdn.com/mu.svg
script.js:31 https://flagcdn.com/yt.svg
script.js:31 https://flagcdn.com/mx.svg
script.js:31 https://flagcdn.com/fm.svg
script.js:31 https://flagcdn.com/md.svg
script.js:31 https://flagcdn.com/mc.svg
script.js:31 https://flagcdn.com/mn.svg
script.js:31 https://flagcdn.com/me.svg
script.js:31 https://flagcdn.com/ms.svg
script.js:31 https://flagcdn.com/ma.svg
script.js:31 https://flagcdn.com/mz.svg
script.js:31 https://flagcdn.com/mm.svg
script.js:31 https://flagcdn.com/na.svg
script.js:31 https://flagcdn.com/nr.svg
script.js:31 https://flagcdn.com/np.svg
script.js:31 https://flagcdn.com/nl.svg
script.js:31 https://flagcdn.com/nc.svg
script.js:31 https://flagcdn.com/nz.svg
script.js:31 https://flagcdn.com/ni.svg
script.js:31 https://flagcdn.com/ne.svg
script.js:31 https://flagcdn.com/ng.svg
script.js:31 https://flagcdn.com/nu.svg
script.js:31 https://flagcdn.com/nf.svg
script.js:31 https://flagcdn.com/kp.svg
script.js:31 https://flagcdn.com/mp.svg
script.js:31 https://flagcdn.com/no.svg
script.js:31 https://flagcdn.com/om.svg
script.js:31 https://flagcdn.com/pk.svg
script.js:31 https://flagcdn.com/pw.svg
script.js:31 https://flagcdn.com/ps.svg
script.js:31 https://flagcdn.com/pa.svg
script.js:31 https://flagcdn.com/pg.svg
script.js:31 https://flagcdn.com/py.svg
script.js:31 https://flagcdn.com/pe.svg
script.js:31 https://flagcdn.com/ph.svg
script.js:31 https://flagcdn.com/pn.svg
script.js:31 https://flagcdn.com/pl.svg
script.js:31 https://flagcdn.com/pt.svg
script.js:31 https://flagcdn.com/pr.svg
script.js:31 https://flagcdn.com/qa.svg
script.js:31 https://flagcdn.com/xk.svg
script.js:31 https://flagcdn.com/re.svg
script.js:31 https://flagcdn.com/ro.svg
script.js:31 https://flagcdn.com/ru.svg
script.js:31 https://flagcdn.com/rw.svg
script.js:31 https://flagcdn.com/bl.svg
script.js:31 https://flagcdn.com/sh.svg
script.js:31 https://flagcdn.com/kn.svg
script.js:31 https://flagcdn.com/lc.svg
script.js:31 https://flagcdn.com/mf.svg
script.js:31 https://flagcdn.com/pm.svg
script.js:31 https://flagcdn.com/vc.svg
script.js:31 https://flagcdn.com/ws.svg
script.js:31 https://flagcdn.com/sm.svg
script.js:31 https://flagcdn.com/st.svg
script.js:31 https://flagcdn.com/sa.svg
script.js:31 https://flagcdn.com/sn.svg
script.js:31 https://flagcdn.com/rs.svg
script.js:31 https://flagcdn.com/sc.svg
script.js:31 https://flagcdn.com/sl.svg
script.js:31 https://flagcdn.com/sg.svg
script.js:31 https://flagcdn.com/sx.svg
script.js:31 https://flagcdn.com/sk.svg
script.js:31 https://flagcdn.com/si.svg
script.js:31 https://flagcdn.com/sb.svg
script.js:31 https://flagcdn.com/so.svg
script.js:31 https://flagcdn.com/za.svg
script.js:31 https://flagcdn.com/gs.svg
script.js:31 https://flagcdn.com/kr.svg
script.js:31 https://flagcdn.com/es.svg
script.js:31 https://flagcdn.com/lk.svg
script.js:31 https://flagcdn.com/sd.svg
script.js:31 https://flagcdn.com/ss.svg
script.js:31 https://flagcdn.com/sr.svg
script.js:31 https://flagcdn.com/sj.svg
script.js:31 https://flagcdn.com/sz.svg
script.js:31 https://flagcdn.com/se.svg
script.js:31 https://flagcdn.com/ch.svg
script.js:31 https://flagcdn.com/sy.svg
script.js:31 https://flagcdn.com/tw.svg
script.js:31 https://flagcdn.com/tj.svg
script.js:31 https://flagcdn.com/tz.svg
script.js:31 https://flagcdn.com/th.svg
script.js:31 https://flagcdn.com/tl.svg
script.js:31 https://flagcdn.com/tg.svg
script.js:31 https://flagcdn.com/tk.svg
script.js:31 https://flagcdn.com/to.svg
script.js:31 https://flagcdn.com/tt.svg
script.js:31 https://flagcdn.com/tn.svg
script.js:31 https://flagcdn.com/tr.svg
script.js:31 https://flagcdn.com/tm.svg
script.js:31 https://flagcdn.com/tc.svg
script.js:31 https://flagcdn.com/tv.svg
script.js:31 https://flagcdn.com/ug.svg
script.js:31 https://flagcdn.com/ua.svg
script.js:31 https://flagcdn.com/ae.svg
script.js:31 https://flagcdn.com/gb.svg
script.js:31 https://flagcdn.com/us.svg
script.js:31 https://flagcdn.com/uy.svg
script.js:31 https://flagcdn.com/uz.svg
script.js:31 https://flagcdn.com/vu.svg
script.js:31 https://flagcdn.com/ve.svg
script.js:31 https://flagcdn.com/vn.svg
script.js:31 https://flagcdn.com/wf.svg
script.js:31 https://flagcdn.com/eh.svg
script.js:31 https://flagcdn.com/ye.svg
script.js:31 https://flagcdn.com/zm.svg
script.js:31 https://flagcdn.com/zw.svg*/

//3.Use the same rest countries and print all countries names, regions, sub-region and populations

//Initialize http request
let request = new XMLHttpRequest();

//Open a request and pass url to open methods

request.open("GET", "https://restcountries.com/v2/all");

//Process the request on server side and retrive the data

request.onload = function () {
  if (request.status >= 200 && request.status < 300) {
    let data = JSON.parse(this.response);
    console.log(data);

    for (let i = 0; i <= data.length; i++) {
      let place = data[i];
      console.log(
        `Country Name: ${place.name}
Region: ${place.region}
Sub-Region: ${place.subregion}
Population: ${place.population}`
      );
    }
  }
};
//Send request to server
request.send();

/*OUTPUT:




Country Name:Afghanistan
Region:Asia
Sub-Region:SouthernAsia
Population:40218234

Country Name:ÅlandIslands
Region:Europe
Sub-Region:NorthernEurope
Population:28875

Country Name:Albania
Region:Europe
Sub-Region:SouthernEurope
Population:2837743

Country Name:Algeria
Region:Africa
Sub-Region:NorthernAfrica
Population:44700000

Country Name:AmericanSamoa
Region:Oceania
Sub-Region:Polynesia
Population:55197

Country Name:Andorra
Region:Europe
Sub-Region:SouthernEurope
Population:77265

Country Name:Angola
Region:Africa
Sub-Region:MiddleAfrica
Population:32866268

Country Name:Anguilla
Region:Americas
Sub-Region:Caribbean
Population:13452

Country Name:Antarctica
Region:Polar
Sub-Region:Antarctica
Population:1000

Country Name:AntiguaandBarbuda
Region:Americas
Sub-Region:Caribbean
Population:97928

Country Name:Argentina
Region:Americas
Sub-Region:SouthAmerica
Population:45376763

Country Name:Armenia
Region:Asia
Sub-Region:WesternAsia
Population:2963234

Country Name:Aruba
Region:Americas
Sub-Region:Caribbean
Population:106766

Country Name:Australia
Region:Oceania
Sub-Region:AustraliaandNewZealand
Population:25687041

Country Name:Austria
Region:Europe
Sub-Region:CentralEurope
Population:8917205

Country Name:Azerbaijan
Region:Asia
Sub-Region:WesternAsia
Population:10110116

Country Name:Bahamas
Region:Americas
Sub-Region:Caribbean
Population:393248

Country Name:Bahrain
Region:Asia
Sub-Region:WesternAsia
Population:1701583

Country Name:Bangladesh
Region:Asia
Sub-Region:SouthernAsia
Population:164689383

Country Name:Barbados
Region:Americas
Sub-Region:Caribbean
Population:287371

Country Name:Belarus
Region:Europe
Sub-Region:EasternEurope
Population:9398861

Country Name:Belgium
Region:Europe
Sub-Region:WesternEurope
Population:11555997

Country Name:Belize
Region:Americas
Sub-Region:CentralAmerica
Population:397621

Country Name:Benin
Region:Africa
Sub-Region:WesternAfrica
Population:12123198

Country Name:Bermuda
Region:Americas
Sub-Region:NorthernAmerica
Population:63903

Country Name:Bhutan
Region:Asia
Sub-Region:SouthernAsia
Population:771612

Country Name:Bolivia(PlurinationalStateof)
Region:Americas
Sub-Region:SouthAmerica
Population:11673029

Country Name:Bonaire,SintEustatiusandSaba
Region:Americas
Sub-Region:Caribbean
Population:17408

Country Name:BosniaandHerzegovina
Region:Europe
Sub-Region:SouthernEurope
Population:3280815

Country Name:Botswana
Region:Africa
Sub-Region:SouthernAfrica
Population:2351625

Country Name:BouvetIsland
Region:AntarcticOcean
Sub-Region:SouthAntarcticOcean
Population:0

Country Name:Brazil
Region:Americas
Sub-Region:SouthAmerica
Population:212559409

Country Name:BritishIndianOceanTerritory
Region:Africa
Sub-Region:EasternAfrica
Population:3000

Country Name:UnitedStatesMinorOutlyingIslands
Region:Americas
Sub-Region:NorthernAmerica
Population:300

Country Name:VirginIslands(British)
Region:Americas
Sub-Region:Caribbean
Population:30237

Country Name:VirginIslands(U.S.)
Region:Americas
Sub-Region:Caribbean
Population:106290

Country Name:BruneiDarussalam
Region:Asia
Sub-Region:South-EasternAsia
Population:437483

Country Name:Bulgaria
Region:Europe
Sub-Region:EasternEurope
Population:6927288

Country Name:BurkinaFaso
Region:Africa
Sub-Region:WesternAfrica
Population:20903278

Country Name:Burundi
Region:Africa
Sub-Region:EasternAfrica
Population:11890781

Country Name:Cambodia
Region:Asia
Sub-Region:South-EasternAsia
Population:16718971

Country Name:Cameroon
Region:Africa
Sub-Region:MiddleAfrica
Population:26545864

Country Name:Canada
Region:Americas
Sub-Region:NorthernAmerica
Population:38005238

Country Name:CaboVerde
Region:Africa
Sub-Region:WesternAfrica
Population:555988

Country Name:CaymanIslands
Region:Americas
Sub-Region:Caribbean
Population:65720

Country Name:CentralAfricanRepublic
Region:Africa
Sub-Region:MiddleAfrica
Population:4829764

Country Name:Chad
Region:Africa
Sub-Region:MiddleAfrica
Population:16425859

Country Name:Chile
Region:Americas
Sub-Region:SouthAmerica
Population:19116209

Country Name:China
Region:Asia
Sub-Region:EasternAsia
Population:1402112000

Country Name:ChristmasIsland
Region:Oceania
Sub-Region:AustraliaandNewZealand
Population:2072

Country Name:Cocos(Keeling)Islands
Region:Oceania
Sub-Region:AustraliaandNewZealand
Population:550

Country Name:Colombia
Region:Americas
Sub-Region:SouthAmerica
Population:50882884

Country Name:Comoros
Region:Africa
Sub-Region:EasternAfrica
Population:869595

Country Name:Congo
Region:Africa
Sub-Region:MiddleAfrica
Population:5518092

Country Name:Congo(DemocraticRepublicofthe)
Region:Africa
Sub-Region:MiddleAfrica
Population:89561404

Country Name:CookIslands
Region:Oceania
Sub-Region:Polynesia
Population:18100

Country Name:CostaRica
Region:Americas
Sub-Region:CentralAmerica
Population:5094114

Country Name:Croatia
Region:Europe
Sub-Region:SouthernEurope
Population:4047200

Country Name:Cuba
Region:Americas
Sub-Region:Caribbean
Population:11326616

Country Name:Curaçao
Region:Americas
Sub-Region:Caribbean
Population:155014

Country Name:Cyprus
Region:Europe
Sub-Region:SouthernEurope
Population : 1207361

Country Name : CzechRepublic
Region : Europe
Sub-Region : CentralEurope
Population : 10698896

Country Name : Denmark
Region : Europe
Sub-Region : NorthernEurope
Population : 5831404

Country Name : Djibouti
Region : Africa
Sub-Region : EasternAfrica
Population : 988002

Country Name : Dominica
Region : Americas
Sub-Region : Caribbean
Population : 71991

Country Name : DominicanRepublic
Region : Americas
Sub-Region : Caribbean
Population : 10847904

Country Name : Ecuador
Region : Americas
Sub-Region : SouthAmerica
Population : 17643060

Country Name : Egypt
Region : Africa
Sub-Region : NorthernAfrica
Population : 102334403

Country Name : ElSalvador
Region : Americas
Sub-Region : CentralAmerica
Population : 6486201

Country Name : EquatorialGuinea
Region : Africa
Sub-Region : MiddleAfrica
Population : 1402985

Country Name : Eritrea
Region : Africa
Sub-Region : EasternAfrica
Population : 5352000

Country Name : Estonia
Region : Europe
Sub-Region : NorthernEurope
Population : 1331057

Country Name : Ethiopia
Region : Africa
Sub-Region : EasternAfrica
Population : 114963583

Country Name : FalklandIslands(Malvinas)
Region : Americas
Sub-Region : SouthAmerica
Population : 2563

Country Name : FaroeIslands
Region : Europe
Sub-Region : NorthernEurope
Population : 48865

Country Name : Fiji
Region : Oceania
Sub-Region : Melanesia
Population : 896444

Country Name : Finland
Region : Europe
Sub-Region : NorthernEurope
Population : 5530719

Country Name : France
Region : Europe
Sub-Region : WesternEurope
Population : 67391582

Country Name : FrenchGuiana
Region : Americas
Sub-Region : SouthAmerica
Population : 254541

Country Name : FrenchPolynesia
Region : Oceania
Sub-Region : Polynesia
Population : 280904

Country Name : FrenchSouthernTerritories
Region : Africa
Sub-Region : SouthernAfrica
Population : 140

Country Name : Gabon
Region : Africa
Sub-Region : MiddleAfrica
Population : 2225728

Country Name : Gambia
Region : Africa
Sub-Region : WesternAfrica
Population : 2416664

Country Name : Georgia
Region : Asia
Sub-Region : WesternAsia
Population : 3714000

Country Name : Germany
Region : Europe
Sub-Region : CentralEurope
Population : 83240525

Country Name : Ghana
Region : Africa
Sub-Region : WesternAfrica
Population : 31072945

Country Name : Gibraltar
Region : Europe
Sub-Region : SouthernEurope
Population : 33691

Country Name : Greece
Region : Europe
Sub-Region : SouthernEurope
Population : 10715549

Country Name : Greenland
Region : Americas
Sub-Region : NorthernAmerica
Population : 56367

Country Name : Grenada
Region : Americas
Sub-Region : Caribbean
Population : 112519

Country Name : Guadeloupe
Region : Americas
Sub-Region : Caribbean
Population : 400132

Country Name : Guam
Region : Oceania
Sub-Region : Micronesia
Population : 168783

Country Name : Guatemala
Region : Americas
Sub-Region : CentralAmerica
Population : 16858333

Country Name : Guernsey
Region : Europe
Sub-Region : NorthernEurope
Population : 62999

Country Name : Guinea
Region : Africa
Sub-Region : WesternAfrica
Population : 13132792

Country Name : Guinea-Bissau
Region : Africa
Sub-Region : WesternAfrica
Population : 1967998

Country Name : Guyana
Region : Americas
Sub-Region : SouthAmerica
Population : 786559

Country Name : Haiti
Region : Americas
Sub-Region : Caribbean
Population : 11402533

Country Name : HeardIslandandMcDonaldIslands
Region : Antarctic
Sub-Region : Antarctic
Population : 0

Country Name : VaticanCity
Region : Europe
Sub-Region : SouthernEurope
Population : 451

Country Name : Honduras
Region : Americas
Sub-Region : CentralAmerica
Population : 9904608

Country Name : Hungary
Region : Europe
Sub-Region : CentralEurope
Population : 9749763

Country Name : HongKong
Region : Asia
Sub-Region : EasternAsia
Population : 7481800

Country Name : Iceland
Region : Europe
Sub-Region : NorthernEurope
Population : 366425

Country Name : India
Region : Asia
Sub-Region : SouthernAsia
Population : 1380004385

Country Name : Indonesia
Region : Asia
Sub-Region : South-EasternAsia
Population : 273523621

Country Name : IvoryCoast
Region : Africa
Sub-Region : WesternAfrica
Population : 26378275

Country Name : Iran(IslamicRepublicof)
Region : Asia
Sub-Region : SouthernAsia
Population : 83992953

Country Name : Iraq
Region : Asia
Sub-Region : WesternAsia
Population : 40222503

Country Name : Ireland
Region : Europe
Sub-Region : NorthernEurope
Population : 4994724

Country Name : IsleofMan
Region : Europe
Sub-Region : NorthernEurope
Population : 85032

Country Name : Israel
Region : Asia
Sub-Region : WesternAsia
Population : 9216900

Country Name : Italy
Region : Europe
Sub-Region : SouthernEurope
Population : 59554023

Country Name : Jamaica
Region : Americas
Sub-Region : Caribbean
Population : 2961161

Country Name : Japan
Region : Asia
Sub-Region : EasternAsia
Population : 125836021

Country Name : Jersey
Region : Europe
Sub-Region : NorthernEurope
Population : 100800

Country Name : Jordan
Region : Asia
Sub-Region : WesternAsia
Population : 10203140

Country Name : Kazakhstan
Region : Asia
Sub-Region : CentralAsia
Population : 18754440

Country Name : Kenya
Region : Africa
Sub-Region : EasternAfrica
Population : 53771300

Country Name : Kiribati
Region : Oceania
Sub-Region : Micronesia
Population : 119446

Country Name : Kuwait
Region : Asia
Sub-Region : WesternAsia
Population : 4270563

Country Name : Kyrgyzstan
Region : Asia
Sub-Region : CentralAsia
Population : 6591600

Country Name : LaoPeople'sDemocraticRepublic
Region : Asia
Sub-Region : South-EasternAsia
Population : 7275556

Country Name : Latvia
Region : Europe
Sub-Region : NorthernEurope
Population : 1901548

Country Name : Lebanon
Region : Asia
Sub-Region : WesternAsia
Population : 6825442

Country Name : Lesotho
Region : Africa
Sub-Region : SouthernAfrica
Population : 2142252

Country Name : Liberia
Region : Africa
Sub-Region : WesternAfrica
Population : 5057677

Country Name : Libya
Region : Africa
Sub-Region : NorthernAfrica
Population : 6871287

Country Name : Liechtenstein
Region : Europe
Sub-Region : CentralEurope
Population : 38137

Country Name : Lithuania
Region : Europe
Sub-Region : NorthernEurope
Population : 2794700

Country Name : Luxembourg
Region : Europe
Sub-Region : WesternEurope
Population : 632275

Country Name : Macao
Region : Asia
Sub-Region : EasternAsia
Population : 649342

Country Name : NorthMacedonia
Region : Europe
Sub-Region : SouthernEurope
Population : 2083380

Country Name : Madagascar
Region : Africa
Sub-Region : EasternAfrica
Population : 27691019

Country Name : Malawi
Region : Africa
Sub-Region : EasternAfrica
Population : 19129955

Country Name : Malaysia
Region : Asia
Sub-Region : South-EasternAsia
Population : 32365998

Country Name : Maldives
Region : Asia
Sub-Region : SouthernAsia
Population : 540542

Country Name : Mali
Region : Africa
Sub-Region : WesternAfrica
Population : 20250834

Country Name : Malta
Region : Europe
Sub-Region : SouthernEurope
Population : 525285

Country Name : MarshallIslands
Region : Oceania
Sub-Region : Micronesia
Population : 59194

Country Name : Martinique
Region : Americas
Sub-Region : Caribbean
Population : 378243

Country Name : Mauritania
Region : Africa
Sub-Region : WesternAfrica
Population : 4649660

Country Name : Mauritius
Region : Africa
Sub-Region : EasternAfrica
Population : 1265740

Country Name : Mayotte
Region : Africa
Sub-Region : EasternAfrica
Population : 226915

Country Name : Mexico
Region : Americas
Sub-Region : NorthAmerica
Population : 128932753

Country Name : Micronesia(FederatedStatesof)
Region : Oceania
Sub-Region : Micronesia
Population : 115021

Country Name : Moldova(Republicof)
Region : Europe
Sub-Region : EasternEurope
Population : 2617820

Country Name : Monaco
Region : Europe
Sub-Region : WesternEurope
Population : 39244

Country Name : Mongolia
Region : Asia
Sub-Region : EasternAsia
Population : 3278292

Country Name : Montenegro
Region : Europe
Sub-Region : SouthernEurope
Population : 621718

Country Name : Montserrat
Region : Americas
Sub-Region : Caribbean
Population : 4922

Country Name : Morocco
Region : Africa
Sub-Region : NorthernAfrica
Population : 36910558

Country Name : Mozambique
Region : Africa
Sub-Region : EasternAfrica
Population : 31255435

Country Name : Myanmar
Region : Asia
Sub-Region : South-EasternAsia
Population : 54409794

Country Name : Namibia
Region : Africa
Sub-Region : SouthernAfrica
Population : 2540916

Country Name : Nauru
Region : Oceania
Sub-Region : Micronesia
Population : 10834

Country Name : Nepal
Region : Asia
Sub-Region : SouthernAsia
Population : 29136808

Country Name : Netherlands
Region : Europe
Sub-Region : WesternEurope
Population : 17441139

Country Name : NewCaledonia
Region : Oceania
Sub-Region : Melanesia
Population : 271960

Country Name : NewZealand
Region : Oceania
Sub-Region : AustraliaandNewZealand
Population : 5084300

Country Name : Nicaragua
Region : Americas
Sub-Region : CentralAmerica
Population : 6624554

Country Name : Niger
Region : Africa
Sub-Region : WesternAfrica
Population : 24206636

Country Name : Nigeria
Region : Africa
Sub-Region : WesternAfrica
Population : 206139587

Country Name : Niue
Region : Oceania
Sub-Region : Polynesia
Population : 1470

Country Name : NorfolkIsland
Region : Oceania
Sub-Region : AustraliaandNewZealand
Population : 2302

Country Name : Korea(DemocraticPeople'sRepublicof)
Region : Asia
Sub-Region : EasternAsia
Population : 25778815

Country Name : NorthernMarianaIslands
Region : Oceania
Sub-Region : Micronesia
Population : 57557

Country Name : Norway
Region : Europe
Sub-Region : NorthernEurope
Population : 5379475

Country Name : Oman
Region : Asia
Sub-Region : WesternAsia
Population : 5106622

Country Name : Pakistan
Region : Asia
Sub-Region : SouthernAsia
Population : 220892331

Country Name : Palau
Region : Oceania
Sub-Region : Micronesia
Population : 18092

Country Name : Palestine,Stateof
Region : Asia
Sub-Region : WesternAsia
Population : 4803269

Country Name : Panama
Region : Americas
Sub-Region : CentralAmerica
Population : 4314768

Country Name : PapuaNewGuinea
Region : Oceania
Sub-Region : Melanesia
Population : 8947027

Country Name : Paraguay
Region : Americas
Sub-Region : SouthAmerica
Population : 7132530

Country Name : Peru
Region : Americas
Sub-Region : SouthAmerica
Population : 32971846

Country Name : Philippines
Region : Asia
Sub-Region : South-EasternAsia
Population : 109581085

Country Name : Pitcairn
Region : Oceania
Sub-Region : Polynesia
Population : 56

Country Name : Poland
Region : Europe
Sub-Region : CentralEurope
Population : 37950802

Country Name : Portugal
Region : Europe
Sub-Region : SouthernEurope
Population : 10305564

Country Name : PuertoRico
Region : Americas
Sub-Region : Caribbean
Population : 3194034

Country Name : Qatar
Region : Asia
Sub-Region : WesternAsia
Population : 2881060

Country Name : RepublicofKosovo
Region : Europe
Sub-Region : EasternEurope
Population : 1775378

Country Name : Réunion
Region : Africa
Sub-Region : EasternAfrica
Population : 840974

Country Name : Romania
Region : Europe
Sub-Region : EasternEurope
Population : 19286123

Country Name : RussianFederation
Region : Europe
Sub-Region : EasternEurope
Population : 144104080

Country Name : Rwanda
Region : Africa
Sub-Region : EasternAfrica
Population : 12952209

Country Name : SaintBarthélemy
Region : Americas
Sub-Region : Caribbean
Population : 9417

Country Name : SaintHelena,AscensionandTristandaCunha
Region : Africa
Sub-Region : WesternAfrica
Population : 4255

Country Name : SaintKittsandNevis
Region : Americas
Sub-Region : Caribbean
Population : 53192

Country Name : SaintLucia
Region : Americas
Sub-Region : Caribbean
Population : 183629

Country Name : SaintMartin(Frenchpart)
Region : Americas
Sub-Region : Caribbean
Population : 38659

Country Name : SaintPierreandMiquelon
Region : Americas
Sub-Region : NorthernAmerica
Population : 6069

Country Name : SaintVincentandtheGrenadines
Region : Americas
Sub-Region : Caribbean
Population : 110947

Country Name : Samoa
Region : Oceania
Sub-Region : Polynesia
Population : 198410

Country Name : SanMarino
Region : Europe
Sub-Region : SouthernEurope
Population : 33938

Country Name : SaoTomeandPrincipe
Region : Africa
Sub-Region : MiddleAfrica
Population : 219161

Country Name : SaudiArabia
Region : Asia
Sub-Region : WesternAsia
Population : 34813867

Country Name : Senegal
Region : Africa
Sub-Region : WesternAfrica
Population : 16743930

Country Name : Serbia
Region : Europe
Sub-Region : SouthernEurope
Population : 6908224

Country Name : Seychelles
Region : Africa
Sub-Region : EasternAfrica
Population : 98462

Country Name : SierraLeone
Region : Africa
Sub-Region : WesternAfrica
Population : 7976985

Country Name : Singapore
Region : Asia
Sub-Region : South-EasternAsia
Population : 5685807

Country Name : SintMaarten(Dutchpart)
Region : Americas
Sub-Region : Caribbean
Population : 40812

Country Name : Slovakia
Region : Europe
Sub-Region : CentralEurope
Population : 5458827

Country Name : Slovenia
Region : Europe
Sub-Region : SouthernEurope
Population : 2100126

Country Name : SolomonIslands
Region : Oceania
Sub-Region : Melanesia
Population : 686878

Country Name : Somalia
Region : Africa
Sub-Region : EasternAfrica
Population : 15893219

Country Name : SouthAfrica
Region : Africa
Sub-Region : SouthernAfrica
Population : 59308690

Country Name : SouthGeorgiaandtheSouthSandwichIslands
Region : Americas
Sub-Region : SouthAmerica
Population : 30

Country Name : Korea(Republicof)
Region : Asia
Sub-Region : EasternAsia
Population : 51780579

Country Name : Spain
Region : Europe
Sub-Region : SouthernEurope
Population : 47351567

Country Name : SriLanka
Region : Asia
Sub-Region : SouthernAsia
Population : 21919000

Country Name : Sudan
Region : Africa
Sub-Region : NorthernAfrica
Population : 43849269

Country Name : SouthSudan
Region : Africa
Sub-Region : MiddleAfrica
Population : 11193729

Country Name : Suriname
Region : Americas
Sub-Region : SouthAmerica
Population : 586634

Country Name : SvalbardandJanMayen
Region : Europe
Sub-Region : NorthernEurope
Population : 2562

Country Name : Swaziland
Region : Africa
Sub-Region : SouthernAfrica
Population : 1160164

Country Name : Sweden
Region : Europe
Sub-Region : NorthernEurope
Population : 10353442

Country Name : Switzerland
Region : Europe
Sub-Region : CentralEurope
Population : 8636896

Country Name : SyrianArabRepublic
Region : Asia
Sub-Region : WesternAsia
Population : 17500657

Country Name : Taiwan
Region : Asia
Sub-Region : EasternAsia
Population : 23503349

Country Name : Tajikistan
Region : Asia
Sub-Region : CentralAsia
Population : 9537642

Country Name : Tanzania,UnitedRepublicof
Region : Africa
Sub-Region : EasternAfrica
Population : 59734213

Country Name : Thailand
Region : Asia
Sub-Region : South-EasternAsia
Population : 69799978

Country Name : Timor-Leste
Region : Asia
Sub-Region : South-EasternAsia
Population : 1318442

Country Name : Togo
Region : Africa
Sub-Region : WesternAfrica
Population : 8278737

Country Name : Tokelau
Region : Oceania
Sub-Region : Polynesia
Population : 1411

Country Name : Tonga
Region : Oceania
Sub-Region : Polynesia
Population : 105697

Country Name : TrinidadandTobago
Region : Americas
Sub-Region : Caribbean
Population : 1399491

Country Name : Tunisia
Region : Africa
Sub-Region : NorthernAfrica
Population : 11818618

Country Name : Turkey
Region : Asia
Sub-Region : WesternAsia
Population : 84339067

Country Name : Turkmenistan
Region : Asia
Sub-Region : CentralAsia
Population : 6031187

Country Name : TurksandCaicosIslands
Region : Americas
Sub-Region : Caribbean
Population : 38718

Country Name : Tuvalu
Region : Oceania
Sub-Region : Polynesia
Population : 11792

Country Name : Uganda
Region : Africa
Sub-Region : EasternAfrica
Population : 45741000

Country Name : Ukraine
Region : Europe
Sub-Region : EasternEurope
Population : 44134693

Country Name : UnitedArabEmirates
Region : Asia
Sub-Region : WesternAsia
Population : 9890400

Country Name : UnitedKingdomofGreatBritainandNorthernIreland
Region : Europe
Sub-Region : NorthernEurope
Population : 67215293

Country Name : UnitedStatesofAmerica
Region : Americas
Sub-Region : NorthernAmerica
Population : 329484123

Country Name : Uruguay
Region : Americas
Sub-Region : SouthAmerica
Population : 3473727

Country Name : Uzbekistan
Region : Asia
Sub-Region : CentralAsia
Population : 34232050

Country Name : Vanuatu
Region : Oceania
Sub-Region : Melanesia
Population : 307150

Country Name : Venezuela(BolivarianRepublicof)
Region : Americas
Sub-Region : SouthAmerica
Population : 28435943

Country Name : Vietnam
Region : Asia
Sub-Region : South-EasternAsia
Population : 97338583

Country Name:WallisandFutuna
Region:Oceania
Sub-Region:Polynesia
Population:11750

Country Name:WesternSahara
Region:Africa
Sub-Region:NorthernAfrica
Population:510713

Country Name:Yemen
Region:Asia
Sub-Region:WesternAsia
Population:29825968

Country Name:Zambia
Region:Africa
Sub-Region:EasternAfrica
Population:18383956

Country Name:Zimbabwe
Region:Africa
Sub-Region:SouthernAfrica
Population:14862927

*/
