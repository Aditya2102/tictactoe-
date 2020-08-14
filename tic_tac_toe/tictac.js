//grabbing all html elements
const statusDiv=document.querySelector('.status');
const resetDiv=document.querySelector('.reset');
const cellDivs=document.querySelectorAll('.cell');

//Game variables
let gameisalive=true;
let xisnext=true;
var xx='×';
var oo='○';
//functions
    const lts =(l) => l=='x' ? xx:oo;

const checkstatus = () =>
{
    const tl=cellDivs[0].classList[2];
    const tm=cellDivs[1].classList[2];
    const tr=cellDivs[2].classList[2];
    const ml=cellDivs[3].classList[2];
    const mm=cellDivs[4].classList[2];
    const mr=cellDivs[5].classList[2];
    const bl=cellDivs[6].classList[2];
    const bm=cellDivs[7].classList[2];
    const br=cellDivs[8].classList[2];
    //console.log(tl,tm,tr,ml,mm,mr,bl,bm,br);

    //checking for winners
    if(tl && tl==tm && tl==tr)
    {
        console.log(tl +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(tl)} has WON!</span>`;
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    }
    else if(ml && ml==mm && ml==mr)
    {
        console.log(ml +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(ml)} has WON!</span>`;
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }
    else if(bl && bl==bm && bl==br)
    {
        console.log(bl +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(bl)} has WON!</span>`;
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(tl && tl==ml && tl==bl)
    {
        console.log(tl +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(tl)} has WON!</span>`;
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if(tm && tm==mm && tm==bm)
    {
        console.log(tm +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(tm)} has WON!<span>`;
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }
    else if(tr && tr==mr && tr==br)
    {
        console.log(tr +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(tr)} has WON!</span>`;
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(tl && tl==mm && tl==br)
    {
        console.log(tl +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(tl)} has WON!</span>`;
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    }
    else if(tr && tr==mm && tr==bl)
    {
        console.log(tr +" is the WINNER");
        gameisalive=false;
        statusDiv.innerHTML =`<span>${lts(tr)} has WON!</span>`;
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }
    else if(tl&&tm&&tr&&ml&&mm&&mr&&bl&&bm&&br)
    {
        gameisalive=false;
        statusDiv.innerHTML=`<span>GAME-DRAW!</span>`
    }
    else
    {
        if(!xisnext)
            statusDiv.innerHTML= `×'s Turn!`;
        else
        statusDiv.innerHTML= `<span>○'s Turn!</span>`;

    }
};

//event handlers
const handleReset = () =>
{
//console.log("Reset button clicked");
    xisnext=true;
    gameisalive=true;
    statusDiv.innerHTML= `×'s Turn!`;
    for(const i of cellDivs)
    {
        i.classList.remove('x');
        i.classList.remove('o');
        i.classList.remove('won');
    }
};


const handleCell = (e) => 
{
    if(gameisalive)
    {
const cl=e.target.classList;
const location= cl[1]; // return the cell number

if(cl[2]== 'x' || cl[2]== 'o')
{
    return;//do nothing when there's already x or o
}
if(xisnext)
{
    cl.add('x');
    checkstatus();
    xisnext= !xisnext;
   // statusDiv.innerHTML= `○'s Turn!`;
}
else
{
    cl.add('o');
    checkstatus();
    xisnext= !xisnext;
    //statusDiv.innerHTML= `×'s Turn!`;
}
    }
};

//event Listeners
resetDiv.addEventListener('click',handleReset);//reset button

for(const i of cellDivs)// all 9 cells
{
    i.addEventListener('click',handleCell);
}