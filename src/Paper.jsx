import React, { Component } from "react";
import "./paper.css";

const records = [
  {
    id: 1,
    first_name: "Deana",
    last_name: "",
    email: "dtumelty0godaddy.com",
    timezone: "4/15/2019"
  },
  {
    id: 2,
    first_name: "Brody",
    last_name: "Somner",
    email: "bsomner1@hubpages.co",
    timezone: "12/26/2019"
  },
  {
    id: 3,
    first_name: "",
    last_name: "Deekes",
    email: "hdeekes2@oaic.gov.au",
    timezone: "4/22/2019"
  },
  {
    id: 4,
    first_name: "Horten",
    last_name: "Francis",
    email: "hfrancis3@ebaycom",
    timezone: "10/2/2019"
  },
  {
    id: 5,
    first_name: "Alwin",
    last_name: "",
    email: "acarvill4@comcast.net",
    timezone: "1/30/2020"
  },
  {
    id: 6,
    first_name: "Tricia",
    last_name: "Mascall",
    email: "tmascall5@dyndns.org",
    timezone: "6/2/2019"
  },
  {
    id: 7,
    first_name: "Katti",
    last_name: "Marczyk",
    email: "kmarczyk6@tinypic.com",
    timezone: "4/11/2019"
  },
  {
    id: 8,
    first_name: "Ira",
    last_name: "",
    email: "iclist7@harvard.edu",
    timezone: ""
  },
  {
    id: 9,
    first_name: "Remy",
    last_name: "Brigge",
    email: "rbrigge8@linkedin.com",
    timezone: "10/13/2019"
  },
  {
    id: 10,
    first_name: "Benyamin",
    last_name: "Aulsford",
    email: "baulsford9@prnewswire.com",
    timezone: "3/1/2020"
  },
  {
    id: 11,
    first_name: "",
    last_name: "Ferreri",
    email: "aferreria@lulu.com",
    timezone: "6/26/2019"
  },
  {
    id: 12,
    first_name: "Rudiger",
    last_name: "Wittey",
    email: "rwitteyb@hud.gov",
    timezone: "12/3/2019"
  },
  {
    id: 13,
    first_name: "Juliet",
    last_name: "Pomroy",
    email: "jpomroyc@netlog.com",
    timezone: "6/4/2019"
  },
  {
    id: 14,
    first_name: "Esteban",
    last_name: "Dubbin",
    email: "edubbind@123-reg.co.uk",
    timezone: "11/3/2019"
  },
  {
    id: 15,
    first_name: "Bartholemy",
    last_name: "Garforth",
    email: "",
    timezone: "9/9/2019"
  },
  {
    id: 16,
    first_name: "Winne",
    last_name: "Crose",
    email: "wcrosef@mtv.com",
    timezone: "5/5/2019"
  },
  {
    id: 17,
    first_name: "Flynn",
    last_name: "Guidotti",
    email: "fguidottig@last.fm",
    timezone: "6/16/2019"
  },
  {
    id: 18,
    first_name: "Lilli",
    last_name: "Jakoub",
    email: "ljakoubh@theglobeandmail.com",
    timezone: "10/11/2019"
  },
  {
    id: 19,
    first_name: "Barbie",
    last_name: "Lysons",
    email: "blysonsi@ucsd.edu",
    timezone: "8/24/2019"
  },
  {
    id: 20,
    first_name: "Boonie",
    last_name: "Emberton",
    email: "bembertonj@goo.gl",
    timezone: "1/25/2020"
  },
  {
    id: 21,
    first_name: "Lew",
    last_name: "Atwill",
    email: "latwillk@amazon.com",
    timezone: "9/13/2019"
  },
  {
    id: 22,
    first_name: "Fayre",
    last_name: "Sibille",
    email: "fsibillel@nymag.com",
    timezone: "12/12/2019"
  },
  {
    id: 23,
    first_name: "",
    last_name: "Barbier",
    email: "nbarbierm@noaa.gov",
    timezone: "3/27/2019"
  },
  {
    id: 24,
    first_name: "Robinet",
    last_name: "Eidler",
    email: "reidlern@nature.com",
    timezone: "3/28/2019"
  },
  {
    id: 25,
    first_name: "Bev",
    last_name: "Dunsmore",
    email: "bdunsmoreo@reference.com",
    timezone: "3/27/2019"
  },
  {
    id: 26,
    first_name: "Erasmus",
    last_name: "Puig",
    email: "epuigp@merriam-webster.com",
    timezone: "12/9/2019"
  },
  {
    id: 27,
    first_name: "Marcelo",
    last_name: "Bamb",
    email: "mbambq@europa.eu",
    timezone: "6/24/2019"
  },
  {
    id: 28,
    first_name: "Maryl",
    last_name: "Stolte",
    email: "mstolter@1und1.de",
    timezone: ""
  },
  {
    id: 29,
    first_name: "Jamesy",
    last_name: "Poley",
    email: "jpoleys@hubpages.com",
    timezone: "2/7/2020"
  },
  {
    id: 30,
    first_name: "Loni",
    last_name: "Frapwell",
    email: "lfrapwellt@google.com",
    timezone: "8/10/2019"
  },
  {
    id: 31,
    first_name: "Caron",
    last_name: "Danilyuk",
    email: "cdanilyuku@businessweek.com",
    timezone: "4/27/2019"
  },
  {
    id: 32,
    first_name: "Mara",
    last_name: "MacLleese",
    email: "mmaclleesev@geocities.com",
    timezone: "7/10/2019"
  },
  {
    id: 33,
    first_name: "Olenka",
    last_name: "Adamides",
    email: "oadamidesw@g.co",
    timezone: "3/6/2020"
  },
  {
    id: 34,
    first_name: "Giacopo",
    last_name: "MacAnespie",
    email: "gmacanespiex@slate.com",
    timezone: "7/24/2019"
  },
  {
    id: 35,
    first_name: "Andrej",
    last_name: "Volk",
    email: "avolky@storify.com",
    timezone: "2/11/2020"
  },
  {
    id: 36,
    first_name: "Georgi",
    last_name: "Laurence",
    email: "glaurencez@macromedia.com",
    timezone: "10/13/2019"
  },
  {
    id: 37,
    first_name: "Ogden",
    last_name: "Laister",
    email: "olaister10@salon.com",
    timezone: "3/11/2020"
  },
  {
    id: 38,
    first_name: "Almeria",
    last_name: "Ritchard",
    email: "aritchard11@ca.gov",
    timezone: "7/2/2019"
  },
  {
    id: 39,
    first_name: "Robers",
    last_name: "Gulland",
    email: "rgulland12@stanford.edu",
    timezone: "3/13/2019"
  },
  {
    id: 40,
    first_name: "Timothee",
    last_name: "Andreolli",
    email: "tandreolli13@baidu.com",
    timezone: "10/23/2019"
  },
  {
    id: 41,
    first_name: "",
    last_name: "Hatchett",
    email: "chatchett14@youku.com",
    timezone: "1/16/2020"
  },
  {
    id: 42,
    first_name: "Northrup",
    last_name: "Cholmondeley",
    email: "ncholmondeley15@vkontakte.ru",
    timezone: "12/1/2019"
  },
  {
    id: 43,
    first_name: "Gnni",
    last_name: "Dumbleton",
    email: "gdumbleton16@tinypic.com",
    timezone: "11/1/2019"
  },
  {
    id: 44,
    first_name: "Sven",
    last_name: "Dakhno",
    email: "sdakhno17@yellowpages.com",
    timezone: "9/26/2019"
  },
  {
    id: 45,
    first_name: "Ninnetta",
    last_name: "Paireman",
    email: "npaireman18@photobucket.com",
    timezone: "4/29/2019"
  },
  {
    id: 46,
    first_name: "Winni",
    last_name: "Ravillas",
    email: "wravillas19@sohu.com",
    timezone: "8/19/2019"
  },
  {
    id: 47,
    first_name: "Teodor",
    last_name: "",
    email: "tlafay1a@miitbeian.gov.cn",
    timezone: "11/8/2019"
  },
  {
    id: 48,
    first_name: "Zarla",
    last_name: "Grece",
    email: "zgrece1b@icio.us",
    timezone: "9/1/2019"
  },
  {
    id: 49,
    first_name: "Frannie",
    last_name: "Engelmann",
    email: "fengelmann1c@huffingtonpost.com",
    timezone: "10/8/2019"
  },
  {
    id: 50,
    first_name: "Effie",
    last_name: "Moakson",
    email: "emoakson1d@cocolog-nifty.com",
    timezone: "11/23/2019"
  },
  {
    id: 51,
    first_name: "Tierney",
    last_name: "Capelle",
    email: "tcapelle1e@ft.com",
    timezone: "11/13/2019"
  },
  {
    id: 52,
    first_name: "Christoforo",
    last_name: "Davana",
    email: "",
    timezone: "3/19/2019"
  },
  {
    id: 53,
    first_name: "Marijn",
    last_name: "Tanman",
    email: "mtanman1g@irs.gov",
    timezone: "5/20/2019"
  },
  {
    id: 54,
    first_name: "Sutherland",
    last_name: "Willatts",
    email: "swillatts1h@cocolog-nifty.com",
    timezone: "12/16/2019"
  },
  {
    id: 55,
    first_name: "Teddie",
    last_name: "Gorry",
    email: "tgorry1i@domainmarket.com",
    timezone: "11/24/2019"
  },
  {
    id: 56,
    first_name: "Dorian",
    last_name: "Dewer",
    email: "ddewer1j@lycos.com",
    timezone: "3/26/2019"
  },
  {
    id: 57,
    first_name: "Padget",
    last_name: "Waterdrinker",
    email: "pwaterdrinker1k@ucoz.com",
    timezone: "3/4/2020"
  },
  {
    id: 58,
    first_name: "Poppy",
    last_name: "Koubek",
    email: "pkoubek1l@chicagotribune.com",
    timezone: "1/7/2020"
  },
  {
    id: 59,
    first_name: "Bastian",
    last_name: "Ocheltree",
    email: "bocheltree1m@examiner.com",
    timezone: "4/18/2019"
  },
  {
    id: 60,
    first_name: "Lorenzo",
    last_name: "Sooley",
    email: "lsooley1n@dropbox.com",
    timezone: "4/12/2019"
  },
  {
    id: 61,
    first_name: "Karine",
    last_name: "Loftus",
    email: "kloftus1o@biglobe.ne.jp",
    timezone: "3/26/2019"
  },
  {
    id: 62,
    first_name: "Belle",
    last_name: "Meus",
    email: "bmeus1p@linkedin.com",
    timezone: "12/21/2019"
  },
  {
    id: 63,
    first_name: "",
    last_name: "Course",
    email: "lcourse1q@quantcast.com",
    timezone: "9/5/2019"
  },
  {
    id: 64,
    first_name: "Corbett",
    last_name: "Mougeot",
    email: "cmougeot1r@state.tx.us",
    timezone: "5/30/2019"
  },
  {
    id: 65,
    first_name: "Sari",
    last_name: "Bosch",
    email: "sbosch1s@360.cn",
    timezone: "4/30/2019"
  },
  {
    id: 66,
    first_name: "Linet",
    last_name: "Lempke",
    email: "llempke1t@who.int",
    timezone: "1/22/2020"
  },
  {
    id: 67,
    first_name: "Constancia",
    last_name: "Roles",
    email: "croles1u@a8.net",
    timezone: "3/14/2019"
  },
  {
    id: 68,
    first_name: "Zack",
    last_name: "Cutchie",
    email: "zcutchie1v@chicagotribune.com",
    timezone: "10/29/2019"
  },
  {
    id: 69,
    first_name: "Iago",
    last_name: "",
    email: "iiacovuzzi1w@jugem.jp",
    timezone: "5/23/2019"
  },
  {
    id: 70,
    first_name: "",
    last_name: "Prosek",
    email: "zprosek1x@spotify.com",
    timezone: "6/3/2019"
  },
  {
    id: 71,
    first_name: "Derrik",
    last_name: "Laimable",
    email: "dlaimable1y@behance.net",
    timezone: "7/23/2019"
  },
  {
    id: 72,
    first_name: "Stanford",
    last_name: "Blount",
    email: "sblount1z@stanford.edu",
    timezone: "5/22/2019"
  },
  {
    id: 73,
    first_name: "Gracia",
    last_name: "McConnachie",
    email: "gmcconnachie20@scribd.com",
    timezone: "1/6/2020"
  },
  {
    id: 74,
    first_name: "Bettine",
    last_name: "Ranns",
    email: "branns21@bbc.co.uk",
    timezone: "5/31/2019"
  },
  {
    id: 75,
    first_name: "Dane",
    last_name: "Scarman",
    email: "",
    timezone: "12/10/2019"
  },
  {
    id: 76,
    first_name: "Ivette",
    last_name: "Cairns",
    email: "icairns23@umn.edu",
    timezone: "3/21/2019"
  },
  {
    id: 77,
    first_name: "Lanny",
    last_name: "Ross",
    email: "lross24@sciencedirect.com",
    timezone: "10/12/2019"
  },
  {
    id: 78,
    first_name: "Lainey",
    last_name: "Pettyfar",
    email: "lpettyfar25@imdb.com",
    timezone: "1/27/2020"
  },
  {
    id: 79,
    first_name: "Lucie",
    last_name: "Scowen",
    email: "lscowen26@wikipedia.org",
    timezone: "11/23/2019"
  },
  {
    id: 80,
    first_name: "Rebe",
    last_name: "Phipard-Shears",
    email: "rphipardshears27@home.pl",
    timezone: "9/5/2019"
  },
  {
    id: 81,
    first_name: "",
    last_name: "Brettoner",
    email: "vbrettoner28@nhs.uk",
    timezone: "6/24/2019"
  },
  {
    id: 82,
    first_name: "Daven",
    last_name: "Wordington",
    email: "dwordington29@gizmodo.com",
    timezone: "11/26/2019"
  },
  {
    id: 83,
    first_name: "Jillie",
    last_name: "MacDonogh",
    email: "jmacdonogh2a@tripadvisor.com",
    timezone: "9/15/2019"
  },
  {
    id: 84,
    first_name: "Jaime",
    last_name: "Signore",
    email: "jsignore2b@ustream.tv",
    timezone: "9/23/2019"
  },
  {
    id: 85,
    first_name: "Suzy",
    last_name: "Jinkin",
    email: "sjinkin2c@w3.org",
    timezone: "6/3/2019"
  },
  {
    id: 86,
    first_name: "Upton",
    last_name: "Seal",
    email: "useal2d@jigsy.com",
    timezone: "10/7/2019"
  },
  {
    id: 87,
    first_name: "Collette",
    last_name: "Dearn",
    email: "cdearn2e@hp.com",
    timezone: "5/8/2019"
  },
  {
    id: 88,
    first_name: "Carol",
    last_name: "Szantho",
    email: "cszantho2f@xing.com",
    timezone: "2/17/2020"
  },
  {
    id: 89,
    first_name: "Christina",
    last_name: "Durling",
    email: "cdurling2g@unblog.fr",
    timezone: "12/15/2019"
  },
  {
    id: 90,
    first_name: "Mag",
    last_name: "Andreix",
    email: "mandreix2h@hp.com",
    timezone: "8/20/2019"
  },
  {
    id: 91,
    first_name: "Pepito",
    last_name: "Lathbury",
    email: "plathbury2i@wufoo.com",
    timezone: "11/20/2019"
  },
  {
    id: 92,
    first_name: "Stormi",
    last_name: "Spaice",
    email: "sspaice2j@princeton.edu",
    timezone: "8/21/2019"
  },
  {
    id: 93,
    first_name: "Morley",
    last_name: "Mutch",
    email: "mmutch2k@geocities.com",
    timezone: "3/18/2019"
  },
  {
    id: 94,
    first_name: "Oliver",
    last_name: "Whitmarsh",
    email: "owhitmarsh2l@pinterest.com",
    timezone: "4/1/2019"
  },
  {
    id: 95,
    first_name: "Leroy",
    last_name: "Boler",
    email: "lboler2m@technorati.com",
    timezone: "3/11/2020"
  },
  {
    id: 96,
    first_name: "Jeromy",
    last_name: "Fredy",
    email: "jfredy2n@elegantthemes.com",
    timezone: "6/2/2019"
  },
  {
    id: 97,
    first_name: "Marquita",
    last_name: "Berni",
    email: "mberni2o@shinystat.com",
    timezone: "2/9/2020"
  },
  {
    id: 98,
    first_name: "Uriah",
    last_name: "Bocking",
    email: "ubocking2p@lulu.com",
    timezone: "7/8/2019"
  },
  {
    id: 99,
    first_name: "Lamar",
    last_name: "Tondeur",
    email: "ltondeur2q@nationalgeographic.com",
    timezone: "10/14/2019"
  },
  {
    id: 100,
    first_name: "Woodrow",
    last_name: "Gossington",
    email: "wgossington2r@upenn.edu",
    timezone: "9/14/2019"
  }
];
let coldata = [
  { id: "id", title: "S.NO" },
  { id: "first_name", title: "Real Name" },
  { id: "last_name", title: "Sur Name" },
  { id: "email", title: "Email ID" },
  { id: "timezone", title: "Time Zone" }
];

const validators=[
    {
        email:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        name:/^[A-Za-z]+$/,
    }
]

let _haserror = false;
class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowhaserror: false
    };
  }

  generateHeaders = incomingArray => {
    return incomingArray.map((_key, index) => {
      const { key, title } = _key;
      return <th key={index}>{title.toUpperCase()}</th>;
    });
  };
  generateColumns = (incomingArray, columnIdentifier) => {
    return incomingArray.map((key, index) => {
      _haserror = false;
      return (
        <tr
          key={index}
          className={this.state.rowhaserror === true ? "rowerror" : ""}
          id={index + "_row"}
        >
          {columnIdentifier.map((identifier, index, rowid) => {
            return this.generateCells(index, key[identifier.id], identifier.id);
          })}
        </tr>
      );
    });
  };

  generateCells = (index, param, column) => {
    let emailvalidator = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //{index === "first_name" ? param : "test"}
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(pram))
    console.log(column);
    if (column === "email")
      if (emailvalidator.test(param) === false) _haserror = true;
    let cell = (
      <td
        key={index}
        className={
          param === "" ? "cellerror" : "" || _haserror ? "cellerror" : ""
        }
      >
        {param === "Tumelty" ? "hola" : param}
      </td>
    );
    _haserror = false;
    return cell;
  };

  generateGroups = incomingArray => {
    incomingArray.map((key, index) => {
      console.log(key);
      //   d.map((i, current) => {
      //     switch (current) {
      //       case "":
      //         index.erroridentifier = "Missing data";
      //         break;
      //       default:
      //         break;
      //     }
      //   });
    });
    console.log(incomingArray);
  };
  render = () => {
    return (
      <div class="table-responsive-vertical shadow-z-1">
        <table className="table table-hover table-mc-light-blue">
          <thead>
            <tr>{this.generateHeaders(coldata)}</tr>
          </thead>
          <tbody>{this.generateColumns(records, coldata)}</tbody>
        </table>
      </div>
    );
  };
}

export default Paper;
