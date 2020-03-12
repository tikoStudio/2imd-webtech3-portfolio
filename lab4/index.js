class WeatherData {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.getLocation();
    }

    getLocation() {
        // sources: {@link: https://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt}
        let test = navigator.geolocation.getCurrentPosition(myPosition =>{
            var lat = myPosition.coords.latitude;
            var lng = myPosition.coords.longitude;
        }, error => {
            let errorMessage = "we cannot find your position right now.";
            document.querySelector(".errorMessage").innerHTML = errorMessage;
        }); 
        
    }
}

let WeatherAd = new WeatherData(`92fca7939f5bb09256735e63116724be`);