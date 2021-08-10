
   

    
    
        const fstname = document.getElementsByTagName("#firstname");
        const lstname = document.getElementsByTagName("#lastname");
        const pass = document.getElementsByTagName("#password");
        const cnfmpass = document.getElementsByTagName("#confirmPassword")
        const usrname = document.getElementsByTagName("#username");
        const form = document.getElementsByTagName("#form");
        


        form.addEventListener("submit",(e)=>
        {
            
            var err = [];

            if(pass.value.length != 6)
            {
                err.push("Password must contain 6 characters only.")
            } 

            var passtrim = pass.value.trim();
            var passupper = passtrim.toUpperCase();
            if(passupper.charAt(0) < "A" || passupper.charAt(0) > "Z")
            {
                err.push("Password must start with an alphabet");
            }

            if(!(pass === cnfmpass))
            {
                err.push("Password did not match")
                
            }

            var usertrim = usrname.value.trim();
            var userupper = usertrim.toUpperCase();
            if (userupper.charAt(0) < "A" || userupper.charAt(0) > "Z") 
            {
                errors.push("Username must start with alphabet");
            }
            if (usrname.value.length < 6)
            {
                errors.push("Username must contain atleast 6 characters");
            }

            var numbers = /[0-9]/;
            if(!numbers.test(passtrim))
            {
                err.push("Password should contain atleast one number");
            }

            var string= /[A-Z]/;
            var valid = false;
            for(var i = 0; i < passtrim.length; i++)
            {
                if(string.indexOf(passtrim.substr(i,1)) >= 0)
                {
                    valid = true;
                }
            } 

            if(!valid)
            {
                err.push("Password should start with uppercase letters")
            }

            if (err.length > 0) 
            {
                e.preventDefault();
                
                for (var i = 0; i < 5; i++) 
                {
                    if (err[i] != undefined) 
                    {
                        var element = document.getElementById("errors");
                        element.innerHTML += `${i + 1}.${err[i]}<br/>`;
                    }
                }
            }

            
        });
    


        
