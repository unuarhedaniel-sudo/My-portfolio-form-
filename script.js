const form = document.getElementById("studentform");
const clearBtn = document.getElementById("clearBtn");
const successMessage = document.getElementById("successMessage");

const inputs = document.querySelectorAll("#sudentform input");
const deleteButtons = document.querySelectorAll(".delete-btn");

form.addEventListener("submit", function(event){
    event.preventDefault();

    for(let input of inputs){
        if(input.value.trim() == ""){
            alert("please fill in all fields.");
            input.focus();
            return;
        }
    }


const email = document.getElementById("email").value.trim();

if(!email.includes("@")){
    alert("please enter an email containing @.");
    document.getElementById("email").focus();
    return;
}

successMessage.textContent = "Success! your form has been submitted";
});


deleteButtons.forEach(function(buton){
    button.addEventListener("click", function(){
        const targetId = button.dataset.target;
        const input = document.getElementById(targetId);

        if(input){
            input.value = "";
        }

        successMessage.textContent = "";
    });
});


clearBtn.addEventListener("click", function(){
    form.reset();
    successMessage.textContent= "";
});