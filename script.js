// =========================
// ФИЛЬТР ФРУКТОВ
// =========================

function filterItems(type) {

    const items = document.querySelectorAll(".item");

    items.forEach(item => {

        if (type === "all") {
            item.classList.remove("hidden");
            return;
        }

        if (item.classList.contains(type)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }

    });
}


// =========================
// ПОИСК
// =========================

const search = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

search.addEventListener("input", function () {

    const text = search.value.toLowerCase().trim();

    const items = document.querySelectorAll(".item");

    let count = 0;

    items.forEach(item => {

        const name = item.dataset.name;

        if (!name) {
            return;
        }

        if (name.toLowerCase().includes(text)) {

            item.classList.remove("hidden");

            if (text !== "") {
                count++;
            }

        } else {

            item.classList.add("hidden");

        }

    });

    if (text === "") {
        searchResults.textContent = "";
    } else {
        searchResults.textContent =
            "Найдено: " + count;
    }

});


// =========================
// TRADE CALCULATOR
// =========================

function checkTrade() {

    const your1 =
        Number(document.getElementById("yourItem").value);

    const your2 =
        Number(document.getElementById("yourItem2").value);

    const other1 =
        Number(document.getElementById("otherItem").value);

    const other2 =
        Number(document.getElementById("otherItem2").value);

    const yourTotal = your1 + your2;
    const otherTotal = other1 + other2;

    const result =
        document.getElementById("tradeResult");

    result.className = "";

    if (yourTotal === 0 || otherTotal === 0) {

        result.textContent =
            "⚠️ Выбери предметы с двух сторон!";

        return;
    }

    const difference =
        otherTotal - yourTotal;

    if (difference > 0.5) {

        result.classList.add("good-trade");

        result.textContent =
            "🔥 WIN! Ты получаешь больше ценности! " +
            otherTotal.toFixed(1) +
            "M VS " +
            yourTotal.toFixed(1) +
            "M";

    } else if (difference < -0.5) {

        result.classList.add("bad-trade");

        result.textContent =
            "❌ LOSE! Твоя сторона стоит дороже. " +
            yourTotal.toFixed(1) +
            "M VS " +
            otherTotal.toFixed(1) +
            "M";

    } else {

        result.classList.add("equal-trade");

        result.textContent =
            "⚖️ FAIR TRADE! " +
            yourTotal.toFixed(1) +
            "M VS " +
            otherTotal.toFixed(1) +
            "M";
    }

}


// =========================
// ПЛАВНАЯ ПРОКРУТКА
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});