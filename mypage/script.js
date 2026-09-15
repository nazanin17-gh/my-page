const courseName=document.getElementById("coursename");
const courseUnit=document.getElementById("courseunit");
const courseGrade=document.getElementById("coursegrade");
const addCourse=document.getElementById("addcourse");
const gpa=document.getElementById("gpa");
const totalUnits=document.getElementById("totalunit");
const totalGrades=document.getElementById("totalgrade");
const Deleteall=document.getElementById('delete');

let sumUnits=0;
let sumGrades=0;
let weithunits=0;

addCourse.addEventListener("click" , function(){
    const name=courseName.value.trim();
    const unit=Number(courseUnit.value);
    const garde=Number(courseGrade.value);

    if (name===""){
        alert("لطفا نام درس را وارد کنید");
        return;
    }
    if(unit<=0 || isNaN(unit)){
        alert("لطفا تعداد واحد را درست وارد کنید");
        return;
    }
    if(garde<=0 || garde>20 ||isNaN(garde)){
        alert("نمره باید بین صفر و بیست باشد");
        return;
    }
    sumUnits+=unit;
    sumGrades+=garde;
    weithunits+=garde*unit;
    const average=weithunits/sumUnits;
    gpa.textContent=average.toFixed(2);
    totalUnits.textContent=sumUnits;
    totalGrades.textContent=sumGrades;
    courseName.value="";
    courseGrade.value="";
    courseUnit.value="";
    courseName.focus();

});

Deleteall.addEventListener("click" , function(){
    totalUnits.textContent="0";
    totalGrades.textContent="0";
    gpa.textContent="0.00";
    sumUnits=0;
    sumGrades=0;
    weithunits=0;
})


