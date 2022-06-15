const arrPanelItems = document.querySelectorAll(".panelItem"),
    arrPanelItemsIcon = document.querySelectorAll(".iconContainer"),
    panel = document.querySelector(".panel");

arrPanelItems.forEach(element => {
    element.addEventListener("mouseout", () => {
        element.classList.remove("activePanel");
        element.childNodes[1].classList.remove("activePanelIcon");
    });
});
arrPanelItemsIcon.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.parentNode.classList.add("activePanel");
        element.classList.add("activePanelIcon");
    });
});