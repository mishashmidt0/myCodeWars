let info = new User();

async function t1() {
    console.log(info.timeOpened);
    console.log(info.timezone);
    console.log(info.pageon());
    console.log(info.referrer());
    console.log(info.previousSites());
    console.log(info.browserInfo());
    console.log(info.dataCookies());

    console.log("storage")
    console.log(info.dataStorage());
    console.log(info.sizeScreen());
    // console.log(await info.position())
    console.log(await info.battery());
    console.log(await info.ip());
}

t1();
