// Panel hovers

const arrPanelItems = document.querySelectorAll(".panelItem"),
    arrPanelItemsIcon = document.querySelectorAll(".iconContainer"),
    panel = document.querySelector(".panel");

arrPanelItems.forEach(element => {
    element.addEventListener("mouseout", () => {
        element.classList.remove("activePanel");
        element.childNodes[1].classList.remove("activePanelIcon");
        element.childNodes[1].childNodes[1].classList.remove("filterColor");
        const arrSvgIcons = [...element.childNodes[1].childNodes].filter(item => {return item.tagName == "IMG" });
        arrSvgIcons.forEach(el => {
            el.classList.remove("filterColor");
        });

    });
});
arrPanelItemsIcon.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.parentNode.classList.add("activePanel");
        element.classList.add("activePanelIcon");
        const arrSvgIcons = [...element.childNodes].filter(item => {return item.tagName == "IMG" });
        arrSvgIcons.forEach(el => {
            el.classList.add("filterColor");
        });
    });
});

// Accords

const arrAccords = document.querySelectorAll(".devAccordItem");

const toggleAccordClasses = (element) => {
    element.classList.toggle("devAccordItemActive");
    element.childNodes[3].childNodes[3].classList.toggle("accordContentActive");
    element.childNodes[3].childNodes[1].classList.toggle("accordTitleActive");
    element.childNodes[1].classList.toggle("devIconConActive");
    element.childNodes[1].childNodes[1].classList.toggle("filterColor");
    element.childNodes[5].childNodes[1].classList.toggle("filterColor");
    element.childNodes[5].childNodes[1].classList.toggle("accordArrow");
}

arrAccords.forEach( element => {
    element.addEventListener("click", ()=> {
        if (![...element.classList].find( el => el === "devAccordItemActive") ){
            arrAccords.forEach( item => {
                if ([...item.classList].find( el => el === "devAccordItemActive") ){
                    toggleAccordClasses(item)
                }
            })
            toggleAccordClasses(element);
        }
    });
})