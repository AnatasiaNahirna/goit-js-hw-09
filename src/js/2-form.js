const form = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: "",
}

form.addEventListener("input", saveData);

function saveData(event) { 
    formData.email = event.currentTarget.elements.email.value.trim();
    formData.message = event.currentTarget.elements.message.value.trim();

    if (formData.email === "" || formData.message === "") {
        return;
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (event.currentTarget.elements.message.value === "" || event.currentTarget.elements.email.value === "") {
        alert("Fill please all fields")
    } else {
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
})

const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        const parsed = JSON.parse(savedData);
        form.elements.email.value = parsed.email;
        form.elements.message.value = parsed.message;
    };