let month=Number(prompt("Enter Month:"))

    switch(month) {
    
        case 1:
        case 2:
        case 12:
            alert(`${month} is winter `)
            break;
        case 6:
        case 7:
        case 8:
            alert(`${month} is summer `)
            break;
        case 3:
        case 4:
        case 5:
            alert(`${month} is spring `)
            break;
        case 10:
        case 11:
        case 12:
            alert(`${month} is autumn `)
            break;
            // hecbiri deyilse
         default: 
            alert("invalid input")
            break;
        
        
        
        
          
    }

