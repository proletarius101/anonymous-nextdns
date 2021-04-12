VM.observe(document.body, () => {
    // Find the target node
    const modalTitle = document.querySelector('.modal-title');

    if (modalTitle.textContent === "Expired") {
        // Remove modal
        const modal = document.querySelector(".modal")
        modal.remove()
        const modalBackdrop = document.querySelector(".modal-backdrop")
        modalBackdrop.remove()

        // Remove hiding
        const root = document.querySelector("#root")
        root.setAttribute("aria-hidden", 'false');
        const body = document.querySelector("body");
        body.classList.remove("modal-open")
        body.style.overflow = "visible"

        // disconnect observer
        return true;
    }
})