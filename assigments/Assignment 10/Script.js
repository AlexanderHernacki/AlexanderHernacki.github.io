//Problem 1
let Sam = {"first name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raise eligible":true};

let Mary = {"first name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raise eligible":true};

let Bill = {"first name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raise eligible":false};

console.log("Problem 1:")
console.log(Bill);
console.log(Mary);
console.log(Sam);
//Problem 2
let Company = { "companyName":"Tech Stars",
                "website":"www.techstars.site",
                "employees":[Bill, Mary, Sam]


};
console.log("Problem 2:")
console.log(Company)
//Problem 3
let Anna = {"first name" : "Anna",
            "department" : "Tech",
            "designation" : "Executive",
            "salary" : 25600,
            "raise eligible":false};

console.log("Problem 3:")            
console.log(Anna);

Object.assign(Company.employees, { 3: Anna });

console.log(Company);
//Problem 4
var Salary=0;


for (let ii=0; ii<4; ii++){
    
    CurrentEmployee=Company.employees[ii];
    //console.log(CurrentEmployee);
    Salary=Salary+CurrentEmployee.salary;
}
console.log("Problem 4:")
console.log("Total Salary:"+Salary);

//Problem 5
function raiseTime(Input){

    for (let ii=0; ii<Input.employees.length; ii++){
        //console.log(ii);
        CurrentEmployee=Input.employees[ii];
        if(CurrentEmployee["raise eligible"]==true){
            //console.log("Test");
            Input.employees[ii].salary=Input.employees[ii].salary+Input.employees[ii].salary*0.1;
            Input.employees[ii]["raise eligible"]= false;
        }
    }
}

raiseTime(Company);
console.log("Problem 5:")
console.log(Company);

//Problem 6
WFH= ['Anna', 'Sam']
for (let ii=0; ii<Company.employees.length; ii++){
    Company.employees[ii]["wfh"]=false;
}

for (let ii=0; ii<Company.employees.length; ii++){
    //console.log(ii);
    for(let jj=0; jj<WFH.length;jj++){
        if(WFH[jj]==Company.employees[ii]["first name"]){
            //console.log("Test");
            Company.employees[ii]["wfh"]=true;
        }
    }
}
console.log("Problem 6:")
console.log(Company);




