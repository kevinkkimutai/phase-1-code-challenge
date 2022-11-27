const salary = document.getElementById("gsalary").value;
/* let pin = document.getElementById("hnif").value;  */


const grossalary = () => {
    const salary = document.getElementById("gsalary").value;
    if (document.getElementsByTagName('input').value == "") {
        alert("Please Enter your salary amount eg.1234");
    }
    document.getElementById("gpay").innerHTML = `${salary}`;
    nssf();
    nhif();
    payee();
    tax();
    nsalary();
    /* KRA CALCULATIONS */
    function tax() {
        let tax = salary - nssf();
        document.getElementById("taxable").innerHTML = `${tax}`;
    };
    function nsalary() {
        const salary = document.getElementById("gsalary").value;
        let ns = salary - nssf();
        let nh = ns - nhif();
        let py = nh - payee();
        if (salary > 0){
            document.getElementById("nsalar").innerHTML = `${py}`;
            return py;
        }
    }; 
        /* PAYEE CALCULATIONS */
    function payee() {
        const salary = document.getElementById("gsalary").value;
        let taxx = salary - nssf();
        let one  = 100 * nssf() / salary;
        let two = 100 - one;
        let three = (two / 100) * 10;
        let kra1 = (three * taxx) / two;
        let kra2 = (taxx / 100) * 25;
        let kra3 = (taxx / 100) * 30;
        if (salary < 0) {
            alert("Please enter a valid amount");
        }
        else if (salary <= 24000) {
            document.getElementById("payee").innerHTML = `${kra1}`;

        }
        else if (salary >= 24000 && salary <= 32333) {
            document.getElementById("payee").innerHTML = `${kra2}`;

        }
        else if (salary > 32333) {
            document.getElementById("payee").innerHTML = `${kra3}`;

        }
    };

    function nhif() {
        const salary = document.getElementById("gsalary").value;
        /* NHIF CALCULATIONS */
        if (salary <= 5999) {
            document.getElementById("nhif").innerHTML = "150";

            return 150;
        }
        else if (salary >= 6000 && salary <= 7999) {

            document.getElementById("nhif").innerHTML = "300";

        }
        else if (salary >= 8000 && salary <= 11999) {
            document.getElementById("nhif").innerHTML = "400";

        }
        else if (salary >= 12000 && salary <= 14999) {
            document.getElementById("nhif").innerHTML = "500";
        }
        else if (salary >= 15000 && salary <= 19999) {
            document.getElementById("nhif").innerHTML = "600";
        }
        else if (salary >= 20000 && salary <= 24999) {
            document.getElementById("nhif").innerHTML = "750";
        }
        else if (salary >= 25000 && salary <= 29999) {
            document.getElementById("nhif").innerHTML = "850";
        }
        else if (salary >= 30000 && salary <= 34999) {
            document.getElementById("nhif").innerHTML = "900";
        }
        else if (salary >= 35000 && salary <= 39999) {
            document.getElementById("nhif").innerHTML = "950";
        }
        else if (salary >= 40000 && salary <= 44999) {
            document.getElementById("nhif").innerHTML = "1000";
        }
        else if (salary >= 45000 && salary <= 49999) {
            document.getElementById("nhif").innerHTML = "1100";
        }
        else if (salary >= 50000 && salary <= 59999) {
            document.getElementById("nhif").innerHTML = "1200";
        }
        else if (salary >= 60000 && salary <= 69999) {
            document.getElementById("nhif").innerHTML = "1300";
        }
        else if (salary >= 70000 && salary <= 79999) {
            document.getElementById("nhif").innerHTML = "1400";
        }
        else if (salary >= 80000 && salary <= 89999) {
            document.getElementById("nhif").innerHTML = "1500";
        }
        else if (salary >= 90000 && salary <= 99999) {
            document.getElementById("nhif").innerHTML = "1600";
        }
        else if (salary >= 100000) {
            document.getElementById("nhif").innerHTML = "1700";
        }

    };
        /* NSSF CALCULATIONS */
    function nssf() {
        const salary = document.getElementById("gsalary").value;
        let nss = (salary / 100) * 6;
        let tier1 = 360;
        let tier2 = 720;
        let total = tier1 + tier2;
        if (salary <= 17999) {
            document.getElementById("nsf").innerHTML = `${nss}`;
            return nss;
        }
        else if (salary >= 18000) {
            document.getElementById("nsf").innerHTML = `${total}`;
            return tier1 + tier2;
        }
       
    };

  





}



