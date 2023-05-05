/*
[
  {
    "name": "iso-8859-2",
    "codes": [
      {
        "code": "0x00A0",
        "char": " ",
        "name": "NO-BREAK SPACE"
      },
      {
        "code": "0x00A1",
        "char": "¡",
        "name": "INVERTED EXCLAMATION MARK"
      },
      {
        "code": "0x00A2",
        "char": "¢",
        "name": "CENT SIGN"
      }
    ]
  },
  {
    "name": "czech alphabet",
    "codes": [
      {
        "code": "0x0041",
        "char": "A",
        "name": "LATIN CAPITAL LETTER A"
      },
            {
        "code": "0x0042",
        "char": "B",
        "name": "LATIN CAPITAL LETTER B"
      }
    ]
  }
]*/


export  class Filters {

  // create object for czech alphabet containing character name and unicode
    // A - LATIN CAPITAL LETTER A (U+0041)
    // a - LATIN SMALL LETTER A (U+0061)
    // Á - LATIN CAPITAL LETTER A WITH ACUTE (U+00C1)
    // á - LATIN SMALL LETTER A WITH ACUTE (U+00E1)
    // B - LATIN CAPITAL LETTER B (U+0042)
    // b - LATIN SMALL LETTER B (U+0062)
    // C - LATIN CAPITAL LETTER C (U+0043)
    // c - LATIN SMALL LETTER C (U+0063)
    // Č - LATIN CAPITAL LETTER C WITH CARON (U+010C)
    // č - LATIN SMALL LETTER C WITH CARON (U+010D)
    // D - LATIN CAPITAL LETTER D (U+0044)
    // d - LATIN SMALL LETTER D (U+0064)
    // Ď - LATIN CAPITAL LETTER D WITH CARON (U+010E)
    // ď - LATIN SMALL LETTER D WITH CARON (U+010F)
    // E - LATIN CAPITAL LETTER E (U+0045)
    // e - LATIN SMALL LETTER E (U+0065)
    // É - LATIN CAPITAL LETTER E WITH ACUTE (U+00C9)
    // é - LATIN SMALL LETTER E WITH ACUTE (U+00E9)
    // Ě - LATIN CAPITAL LETTER E WITH CARON (U+011A)
    // ě - LATIN SMALL LETTER E WITH CARON (U+011B)
    // F - LATIN CAPITAL LETTER F (U+0046)
    // f - LATIN SMALL LETTER F (U+0066)
    // G - LATIN CAPITAL LETTER G (U+0047)
    // g - LATIN SMALL LETTER G (U+0067)
    // H - LATIN CAPITAL LETTER H (U+0048)
    // h - LATIN SMALL LETTER H (U+0068)
    // CH - LATIN CAPITAL LETTER C WITH HACEK (U+010C + U+0048)
    // ch - LATIN SMALL LETTER C WITH HACEK (U+010D + U+0068)
    // I - LATIN CAPITAL LETTER I (U+0049)
    // i - LATIN SMALL LETTER I (U+0069)
    // Í - LATIN CAPITAL LETTER I WITH ACUTE (U+00CD)
    // í - LATIN SMALL LETTER I WITH ACUTE (U+00ED)
    static  createCzechAlphabet() {
        const czechAlphabet = [
            {
                "code": "0x0041",
                "char": "A",
                "name": "LATIN CAPITAL LETTER A"
            },          {
                "code": "0x0061",
                "char": "a",
                "name": "LATIN SMALL LETTER A"
            },          {
                "code": "0x00C1",
                "char": "Á",
"name": "LATIN CAPITAL LETTER A WITH ACUTE"
            },          {
                "code": "0x00E1",
                "char": "á",
                "name": "LATIN SMALL LETTER A WITH ACUTE"
            },          {
                "code": "0x0042",
                "char": "B",
                "name": "LATIN CAPITAL LETTER B"
            },          {
                "code": "0x0062",
                "char": "b",
                "name": "LATIN SMALL LETTER B"
            },          {
                "code": "0x0043",
                "char": "C",
                "name": "LATIN CAPITAL LETTER C"
            },          {
                "code": "0x0063",
                "char": "c",
                "name": "LATIN SMALL LETTER C"
            },          {
                "code": "0x010C",
                "char": "Č",
                "name": "LATIN CAPITAL LETTER C WITH CARON"
            },          {
                "code": "0x010D",
                "char": "č",
                "name": "LATIN SMALL LETTER C WITH CARON"
            },          {
                "code": "0x0044",
                "char": "D",
                "name": "LATIN CAPITAL LETTER D"
            },          {
                "code": "0x0064",
                "char": "d",
                "name": "LATIN SMALL LETTER D"
            },          {
                "code": "0x010E",
                "char": "Ď",
                "name": "LATIN CAPITAL LETTER D WITH CARON"
            },          {
                "code": "0x010F",
                "char": "ď",
                "name": "LATIN SMALL LETTER D WITH CARON"
            },          {
                "code": "0x0045",

                "char": "E",
                "name": "LATIN CAPITAL LETTER E"
            },         {
                "code": "0x0065",
                "char": "e",
                "name": "LATIN SMALL LETTER E"
            },          {
                "code": "0x00C9",
                "char": "É",
                "name": "LATIN CAPITAL LETTER E WITH ACUTE"
            },          {
                "code": "0x00E9",
                "char": "é",
                "name": "LATIN SMALL LETTER E WITH ACUTE"
            },          {
                "code": "0x011A",
                "char": "Ě",
                "name": "LATIN CAPITAL LETTER E WITH CARON"
            },          {
                "code": "0x011B",
                "char": "ě",
                "name": "LATIN SMALL LETTER E WITH CARON"
            },          {
            "code": "0x0046",
            "char": "F",
            "name": "LATIN CAPITAL LETTER F"
            },          {
                "code": "0x0066",
                "char": "f",

                "name": "LATIN SMALL LETTER F"
            },          {
                "code": "0x0047",
                "char": "G",
                "name": "LATIN CAPITAL LETTER G"
            },          {
                "code": "0x0067",
                "char": "g",
                "name": "LATIN SMALL LETTER G"
            },          {
                "code": "0x0048",
                "char": "H",
                "name": "LATIN CAPITAL LETTER H"
            },          {
                "code": "0x0068",
                "char": "h",
                "name": "LATIN SMALL LETTER H"
            },          {
                "code": "0x010C",
                "char": "CH",
                "name": "LATIN CAPITAL LETTER C WITH HACEK"
            },          {
                "code": "0x010D",
                "char": "ch",
                "name": "LATIN SMALL LETTER C WITH HACEK"
            },          {
                "code": "0x0049",
                "char": "I",
                "name": "LATIN CAPITAL LETTER I"
            },          {
                "code": "0x0069",
                "char": "i",
                "name": "LATIN SMALL LETTER I"
            },          {
                "code": "0x00CD",
                "char": "Í",
                "name": "LATIN CAPITAL LETTER I WITH ACUTE"
            },          {
                "code": "0x00ED",
                "char": "í",
                "name": "LATIN SMALL LETTER I WITH ACUTE"
            },          {
                "code": "0x004A",
                "char": "J",
                "name": "LATIN CAPITAL LETTER J"
            },          {
                "code": "0x006A",
                "char": "j",
                "name": "LATIN SMALL LETTER J"
            },          {
                "code": "0x004B",
                "char": "K",
                "name": "LATIN CAPITAL LETTER K"
            },          {
                "code": "0x006B",
                "char": "k",
                "name": "LATIN SMALL LETTER K"
            },          {
                "code": "0x004C",
                "char": "L",
                "name": "LATIN CAPITAL LETTER L"
            },          {
                "code": "0x006C",
                "char": "l",
                "name": "LATIN SMALL LETTER L"
            },          {
                "code": "0x004D",
                "char": "M",
                "name": "LATIN CAPITAL LETTER M"
            },          {
                "code": "0x006D",
                "char": "m",
                "name": "LATIN SMALL LETTER M"
            },          {
                "code": "0x004E",
                "char": "N",
                "name": "LATIN CAPITAL LETTER N"
            },          {
                "code": "0x006E",
                "char": "n",
                "name": "LATIN SMALL LETTER N"
            },          {
                "code": "0x00D1",
                "char": "Ñ",
                "name": "LATIN CAPITAL LETTER N WITH TILDE"
            },          {
                "code": "0x00F1",
                "char": "ñ",
                "name": "LATIN SMALL LETTER N WITH TILDE"
            },          {
                "code": "0x004F",
                "char": "O",
                "name": "LATIN CAPITAL LETTER O"
            },          {
                "code": "0x006F",
                "char": "o",
                "name": "LATIN SMALL LETTER O"
            },          {
                "code": "0x00D3",
                "char": "Ó",
                "name": "LATIN CAPITAL LETTER O WITH ACUTE"
            },          {
                "code": "0x00F3",
                "char": "ó",
                "name": "LATIN SMALL LETTER O WITH ACUTE"
            },          {
                "code": "0x0050",
                "char": "P",
                "name": "LATIN CAPITAL LETTER P"
            },          {
                "code": "0x0070",
                "char": "p",
                "name": "LATIN SMALL LETTER P"
            },          {
                "code": "0x0051",
                "char": "Q",
                "name": "LATIN CAPITAL LETTER Q"
            },          {
                "code": "0x0071",
                "char": "q",
                "name": "LATIN SMALL LETTER Q"
            },          {
                "code": "0x0052",
                "char": "R",
                "name": "LATIN CAPITAL LETTER R"
            },          {
                "code": "0x0072",
                "char": "r",
                "name": "LATIN SMALL LETTER R"
            }, {
                "code": "0x0158",
                "char": "Ř",
            }
            ,          {
                "code": "0x0159",
                "char": "ř",
                "name": "LATIN SMALL LETTER R WITH CARON"
            },
            {
                "code": "0x0053",
                "char": "S",
                "name": "LATIN CAPITAL LETTER S"
            },          {
                "code": "0x0073",
                "char": "s",
                "name": "LATIN SMALL LETTER S"
            },          {
                "code": "0x0160",
                "char": "Š",
                "name": "LATIN CAPITAL LETTER S WITH CARON"
            },          {
                "code": "0x0161",
                "char": "š",
                "name": "LATIN SMALL LETTER S WITH CARON"
            },          {
                "code": "0x0054",
                "char": "T",
                "name": "LATIN CAPITAL LETTER T"
            },          {
                "code": "0x0074",
                "char": "t",
                "name": "LATIN SMALL LETTER T"
            },          {
                "code": "0x0055",
                "char": "U",
                "name": "LATIN CAPITAL LETTER U"
            },          {
                "code": "0x0075",
                "char": "u",
                "name": "LATIN SMALL LETTER U"
            },          {
                "code": "0x00DA",
                "char": "Ú",
                "name": "LATIN CAPITAL LETTER U WITH ACUTE"
            },          {
                "code": "0x00FA",
                "char": "ú",
                "name": "LATIN SMALL LETTER U WITH ACUTE"
            },          {
                "code": "0x0056",
                "char": "V",
                "name": "LATIN CAPITAL LETTER V"
            },          {
                "code": "0x0076",
                "char": "v",
                "name": "LATIN SMALL LETTER V"
            },          {
                "code": "0x0057",
                "char": "W",
                "name": "LATIN CAPITAL LETTER W"
            },          {
                "code": "0x0077",
                "char": "w",
                "name": "LATIN SMALL LETTER W"
            },          {
                "code": "0x0058",
                "char": "X",
                "name": "LATIN CAPITAL LETTER X"
            },          {
                "code": "0x0078",
                "char": "x",
                "name": "LATIN SMALL LETTER X"
            },          {
                "code": "0x0059",
                "char": "Y",
                "name": "LATIN CAPITAL LETTER Y"
            },          {
                "code": "0x0079",
                "char": "y",
                "name": "LATIN SMALL LETTER Y"
            },          {
                "code": "0x005A",
                "char": "Z",
                "name": "LATIN CAPITAL LETTER Z"
            },          {
                "code": "0x007A",
                "char": "z",
                "name": "LATIN SMALL LETTER Z"
            },          {
                "code": "0x017D",
                "char": "Ž",
                "name": "LATIN CAPITAL LETTER Z WITH CARON"
            },          {
                "code": "0x017E",
                "char": "ž",
                "name": "LATIN SMALL LETTER Z WITH CARON"
            },


        ];
    }
    static createNumbersCharacters() {
        return [
            {
                "code": "0x0030",
                "char": "0",
                "name": "DIGIT ZERO"
            },          {
                "code": "0x0031",
                "char": "1",
                "name": "DIGIT ONE"
            },          {
                "code": "0x0032",
                "char": "2",
                "name": "DIGIT TWO"
            },          {
                "code": "0x0033",
                "char": "3",
                "name": "DIGIT THREE"
            },          {
                "code": "0x0034",
                "char": "4",
                "name": "DIGIT FOUR"
            },          {
                "code": "0x0035",
                "char": "5",
                "name": "DIGIT FIVE"
            },          {
                "code": "0x0036",
                "char": "6",
                "name": "DIGIT SIX"
            },          {
                "code": "0x0037",
                "char": "7",
                "name": "DIGIT SEVEN"
            },          {
                "code": "0x0038",
                "char": "8",
                "name": "DIGIT EIGHT"
            },          {
                "code": "0x0039",
                "char": "9",
                "name": "DIGIT NINE"
            },
        ];
    }
}