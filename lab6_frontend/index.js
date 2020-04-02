//const base_url ; // hier url zetten en localhost aanpassen

primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity
        , min: 500
        , retries: 10
    }
})

primus.on('data', (json) => {
    if(json.action === "updated corona counter") {
        refreshData(json.data);
        console.log("test")
        console.log(json.data)
    }
})


getAll();

function getAll() {
    fetch("http://localhost:3000/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            let b = document.querySelector(".b");
            let n = document.querySelector(".n");
            let l = document.querySelector(".l");
            b.textContent = json.countries[0].Belgium;
            n.textContent = json.countries[0].Netherlands;
            l.textContent = json.countries[0].Luxemburg;     
        }
    })    
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    var drop = document.getElementById("country").value;
    var amount = document.querySelector(".cases").value;
    
    fetch(`http://localhost:3000/updatestats/`+drop, {
        method: "put",
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "amount": amount
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            //refreshData(json)
            //getAll()

            primus.write({
                "action": "updated corona counter",
                "data": json
            })
        }
    })
    
})


/* refresh data */
let refreshData = (json) => {
    let b = document.querySelector(".b");
    let n = document.querySelector(".n");
    let l = document.querySelector(".l");
    b.textContent = json.countries.Belgium;
    n.textContent = json.countries.Netherlands;
    l.textContent = json.countries.Luxemburg;
    getAll();
}