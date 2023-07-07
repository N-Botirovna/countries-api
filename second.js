const wrapper = document.querySelector('.myDiv');

fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                let slicedData = data.slice(0, 20)

                slicedData.map((country) => {
                    const childDiv = document.createElement("a");
                    childDiv.classList.add("col-lg-2", "col-md-3", "col-12", "m-4", "shadow", "rounded", "pb-4", "childDiv", "text-muted")
                    wrapper.appendChild(childDiv);

                    
                })})