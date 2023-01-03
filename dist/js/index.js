const cardsDiv = document.querySelector(".cards");
const itemDiv = document.querySelector(".item");
const titleEl = document.querySelector(".title-el");

const cardHeaders = [
    "Nike Air Force white",
    "Nike Air Force black",
    "Nike Air Jordans",
    "Nike Air Force utility",
    "Nike Air Force utility",
    "Nike Air Jordans black and white",
    "Nike Air Jordans red and white",
    "Nike Air Jordans university  blue",
    "Nike Air Jordans grey and white",
    "Nike Air Force Ribbon",
    "Nike Air Force Ribbon",
    "Nike Air Force Anthracite",
    "Nike Air Jordans blue and white",
    "Nike Air Jordans 4",
    "Nike Air Force pixel se",
    "Nike Air Force pixel se",
    "Nike Air Force react dmsx",
    "Nike Air Jordans shattered backboard",
    "Nike Air Jordans high clay green",
    "Nike Air Force global citizen M5",
    "Nike Air Max 97",
    "Nike Air Force Day of the dead",
    "Nike Air Jordans 1 Bred toe",
    "Nike Air Jordans 1 Dunk lows",
    "Nike Air Jordans 1 Dunk lows",
    "Nike Air Jordans 1 Dunk lows",
    "Nike Air Jordans 1 Dunk lows",
    "Nike Air Force 1 '07 LV8 Suede",
    "Nike Air Jordans 1 oh shadow 2.0",
    "Nike Vista lite",
    "Nike Vista lite",
    "Nike Vista lite",
    "Nike Vista lite",
    "Nike Vista lite",
    "Nike Vista lite",
    "Nike Air Force 1 pixel",
    "Nike Air Max",
    "Nike Air Force 1 pastel shadow",
    "Nike Air Jordan mids",
    "Nike Air Jordan mids",
    "Nike Air Jordans 1 Retro high OG fearless",
    "Nike Air Max 270",
    "Nike Air Force 1 mids",
    "Nike Air Jordans 1 low canyon rust 2020",
    "Nike Air Jordans 1 ROYAL TOE",
    "Nike Air Force 1 mids Hot lava",
    "Nike Air Jordans 1 Tie Die",
    "Nike Air Force 1 '07 LV8 psychic blue",
    "Nike Air Force 1 Outline Shadow",
    "Nike Air Force 1 UV colour changing",
    "Nike Air Force 1 UV colour changing",
    "Nike Air Jordans Solefly X 1 Art Basel",
    "Nike Air Jordans 1 Hyper Royal",
    "Nike Air Jordans 1 Light fusion Red",
    "Nike Air Jordans 1 Dark Mocha",
    "Nike Air Force 1 Pixel Desert Sand",
    "Nike Air Jordans 1 Chicago",
    "Nike Air Jordans 1 Chicago",
    "Nike Air Jordans 1 Chicago",
    "Nike Air Jordans 1 Mix Texture Blue",
    "Nike Air Force 1 Pixel",
    "Nike Air Force 1 Pixel",
    "Nike Civilist",
    "Nike Air Force 1 Anthracite",
    "Nike Air Jordans 1 Lows Wolf Grey",
    "Nike Air Force 1 07 PRM particle beige",
    "Nike Air Jordans 1 Turbo green",
    "Nike Air Force 1 White university Red",
    "Nike Air Jordans lows Paris",
    "Nike Air Jordans 1 Smoke Grey",
    "Nike Air Jordans 1 White Shadow",
    "Nike Air Jordans 1 Guava ice",
    "Nike Air Force 1 Pine Green",
    "Nike Air Force X LPL",
    "Nike Air Force CR7 edition",
    "Nike Air Force 1 Undefeated",
    "Nike Air Jordans 1 Switch",
    "Nike Air Force Glow in the dark skeleton",
    "Nike Air Jordans 1 X Fragment black sport",
    "Nike Air Force 1 '07 BLACK SMOKE GREY",
    "Nike Air Jordans 1 Midnight Navy",
    "Nike Air Jordans 1 Tuxedo",
    "Nike Air Force 1 '07 LX",
    "Kids Nike Air Force and Jordans UV color changing",
    "Kids Nike Air Force and Jordans UV color changing",
    "Kids Nike Air Force and Jordans UV color changing",
    "Kids Nike Air Force and Jordans UV color changing",
    "Nike Air Max 2021 Running shoes",
    "Nike Air Max 2021 Running shoes",
    "Nike Air Jordans 1 lows",
    "Nike Air Jordans 1 lows",
    "Nike Air Jordans 1 lows",
    "Nike Air Force 1 Lucky charm",
    "Nike Air Jordan lows 1",
    "Nike Air Jordan lows 1",
    "Nike Air Jordan lows 1",
    "Nike Zoom ",
    "Nike Zoom ",
    "Nike Prm swoosh",
    "Nike Air Force 1 Rope",
    "Nike Air Force 1 olive Green/Black Gold",
    "Nike Air Force 1 '07 essential",
];

const generateShoe = () => {
    const random = Math.ceil(Math.random() * 101);

    const cardEl = `<div class="card">
                    <div class="card-img">
                        <a href="#" value="${cardHeaders[random]}" class="shoe-link"
                            ><img loading="lazy" class="shoe${random}" src="images/output/shoepic${random}.jpg" alt="Pic"
                        />
                        </a>
                    </div>
                    <div class="card-header shoe-link">${cardHeaders[random]}</div>
                    <div class="card-price">Contact for info and prices</div>
                </div>`;
    cardsDiv.innerHTML += cardEl;
};

for (let i = 0; i < 50; i++) {
    generateShoe();
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
                            name="Questions-and-Messages"
                            rows="6"
                            placeholder="Please leave a personal message or any questions"
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
            </form>`;
        itemDiv.innerHTML = itemEl;
    });
});
