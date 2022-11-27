$(document).ready(function(){
    $("#calculate").on('click', function(e){
        e.preventDefault();

        // Variable selector values
        var input = {
            payGross: $("input#gsalary").val(),
            /* insuranceRelief: $("input#insurance-relief").val(),
            nonCashBenefits: $("input#non-cash-benefits").val(),
            pensionContribution: $("input#pension-contribution").val(),
            deductionsOther: $("input#deductions-other").val(),
            oldNSSFRates: $("input#old-nssf-rates").is(":checked") */
        };

        // Result selectors
        var selector = {
            gross: $("#gpay"),
            taxable: $("#taxable"),
            nhif: $("#nhif"),
            nssf: $("#nssf"),
            paye: $("#payee"),
            net: $("#nsalary"),

            prompt: $("#response"),

            delimiter: ' - '
        };

        // Check if the gross pay has been indicated
        if (input.payGross == undefined || input.payGross == ""){

            selector.prompt.show().html("Please enter a valid amount.");
            return '';

        } else { // ...continue

            // Hide prompt if displayed
            selector.prompt.hide();

            // Calculate
            var calculate = {
                nhif: function(){
                    if (input.payGross >= 0 && input.payGross <= 5999) {
                        return 150;
                    } else if (input.payGross >= 6000 && input.payGross <= 7999) {
                        return 300;
                    } else if (input.payGross >= 8000 && input.payGross <= 11999) {
                        return 400;
                    } else if (input.payGross >= 12000 && input.payGross <= 14999) {
                        return 500;
                    } else if (input.payGross >= 15000 && input.payGross <= 19999) {
                        return 600;
                    } else if (input.payGross >= 20000 && input.payGross <= 24999) {
                        return 750;
                    } else if (input.payGross >= 25000 && input.payGross <= 29999) {
                        return 850;
                    } else if (input.payGross >= 30000 && input.payGross <= 34999) {
                        return 900;
                    } else if (input.payGross >= 35000 && input.payGross <= 39999) {
                        return 950;
                    } else if (input.payGross >= 40000 && input.payGross <= 44999) {
                        return 1000;
                    } else if (input.payGross >= 45000 && input.payGross <= 49999) {
                        return 1100;
                    } else if (input.payGross >= 50000 && input.payGross <= 59999) {
                        return 1200;
                    } else if (input.payGross >= 60000 && input.payGross <= 69999) {
                        return 1300;
                    } else if (input.payGross >= 70000 && input.payGross <= 79999) {
                        return 1400;
                    } else if (input.payGross >= 80000 && input.payGross <= 89999) {
                        return 1500;
                    } else if (input.payGross >= 90000 && input.payGross <= 99999) {
                        return 1600;
                    } else if (input.payGross >= 10000) {
                        return 1700;
                    } else {
                        return 0;
                    }
                },
                nssf: function(){
                    
                        if (input.payGross <= 6000){
                            return 0.06 * input.payGross;
                        } else if (input.payGross > 6000 && input.payGross <= 18000){
                            var tier1 = 360;
                            var tier2 = 0.06 * (input.payGross - 6000);
                            return tier1 + tier2;
                        } else if (input.payGross > 18000) {
                            return 720;
                        } else {
                            return "";
                        }
                    
                },
                taxablePay: function(){
                    return input.payGross - 200;
                },
                paye: function(){

                    // console.log(calculate.taxablePay);
                    return calculate.taxable;
                }
            };

            // Display gross/taxable pay as is
            selector.gross.html(selector.delimiter + input.payGross);
            selector.nhif.html(selector.delimiter + calculate.nhif());
            selector.nssf.html(selector.delimiter + calculate.nssf());


            // Log the result
            console.log("Taxable Pay: " + calculate.taxable());
            console.log("NHIF: " + calculate.nhif());
            console.log("NSSF: " + calculate.nssf());
            console.log("PAYE: " + calculate.paye());

        }
    })
});