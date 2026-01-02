let pageTitle = "";

function getTitle() {
    fetch("https://codealpna.tech")
        .then(response => response.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            pageTitle = doc.title;

            document.getElementById("output").textContent =
                "Page Title: " + pageTitle;
        })
        .catch(() => {
            document.getElementById("output").textContent =
                "Unable to fetch title (CORS restriction).";
        });
}

function saveTitle() {
    if (pageTitle === "") {
        return;
    }

    let blob = new Blob([pageTitle], { type: "text/plain" });
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "title.txt";
    link.click();
}
