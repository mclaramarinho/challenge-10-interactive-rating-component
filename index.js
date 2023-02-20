document.querySelectorAll("input").forEach((item) => {
    item.addEventListener("change", (e) => {
        var chosenValue = e.target.value;
        document.querySelector("#label"+chosenValue).classList.add("clicked");
        document.querySelector("#submit").removeAttribute("disabled");
        document.querySelector("#submit").addEventListener("click", (event) => {
            event.preventDefault();
            const changeText = document.querySelector("#thx-result p");
            document.getElementById("rating-container").classList.add("hidden");
            document.getElementById("thx-container").classList.remove("hidden");
            changeText.textContent = "You selected " + chosenValue + " out of 5"
        })
    });
})