window.onload = ()=> {
    // first task
    let menu = document.querySelector('.menu');
    let fragment = new DocumentFragment();
    
    const submit = ()=> {
        let user = prompt("To do");
        let userArr = [];
        while(true) {
            userArr.push(user)
            user = prompt("To do")
            if(typeof user == 'object') {
                break
            }
            
    }
        for (const iterator of userArr) {
            let li = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            li.setAttribute('type', 'none')
            let span = document.createElement('span')
            span.style.width = '40%';
            span.style.display = 'inline-block'
            span.style.padding = '10px'
            checkbox.style.display = 'inline-block';
            let spanDate = document.createElement('span');
            spanDate.style.width = '40%';
            spanDate.style.display = 'inline-block'
            spanDate.style.padding = '10px'
            span.innerHTML = iterator;
            spanDate.innerHTML = `Date: ${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDay()}`
            fragment.appendChild(li)
            fragment.appendChild(span);
            fragment.appendChild(spanDate);
            li.appendChild(span);
            li.appendChild(spanDate);
            li.appendChild(checkbox);
        }
        menu.appendChild(fragment)
        if(userArr.length>5){
            menu.removeChild(menu.firstElementChild)
        }
    }
    submit()
    
    //second task
    let images = [
        {
            imgPath:'image.png',
            alt:'png image',
            href:'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        },

        {
            imgPath:'img/image.png',
            alt:'png image',
            href:'https://img.com/60903073638.jpg'
        }
    ]
    divSecondTask = document.querySelector('.secondTask');
    for (let i = 0; i<images.length; i++) {
        const {imgPath, alt, href} = images[i];
        p = document.createElement('p');
        p.innerHTML = `${alt} ${href}`
        fragment.appendChild(p)
        divSecondTask.appendChild(fragment)
    }

    //third task
    function seaBattle() {
        let letterArr = ["","A","B","C","D","E","F","G","H","i","J"];
        let div = document.querySelector('.lastTask');
        div.style.width = '100%';
        div.setAttribute('style', 'display:flex; flex-wrap:wrap');
        let divRow = document.createElement('div');
        divRow.setAttribute('style', 'display:flex; flex-direction:row; width:100%;')
        fragment.appendChild(divRow);
        div.appendChild(fragment);
        let divColumn = document.createElement('div');
        divColumn.setAttribute('style', 'display:flex; flex-direction:column; width:3%;')
        fragment.appendChild(divColumn);
        div.appendChild(fragment);
        for(let i = 0; i<letterArr.length; i++) {
            let divNew = document.createElement("div")
            divNew.style.display = "flex";
            divNew.innerHTML = letterArr[i];
            divNew.style.border = '0.1px solid black';
            divNew.style.width = '3%';
            divNew.style.height = '40px';
            divNew.style.alignItems = 'center';
            divNew.style.justifyContent = "center";
            fragment.appendChild(divNew);
            divRow.appendChild(fragment);
        }
        for(let i = 0; i!=11; i++) {
            let divNew = document.createElement("div")
            divNew.style.display = "flex";
            divNew.innerHTML = i;
            divNew.style.border = '0.1px solid black';
            divNew.style.width = '100%';
            divNew.style.height = '40px';
            divNew.style.alignItems = 'center';
            divNew.style.justifyContent = "center";
            fragment.appendChild(divNew);
            divColumn.appendChild(divNew); 
        }
        for(let i = 0; i!=10; i++) {
            let divColumn1 = document.createElement('div');
            divColumn1.setAttribute('style', 'display:flex; flex-direction:column; width:3%;')
            fragment.appendChild(divColumn1);
            div.appendChild(fragment);
            for(let i = 0; i!=11; i++) {
                let divNew = document.createElement("div")
                divNew.style.display = "flex";
                divNew.innerHTML = "";
                divNew.style.border = '0.1px solid black';
                divNew.style.width = '100%';
                divNew.style.height = '40px';
                divNew.style.alignItems = 'center';
                divNew.style.justifyContent = "center";
                fragment.appendChild(divNew);
                divColumn1.appendChild(divNew); 
            }
        }
        
    }
    seaBattle()
}