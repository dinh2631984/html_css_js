// this sẽ đề cập tới  object gần nhất

const nss = {
    1: 2,
    3: 4,
    ns: {
        ss: "nmms",
        ssx: 'sse'
    },
    hi: function () {
        console.log(`Hellow ${this[1]}  --- ${this.ns.ss}`);
    }
}

nss.hi();