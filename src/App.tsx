// import { articles } from "./articles";

// const CS_OPEN_CLASSNAME = "cs-popup-open";
// const BODY_FIXED_CLASSNAME = "body-fixed";

// const bodyNode = document.querySelector("body");
// const csListNode = document.getElementById("csList");
// const csPopupNode = document.getElementById("csPopup");
// let csPopupContentNode = document.getElementById("csPopupContent");
// const csTitleNode = document.getElementById("csTitle");
// const csBodyNode = document.getElementById("csBody");
// const returnBtnNode = document.getElementById("returnBtn");
// const printBtnNode = document.getElementById("printBtn");

// // Functions

// function clearTitleList() {
//     return (csListNode.innerHTML = "");
// }

// function clearCheatSheet() {
//     csTitleNode.innerHTML = "";
//     csBodyNode.innerHTML = "";
// }

// function createListElement(item) {
//     const listItem = document.createElement("li");
//     listItem.className = "list-item";

//     const listItemBtn = document.createElement("button");
//     listItemBtn.className = "list-item-btn";
//     listItemBtn.id = `liBtn_${item.id}`;
//     listItemBtn.innerText = item.title;

//     listItem.appendChild(listItemBtn);

//     console.log(listItem);
//     return listItem;
// }

// function renderTitleList(articles) {
//     console.log(articles);
//     clearTitleList();
//     articles.forEach((element) => {
//         const listElement = createListElement(element);
//         csListNode.appendChild(listElement);
//     });

//     const listElements = document.querySelectorAll(".list-item-btn");
//     listElements.forEach((element) => {
//         element.addEventListener("click", (event) => handlePopup(event));
//     });
// }

// function popupCheatSheet(itemId) {
//     clearCheatSheet();

//     articles.forEach((item) => {
//         if (item.id === itemId) {
//             csTitleNode.innerHTML = `<h2>${item.title}</h2>`;
//             csBodyNode.innerHTML = item.body;
//         }
//     });

//     togglePopup();
// }

// function handlePopup(event) {
//     const button = event.target;
//     const itemId = button.id.split("_")[1];
//     console.log(`popup item number: ${itemId}`);
//     popupCheatSheet(itemId);
// }

// function csPrint() {
//     // console.log("PRINT COMMAND RECEIVED");
//     // window.print();
//     const title = document.getElementById("csTitle").innerHTML;
//     const body = document.getElementById("csBody").innerHTML;

//     const printWindow = window.open("", "_blank");
//     printWindow.document.open();

//     // Include external stylesheets
//     const stylesheets = Array.from(
//         document.querySelectorAll('link[rel="stylesheet"]')
//     )
//         .map((link) => `<link rel="stylesheet" href="${link.href}" />`)
//         .join("");

//     // Include internal styles
//     const internalStyles = Array.from(document.querySelectorAll("style"))
//         .map((style) => `<style>${style.innerHTML}</style>`)
//         .join("");

//     printWindow.document.write(
//         "<html><head>" +
//             stylesheets +
//             internalStyles +
//             "<title>" +
//             title +
//             "</title></head><body>" +
//             title +
//             body +
//             "</body></html>"
//     );

//     printWindow.document.close();
//     printWindow.focus();

//     // Give some time for the content to load and then trigger print
//     setTimeout(() => {
//         printWindow.print();
//         printWindow.close();
//     }, 250);
// }

// function togglePopup() {
//     csPopupNode.classList.toggle(CS_OPEN_CLASSNAME);
//     bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
// }

// // Execution Code

// renderTitleList(articles);

// csPopupNode.addEventListener("click", (event) => {
//     const isClickOutsideContent = !event
//         .composedPath()
//         .includes(csPopupContentNode);

//     if (isClickOutsideContent) {
//         togglePopup();
//     }
// });

// returnBtnNode.addEventListener("click", togglePopup);

// printBtnNode.addEventListener("click", csPrint);

function App() {
    return (
        <>
            <h1>WebDev Cheat Sheets</h1>
            <div className="container">
                <ul id="csList" className="cs-list">
                    Error in rendering list of Cheat Sheets
                </ul>
            </div>
            <div id="csPopup" className="cs-popup">
                <div id="csPopupContent" className="cs-popup-content">
                    <div className="wrapper-btn" id="wrapperBtn">
                        <button className="return-btn" id="returnBtn"></button>
                        <button className="print-btn" id="printBtn"></button>
                    </div>
                    <span className="cs-popup-content_title" id="csTitle">
                        Error printing title
                    </span>
                    <span className="cs-popup-content_body" id="csBody">
                        Error printing body text
                    </span>
                </div>
            </div>
        </>
    );
}

export default App;
