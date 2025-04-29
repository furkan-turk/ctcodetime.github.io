document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".content-container");
    const contactLink = document.getElementById("contact-link");
    const aboutlink = document.getElementById("about-link");
    const homeLink = document.getElementById("home-link");
    const box1 = document.querySelector(".box:first-child");
    const box3 = document.querySelector(".box:nth-child(3)"); // İlk kutu (Box 1)
    const box5 = document.querySelector(".box:nth-child(5)"); // İletişim kısmının bulunduğu Box (Box 4)

    // Fare tekerleği ile yatay kaydırma
    scrollContainer.addEventListener("wheel", function (event) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY; // Yatay kaydırma
    });

    // "Contact" linkine tıklanınca Box 3'e gitme
    aboutlink.addEventListener("click", function (event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        if (box3) {
            const scrollPosition = box3.offsetLeft - scrollContainer.offsetLeft; // Box 3'ün konumunu al
            scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" }); // Yumuşak kaydır
        }
    });

    // "Contact" linkine tıklanınca Box 5'e gitme
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        if (box5) {
            const scrollPosition = box5.offsetLeft - scrollContainer.offsetLeft; // Box 5'ün konumunu al
            scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" }); // Yumuşak kaydır
        }
    });

    // "Home" linkine tıklanınca Box 1'e gitme
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        if (box1) {
            const scrollPosition = box1.offsetLeft - scrollContainer.offsetLeft; // Box 1'in konumunu al
            scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" }); // Yumuşak kaydır
        }
    });
});

const templates = [
    {
        name: "Blog 1",
        id: "template1",
        image: "templates/template1/preview.jpg",
    },
    {
        name: "Blog 2",
        id: "template2",
        image: "templates/template2/preview.jpg",
    },
    {
        name: "Port",
        id: "template3",
        image: "templates/template3/preview.jpg",
    },
    {
        name: "Basic E-Commerce Site",
        id: "template4",
        image: "templates/template4/preview.jpg",
    },
    {
        name: "Corporate web template",
        id: "template5",
        image: "templates/template5/preview.jpg",
    },
    {
        name: " Restaurant / Cafe Template",
        id: "template6",
        image: "templates/template6/preview.jpg",
    },
    {
        name: "Blog 2",
        id: "template7",
        image: "templates/template7/preview.jpg",
    },
    {
        name: "Port",
        id: "template8",
        image: "templates/template8/preview.jpg",
    },
    {
        name: "Basic E-Commerce Site",
        id: "template9",
        image: "templates/template9/preview.jpg",
    },
    {
        name: "Kurumsal",
        id: "template10",
        image: "templates/template10/preview.jpg",
    },
    {
        name: "Basic E-Commerce Site",
        id: "template11",
        image: "templates/template11/preview.jpg",
    },
    {
        name: "Kurumsal",
        id: "template12",
        image: "templates/template12/preview.jpg",
    },
];
const templateListDiv = document.getElementById("template-list");
templateListDiv.innerHTML = ""; // Temizle

templates.forEach((template) => {
    const card = document.createElement("div");
    card.classList.add("template-card");

    const img = document.createElement("img");
    img.src = template.image;
    img.alt = template.name;
    img.className = "template-image";

    card.appendChild(img);
    card.addEventListener("click", () => {
        showTemplateDetail(template.id);
    });

    templateListDiv.appendChild(card);
});

function copyCode(id) {
    let text = document.getElementById(id).innerText;

    if (id === "html-code") {
        text = text.replace(
            /<!-- Code injected by live-server -->[\s\S]*?<\/script>/g,
            ""
        );
    }

    navigator.clipboard.writeText(text).then(() => {
        alert("Kod kopyalandı!");
    });
}

function downloadAll() {
    alert("İndirme sistemi sıradaki adımda eklenecek.");
}

async function loadCode(filePath) {
    const response = await fetch(filePath);
    return await response.text();
}

async function showTemplateDetail(templateId) {
    history.pushState({ page: "detail" }, "", "#template");

    const detail = document.getElementById("template-detail");
    const iframe = document.getElementById("preview-frame");
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const jsCode = document.getElementById("js-code");

    const basePath = `templates/${templateId}/`; // Dinamik base path

    
    iframe.src = basePath + "index.html"; // İframe için doğru yol

    // Dosya içeriklerini yükle
    htmlCode.innerText = await loadCode(basePath + "index.html");
    cssCode.innerText = await loadCode(basePath + "styles.css");
    jsCode.innerText = await loadCode(basePath + "script.js");

    detail.style.display = "flex"; // Detayları göster
      // Dinamik olarak "Download All" butonunun data-template'ini ayarla
const downloadButton = document.querySelector('[onclick="downloadAllFromButton(this)"]');
downloadButton.setAttribute("data-template", templateId);
    // HTML kodunu yüklerken Live Server scriptini temizle
    let htmlContent = await loadCode(basePath + "index.html");
    htmlContent = htmlContent.replace(
        /<!-- Code injected by live-server -->[\s\S]*?<\/script>/g,
        ""
    );
    htmlCode.innerText = htmlContent;
  

}

function downloadAllFromButton(buttonElement) {
    const templateId = buttonElement.getAttribute("data-template");
    downloadAll(templateId);
}

async function downloadAll(templateId) {
    const zip = new JSZip();
    const basePath = `templates/${templateId}/`;
    const files = ["index.html", "styles.css", "script.js"];

    for (let file of files) {
        const content = await loadCode(basePath + file);
        zip.file(file, content);
    }

    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, `${templateId}.zip`);
    });
}


function closeTemplateDetail() {
    document.getElementById("template-detail").style.display = "none";
    document.getElementById("preview-frame").src = "";
    history.pushState(null, "", location.pathname); // URL'deki #template'i sil
}

window.onpopstate = function (event) {
    closeTemplateDetail();
};

