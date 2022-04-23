// Program wyswietlajacy wiadomosc powitalna z prosba o podanie imienia i dodajacy ja do localStorage
// Jesli imie jest podane w localStorage- div nie wyswietli sie

const firstTimeMessageDiv = document.querySelector(".hero .message");
const firstTimeMessageForm = document.querySelector(".message .message__container")
const firstTimeInput = document.querySelector(".message__container--input");
const personNameSpan = document.querySelector(".person__name")

const addRecipe = document.querySelector('.widget_recipe') //
const addPlans = document.querySelector('.widget_plan') //
const widget = document.querySelector('.widget_box')
const showRecipe = document.querySelector('.hide_recipe')
const showPlan = document.querySelector('.hideClass_plan')
const pulpit = document.querySelector('.pulpit')
const recipe = document.querySelector('.recipes_js')
const listRecipe = document.querySelector('.listClass')
const plans = document.querySelector('.plans')
const showPlans = document.querySelector('.hidePlans')


const personName = localStorage.getItem("personName");
if (personName === null) {
    firstTimeMessageDiv.classList.remove("hideClass");

    firstTimeMessageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("personName", firstTimeInput.value);
        personNameSpan.textContent = firstTimeInput.value;

        firstTimeMessageDiv.classList.add("hideClass");
    })
} else {
    personNameSpan.textContent = personName;
}


//Kolejny program ktory bedziemy pisac..
function removeWidget() {
    widget.style.display = "none";
}

function addAtr() {
    showRecipe.classList.add("hide_recipe");
    showPlan.classList.add("hideClass_plan");
    listRecipe.classList.add("listClass")
    showPlans.classList.add('hidePlans')

}


addRecipe.addEventListener("click", e => {
    removeWidget()
    showRecipe.classList.remove("hide_recipe");
})
addPlans.addEventListener("click", e => {
    removeWidget()
    showPlan.classList.remove("hideClass_plan");
})
pulpit.addEventListener("click", e => {
    widget.style.display = "block";

    addAtr()
})
recipe.addEventListener("click", e => {
    removeWidget()
    listRecipe.classList.remove("listClass")
    showRecipe.classList.add("hide_recipe");
    showPlan.classList.add("hideClass_plan");
    showPlans.classList.add('hidePlans')



})


plans.addEventListener("click", e => {
    removeWidget()

    addAtr()
    showPlans.classList.remove('hidePlans')
    removeWidget()
})


//Dodawanie nowego planu do local storage
const newPlanSection = document.querySelector(".new-plan__box");
const addPlanBtn = document.querySelector(".new-plan__heading-btn");
const addPlanForm = document.querySelector(".new-plan__form");
const planTitle = document.querySelector("#plan-name");
const planDescription = document.querySelector("#plan-description");
const planWeekNumber = document.querySelector("#plan-number");
const mondayDishes = document.querySelector(".new-plan__monday-tr").children;
const addPlanFormElements = [...addPlanForm.elements];

//Klasa tworzaca plan wraz z metodami
class Plan {
    constructor(title, description, weekNumber) {
        this.title = title;
        this.description = description;
        this.weekNumber = weekNumber;
        this.monday = [];
        this.tuesday = [];
        this.wednesday = [];
        this.thursday = [];
        this.friday = [];
        this.saturday = [];
        this.sunday = [];
    }

    addMonday(array) {
        const newArr = array.filter((element, index) => index > 3 && index < 9);
        newArr.forEach((element) =>   this.monday.push(element));
    };

    addTuesday(array) {
        const newArr = array.filter((element, index) => index > 8 && index < 14);
        newArr.forEach((element) =>   this.tuesday.push(element));
    };

    addWednesday(array) {
        const newArr = array.filter((element, index) => index > 13 && index < 19);
        newArr.forEach((element) =>   this.wednesday.push(element));
    };

    addThursday(array) {
        const newArr = array.filter((element, index) => index > 18 && index < 24);
        newArr.forEach((element) =>   this.thursday.push(element));
    };

    addFriday(array) {
        const newArr = array.filter((element, index) => index > 23 && index < 29);
        newArr.forEach((element) =>   this.friday.push(element));
    };

    addSaturday(array) {
        const newArr = array.filter((element, index) => index > 28 && index < 34);
        newArr.forEach((element) =>   this.saturday.push(element));
    };

    addSunday(array) {
        const newArr = array.filter((element, index) => index > 33 && index < 39);
        newArr.forEach((element) =>   this.sunday.push(element));
    };

    //Metoda sprawdzajaca czy juz sa przepisy i dodajaca nowe
    saveRecipeToLocalStorage() {
        let dataFromLocalStorage = [];

        if (localStorage.getItem("recipes") !== null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
            dataFromLocalStorage.push(this);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));

        } else {
            dataFromLocalStorage.push(this);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
        };

        alert("Zapisano nowy przepis do localStorage")
    };

};

//Glowna funkcja do zapisywania localStorage
function savePlanToLocalStorage(event) {
    event.preventDefault();
    const addPlanFormValues = addPlanFormElements
        .map((element) => element.value);

    const newObj = new Plan(planTitle.value, planDescription.value, planWeekNumber.value);
    newObj.addMonday(addPlanFormValues);
    newObj.addTuesday(addPlanFormValues);
    newObj.addWednesday(addPlanFormValues);
    newObj.addThursday(addPlanFormValues);
    newObj.addFriday(addPlanFormValues);
    newObj.addSaturday(addPlanFormValues);
    newObj.addSunday(addPlanFormValues);

    newObj.saveRecipeToLocalStorage();

    // newPlanSection.classList.add("hideClass_plan");
};


addPlanForm.addEventListener("submit", savePlanToLocalStorage);



//Kolejny program do napisania ..

