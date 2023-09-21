function hello() {
    const heading = document.querySelector("h1");
    if (heading.innerHTML === "Hello!"){
        heading.innerHTML = "GoodBye";
    } else{
    heading.innerHTML = "Hello!";
    }
}
