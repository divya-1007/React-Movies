import React from 'react';
import './logup.css'

const LogUp = ()=> {
    let num_cards_GLOBAL = 5;

    let cards = [
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmoviefail.com%2Fwp-content%2Fuploads%2F2014%2F11%2Finterstellar1.jpeg&f=1&nofb=1",
            display_background:
                "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fdownload%2Finterstellar-gargantua-u4-1920x1080.jpg&f=1&nofb=1",
            title: "Interstellar",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background: "https://images.alphacoders.com/586/thumb-1920-586902.jpg",
            display_background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F845%2F84502.jpg&f=1&nofb=1",
            title: "Inception",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F41%2F1%2Fhj197K.jpg&f=1&nofb=1",
            display_background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F990%2F990610.jpg&f=1&nofb=1",
            title: "Avengers: Endgame",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-2019-movie_66632_1920x1080.jpg&f=1&nofb=1",
            display_background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-stair-dance_68124_1920x1080.jpg&f=1&nofb=1",
            title: "Joker",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.U2iFUz9mivZeH-h48O5wtwHaEK%26pid%3DApi&f=1",
            title: "1917",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapershome.com%2Fimages%2Fpages%2Fpic_h%2F22685.jpg&f=1&nofb=1",
            title: "TENET",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fskyfall_2012_movie-1920x1080.jpg&f=1&nofb=1",
            title: "Skyfall",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F6%2F8%2F126147.jpg&f=1&nofb=1",
            title: "Star Wars: A New Hope",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrPpxrz8o0svAPCLucjsEdMXoDfX.jpg&f=1&nofb=1",
            title: "Venom",
            description:
                "Watch this incredible film made by some incredible people!"
        },
        {
            background:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2F6%2F8%2F123320-lord-of-the-rings-background-1920x1080-picture.jpg&f=1&nofb=1",
            title: "Lord of the Rings",
            description:
                "Watch this incredible film made by some incredible people!"
        }
    ];
    
    let cast = [
        {
            picture:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F338040ea81df8012c152cfa65a4c1b440a94a1bc&f=1&nofb=1",
            square: 1000,
            name: "Will Smith"
        },
        {
            picture:
                "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsiskiyou.sou.edu%2Fwp-content%2Fuploads%2F2014%2F10%2FRobin.jpg&f=1&nofb=1",
            square: 2000,
            name: "Robin Williams"
        },
        {
            picture:
                "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.byrdie.com%2Fthmb%2FaSjYcUqubm-ucpugLMuN8m-nvdU%3D%2F796x700%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fcdn.cliqueinc.com__cache__posts__237400__jennifer-lawrence-hairstyles-237400-1506716140954-main.700x0c-af3f438528ea44f0aa9c3c1fe3ef8c64.jpg&f=1&nofb=1",
            square: 700,
            name: "Jennifer Lawrence"
        }
    ];
    
    const IsMobile = () => {
        let width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.getElementsByTagName("body")[0].clientWidth;
    
        if (width <= 736) {
            return true;
        } else {
            return false;
        }
    };
    
    const CheckSizeAttributes = () => {
        let width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.getElementsByTagName("body")[0].clientWidth;
    
        let carousels = document.getElementsByClassName("card-carousel");
    
        let old_num_cards = num_cards_GLOBAL;
        let new_num_cards;
    console.log(old_num_cards ,"old_num_cards");
        if (width > 1501) {
            new_num_cards = 5;
        } else if (width <= 1500 && width > 1100) {
            new_num_cards = 4;
        } else if (width <= 1100 && width > 520) {
            new_num_cards = 3;
        } else if (width <= 520) {
            new_num_cards = 2;
        }
    
        for (let i = 0; i < carousels.length; i++) {
            if (carousels[i].children.length > 2) {
                for (let j = 1; j < carousels[i].children.length - 1; j++) {
                    carousels[i].children[j].style.display = "none";
                }
                for (let j = 1; j < new_num_cards + 1; j++) {
                    carousels[i].children[j].style.display = "flex";
                }
            }
        }
    
        num_cards_GLOBAL = new_num_cards;
    };
    
    const ResizeHeader = () => {
        let width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.getElementsByTagName("body")[0].clientWidth;
    
        if (width <= 815) {
            if (document.getElementsByClassName("hamburger").length <= 0) {
                let header = document.getElementsByClassName("header")[0];
                let main_nav = header.getElementsByClassName("main-nav")[0];
                let right_nav = header.getElementsByClassName("right-nav")[0];
    
                let hamburger = document.createElement("div");
                hamburger.classList.add("hamburger");
                hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>`;
                main_nav.remove();
                right_nav.remove();
    
                let bottom_header = document.createElement("div");
                bottom_header.classList.add("header-bottom");
                bottom_header.append(main_nav, right_nav);
                bottom_header.style.display = "none";
    
                hamburger.addEventListener("click", function () {
                    if (bottom_header.style.display == "none") {
                        bottom_header.style.display = "flex";
                        header.style.paddingBottom = "9px";
                        header.style.paddingTop = "9px";
                    } else {
                        bottom_header.style.display = "none";
                        header.style.paddingBottom = "0px";
                        header.style.paddingTop = "0px";
                    }
                });
    
                header.classList.add("header-change");
    
                let top_header = document.createElement("div");
                top_header.classList.add("header-top");
                top_header.append(header.children[0], hamburger);
    
                header.innerHTML = "";
                header.append(top_header, bottom_header);
            }
        } else {
            if (document.getElementsByClassName("hamburger").length > 0) {
                let header = document.getElementsByClassName("header")[0];
                let main_nav = header.getElementsByClassName("main-nav")[0];
                let right_nav = header.getElementsByClassName("right-nav")[0];
                let brand = header.getElementsByClassName("brand")[0];
    
                header.classList.remove("header-change");
                header.children[0].remove();
                header.children[0].remove();
                header.append(brand, main_nav, right_nav);
            }
        }
    };
    
    const AddCards = () => {
        let carousel_width = document.getElementsByClassName("card-carousel")[0]
            .clientWidth;
    
        let btn_width =
            document.getElementsByClassName("carousel-btn")[0].clientWidth +
            document.getElementsByClassName("carousel-btn")[1].clientWidth;
    
        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;
    
        let scale =
            (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;
    
        let content_titles = document.getElementsByClassName("content-title");
    
        for (let i = 0; i < content_titles.length; i++) {
            content_titles[i].style.marginLeft = `${card_margin}px`;
        }
    
        let carousels = document.getElementsByClassName("card-carousel");
        for (let i = 0; i < carousels.length; i++) {
            let not_chosen = [];
    
            for (let c = 0; c < cards.length; c++) {
                not_chosen.push(c);
            }
    
            for (let j = 0; j < cards.length; j++) {
                let chosen_index = Math.floor(Math.random() * not_chosen.length);
    
                let chosen_card = cards[not_chosen[chosen_index]];
    
                not_chosen.splice(chosen_index, 1);
    
                let card = document.createElement("div");
                card.classList.add("card");
                card.style.backgroundImage = `url(${chosen_card.background})`;
    
                //If image doesn't load
                card.style.backgroundColor = `#333`;
    
                card.style.width = initial_width * (scale / 100) + "px";
                card.style.height = initial_height * (scale / 100) + "px";
                card.style.margin = `0px ${card_margin}px`;
                card.style.minWidth = initial_width * (scale / 100) + "px";
                card.style.minHeight = initial_height * (scale / 100) + "px";
    
                let overlay = document.createElement("div");
                overlay.classList.add("overlay");
    
                let title = document.createElement("h4");
                title.innerText = chosen_card.title;
                let description = document.createElement("p");
                description.innerText = "1h 25m";
    
                let button_container = document.createElement("div");
                button_container.classList.add("button-container");
    
                let button1 = document.createElement("div");
                button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg>`;
                button1.classList.add("watch");
    
                let button2 = document.createElement("div");
                button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
    </svg>`;
                button2.classList.add("queue");
    
                button2.addEventListener("click", function () {
                    ToggleWatchLater(`${chosen_card.title}`);
                });
    
                let button3 = document.createElement("div");
                button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`;
                button3.classList.add("star");
                button3.classList.add("queue");
    
                button3.addEventListener("click", function () {
                    if (button3.children[0].style.color != "rgb(255, 255, 87)") {
                        button3.children[0].style.color = "rgb(255, 255, 87)";
                    } else {
                        button3.children[0].style.color = "white";
                    }
                });
    
                let button4 = document.createElement("div");
                button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>`;
                button4.classList.add("star");
                button4.classList.add("queue");
    
                button4.addEventListener("click", function () {
                    if (document.getElementsByClassName("movie-desc").length > 0) {
                        // If the modal exists
                        document.getElementsByClassName("movie-desc")[0].remove();
                    } else {
                        let modal = document.createElement("div");
                        modal.classList.add("movie-desc");
    
                        let modal_content = document.createElement("div");
                        modal_content.classList.add("modal-content");
    
                        let bg_image = document.createElement("div");
                        bg_image.classList.add("desc-image");
                        bg_image.style.backgroundImage = `url(${chosen_card.background})`;
                        let image_cover = document.createElement("div");
    
                        let close_btn = document.createElement("div");
                        close_btn.classList.add("close-btn");
                        close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;
    
                        close_btn.addEventListener("click", function () {
                            this.parentElement.parentElement.parentElement.parentElement.remove();
                        });
    
                        image_cover.append(close_btn);
                        bg_image.append(image_cover);
    
                        let top_info = document.createElement("div");
                        top_info.classList.add("desc-top");
                        let title = document.createElement("h1");
                        title.innerText = chosen_card.title;
    
                        let btn_selection = document.createElement("div");
                        btn_selection.classList.add("button-selection");
                        btn_selection.innerHTML = `
                            <div class="watch">
                                <h3>Play</h3>
                                <svg fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                            </div>
                            <div class="queue" onclick="ToggleWatchLater('${chosen_card.title}');">
                                <h3>Watch Later</h3>
                                <svg fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>`;
    
                        top_info.append(title, btn_selection);
    
                        let mid_info = document.createElement("div");
                        mid_info.classList.add("desc-mid");
                        mid_info.innerHTML = `<p>${chosen_card.description}</p>`;
    
                        let bottom_info = document.createElement("div");
                        bottom_info.classList.add("desc-bottom");
    
                        let cast_slider = document.createElement("div");
                        cast_slider.classList.add("cast");
    
                        bottom_info.append(cast_slider);
    
                        modal_content.append(
                            bg_image,
                            top_info,
                            mid_info,
                            bottom_info
                        );
                        modal.append(modal_content);
    
                        document.body.append(modal);
    
                        document.body.addEventListener("click", function (event) {
                            if (!event.target.classList.contains("modal-content")) {
                                //modal.remove();
                                console.log(1);
                            }
                        });
    
                        // Set the height for the modal image
                        let total_width = document.getElementsByClassName(
                            "modal-content"
                        )[0].clientWidth;
                        let large_scale = (100 * total_width) / 1920;
                        document.getElementsByClassName(
                            "desc-image"
                        )[0].style.height = `${1080 * (large_scale / 100)}px`;
    
                        // Set image for cast
                        for (let c = 0; c < cast.length; c++) {
                            let cast_block = document.createElement("div");
                            cast_block.classList.add("cast-card");
                            cast_block.style.backgroundImage = `url("${cast[c].picture}")`;
                            cast_block.style.width = 100 / cast.length - 5 + "%";
                            cast_block.style.height = `calc(${
                                document.getElementsByClassName("cast")[0]
                                    .clientWidth / cast.length
                            }"px" - 5%)`;
                            cast_slider.append(cast_block);
                        }
                    }
                });
    
                button_container.append(button1, button2, button3, button4);
    
                overlay.append(title, description, button_container);
                card.append(overlay);
                if (j < num_cards) {
                    carousels[i].insertBefore(
                        card,
                        carousels[i].children[carousels[i].children.length - 1]
                    );
                } else {
                    card.style.display = "none";
                    carousels[i].insertBefore(
                        card,
                        carousels[i].children[carousels[i].children.length - 1]
                    );
                }
            }
        }
    };
    
    const CheckCards = () => {
        let carousels = document.getElementsByClassName("card-carousel");
    
        for (let i = 0; i < carousels.length; i++) {
            let carousel_width = carousels[i].clientWidth;
    
            let btn_width =
                carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
                carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;
    
            let num_cards = num_cards_GLOBAL;
            let card_margin = 2;
            let initial_width = 1920;
            let initial_height = 1080;
    
            let scale =
                (100 *
                    ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
                initial_width;
    
            let cards = carousels[i].getElementsByClassName("card");
    
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.width = initial_width * (scale / 100) + "px";
                cards[i].style.height = initial_height * (scale / 100) + "px";
                cards[i].style.margin = `0px ${card_margin}px`;
                cards[i].style.minWidth = initial_width * (scale / 100) + "px";
                cards[i].style.minHeight = initial_height * (scale / 100) + "px";
            }
    
            if (IsMobile()) {
                carousels[i].style.height =
                    1.6 * (initial_height * (scale / 100)) + "px";
            } else {
                carousels[i].style.height = "auto";
            }
        }
    };
    
    const AddCarouselButtons = () => {
        let carousels = document.getElementsByClassName("card-carousel");
        for (let i = 0; i < carousels.length; i++) {
            let btn1 = document.createElement("div");
            btn1.classList.add("carousel-btn");
            btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>`;
    
            let btn2 = document.createElement("div");
            btn2.classList.add("carousel-btn");
    
            btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>`;
    
            carousels[i].append(btn1, btn2);
        }
    };
    
    const ScrollFunction = () => {
        let header = document.getElementsByClassName("header")[0];
        if (document.documentElement.scrollTop > 1) {
            header.classList.add("header-active");
        } else {
            header.classList.remove("header-active");
        }
    };
    
    const MakeJumbotron = () => {
        let height =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.getElementsByTagName("body")[0].clientHeight;
    
        document.getElementsByClassName("top")[0].style.height = `${height}px`;
    };
    
    let slide_index = 0;
    
    const AutoSlideShow = () => {
        let slide_area = document.getElementsByClassName("top")[0];
        let container = slide_area.children[0];
    
        container.classList.add("fadeIn");
    
        let bg_display = [];
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].display_background) {
                bg_display.push(i);
            }
        }
    
        slide_index++;
        if (slide_index > bg_display.length - 1) {
            slide_index = 0;
        }
    
        slide_area.style.backgroundImage = `url("${
            cards[bg_display[slide_index]].display_background
        }")`;
        slide_area.getElementsByTagName("h1")[0].innerHTML =
            cards[bg_display[slide_index]].title;
        slide_area.getElementsByTagName("p")[0].innerHTML =
            cards[bg_display[slide_index]].description;
    
        container.classList.add("fadeOut");
        setTimeout(AutoSlideShow, 2000);
    };
    
    const SmoothScroll = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    
    const Next = (elem) => {
        let carousel = elem.parentElement.parentElement;
        let first_elem = carousel.children[1];
        let next_elem;
    
        for (let i = 0; i < carousel.children.length; i++) {
            if (carousel.children[i].style.display == "none") {
                next_elem = carousel.children[i];
                break;
            }
        }
    
        first_elem.style.display = "none";
        first_elem.remove();
        carousel.insertBefore(
            first_elem,
            carousel.children[carousel.children.length - 1]
        );
    
        next_elem.style.display = "flex";
    };
    
    const Previous = (elem) => {
        let carousel = elem.parentElement.parentElement;
        let last_display_item;
        let prev_elem = carousel.children[carousel.children.length - 2];
    
        for (let i = 0; i < carousel.children.length; i++) {
            if (
                carousel.children[i].style.display != "none" &&
                !carousel.children[i].classList.contains("carousel-btn")
            ) {
                last_display_item = carousel.children[i];
            }
        }
    
        last_display_item.style.display = "none";
    
        carousel.insertBefore(prev_elem, carousel.children[1]);
    
        prev_elem.style.display = "flex";
    };
    
    const ToggleWatchLater = (movie = "", activate = true) => {
        let modal = document.getElementsByClassName("watch-later-modal")[0];
    
        if (movie !== "") {
            modal.getElementsByClassName("movie")[0].innerText = movie;
        }
    
        if (activate) {
            modal.style.display = "flex";
        } else {
            modal.style.display = "none";
        }
    };
    

    return(

    <div className="container-fluid">
          <div className="container-fluid">
            <div className="row no-gutter">
              <div onload="AddCarouselButtons(); CheckSizeAttributes(); AddCards(); MakeJumbotron(); CheckCards(); ResizeHeader();" onscroll="ScrollFunction();" onresize="CheckSizeAttributes(); CheckCards(); MakeJumbotron(); ResizeHeader();">
    <div class="content">
        <div class="header">
            <div class="brand">
                <h1 class="red">FiRE</h1>
                <h1 class="white">WATCH</h1>
            </div>
            <div class="main-nav">
                <a href="/" class="button-container">
                    <h2>HOME</h2>
                </a>
                <a onclick="SmoothScroll('movies');" class="button-container">
                    <h2>MOVIES</h2>
                </a>
                <a onclick="SmoothScroll('trending');" class="button-container">
                    <h2>TRENDING</h2>
                </a>
                <a onclick="SmoothScroll('releases');" class="button-container">
                    <h2>RELEASES</h2>
                </a>
                <a onclick="SmoothScroll('search');" class="button-container">
                    <h2>SEARCH</h2>
                </a>
            </div>
            <div class="right-nav">
                <div class="button-container login">
                    <h2>Log In</h2>
                </div>
            </div>
        </div>
        <div class="top">
            <div class="image-container">
                <div class="left-side">
                    <h1>Interstellar</h1>
                    <p>Follow a group of astronauts from the future through the cosmos in search of an earthly replacement, what will happen next?</p>
                    <div class="button-section">
                        <div class="watch">
                            <h3>Play</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                        </div>
                        <div class="queue" onclick="ToggleWatchLater('Interstellar');">
                            <h3>Watch Later</h3>
                            <svg fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="content-area" id="trending">
                <h2 class="content-title">TRENDING</h2>
                <div class="card-carousel">

                </div>
            </div>
            <div class="content-area" id="releases">
                <h2 class="content-title">NEW RELEASES</h2>
                <div class="card-carousel">
                <div class="queue" onclick="AddCards('Interstellar');">
                </div>
                </div>
            </div>
            <div class="search-area" id="search">
                <div class="search-area-content">
                    <h2>Can't Find Anything You Like?</h2>
                    <p>Search for thousands of unique movies from our growing database...</p>
                    <div class="input-area">
                        <input type="text" placeholder="Search..." />
                        <svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="content-area" id="movies">
                <h2 class="content-title">ACTION</h2>
                <div class="card-carousel">

                </div>
            </div>
            <div class="content-area">
                <h2 class="content-title">DRAMA</h2>
                <div class="card-carousel">

                </div>
            </div>
            <div class="content-area">
                <h2 class="content-title">THRILLER</h2>
                <div class="card-carousel">

                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="btn-row">
                <h4>Help Center</h4>
                <h4>Private Policy</h4>
                <h4>Contact Us</h4>
            </div>
            <div class="btn-row">
                <h4>Terms of Use</h4>
                <h4>Jobs</h4>
                <h4>Legal Notices</h4>
            </div>
            <div class="btn-row">
                <div class="brand">
                    <h1 class="red">FiRE</h1>
                    <h1 class="white">WATCH</h1>
                </div>
                <div class="socials">
                    <a href=""><svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>
                    <a href="">
                        <svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                    </a>
                    <a href="">
                        <svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="btn-row">
                <p>© 2021 Firewatch, Inc.</p>
            </div>
        </div>
    </div>

    <div class="watch-later-modal">
        <h3>Added <a href="#" class="movie"></a> to your <a href="#" class="playlist">WATCH LATER</a> playlist!</h3>
        <div class="side-buttons">
            <svg fill="currentColor" viewBox="0 0 16 16" onclick="alert('Removed item from the Watch Later playlist'); ToggleWatchLater('', false);">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 16 16" onclick="ToggleWatchLater('', false);">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>

        </div>
    </div>


           
                
              
            </div>
        </div>
    </div>
    </div>
    )
}
export default LogUp;
 