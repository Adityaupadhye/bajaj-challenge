const API_URL='https://prod-24.centralindia.logic.azure.com/workflows/78d6df0ed1384ee0b7d04918f1a32b85/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=i6gXuS7-5_fFVf-0u8M4UfymINDULCMifsscfN5cPKM'
const btn=document.getElementById("btn");


function run(){
    var http=new XMLHttpRequest();
    const data={
        "Name": "Aditya Upadhye",
        "Email": "upadhyeas18.elec@coep.ac.in",
        "College": "COEP",
        "StudentId": "111805079",
        "FileName": "code.js",
        "Password": btoa("upadhyeas18.elec@coep.ac.in")
    }

    http.open('PUT', API_URL, true);
    for(var key in data){
        //console.log(key, data[key]);
        http.setRequestHeader(key, data[key]);
    }
    //console.log(http);

    console.log(data);
    var file=document.querySelector("#file").files[0];

    http.onreadystatechange = function(){
        console.log(this.status, this.response);
    }

    var reader= new FileReader();
    reader.onload=function(e){
        console.log(typeof(e.target.result));
        var blob=new Blob([e.target.result]);
        console.log(blob);
        http.send(blob);
    }

    reader.onerror= function(e){
        console.log("error"+ e.type);
    }
    reader.readAsBinaryString(file);

}
