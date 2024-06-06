body {  
    
    font-family: "Reddit Mono", monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #18191a;
    overflow: hidden;
}

.container {
    text-align: center;
}

#balloonContainer {
    font-family: "Montserrat", sans-serif;
    position: relative;
    width: 100vw;
    height: 80vh;
    margin-top: 20px;
}

.balloon {
    font-family: "Montserrat", sans-serif;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 10px;
    padding: 10px;
    max-width: 200px;
    position: absolute;
    animation: fadeIn 0.7s ease-in-out;
    transition: transform 0.3s ease-in-out;
}

.balloon:hover {
    transform: scale(1.2);
}

.balloon::after {
    font-family: "Montserrat", sans-serif;
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

#interactBtn { 
    font-family: "Comic Neue", cursive ;
    font-size: 30px;
    padding: 20px 40px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    background-color: #ffffff;
    border:#000000;
    border-width: 100px ;
    border-right: 100px;
    font-weight: bold; 
    border-radius: 12px;
    transition: background-color 1.5 ease, transform 1.5 ease;

}
    
   #interactBtn:hover {
    text-shadow: #000000;
    transform: scale(1.05);
    text-transform: uppercase;
    text-transform: bold;
    background-color: #6e6e6e;
}

#interactBtn::after {

    background-color: #006536;
    text-transform: lowercase;

}


#titulo { 
   
    
font-size: 40;
color: #ffffff;



}


