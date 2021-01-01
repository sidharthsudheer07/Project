function verify(){
   
    if(document.form.name.value == ""){
        window.alert("Please enter your name");
        documet.form.name.focus();
        return false;
    }
    
    if(document.form.email.value == ""){
        window.alert("Please enter your email");
        documet.form.email.focus();
        return false;
    }
    if(document.form.email.value.indexOf("@",0)<0){
        window.alert("Please enter a valid email ID");
        document.form.email.focus();
        return false;                				
    }
    if(document.form.email.value.indexOF(".",0)<0){
        window.alert("Please enter a valid email ID");
        document.form.email.focus();
        return false;
    }
    if(document.form.user.value == ""){
        window.alert("Please enter your username");
        document.form.user.focus();
        return false;
    }
    if(document.form.pass.value == ""){
        window.alert("Please enter your password");
        document.form.pass.focus();
        return false;
    }
    if(document.form.number.value == ""){
        window.alert("Please enter your phone number");
        document.form.number.focus();
        return false;
    }
    if(document.form.age.value < 21 || document.form.age.value > 50){
        window.alert("Please enter your age in the range 18-50");
        document.form.number.focus();
        return false;
    }
    if(document.form.gender[0].checked == false && document.form.gender[1].checked == false){
        window.alert("Please select your gender");
        document.form.gender[0].focus();
        return false;
    }
    if(document.form.add.value == ""){
        window.alert("Please type your address");
        document.form.add.focus();
        return false;
    }
    if(document.form.list.value == ""){
        window.alert("Please select your state");
        document.form.list.focus();
        return false;
    }
    return true;
   
}    




