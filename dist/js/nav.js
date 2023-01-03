const navBtn = document.querySelector(".nav-btn");
const navBtnSpan = document.querySelector(".nav-btn-span");
const nav = document.querySelector(".nav");
const filterBtn = document.querySelector(".filter-btn");
const filter = document.querySelector(".filter");
const brandBtn1 = document.querySelector(".brand-btn1");
const brandBtn2 = document.querySelector(".brand-btn2");
const brandBtn3 = document.querySelector(".brand-btn3");
const brandBtn4 = document.querySelector(".brand-btn4");
const submitBtn = document.querySelector(".submit-btn");

let toggle = false;
let filterToggle = false;

navBtn.addEventListener("click", function () {
    if (!toggle) {
        navBtnSpan.classList.add("open");
        nav.classList.add("open");
        toggle = true;
    } else {
        navBtnSpan.classList.remove("open");
        nav.classList.remove("open");
        toggle = false;
    }
});

filterBtn.addEventListener("click", function () {
    if (!filterToggle) {
        filter.classList.add("open");
        filterBtn.innerHTML = `<i class="fa fa-close"></i>`;
        navBtn.classList.add("fade");

        filterToggle = true;
    } else {
        filter.classList.remove("open");
        filterBtn.innerHTML = `<i class="fa fa-filter"></i>`;
        navBtn.classList.remove("fade");
        filterToggle = false;
    }
});

let brand = undefined;

brandBtn1.addEventListener("click", function () {
    brandBtn1.classList.add("btn-selected");
    brand = "Nike Air Jordans";
    brandBtn2.classList.remove("btn-selected");
    brandBtn3.classList.remove("btn-selected");
    brandBtn4.classList.remove("btn-selected");
});

brandBtn2.addEventListener("click", function () {
    brandBtn2.classList.add("btn-selected");
    brand = "Nike Air Force";
    brandBtn1.classList.remove("btn-selected");
    brandBtn3.classList.remove("btn-selected");
    brandBtn4.classList.remove("btn-selected");
});

brandBtn3.addEventListener("click", function () {
    brandBtn3.classList.add("btn-selected");
    brand = "Nike Air Max";
    brandBtn1.classList.remove("btn-selected");
    brandBtn2.classList.remove("btn-selected");
    brandBtn4.classList.remove("btn-selected");
});

brandBtn4.addEventListener("click", function () {
    brand = "Nike Bags";
    brandBtn4.classList.add("btn-selected");
    brandBtn1.classList.remove("btn-selected");
    brandBtn2.classList.remove("btn-selected");
    brandBtn3.classList.remove("btn-selected");
});

submitBtn.addEventListener("click", function () {
    if (brand == "Nike Air Jordans") {
        navBtnSpan.classList.remove("open");
        nav.classList.remove("open");
        filter.classList.remove("open");
        filterBtn.innerHTML = `<i class="fa fa-filter"></i>`;
        navBtn.classList.remove("fade");
        toggle = false;
        filterToggle = false;
        brandBtn1.classList.remove("btn-selected");
        brand = undefined;
        brandBtn2.classList.remove("btn-selected");
        brandBtn3.classList.remove("btn-selected");
        brandBtn4.classList.remove("btn-selected");
        cardsDiv.innerHTML = "";
        itemDiv.innerHTML = "";
        for (let i = 0; i < cardHeaders.length; i++) {
            if (cardHeaders[i].charAt(9) == "J") {
                cardsDiv.innerHTML += `<div class="card">
                    <div class="card-img">
                        <a href="#" value="${cardHeaders[i]}" class="shoe-link"
                            ><img loading="lazy" src="images/output/shoepic${i}.jpg" alt="Pic"
                        />
                        </a>
                    </div>
                    <div class="card-header">${cardHeaders[i]}</div>
                    <div class="card-price">Contact for info and prices</div>
                </div>`;
            }
        }
    } else if (brand == "Nike Air Force") {
        navBtnSpan.classList.remove("open");
        nav.classList.remove("open");
        filter.classList.remove("open");
        filterBtn.innerHTML = `<i class="fa fa-filter"></i>`;
        navBtn.classList.remove("fade");
        toggle = false;
        filterToggle = false;
        brandBtn2.classList.remove("btn-selected");
        brand = undefined;
        brandBtn1.classList.remove("btn-selected");
        brandBtn3.classList.remove("btn-selected");
        brandBtn4.classList.remove("btn-selected");
        cardsDiv.innerHTML = "";
        itemDiv.innerHTML = "";
        for (let i = 0; i < cardHeaders.length; i++) {
            if (cardHeaders[i].charAt(9) == "F") {
                cardsDiv.innerHTML += `<div class="card">
                    <div class="card-img">
                        <a href="#" value="${cardHeaders[i]}" class="shoe-link"
                            ><img loading="lazy" src="images/output/shoepic${i}.jpg" alt="Pic"
                        />
                        </a>
                    </div>
                    <div class="card-header">${cardHeaders[i]}</div>
                    <div class="card-price">Contact for info and prices</div>
                </div>`;
            }
        }
    } else if (brand == "Nike Air Max") {
        navBtnSpan.classList.remove("open");
        nav.classList.remove("open");
        filter.classList.remove("open");
        filterBtn.innerHTML = `<i class="fa fa-filter"></i>`;
        navBtn.classList.remove("fade");
        toggle = false;
        filterToggle = false;
        brandBtn3.classList.remove("btn-selected");
        brand = undefined;
        brandBtn1.classList.remove("btn-selected");
        brandBtn2.classList.remove("btn-selected");
        brandBtn4.classList.remove("btn-selected");
        cardsDiv.innerHTML = "";
        itemDiv.innerHTML = "";
        for (let i = 0; i < cardHeaders.length; i++) {
            if (cardHeaders[i].charAt(9) == "M") {
                cardsDiv.innerHTML += `<div class="card">
                    <div class="card-img">
                        <a href="#" value="${cardHeaders[i]}" class="shoe-link"
                            ><img loading="lazy" src="images/output/shoepic${i}.jpg" alt="Pic"
                        />
                        </a>
                    </div>
                    <div class="card-header">${cardHeaders[i]}</div>
                    <div class="card-price">Contact for info and prices</div>
                </div>`;
            }
        }
    } else if (brand == "Nike Bags") {
        navBtnSpan.classList.remove("open");
        nav.classList.remove("open");
        filter.classList.remove("open");
        filterBtn.innerHTML = `<i class="fa fa-filter"></i>`;
        navBtn.classList.remove("fade");
        toggle = false;
        filterToggle = false;
        brandBtn4.classList.remove("btn-selected");
        brand = undefined;
        brandBtn1.classList.remove("btn-selected");
        brandBtn2.classList.remove("btn-selected");
        brandBtn3.classList.remove("btn-selected");
        cardsDiv.innerHTML = "";
        itemDiv.innerHTML = "";
        for (let i = 0; i < cardHeaders.length; i++) {
            if (
                cardHeaders[i].charAt(5) == "V" ||
                cardHeaders[i].charAt(5) == "Z" ||
                cardHeaders[i].charAt(5) == "P" ||
                cardHeaders[i].charAt(5) == "C" ||
                cardHeaders[i].charAt(0) == "K"
            ) {
                cardsDiv.innerHTML += `<div class="card">
                    <div class="card-img">
                        <a href="#" value="${cardHeaders[i]}" class="shoe-link"
                            ><img loading="lazy" src="images/output/shoepic${i}.jpg" alt="Pic"
                        />
                        </a>
                    </div>
                    <div class="card-header">${cardHeaders[i]}</div>
                    <div class="card-price">Contact for info and prices</div>
                </div>`;
            }
        }
    } else {
        console.log("Select a product type");
    }
    const shoeLinks = document.querySelectorAll(".shoe-link");

    shoeLinks.forEach((shoeLink) => {
        shoeLink.addEventListener("click", function () {
            titleEl.textContent = "TheShoeLocker-Buy";
            cardsDiv.innerHTML = "";
            const itemEl = `<h2 class="item-header">${shoeLink.attributes[1].value}</h2>
                <div class="img-div">
                        ${shoeLink.innerHTML}
                </div>
                <form 
                    action="https://formspree.io/f/xayzyqaj"
                    method="POST" 
                    class="shoe-form">
                    <p>
                        Please fill out the form below and we'll contact you in
                        a day or two
                    </p>
                    <label for="name"
                        >Name
                        <input
                            name="Name"
                            type="text"
                            placeholder="Please Enter Your Name"
                            required
                    /></label>
                    <label for="email"
                        >Email
                        <input
                            name="Email"
                            type="email"
                            placeholder="Please Enter Your Email"
                            required
                    /></label>
                    <label for="cell-number"
                        >Cell Number
                        <input
                            name="Cell-number"
                            type="text"
                            placeholder="Please Enter Your Cell Number"
                            required
                    /></label>
                    <label for="shoe-name">
                        Shoe Name
                        <input
                            name="Shoe-name"
                            type="text"
                            placeholder="Please Enter Your Shoe Name"
                            value="${shoeLink.attributes[1].value}"
                            required
                        />
                        You can find your shoe name in the header above
                    </label>
                    <label for="shoe-size"
                        >Shoe Size in UK
                        <input
                            name="Shoe-size"
                            type="number"
                            placeholder="Please Enter Your Shoe Size"
                            required
                    /></label>
                    <label for="message">
                        Questions or Messages
                        <textarea
                            name="Questions-and-messages"
                            rows="6"
                            placeholder="Please leave a personal message or any questions"
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
            </form>`;
            itemDiv.innerHTML = itemEl;
        });
    });
});
