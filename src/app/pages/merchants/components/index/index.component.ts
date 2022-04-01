import {Component, OnInit} from '@angular/core';
import {Merchants} from "../../../../interfaces/merchant";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  search: string = '';
  criteria: Array<string> = [];
  merchants: Array<Merchants> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getMerchants();
    this.criteria = this.merchants.map(mer => mer.key)
  }

  getMerchants(): void {
    this.merchants = [
      {
        "key": "A",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          },
          {
            "id": 1,
            "name": "Merchant name A"
          }
        ]
      },
      {
        "key": "B",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          },
          {
            "id": 1,
            "name": "Merchant name B"
          }
        ]
      },
      {
        "key": "C",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          },
          {
            "id": 1,
            "name": "Merchant name C"
          }
        ]
      },
      {
        "key": "D",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          },
          {
            "id": 1,
            "name": "Merchant name D"
          }
        ]
      },
      {
        "key": "E",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          },
          {
            "id": 1,
            "name": "Merchant name E"
          }
        ]
      },
      {
        "key": "F",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          },
          {
            "id": 1,
            "name": "Merchant name F"
          }
        ]
      },
      {
        "key": "G",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          },
          {
            "id": 1,
            "name": "Merchant name G"
          }
        ]
      },
      {
        "key": "H",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          },
          {
            "id": 1,
            "name": "Merchant name H"
          }
        ]
      },
      {
        "key": "I",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          },
          {
            "id": 1,
            "name": "Merchant name I"
          }
        ]
      },
      {
        "key": "J",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          },
          {
            "id": 1,
            "name": "Merchant name J"
          }
        ]
      },
      {
        "key": "K",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          },
          {
            "id": 1,
            "name": "Merchant name K"
          }
        ]
      },
      {
        "key": "L",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          },
          {
            "id": 1,
            "name": "Merchant name L"
          }
        ]
      },
      {
        "key": "M",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          },
          {
            "id": 1,
            "name": "Merchant name M"
          }
        ]
      },
      {
        "key": "N",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          },
          {
            "id": 1,
            "name": "Merchant name N"
          }
        ]
      },
      {
        "key": "O",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          },
          {
            "id": 1,
            "name": "Merchant name O"
          }
        ]
      },
      {
        "key": "P",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          },
          {
            "id": 1,
            "name": "Merchant name P"
          }
        ]
      },
      {
        "key": "Q",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          },
          {
            "id": 1,
            "name": "Merchant name Q"
          }
        ]
      },
      {
        "key": "R",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          },
          {
            "id": 1,
            "name": "Merchant name R"
          }
        ]
      },
      {
        "key": "S",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          },
          {
            "id": 1,
            "name": "Merchant name S"
          }
        ]
      },
      {
        "key": "T",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          },
          {
            "id": 1,
            "name": "Merchant name T"
          }
        ]
      },
      {
        "key": "U",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          },
          {
            "id": 1,
            "name": "Merchant name U"
          }
        ]
      },
      {
        "key": "V",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          },
          {
            "id": 1,
            "name": "Merchant name V"
          }
        ]
      },
      {
        "key": "W",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          },
          {
            "id": 1,
            "name": "Merchant name W"
          }
        ]
      },
      {
        "key": "X",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          },
          {
            "id": 1,
            "name": "Merchant name X"
          }
        ]
      },
      {
        "key": "Y",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          },
          {
            "id": 1,
            "name": "Merchant name Y"
          }
        ]
      },
      {
        "key": "Z",
        "merchants": [
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          },
          {
            "id": 1,
            "name": "Merchant name Z"
          }
        ]
      }
    ]
  }

}
