const Question = [{
    id: 0,
    q: "1.Who is father of C language ?",
    a: [{ text: "Bjarne Stroustrup", isCorrect: false }, { text: "James A. Gosling", isCorrect: false }, { text: "Dennis Ritchie", isCorrect:true }, { text: "Dr. E.F. Codd" ,isCorrect:false}
    ]
},
{
    id: 1,
    q: "2.Who is father of Computer ?",
    a: [{ text: "ksdffkjj", isCorrect: false }, { text: "kjsdhjkdfg", isCorrect: false }, { text: "dfsnkn", isCorrect: false }, { text: "jksdfjka",isCorrect:true}
    ]
},
{
    id: 2,
        q: "3.Who is father of java?",
        a: [{ text: "sdkkp", isCorrect: true }, { text: "sdkfnk", isCorrect: false }, { text: "dsnfgkdsjgbnje", isCorrect: false }, { text: "kdsfn",isCorrect:false }
        ]
},
{
    id: 3,
        q: "4.what is zener diode?",
        a: [{ text: "rf", isCorrect: false }, { text: "sdkfgdfdnk", isCorrect: false }, { text: "mmmmm", isCorrect: true }, { text: "nnnnn",isCorrect:false }
        ]
},
{
    id: 4,
        q: "5.what is pn junction diode?",
        a: [{ text: "oooooo", isCorrect: false }, { text: "ppppp", isCorrect: false }, { text: "qqqq", isCorrect: false }, { text: "rrrr",isCorrect:true }
        ]
},
{
    id: 5,
        q: "6.I don't know?",
        a: [{ text: "ssss", isCorrect: false }, { text: "ttttt", isCorrect: true }, { text: "uuuu", isCorrect: false }, { text: "vvvvv",isCorrect:false }
        ]
}
]
function check(id){
    // getting the question
    const question=document.getElementById("question");
    // setting the question text
    question.innerText=Question[id].q;
    // getting the option
   const op1=document.getElementById('op1');
    const op2=document.getElementById('op2');
    const op3=document.getElementById('op3');
    const op4=document.getElementById('op4');
    // providing option
     op1.innerText=Question[id].a[0].text;
     op2.innerText=Question[id].a[1].text;
     op3.innerText=Question[id].a[2].text;
     op4.innerText=Question[id].a[3].text;
    //  providing true or false
    const A=Question[id].a[0].isCorrect;
    const B=Question[id].a[1].isCorrect;
    const C=Question[id].a[2].isCorrect;
    const D=Question[id].a[3].isCorrect;
    //
    // var selected="";
    function right(){
            if(A==true){
                op1.style.backgroundColor="green";
                op2.style.backgroundColor="red";
                op3.style.backgroundColor="red";
                op4.style.backgroundColor="red";
            }
            else if(B==true){
                op2.style.backgroundColor="green";
                op1.style.backgroundColor="red";
                op3.style.backgroundColor="red";
                op4.style.backgroundColor="red";
            }
            else if(C==true){
                op3.style.backgroundColor="green";
                op1.style.backgroundColor="red";
                op2.style.backgroundColor="red";
                op4.style.backgroundColor="red";
            }
            else if(D==true){
                    op4.style.backgroundColor="green";
                    op1.style.backgroundColor="red";
                    op2.style.backgroundColor="red";
                    op3.style.backgroundColor="red";
                }
    }
   
    op1.addEventListener('click',()=>{
        right();
        
    });
    op2.addEventListener('click',()=>{
        right();
    });
    op3.addEventListener('click',()=>{
        right();
    });
    op4.addEventListener('click',()=>{
        right();
    });

}
check(0);
