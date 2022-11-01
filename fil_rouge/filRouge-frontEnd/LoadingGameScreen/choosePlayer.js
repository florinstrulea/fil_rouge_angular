const form = document.querySelector("#form-1");
const image1 = document.querySelector("#img-1");

image1.addEventListener("click", submitForm);

function submitForm(e) {
    if (e.target.id = "img-1") {
        form.submit();
    }
}