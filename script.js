let request = new XMLHttpRequest();
const wrapper = document.querySelector('.myDiv');
const selectOpt = document.querySelector('#select');
const body = document.querySelector('body');
const formSelect = document.querySelector('.form-select')
const formControl = document.querySelector("#form-control");
request.addEventListener('readystatechange', () => {
    if (request.readyState==4 && request.status == 200) {

        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                let slicedData = data.slice(0, 20)

                slicedData.map((country) => {

                    // create elements 
                    // card 
                    const childDiv = document.createElement("a");
                    childDiv.classList.add("col-lg-2", "col-md-3", "col-12", "m-4", "shadow", "rounded", "pb-4", "childDiv", "text-muted")
                    wrapper.appendChild(childDiv);
                    childDiv.href = "file:///C:/Users/user/Desktop/imtihon_5oy/second.html";

                    // image 
                    const image = document.createElement("img");
                    let a = image.setAttribute("src", `${country.flags.png}`);
                    image.classList.add("img-fluid");
                    childDiv.appendChild(image);

                    // imagedan keyingi div 
                    let infos = document.createElement("div");
                    childDiv.appendChild(infos);
                    infos.classList.add("mx-4");

                    // country name 
                    const countName = document.createElement("h2");
                    countName.textContent = country.name.common;
                    countName.classList.add("mt-4", "fs-5");

                    infos.appendChild(countName);

                    let pop = document.createElement('p');
                    pop.classList.add("fs-6", "text-muted", "mt-2", "mb-0")
                    pop.textContent = `Population:  ${country.population}`;
                    infos.appendChild(pop);

                    let reg = document.createElement('p');
                    reg.classList.add("fs-6", "text-muted", "mt-2", "mb-0")
                    reg.textContent = `Region: ${country.continents}`;
                    infos.appendChild(reg);

                    let cap = document.createElement('p');
                    cap.classList.add("fs-6", "text-muted", "mt-2", "mb-0")
                    cap.textContent = `Capital: ${country.capital}`;
                    infos.appendChild(cap);


                    // select option part 
                    selectOpt.addEventListener("change", (e) => {
                        e.preventDefault();
                        if (selectOpt.value != "All countries") {
                            if (selectOpt.value != String(country.continents)) {
                                childDiv.style.display = "none";
                            }
                            else {
                                childDiv.style.display = "block";
                            }
                        }
                        else {
                            childDiv.style.display = "block"
                        }
                    }
                    )

                    // search 
                
                    formControl.addEventListener("input" ,e => {
                        e.preventDefault();
                        const val = e.target.value;
                        let lower = country.name.common.toLowerCase();
                        let isVisible = lower.includes(val);
                            if(!isVisible){
                                childDiv.style.display = "none";
                            }
                            else{
                                childDiv.style.display = "block"
                            }
                    })

                    // dark mode 
                    let lamp = false;
                    const Mybtn = document.querySelector('.myBtn');
                    Mybtn.addEventListener("click", (e) => {
                        e.preventDefault();
                        lamp = !lamp;
                        if (lamp) {
                            body.classList.add("dark-mode");
                        }
                        else {
                            body.classList.remove("dark-mode");
                        }
                    })
                })
            }
            )
        // media-query 
        function myFunction(x) {
            if (x.matches) {
                formSelect.classList.remove("w-25");
            } else {
                formSelect.classList.add("w-25");

            }
        }

        var x = window.matchMedia("(max-width: 576px)")
        myFunction(x)
        x.addListener(myFunction)
    }
    else if(request.readyState == 4) {
       let errorDiv = document.createElement('h4');
       errorDiv.textContent = "Could not fetch!";
       errorDiv.classList.add("text-center", "p-4","text-warning", "bg-secondary", "border",  "border-warning", "rounded", "fs-4", "w-25", "m-auto", "mt-5");
       body.appendChild(errorDiv)
    }
})

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
