addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const cid = url.searchParams.get("cid");
  const fstar = url.searchParams.get("fstar") ?? 5;
  const flv = url.searchParams.get("flv") ?? 20;
  const stat1atkpercent = url.searchParams.get("stat1atkpercent") ?? 0;
  const stat1hppercent = url.searchParams.get("stat1hppercent") ?? 0;
  const stat1defpercent = url.searchParams.get("stat1defpercent") ?? 0;
  const stat1EM = url.searchParams.get("stat1EM") ?? 0;
  const stat1ERpercent = url.searchParams.get("stat1ERpercent") ?? 0;
  const stat1CRpercent = url.searchParams.get("stat1CRpercent") ?? 0;
  const stat1CDpercent = url.searchParams.get("stat1CDpercent") ?? 0;
  const stat1atk = url.searchParams.get("stat1atk") ?? 0;
  const stat1hp = url.searchParams.get("stat1hp") ?? 0;
  const stat1def = url.searchParams.get("stat1def") ?? 0;

  const pstar = url.searchParams.get("pstar") ?? 5;
  const plv = url.searchParams.get("plv") ?? 20;
  const stat2atkpercent = url.searchParams.get("stat2atkpercent") ?? 0;
  const stat2hppercent = url.searchParams.get("stat2hppercent") ?? 0;
  const stat2defpercent = url.searchParams.get("stat2defpercent") ?? 0;
  const stat2EM = url.searchParams.get("stat2EM") ?? 0;
  const stat2ERpercent = url.searchParams.get("stat2ERpercent") ?? 0;
  const stat2CRpercent = url.searchParams.get("stat2CRpercent") ?? 0;
  const stat2CDpercent = url.searchParams.get("stat2CDpercent") ?? 0;
  const stat2atk = url.searchParams.get("stat2atk") ?? 0;
  const stat2hp = url.searchParams.get("stat2hp") ?? 0;
  const stat2def = url.searchParams.get("stat2def") ?? 0;

  const sstar = url.searchParams.get("sstar") ?? 5;
  const slv = url.searchParams.get("slv") ?? 20;
  //1:HP% 2:ATK% 3:DEF% 4:EM 5:ER
  const artifact3mainstatcat =
    url.searchParams.get("artifact3mainstatcat") ?? 2;
  const stat3atkpercent = url.searchParams.get("stat3atkpercent") ?? 0;
  const stat3hppercent = url.searchParams.get("stat3hppercent") ?? 0;
  const stat3defpercent = url.searchParams.get("stat3defpercent") ?? 0;
  const stat3EM = url.searchParams.get("stat3EM") ?? 0;
  const stat3ERpercent = url.searchParams.get("stat3ERpercent") ?? 0;
  const stat3CRpercent = url.searchParams.get("stat3CRpercent") ?? 0;
  const stat3CDpercent = url.searchParams.get("stat3CDpercent") ?? 0;
  const stat3atk = url.searchParams.get("stat3atk") ?? 0;
  const stat3hp = url.searchParams.get("stat3hp") ?? 0;
  const stat3def = url.searchParams.get("stat3def") ?? 0;

  const gstar = url.searchParams.get("gstar") ?? 5;
  const glv = url.searchParams.get("glv") ?? 20;
  //1:HP% 2:ATK% 3:DEF% 4:EM 5:Physical Damage 6:Pyro Damage 7:Hydro Damage 8:Cryo Damage 9:Electro Damage 10:Anemo Damage 11:Geo Damage 12:Dendro Damage
  const artifact4mainstatcat =
    url.searchParams.get("artifact4mainstatcat") ?? 8;
  const stat4atkpercent = url.searchParams.get("stat4atkpercent") ?? 0;
  const stat4hppercent = url.searchParams.get("stat4hppercent") ?? 0;
  const stat4defpercent = url.searchParams.get("stat4defpercent") ?? 0;
  const stat4EM = url.searchParams.get("stat4EM") ?? 0;
  const stat4ERpercent = url.searchParams.get("stat4ERpercent") ?? 0;
  const stat4CRpercent = url.searchParams.get("stat4CRpercent") ?? 0;
  const stat4CDpercent = url.searchParams.get("stat4CDpercent") ?? 0;
  const stat4atk = url.searchParams.get("stat4atk") ?? 0;
  const stat4hp = url.searchParams.get("stat4hp") ?? 0;
  const stat4def = url.searchParams.get("stat4def") ?? 0;

  const cstar = url.searchParams.get("cstar") ?? 5;
  const clv = url.searchParams.get("clv") ?? 20;
  //1:HP% 2:ATK% 3:DEF% 4:EM 5:Critical Rate 6:Critical Damage 7:Healing Bonus
  const artifact5mainstatcat =
    url.searchParams.get("artifact5mainstatcat") ?? 6;
  const stat5atkpercent = url.searchParams.get("stat5atkpercent") ?? 0;
  const stat5hppercent = url.searchParams.get("stat5hppercent") ?? 0;
  const stat5defpercent = url.searchParams.get("stat5defpercent") ?? 0;
  const stat5EM = url.searchParams.get("stat5EM") ?? 0;
  const stat5ERpercent = url.searchParams.get("stat5ERpercent") ?? 0;
  const stat5CRpercent = url.searchParams.get("stat5CRpercent") ?? 0;
  const stat5CDpercent = url.searchParams.get("stat5CDpercent") ?? 0;
  const stat5atk = url.searchParams.get("stat5atk") ?? 0;
  const stat5hp = url.searchParams.get("stat5hp") ?? 0;
  const stat5def = url.searchParams.get("stat5def") ?? 0;

  // Return a 404 if the character ID is not found
  if (!cid) {
    return new Response("Not found", {
      status: 404,
    });
  }

  const idtocharacter = {
    10000058: "yae",
    10000049: "yoimiya",
    10000051: "eula",
    10000052: "raiden",
    10000030: "zhongli",
    10000046: "hutao",
    10000037: "ganyu",
    10000033: "tartaglia",
    10000002: "ayaka",
    10000057: "itto",
    10000026: "xiao",
    10000066: "ayato",
    10000025: "xingqiu",
    10000023: "xiangling",
    10000060: "yelan",
    10000054: "kokomi",
    10000069: "tighnari",
    10000070: "nilou",
    10000071: "cyno",
    10000073: "nahida",
    10000042: "keqing",
    10000031: "fischl",
    10000075: "wanderer",
    10000078: "alhaitham",
    10000079: "dehya",
    10000047: "kazuha",
    10000022: "venti",
    10000063: "shenhe",
    10000016: "diluc",
    10000029: "klee",
    10000003: "jean",
    10000032: "bennett",
    10000065: "shinobu",
    10000076: "faruzan",
    10000038: "albedo",
    10000041: "mona",
    10000056: "sara",
    10000055: "gorou",
    10000064: "yunjin",
    10000045: "rosaria",
    10000050: "thoma",
    10000074: "thoma",
    10000039: "diona",
    10000072: "candace",
    10000024: "beidou",
    10000080: "mika",
    10000027: "ningguang",
    10000034: "noelle",
    10000020: "razor",
    10000043: "sucrose",
    10000015: "kaeya",
    10000059: "heizou",
    10000048: "yanfei",
    10000077: "yaoyao",
    10000067: "collei",
    10000053: "sayu",
    10000068: "dori",
    10000036: "chongyun",
    10000014: "barbara",
    10000082: "baizhu",
    10000035: "qiqi",
    10000021: "amber",
    10000044: "xinyan",
    10000006: "lisa",
    10000062: "alloy",
    10000007: "maincharacter",
    10000084: "lyney",
    10000086: "wriothesley",
    10000087: "neuvillette",
    10000089: "furina",
    10000091: "navia",
    10000094: "chiori",
  };

  const artifactSubstatScore = {
    HIGHEST: 30,
    HIGHER: 20,
    HIGH: 15,
    MEDIUM: 10,
    LOW: 7.5,
    LOWER: 5,
    LOWEST: 2.5,
    NONE: 0,
  };

  const charactersubstatvalue = {
    yae: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    xiao: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    hutao: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    ganyu: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGHER,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    yelan: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.NONE,
      atk: artifactSubstatScore.NONE,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    raiden: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHEST,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    wanderer: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    cyno: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    alhaitham: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    itto: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGH,
      def: artifactSubstatScore.NONE,
    },
    nahida: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHEST,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    nilou: {
      cr: artifactSubstatScore.HIGHER,
      cd: artifactSubstatScore.HIGHER,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.NONE,
      atk: artifactSubstatScore.NONE,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.HIGH,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    ayaka: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGHER,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    ayato: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    tighnari: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    yoimiya: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    eula: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    tartaglia: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    zhongli: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.HIGHER,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    kazuha: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.HIGHEST,
      "atk%": artifactSubstatScore.HIGHER,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    venti: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.HIGHEST,
      "atk%": artifactSubstatScore.HIGHER,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    keqing: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    shenhe: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGHEST,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    diluc: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    klee: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    jean: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGHER,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.LOWER,
      hp: artifactSubstatScore.LOWEST,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    bennett: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHEST,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    kokomi: {
      cr: artifactSubstatScore.NONE,
      cd: artifactSubstatScore.NONE,
      er: artifactSubstatScore.HIGHER,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    xingqiu: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.LOW,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    xiangling: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHER,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    fischl: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    shinobu: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.HIGHEST,
      "atk%": artifactSubstatScore.LOWER,
      atk: artifactSubstatScore.LOWEST,
      "hp%": artifactSubstatScore.HIGHER,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    dehya: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.MEDIUM,
      hp: artifactSubstatScore.LOWER,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    faruzan: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    albedo: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.LOWER,
      atk: artifactSubstatScore.LOWEST,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGH,
      def: artifactSubstatScore.LOW,
    },
    mona: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    sara: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.LOWER,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    goru: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHEST,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGH,
      def: artifactSubstatScore.MEDIUM,
    },
    yunjin: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHEST,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.LOWER,
      atk: artifactSubstatScore.LOWEST,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGHEST,
      def: artifactSubstatScore.HIGH,
    },
    rosaria: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHER,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    thoma: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHER,
      em: artifactSubstatScore.HIGHER,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.HIGHER,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    layla: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.HIGH,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    diona: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGHER,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOWER,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.HIGH,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    candace: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.NONE,
      atk: artifactSubstatScore.NONE,
      "hp%": artifactSubstatScore.HIGHER,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    beidou: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.LOWER,
      hp: artifactSubstatScore.LOWEST,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    mika: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    razor: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    noelle: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.LOWER,
      atk: artifactSubstatScore.LOWEST,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGH,
      def: artifactSubstatScore.LOW,
    },
    ningguang: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    sucrose: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.HIGHEST,
      "atk%": artifactSubstatScore.HIGHER,
      atk: artifactSubstatScore.MEDIUM,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    yanfei: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.LOWER,
      hp: artifactSubstatScore.LOWEST,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    heizou: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.NONE,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    kaeya: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    yaoyao: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    collei: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    sayu: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    dori: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.LOW,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    chongyun: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOW,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    barbara: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGH,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    baizhu: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.HIGH,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    qiqi: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.LOWER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    amber: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.HIGH,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.LOWER,
      hp: artifactSubstatScore.LOW,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    xinyan: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.MEDIUM,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGH,
      def: artifactSubstatScore.LOW,
    },
    lisa: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    alloy: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.LOWER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    maincharacter: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.MEDIUM,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    lyney: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOWER,
      em: artifactSubstatScore.LOWER,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGH,
      def: artifactSubstatScore.LOW,
    },
    wriothesley: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOW,
      em: artifactSubstatScore.LOW,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    neuvillette: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOW,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.NONE,
      atk: artifactSubstatScore.NONE,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    furina: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.HIGH,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.NONE,
      atk: artifactSubstatScore.NONE,
      "hp%": artifactSubstatScore.HIGHEST,
      hp: artifactSubstatScore.MEDIUM,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    navia: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOW,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.HIGH,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.NONE,
      def: artifactSubstatScore.NONE,
    },
    chiori: {
      cr: artifactSubstatScore.HIGHEST,
      cd: artifactSubstatScore.HIGHEST,
      er: artifactSubstatScore.LOW,
      em: artifactSubstatScore.NONE,
      "atk%": artifactSubstatScore.MEDIUM,
      atk: artifactSubstatScore.LOW,
      "hp%": artifactSubstatScore.NONE,
      hp: artifactSubstatScore.NONE,
      "def%": artifactSubstatScore.HIGHEST,
      def: artifactSubstatScore.MEDIUM,
    },
  };

  const artifactdefaultroll = {
    5: {
      cr: 3.3,
      cd: 6.6,
      er: 5.5,
      em: 20,
      "atk%": 5,
      atk: 17,
      "hp%": 5,
      hp: 254,
      "def%": 6.2,
      def: 20,
    },
    4: {
      cr: 2.65,
      cd: 5.3,
      er: 4.4,
      em: 16,
      "atk%": 3.95,
      atk: 13,
      "hp%": 3.95,
      hp: 203,
      "def%": 5,
      def: 16,
    },
  };

  const artifactScoreTier = {
    1: {
      SSS: 1000,
      SS: 900,
      "S+": 850,
      S: 800,
      "A+": 750,
      A: 700,
      B: 600,
      C: 500,
      F: 0,
    },
  };

  const charactername = idtocharacter[cid];

  if (charactername == null) {
    return new Response("Not found", {
      status: 404,
    });
  }

  var stat1atkpercentpt =
    (stat1atkpercent / artifactdefaultroll[fstar]["atk%"]) *
    charactersubstatvalue[charactername]["atk%"];
  var stat1hppercentpt =
    (stat1hppercent / artifactdefaultroll[fstar]["hp%"]) *
    charactersubstatvalue[charactername]["hp%"];
  var stat1defpercentpt =
    (stat1defpercent / artifactdefaultroll[fstar]["def%"]) *
    charactersubstatvalue[charactername]["def%"];
  var stat1CRpt =
    (stat1CRpercent / artifactdefaultroll[fstar]["cr"]) *
    charactersubstatvalue[charactername]["cr"];
  var stat1CDpt =
    (stat1CDpercent / artifactdefaultroll[fstar]["cd"]) *
    charactersubstatvalue[charactername]["cd"];
  var stat1EMpt =
    (stat1EM / artifactdefaultroll[fstar]["em"]) *
    charactersubstatvalue[charactername]["em"];
  var stat1ERpt =
    (stat1ERpercent / artifactdefaultroll[fstar]["er"]) *
    charactersubstatvalue[charactername]["er"];
  var stat1atkpt =
    (stat1atk / artifactdefaultroll[fstar]["atk"]) *
    charactersubstatvalue[charactername]["atk"];
  var stat1hppt =
    (stat1hp / artifactdefaultroll[fstar]["hp"]) *
    charactersubstatvalue[charactername]["hp"];
  var stat1defpt =
    (stat1def / artifactdefaultroll[fstar]["def"]) *
    charactersubstatvalue[charactername]["def"];

  var stat1pt =
    stat1atkpercentpt +
    stat1hppercentpt +
    stat1defpercentpt +
    stat1CRpt +
    stat1CDpt +
    stat1EMpt +
    stat1ERpt +
    stat1atkpt +
    stat1hppt +
    stat1defpt;

  var stat2atkpercentpt =
    (stat2atkpercent / artifactdefaultroll[pstar]["atk%"]) *
    charactersubstatvalue[charactername]["atk%"];
  var stat2hppercentpt =
    (stat2hppercent / artifactdefaultroll[pstar]["hp%"]) *
    charactersubstatvalue[charactername]["hp%"];
  var stat2defpercentpt =
    (stat2defpercent / artifactdefaultroll[pstar]["def%"]) *
    charactersubstatvalue[charactername]["def%"];
  var stat2CRpt =
    (stat2CRpercent / artifactdefaultroll[pstar]["cr"]) *
    charactersubstatvalue[charactername]["cr"];
  var stat2CDpt =
    (stat2CDpercent / artifactdefaultroll[pstar]["cd"]) *
    charactersubstatvalue[charactername]["cd"];
  var stat2EMpt =
    (stat2EM / artifactdefaultroll[pstar]["em"]) *
    charactersubstatvalue[charactername]["em"];
  var stat2ERpt =
    (stat2ERpercent / artifactdefaultroll[pstar]["er"]) *
    charactersubstatvalue[charactername]["er"];
  var stat2atkpt =
    (stat2atk / artifactdefaultroll[pstar]["atk"]) *
    charactersubstatvalue[charactername]["atk"];
  var stat2hppt =
    (stat2hp / artifactdefaultroll[pstar]["hp"]) *
    charactersubstatvalue[charactername]["hp"];
  var stat2defpt =
    (stat2def / artifactdefaultroll[pstar]["def"]) *
    charactersubstatvalue[charactername]["def"];

  var stat2pt =
    stat2atkpercentpt +
    stat2hppercentpt +
    stat2defpercentpt +
    stat2CRpt +
    stat2CDpt +
    stat2EMpt +
    stat2ERpt +
    stat2atkpt +
    stat2hppt +
    stat2defpt;

  var stat3atkpercentpt =
    (stat3atkpercent / artifactdefaultroll[sstar]["atk%"]) *
    charactersubstatvalue[charactername]["atk%"];
  var stat3hppercentpt =
    (stat3hppercent / artifactdefaultroll[sstar]["hp%"]) *
    charactersubstatvalue[charactername]["hp%"];
  var stat3defpercentpt =
    (stat3defpercent / artifactdefaultroll[sstar]["def%"]) *
    charactersubstatvalue[charactername]["def%"];
  var stat3CRpt =
    (stat3CRpercent / artifactdefaultroll[sstar]["cr"]) *
    charactersubstatvalue[charactername]["cr"];
  var stat3CDpt =
    (stat3CDpercent / artifactdefaultroll[sstar]["cd"]) *
    charactersubstatvalue[charactername]["cd"];
  var stat3EMpt =
    (stat3EM / artifactdefaultroll[sstar]["em"]) *
    charactersubstatvalue[charactername]["em"];
  var stat3ERpt =
    (stat3ERpercent / artifactdefaultroll[sstar]["er"]) *
    charactersubstatvalue[charactername]["er"];
  var stat3atkpt =
    (stat3atk / artifactdefaultroll[sstar]["atk"]) *
    charactersubstatvalue[charactername]["atk"];
  var stat3hppt =
    (stat3hp / artifactdefaultroll[sstar]["hp"]) *
    charactersubstatvalue[charactername]["hp"];
  var stat3defpt =
    (stat3def / artifactdefaultroll[sstar]["def"]) *
    charactersubstatvalue[charactername]["def"];

  var stat3pt =
    stat3atkpercentpt +
    stat3hppercentpt +
    stat3defpercentpt +
    stat3CRpt +
    stat3CDpt +
    stat3EMpt +
    stat3ERpt +
    stat3atkpt +
    stat3hppt +
    stat3defpt;

  var stat4atkpercentpt =
    (stat4atkpercent / artifactdefaultroll[gstar]["atk%"]) *
    charactersubstatvalue[charactername]["atk%"];
  var stat4hppercentpt =
    (stat4hppercent / artifactdefaultroll[gstar]["hp%"]) *
    charactersubstatvalue[charactername]["hp%"];
  var stat4defpercentpt =
    (stat4defpercent / artifactdefaultroll[gstar]["def%"]) *
    charactersubstatvalue[charactername]["def%"];
  var stat4CRpt =
    (stat4CRpercent / artifactdefaultroll[gstar]["cr"]) *
    charactersubstatvalue[charactername]["cr"];
  var stat4CDpt =
    (stat4CDpercent / artifactdefaultroll[gstar]["cd"]) *
    charactersubstatvalue[charactername]["cd"];
  var stat4EMpt =
    (stat4EM / artifactdefaultroll[gstar]["em"]) *
    charactersubstatvalue[charactername]["em"];
  var stat4ERpt =
    (stat4ERpercent / artifactdefaultroll[gstar]["er"]) *
    charactersubstatvalue[charactername]["er"];
  var stat4atkpt =
    (stat4atk / artifactdefaultroll[gstar]["atk"]) *
    charactersubstatvalue[charactername]["atk"];
  var stat4hppt =
    (stat4hp / artifactdefaultroll[gstar]["hp"]) *
    charactersubstatvalue[charactername]["hp"];
  var stat4defpt =
    (stat4def / artifactdefaultroll[gstar]["def"]) *
    charactersubstatvalue[charactername]["def"];

  var stat4pt =
    stat4atkpercentpt +
    stat4hppercentpt +
    stat4defpercentpt +
    stat4CRpt +
    stat4CDpt +
    stat4EMpt +
    stat4ERpt +
    stat4atkpt +
    stat4hppt +
    stat4defpt;

  var stat5atkpercentpt =
    (stat5atkpercent / artifactdefaultroll[cstar]["atk%"]) *
    charactersubstatvalue[charactername]["atk%"];
  var stat5hppercentpt =
    (stat5hppercent / artifactdefaultroll[cstar]["hp%"]) *
    charactersubstatvalue[charactername]["hp%"];
  var stat5defpercentpt =
    (stat5defpercent / artifactdefaultroll[cstar]["def%"]) *
    charactersubstatvalue[charactername]["def%"];
  var stat5CRpt =
    (stat5CRpercent / artifactdefaultroll[cstar]["cr"]) *
    charactersubstatvalue[charactername]["cr"];
  var stat5CDpt =
    (stat5CDpercent / artifactdefaultroll[cstar]["cd"]) *
    charactersubstatvalue[charactername]["cd"];
  var stat5EMpt =
    (stat5EM / artifactdefaultroll[cstar]["em"]) *
    charactersubstatvalue[charactername]["em"];
  var stat5ERpt =
    (stat5ERpercent / artifactdefaultroll[cstar]["er"]) *
    charactersubstatvalue[charactername]["er"];
  var stat5atkpt =
    (stat5atk / artifactdefaultroll[cstar]["atk"]) *
    charactersubstatvalue[charactername]["atk"];
  var stat5hppt =
    (stat5hp / artifactdefaultroll[cstar]["hp"]) *
    charactersubstatvalue[charactername]["hp"];
  var stat5defpt =
    (stat5def / artifactdefaultroll[cstar]["def"]) *
    charactersubstatvalue[charactername]["def"];

  var stat5pt =
    stat5atkpercentpt +
    stat5hppercentpt +
    stat5defpercentpt +
    stat5CRpt +
    stat5CDpt +
    stat5EMpt +
    stat5ERpt +
    stat5atkpt +
    stat5hppt +
    stat5defpt;

  var allpt = stat1pt + stat2pt + stat3pt + stat4pt + stat5pt;

  const num = 1;

  let result = "";
  for (const rank in artifactScoreTier[num]) {
    if (allpt >= artifactScoreTier[num][rank]) {
      result = rank;
      break;
    }
  }

  const response = {
    charactername: charactername,
    stat1pt: stat1pt,
    stat2pt: stat2pt,
    stat3pt: stat3pt,
    stat4pt: stat4pt,
    stat5pt: stat5pt,
    allpt: allpt,
    result: result,
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
