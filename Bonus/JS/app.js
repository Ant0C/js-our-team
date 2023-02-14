//***Informazioni sul team da inserire in un array

const ourTeam = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        position: "Founder&CEO",
        photo: "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        position: "Chief Editor",
        photo: "./img/angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        position: "Office Manager",
        photo: "./img/walter-gordon-office-manager.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        position: "Social Media Manager",
        photo: "./img/angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        position: "Developer",
        photo: "./img/scott-estrada-developer.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        position: "Graphic Designer",
        photo: "./img/barbara-ramos-graphic-designer.jpg",
    }
]
//console.log(ourTeam)

//***Stampo in console ogni informazione senza richiamarle in modo preciso

for(let key in ourTeam){

    console.log(ourTeam[key])
}

//***Adesso ogni informazione la stampo nel DOM
//ma devo richiamare ogni informazione per poterla inserire nel HTML

let info = document.getElementById("containerr")
//console.log(info)

for(i=0; i<ourTeam.length; i++){
    const team = ourTeam[i]
    const firstName = team.firstName;
    const lastName = team.lastName;
    const position = team.position;
    const photo = team.photo;

    //console.log(firstName)

    let data =
    `
    <ul>
        <li>${firstName}</li>
        <li>${lastName}</li>
        <li>${position}</li>
    </ul>

    <img src="${photo}" alt="">
    `
    console.log(data)

    info.innerHTML += data;
}