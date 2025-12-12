var APP_DATA = {
  "scenes": [
    {
      "id": "0-einausgang",
      "name": "Ein/Ausgang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.11663403181071352,
        "pitch": 0.1427372405470706,
        "fov": 1.5289443459557697
      },
      "linkHotspots": [
        {
          "yaw": -0.7474461662672631,
          "pitch": 0.3532292941362325,
          "rotation": 3.141592653589793,
          "target": "1-bro-ansicht-1"
        },
        {
          "yaw": 0.048910924536192724,
          "pitch": 0.07615998506968147,
          "rotation": 3.141592653589793,
          "target": "2-bro-ansicht-2"
        },
        {
          "yaw": -2.1558414619189836,
          "pitch": 0.07320440195380229,
          "rotation": 4.71238898038469,
          "target": "5-kche-und-besprechungszimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bro-ansicht-1",
      "name": "Büro Ansicht 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.061974539435420084,
        "pitch": 0.2120792482711522,
        "fov": 1.687284102362717
      },
      "linkHotspots": [
        {
          "yaw": 0.47116956584506653,
          "pitch": 0.14800881382123698,
          "rotation": 3.141592653589793,
          "target": "2-bro-ansicht-2"
        },
        {
          "yaw": -0.15090078261321693,
          "pitch": 0.045611595880680866,
          "rotation": 4.71238898038469,
          "target": "3-bro-chef"
        },
        {
          "yaw": -2.485187178909751,
          "pitch": 0.13494703864210145,
          "rotation": 3.141592653589793,
          "target": "4-druckerraum"
        },
        {
          "yaw": 2.5896939107799977,
          "pitch": 0.07157748569479239,
          "rotation": 3.141592653589793,
          "target": "0-einausgang"
        },
        {
          "yaw": 3.107610849759035,
          "pitch": 0.057935922825510744,
          "rotation": 6.283185307179586,
          "target": "5-kche-und-besprechungszimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bro-ansicht-2",
      "name": "Büro Ansicht 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.077261879961714,
        "pitch": 0.11340095805804751,
        "fov": 1.5289443459557697
      },
      "linkHotspots": [
        {
          "yaw": -1.1510527105637038,
          "pitch": 0.2200037988443846,
          "rotation": 3.141592653589793,
          "target": "3-bro-chef"
        },
        {
          "yaw": -2.9302570666976706,
          "pitch": 0.09655066779939148,
          "rotation": 3.141592653589793,
          "target": "1-bro-ansicht-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9044934201974097,
          "pitch": 0.30239900783036333,
          "title": "Mitarbeiter des Monats",
          "text": "12 Monate im Jahr"
        }
      ]
    },
    {
      "id": "3-bro-chef",
      "name": "Büro Chef",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.5554497803066116,
        "pitch": 0.2751813721775296,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8905869402237574,
          "pitch": 0.11701790396545775,
          "rotation": 3.141592653589793,
          "target": "2-bro-ansicht-2"
        },
        {
          "yaw": -0.22058143464822955,
          "pitch": 0.1249167810138978,
          "rotation": 3.141592653589793,
          "target": "1-bro-ansicht-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.876003481415248,
          "pitch": 0.06497774014247426,
          "title": "Basel SBB",
          "text": "2min zu Fuss"
        }
      ]
    },
    {
      "id": "4-druckerraum",
      "name": "Druckerraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.03223750786944635,
        "pitch": 0.6987081544926745,
        "fov": 1.5289443459557697
      },
      "linkHotspots": [
        {
          "yaw": 2.133815693333016,
          "pitch": 0.300585702177262,
          "rotation": 3.141592653589793,
          "target": "1-bro-ansicht-1"
        },
        {
          "yaw": -2.139752165517679,
          "pitch": 0.26450229794433966,
          "rotation": 3.141592653589793,
          "target": "5-kche-und-besprechungszimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kche-und-besprechungszimmer",
      "name": "Küche und Besprechungszimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0667117675132154,
          "pitch": 0.0939486121124542,
          "rotation": 3.141592653589793,
          "target": "1-bro-ansicht-1"
        },
        {
          "yaw": -1.5443803637638123,
          "pitch": 0.09770804430572966,
          "rotation": 3.141592653589793,
          "target": "4-druckerraum"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PP Swiss",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
