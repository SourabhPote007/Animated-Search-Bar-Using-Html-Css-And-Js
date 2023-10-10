let search = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");

search.addEventListener("click", (event) => {
    if (!searchInput.classList.contains(".expand"));

    {
        searchInput.classList.add("expand");
        searchInput.value = "";
        searchInput.focus();
    }
});

searchInput.addEventListener("blur", (event) => {
    console.log(event.target);
    if (searchInput.classList.contains("expand")) 
    {
        searchInput.classList.remove("expand");
    }
});