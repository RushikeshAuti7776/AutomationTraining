
let studentname: string[] = ["Suresh", "Mahesh", "Naresh"]
let marks: number[] = [75, 80, 82]

let afteradding_tenmarks: any[] = [];
let totalMarks: number = 0;

console.log("Updated marks :")
for (let i: number = 0; i < marks.length; i++) {
    let newmarks: number = marks[i] + 10
    afteradding_tenmarks.push(newmarks)

    totalMarks += newmarks;
    
    console.log(`${studentname[i]} : ${afteradding_tenmarks[i]}`)
   
   
}

 let average = totalMarks / studentname.length;
    console.log("Avarage marks: "+average);

