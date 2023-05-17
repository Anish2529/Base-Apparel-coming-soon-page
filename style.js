const button = document.querySelector(".btn")
const write = "Plese Enter a valid email"
const display = document.querySelector(".display")


button.addEventListener('click',() =>{

    const input = document.querySelector("#email").value
    const error = document.querySelector(".error")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
    {
      return(true)
    }
    else{
        display.innerHTML = write
        error.style.display = "inline-block"
        input.style.border = "5px solid red"
    }
  
})