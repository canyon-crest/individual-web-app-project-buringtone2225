// add javascript here
document.getElementById("toggle-species")?.addEventListener("click", () => {
    const species = document.getElementById("daily-species");
    species.classList.toggle("hidden");
})

document.getElementById("speciesForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const speciesInput = document.getElementById("species");
    const list = document.getElementById("list");

    if (speciesInput.value.trim() !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = speciesInput.value;
        list.appendChild(newItem);
        speciesInput.value = "";
    }
});