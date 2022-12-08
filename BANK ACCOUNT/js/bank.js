var na=prompt("ENTER YOUR NAME"),age=prompt("ENTER YOUR AGE"),bl=0,de,wi;

if(age>=18){
    gm=prompt("ENTER YOUR G-MAIL");
    mn=prompt("ENTER YOUR MOBILE NUMBER");
    pn=prompt("ENTER YOUR PIN NUMBER");
    pn >999 && pn<=9999 ?accno=alert("YOUR ACC NO-"+1324354657):alert("PIN NO IS NOT VALID");
    alert("ACCOUNT CREATED SUCCESSFULLY");
    console.log("ACC HOLDER NAME"+na);
    console.log("AGE"+age);
    console.log("G-MAIL"+gm);
    console.log("MOBILE NUMBER"+mn);
    console.log("PIN"+pn);
}
else if(age<18){
    alert("YOUR AGE NOT VALID");
}

de=prompt("deposite");
wi=prompt("withdrawal");

if(de>=500 || wi>=500){
    bl=Number(de)+Number(bl);
    bl=Number(bl)-Number(wi);
    console.log("DEPOSITE="+de);
    console.log("WITHDRAWAL="+wi);
    console.log("BALANCE="+bl);

}
else{
    console.log("AMOUNT LESS $500");
}










