// var response = {
//       zip: '',
//       state: 'tx',
//       data: {"kind": "civicinfo#representativeInfoResponse",
//              "normalizedInput": {
//               "line1": "",
//               "city": "Sugar Land",
//               "state": "TX",
//               "zip": "77498"
//              },
//              "divisions": {
//               "ocd-division/country:us": {
//                "name": "United States",
//                "officeIndices": [
//                 0,
//                 1,
//                ]
//               },
//               "ocd-division/country:us/state:tx": {
//                "name": "Texas",
//                "officeIndices": [
//                 2,
//                 3,
//                 4,
//                 5,
//                 6,
//                 7,
//                 8,
//                 9
//                ]
//               },
//               "ocd-division/country:us/state:tx/county:fort_bend": {
//                "name": "Fort Bend County",
//                "officeIndices": [
//                 10,
//                 11,
//                 12,
//                 13,
//                 14,
//                 15,
//                 16,
//                 17,
//                 18
//                ]
//               }
//              },
//              "offices": [
//               {
//                "name": "President of the United States",
//                "divisionId": "ocd-division/country:us",
//                "levels": [
//                 "country"
//                ],
//                "roles": [
//                 "headOfState",
//                 "headOfGovernment"
//                ],
//                "officialIndices": [
//                 0
//                ]
//               },
//               {
//                "name": "Vice-President of the United States",
//                "divisionId": "ocd-division/country:us",
//                "levels": [
//                 "country"
//                ],
//                "roles": [
//                 "deputyHeadOfGovernment"
//                ],
//                "officialIndices": [
//                 1
//                ]
//               },
//               {
//                "name": "United States Senate",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "levels": [
//                 "country"
//                ],
//                "roles": [
//                 "legislatorUpperBody"
//                ],
//                "officialIndices": [
//                 2,
//                 3
//                ]
//               },
//               {
//                "name": "Governor",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "levels": [
//                 "administrativeArea1"
//                ],
//                "roles": [
//                 "headOfGovernment"
//                ],
//                "officialIndices": [
//                 4
//                ]
//               },
//               {
//                "name": "Lieutenant Governor",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "levels": [
//                 "administrativeArea1"
//                ],
//                "roles": [
//                 "deputyHeadOfGovernment"
//                ],
//                "officialIndices": [
//                 5
//                ]
//               },
//               {
//                "name": "Attorney General",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "officialIndices": [
//                 6
//                ]
//               },
//               {
//                "name": "Commissioner of Agriculture",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "officialIndices": [
//                 7
//                ]
//               },
//               {
//                "name": "Comptroller of Public Accounts",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "officialIndices": [
//                 8
//                ]
//               },
//               {
//                "name": "Commissioner, Railroad Commission",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "officialIndices": [
//                 9,
//                 10,
//                 11
//                ]
//               },
//               {
//                "name": "Commissioner of General Land Office",
//                "divisionId": "ocd-division/country:us/state:tx",
//                "officialIndices": [
//                 12
//                ]
//               },
//               {
//                "name": "Sheriff",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 13
//                ]
//               },
//               {
//                "name": "County Clerk",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 14
//                ]
//               },
//               {
//                "name": "County Judge",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 15
//                ]
//               },
//               {
//                "name": "District Clerk",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 16
//                ]
//               },
//               {
//                "name": "County Treasurer",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 17
//                ]
//               },
//               {
//                "name": "District Attorney",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 18
//                ]
//               },
//               {
//                "name": "Tax Assessor-Collector",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 19
//                ]
//               },
//               {
//                "name": "Fort Bend County Attorney",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 20
//                ]
//               },
//               {
//                "name": "Fort Bend County Court at Law Judge",
//                "divisionId": "ocd-division/country:us/state:tx/county:fort_bend",
//                "officialIndices": [
//                 21
//                ]
//               }
//              ],
//              "officials": [
//               {
//                "name": "Donald J. Trump",
//                "address": [
//                 {
//                  "line1": "The White House",
//                  "line2": "1600 Pennsylvania Avenue NW",
//                  "city": "Washington",
//                  "state": "DC",
//                  "zip": "20500"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(202) 456-1111"
//                ],
//                "urls": [
//                 "http://www.whitehouse.gov/"
//                ],
//                "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
//                "channels": [
//                 {
//                  "type": "GooglePlus",
//                  "id": "+whitehouse"
//                 },
//                 {
//                  "type": "Facebook",
//                  "id": "whitehouse"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "potus"
//                 },
//                 {
//                  "type": "YouTube",
//                  "id": "whitehouse"
//                 }
//                ]
//               },
//               {
//                "name": "Mike Pence",
//                "address": [
//                 {
//                  "line1": "The White House",
//                  "line2": "1600 Pennsylvania Avenue NW",
//                  "city": "Washington",
//                  "state": "DC",
//                  "zip": "20500"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(202) 456-1111"
//                ],
//                "urls": [
//                 "http://www.whitehouse.gov/"
//                ],
//                "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
//                "channels": [
//                 {
//                  "type": "GooglePlus",
//                  "id": "+whitehouse"
//                 },
//                 {
//                  "type": "Facebook",
//                  "id": "whitehouse"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "VP"
//                 }
//                ]
//               },
//               {
//                "name": "John Cornyn",
//                "address": [
//                 {
//                  "line1": "517 Hart Senate Office Building",
//                  "city": "Washington",
//                  "state": "DC",
//                  "zip": "20510"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(202) 224-2934"
//                ],
//                "urls": [
//                 "http://www.cornyn.senate.gov/public/"
//                ],
//                "photoUrl": "http://bioguide.congress.gov/bioguide/photo/C/C001056.jpg",
//                "channels": [
//                 {
//                  "type": "Facebook",
//                  "id": "Sen.JohnCornyn"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "JohnCornyn"
//                 },
//                 {
//                  "type": "YouTube",
//                  "id": "SenJohnCornyn"
//                 }
//                ]
//               },
//               {
//                "name": "Ted Cruz",
//                "address": [
//                 {
//                  "line1": "404 Russell Senate Office Building",
//                  "city": "Washington",
//                  "state": "DC",
//                  "zip": "20510"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(202) 224-5922"
//                ],
//                "urls": [
//                 "http://www.cruz.senate.gov/"
//                ],
//                "photoUrl": "http://www.cruz.senate.gov/files/images/OfficialPortrait.jpg",
//                "channels": [
//                 {
//                  "type": "Facebook",
//                  "id": "SenatorTedCruz"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "SenTedCruz"
//                 },
//                 {
//                  "type": "YouTube",
//                  "id": "TedCruzforSenate"
//                 },
//                 {
//                  "type": "YouTube",
//                  "id": "SenTedCruz"
//                 }
//                ]
//               },
//               {
//                "name": "Greg Abbott",
//                "address": [
//                 {
//                  "line1": "P.O. Box 12428",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-2000"
//                ],
//                "urls": [
//                 "http://www.governor.state.tx.us/"
//                ],
//                "channels": [
//                 {
//                  "type": "GooglePlus",
//                  "id": "114575192028324795215"
//                 },
//                 {
//                  "type": "Facebook",
//                  "id": "TexasGovernor"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "govabbott"
//                 },
//                 {
//                  "type": "YouTube",
//                  "id": "UCqTttg2CGGqDmMYR1S0q5Hw"
//                 }
//                ]
//               },
//               {
//                "name": "Dan Patrick",
//                "address": [
//                 {
//                  "line1": "P.O. Box 12068",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-0001"
//                ],
//                "urls": [
//                 "http://www.ltgov.state.tx.us/"
//                ],
//                "photoUrl": "https://www.ltgov.state.tx.us/wp-content/uploads/2015/02/dan_patrick.jpg",
//                "emails": [
//                 "LTGConstituent.Affairs@ltgov.texas.gov"
//                ],
//                "channels": [
//                 {
//                  "type": "Facebook",
//                  "id": "ltgovtx"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "LtGovTX"
//                 }
//                ]
//               },
//               {
//                "name": "Ken Paxton",
//                "address": [
//                 {
//                  "line1": "P.O. Box 12548",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-2100"
//                ],
//                "urls": [
//                 "https://www.oag.state.tx.us/"
//                ],
//                "channels": [
//                 {
//                  "type": "Facebook",
//                  "id": "TexasAttorneyGeneral"
//                 }
//                ]
//               },
//               {
//                "name": "Sid Miller",
//                "address": [
//                 {
//                  "line1": "P.O. Box 12847",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-1408"
//                ],
//                "urls": [
//                 "http://www.texasagriculture.gov/Home.aspx"
//                ],
//                "channels": [
//                 {
//                  "type": "Facebook",
//                  "id": "Texas-Department-of-Agriculture"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "TexasDeptofAg"
//                 }
//                ]
//               },
//               {
//                "name": "Glenn Hegar",
//                "address": [
//                 {
//                  "line1": "P.O. Box 13528",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78774"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-4444"
//                ],
//                "urls": [
//                 "http://www.window.state.tx.us/"
//                ],
//                "channels": [
//                 {
//                  "type": "Facebook",
//                  "id": "txcomptroller"
//                 },
//                 {
//                  "type": "Twitter",
//                  "id": "txcomptroller"
//                 }
//                ]
//               },
//               {
//                "name": "Wayne Christian",
//                "address": [
//                 {
//                  "line1": "P.O. Drawer 12967",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-7133"
//                ]
//               },
//               {
//                "name": "Christi Craddick",
//                "address": [
//                 {
//                  "line1": "P.O. Drawer 12967",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-7140"
//                ],
//                "emails": [
//                 "christi.craddick@rrc.state.tx.us"
//                ]
//               },
//               {
//                "name": "Ryan Sitton",
//                "address": [
//                 {
//                  "line1": "P.O. Drawer 12967",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-7144"
//                ]
//               },
//               {
//                "name": "George P. Bush",
//                "address": [
//                 {
//                  "line1": "P.O. Box 12873",
//                  "city": "Austin",
//                  "state": "TX",
//                  "zip": "78711"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(512) 463-5256"
//                ],
//                "urls": [
//                 "http://www.glo.texas.gov/"
//                ]
//               },
//               {
//                "name": "Troy E. Nehls",
//                "address": [
//                 {
//                  "line1": "1410 Williams Way Blvd.",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "phones": [
//                 "(281) 341-4704"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=300"
//                ],
//                "emails": [
//                 "Bob.Haenel@fortbendcountytx.gov"
//                ],
//                "channels": [
//                 {
//                  "type": "Twitter",
//                  "id": "FBCSO"
//                 }
//                ]
//               },
//               {
//                "name": "Laura Richard",
//                "address": [
//                 {
//                  "line1": "301 Jackson Street",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "phones": [
//                 "(281) 341-8652"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=107"
//                ],
//                "emails": [
//                 "cclerk@fortbendcountytx.gov"
//                ]
//               },
//               {
//                "name": "Robert E. Hebert",
//                "address": [
//                 {
//                  "line1": "301 Jackson St.",
//                  "line2": "Suite 719",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "phones": [
//                 "(281) 341-8608"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=26"
//                ],
//                "emails": [
//                 "ann.werlein@fortbendcountytx.gov"
//                ]
//               },
//               {
//                "name": "Annie Rebecca Elliott",
//                "address": [
//                 {
//                  "line1": "301 Jackson Street",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "party": "Unknown",
//                "phones": [
//                 "(281) 633-7632"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=176"
//                ],
//                "emails": [
//                 "distclerk@fortbendcountytx.gov"
//                ]
//               },
//               {
//                "name": "Jeff Council",
//                "address": [
//                 {
//                  "line1": "301 Jackson Street",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "phones": [
//                 "(281) 341-3750"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=403"
//                ]
//               },
//               {
//                "name": "John F. Healey, Jr.",
//                "party": "Unknown"
//               },
//               {
//                "name": "Patsy Schultz",
//                "address": [
//                 {
//                  "line1": "1317 Eugene Heimann Circle",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "phones": [
//                 "(281) 238-1490"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=417"
//                ],
//                "emails": [
//                 "helen.steffey@fortbendcountytx.gov"
//                ]
//               },
//               {
//                "name": "Roy Cordes, Jr.",
//                "address": [
//                 {
//                  "line1": "401 Jackson Street,",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(281) 341-4557"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=95"
//                ],
//                "emails": [
//                 "roy.cordes@fortbendcountytx.gov"
//                ]
//               },
//               {
//                "name": "Ron Cohen",
//                "address": [
//                 {
//                  "line1": "301 Jackson Street",
//                  "city": "Richmond",
//                  "state": "TX",
//                  "zip": "77469"
//                 }
//                ],
//                "party": "Republican",
//                "phones": [
//                 "(281) 238-3270"
//                ],
//                "urls": [
//                 "http://www.fortbendcountytx.gov/index.aspx?page=1762"
//                ]
//               }
//              ]
//       }
//     }
var getData = () => console.log('hello world');

//const data = response.data;


console.log("*************************************************************************")


//Right now, these relies on dataset being a global variable.
//They do have the option to take in the dataset, but right now it defaults to the global data object
//This does two operations using one loop, coupled.
//This was done to perform only one loop over the array.
const getOfficeIndicesAndTitlesFromData = function(indicies, titles, searchSpace, dataSet = data) {
  for (let office of dataSet.offices) {
    if (office.divisionId === searchSpace) {
      Array.prototype.push.apply(indicies, office.officialIndices)

      for(let i = 0; i < office.officialIndices.length; i++) {
        titles.push(office.name)
      }
    }
  }
}

const getOfficialsFromData = function(indices, officialsArray, dataSet = data) {
  for (let index of indices) {
    officialsArray.push(dataSet.officials[index])
  }
}

const addTitleToOfficials = function(officials, titles) {
  for (let i = 0; i < officials.length; i++) {
    officials[i].title = titles[i]
  }
}

//This is a more flexible version of getStateOfficials.
//This should return a list of officials based on the first argument, the tier.
//Possible region: 'country', 'state', 'county'

//This takes data from (TODO: find this endpoint) and returns it as an array of objects


const getOfficials = function(region, dataSet) {
  const key = 'ocd-division/country:us';
  const tiers = Object.keys(dataSet.divisions);

  const tiersList = {
    'country': tiers[0],
    'state': tiers[1],
    'county': tiers[2]
  }

  const searchSpace = tiersList[region];

  const officeIndices = [];
  const officeTitles = [];
  getOfficeIndicesAndTitlesFromData(officeIndices, officeTitles, searchSpace, dataSet);

  const regionOfficials = [];
  getOfficialsFromData(officeIndices, regionOfficials, dataSet);
  addTitleToOfficials(regionOfficials, officeTitles, dataSet);

  return regionOfficials;
}

// console.log(getOfficials('country'))
// console.log("*************************************************************************")
// console.log(getOfficials('state'))
// console.log("*************************************************************************")
// console.log(getOfficials('county'))
// console.log("*************************************************************************")


//This can be used for the MVP.
//This will return the state officials within the dataset.
//return type: array of objects, each one an official, matching the lucidchart.
//This can be easily used in the front end.
//Hint: input userState can be accessed through response.state (see invocation)
const getStateOfficials = function(userState) {

  //hardcoded state for now, expand this to a dictionary
  let divisionIdFinder = "ocd-division/country:us/state:" + userState

  const stateOfficeIndices = [];
  const stateOfficeInfo = [];

  //loads two arrays, one with the indices of the corresponding official,
  //the other with the title of the official
  //these two will be merged into one object later
  for(let office of data.offices) {
    if (office.divisionId === divisionIdFinder) {

      Array.prototype.push.apply(stateOfficeIndices, office.officialIndices)

      for(let i = 0; i < office.officialIndices.length; i++) {
        stateOfficeInfo.push(office.name)
      }
    }
  }

  const stateOfficials = [];
  for (let index of stateOfficeIndices) {
    stateOfficials.push(data.officials[index])
  }

  addTitleToOfficials(stateOfficials, stateOfficeInfo)

  return stateOfficials
}

//console.log(getStateOfficials(response.state))

module.exports = {
  getOfficials: getOfficials
}
