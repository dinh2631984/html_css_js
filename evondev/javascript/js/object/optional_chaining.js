const nss = {
    1: 2,
    3: 4,
    ns: {
        ss: "nmms",
        ssx: 'sse'
    },
    hi: function () {
        console.log(`Hellow ${this[1]}  --- ${this.ns.ss}`);
    },

    // fullName: {
    //     name: 'you are'
    // }
}

console.log(nss.fullName?.name);