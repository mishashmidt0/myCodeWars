class User {

    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset() / 60;
    }

    pageon() {
        /**
         * file location
         */
        return window.location.pathname
    }

    referrer() {
        /**
         * property returns the URI of the page that linked to this page.
         */
        return document.referrer
    }

    previousSites() {
        /**
         * integer representing the number of elements in the session history
         */
        return history.length
    }

    browserInfo() {
        return navigator
    }

    dataCookies() {
        return decodeURIComponent(document.cookie.split(";"))
    }

    dataStorage() {
        return localStorage
    }

    sizeScreen() {
        return {
            width: screen.width,
            height: screen.height,
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            screenAvailWidth: screen.availWidth,
            screenAvailHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth

        }
    }


    async position() {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            heading: pos.coords.heading,
            speed: pos.coords.speed,
            timestamp: pos.timestamp,
        };
    }

    async battery() {
        /**
         * charging
         * chargingTime
         * level
         */
        return await navigator.getBattery();

    }

    async ip() {
        /**
         *  city
         *  continent
         *  countryCode
         *  countryName
         *  ipAddress
         *  statProv
         */
        let res = await (await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json()
        return data;

    }
}
