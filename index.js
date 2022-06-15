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