import mammoth from "mammoth";

document.getElementById("document")
        .addEventListener("change", handleFileSelect, false);

function handleFileSelect(event) {
    mammoth.convertToHtml({
        arrayBuffer: event.target.files[0]
    });
    console.log("called");
}
