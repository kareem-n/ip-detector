let apiResponse;
let ipInfo = document.querySelector("#ip-info");
let map = document.querySelector("#map iframe");
let apiKey = "be0f755b93290b4c100445d77533d291763a417c75524e95e07819ad";
$.getJSON("https://api.ipdata.co?api-key=" + apiKey, function (data) {
  apiResponse = JSON.stringify(data, null, 2);
  apiResponse = JSON.parse(apiResponse);

  ipInfo.innerHTML = `
    <div class="inner">
        <h2 class="ip-title">IP : ${apiResponse.ip} </h2>
        <h4 class='mt'>Continent : ${apiResponse.continent_name} </h4>
        <h4>Country : <img src='${apiResponse.flag}'> ${apiResponse.country_name} </h4>
        <h4>Region : ${apiResponse.region} </h4>
        <h4>Currency : ${apiResponse.currency.name} , ${apiResponse.currency.native} </h4>
        <h4>Time Zone : ${apiResponse.time_zone.name} , ${apiResponse.time_zone.current_time} </h4>
        <h4>Language : ${apiResponse.languages[0].name} , ${apiResponse.languages[0].native}</h4>
        <h4>using proxy : ${apiResponse.threat.is_proxy ? 'yes' :'no' } </h4>
        <h4>using TOR : ${apiResponse.threat.is_tor ? 'yes' :'no' } </h4>
    </div>
    `;
    map.setAttribute('src' , `https://www.google.com/maps/embed/v1/view?key=AIzaSyCCAJeJJyz90cXB-2S6ZUsiFmt53CFCUK0&center=${apiResponse.latitude},${apiResponse.longitude}&zoom=16&&maptype=satellite`) ; 
    
    
    
});
