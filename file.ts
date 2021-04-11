
let Solution=()=>{
let question:any=new Map();
question.set('2020-01-01',6);
question.set('2020-01-04',12);
question.set('2020-01-05',14);
question.set('2020-01-06',2);
question.set('2020-01-07',4);

let answer:any=new Map();
answer.set('Mon',Number.MIN_VALUE);
answer.set('Tue',Number.MIN_VALUE);
answer.set('Wed',Number.MIN_VALUE);
answer.set('Thru',Number.MIN_VALUE);
answer.set('Fri',Number.MIN_VALUE);
answer.set('Sat',Number.MIN_VALUE);
answer.set('Sun',Number.MIN_VALUE);
var no:number=0,no1:number=0,val:number=0;
let check=[];
let day=['Sun','Mon','Tue','Wed','Thru','Fri','Sat'];
for(let [key,value] of question){
    
    var date=new Date(key).toLocaleString('en-us',{weekday:'short'});
    no=answer.get(date);
    check.push(date);
    answer.set(date,value+no);
    }

let check1=new Set(check);
if(check1.size!==7){
        for(let [key,value] of answer){
    //        console.log(key,value)
            if(value===Number.MIN_VALUE){
                no1=day.indexOf(key);
                val=2*(answer.get(day[no1-1]))-answer.get(day[no1-2]);
                answer.set(key,val);
            }
        }
    }
    console.log(answer)
}
Solution();