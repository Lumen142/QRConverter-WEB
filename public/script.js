const socket = io("http://localhost:3000");

const submit = document.getElementById("submit");
const text = document.getElementById("text");

const qrImage = document.getElementById("qr-image");

submit.addEventListener("click", () => {
    const textValue = text.value;

    socket.emit("generateQR", textValue);
})

socket.on("qrGenerated", (qrData) => {
    qrImage.src = qrData;
});
