async function a(i) {
    let data = await fetch("main.json");
    let json = await data.json();

    let first__img = document.getElementById('first_img');
    first__img.src = json[i].first_img;

    let h1__title = document.getElementById('h1__title');
    h1__title.innerText = json[i].h1__title;

    let h2__sub_title = document.getElementById('h2__sub_title');
    h2__sub_title.innerText = json[i].h2__sub_title;

    let p__text = document.getElementById('p__text');
    p__text.innerText = json[i].p__text;

    let img__criterion = document.getElementsByClassName('img__criterion');
    img__criterion[0].src = json[i].img__criterion;
    img__criterion[1].src = json[i].img__criterion;
    img__criterion[2].src = json[i].img__criterion;

    let p__criterion = document.getElementsByClassName('p__criterion');
    p__criterion[0].innerText = json[i].p__criterion[0];
    p__criterion[1].innerText = json[i].p__criterion[1];
    p__criterion[2].innerText = json[i].p__criterion[2];

    if (json[i].page_name == "podveska"){
        let table = document.getElementById('table');
        let row = document.createElement('tr');
        let th = document.createElement('th');
        th.colSpan = 2;
        let u = document.createElement('u');
        u.innerText = json[i].table__title1;
        th.appendChild(u);
        row.appendChild(th);
        table.appendChild(row);
        for (const [key, value] of Object.entries(json[i].table1)) {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerText = key;
            td2.innerText = value;
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
        }

        table = document.getElementById('table');
        row = document.createElement('tr');
        th = document.createElement('th');
        th.colSpan = 2;
        u = document.createElement('u');
        u.innerText = json[i].table__title2;
        th.appendChild(u);
        row.appendChild(th);
        table.appendChild(row);
        for (const [key, value] of Object.entries(json[i].table2)) {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerText = key;
            td2.innerText = value;
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
        }

        table = document.getElementById('table');
        row = document.createElement('tr');
        th = document.createElement('th');
        th.colSpan = 2;
        u = document.createElement('u');
        u.innerText = json[i].table__title3;
        th.appendChild(u);
        row.appendChild(th);
        table.appendChild(row);
        for (const [key, value] of Object.entries(json[i].table3)) {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerText = key;
            td2.innerText = value;
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
        }
    }else{
        let table = document.getElementById('table');
        let row = document.createElement('tr');
        let th = document.createElement('th');
        th.colSpan = 2;
        let u = document.createElement('u');
        u.innerText = json[i].table__title;
        th.appendChild(u);
        row.appendChild(th);
        table.appendChild(row);
        for (const [key, value] of Object.entries(json[i].table)) {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerText = key;
            td2.innerText = value;
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
            
        }
    }
    let table__img = document.getElementById('table__img');
    table__img.src = json[i].table__img;
}

let all_pages = ["podveska", "to", "far", "dvig", "shinomontazh", "svar", "tormoz", "comrem", "grm"];
let params = (new URL (document.location)).searchParams;
a(all_pages.indexOf(params.get("page")));