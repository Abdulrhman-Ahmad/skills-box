let skills = document.querySelectorAll(".box");

skills.forEach(

    ( button ) => {

       button.onclick = ( event ) => {

        event.currentTarget.classList.add("hide");

       } 

    }
    
);

