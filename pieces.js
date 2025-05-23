let u='div class="pieces" id="'
let aud=new Audio("files/aud.m4a")

let [toswitch,startpieces,v,bl,conqurered,grid,pieces]=[[],"ppppppppl"+"rnbqkbnrl",
[..."abcdefgh"],true,[],[],
{l:'<div class="pieces invalid"></div>',
z:'<'+u+'space"></div>',
k:'<'+u+'king"><svg viewBox="0 0 448 512"><path d="M224 0c17.7 0 32 14.3 32 32l0 16 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 48 152 0c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400 80 400 3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40l152 0 0-48-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-16c0-17.7 14.3-32 32-32zM38.6 473.4L80 432l288 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L54.6 512C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>',
q:'<'+u+'queen"><svg viewBox="0 0 576 512"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg></div>',
b:'<'+u+'bishop"><svg viewBox="0 0 320 512"><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7L64 400l192 0 0-27.3c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32L128 0zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512l274.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432 48 432z"/></svg></div>',
n:'<'+u+'knight"><svg viewBox="0 0 448 512"><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0 28.9-159c2.1-11.3 3.1-22.8 3.1-34.3l0-14.7C416 86 330 0 224 0L83.8 0C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4z"/></svg></div>',
r:'<'+u+'rook"><svg viewBox="0 0 448 512"><path d="M32 192L32 48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 40c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 40c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 144c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144L80 400 96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96l32 0c8.8 0 16-7.2 16-16l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432l320 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L38.6 512C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>',
p:'<'+u+'pawn"><svg viewBox="0 0 320 512"><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400l160 0L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32l-8.5 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l242.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432 64 432 22.6 473.4z"/></svg></div>'
}]
fullpiece=[...[...startpieces].reverse().join('').replace("kq","qk"),..."lzzzzzzzz".repeat(4)+"l",...startpieces]
const createBoard=()=>{
let board=document.createElement("div");
board?.setAttribute("class","square");
let game=document.querySelector("#gameboard");
game.append(board);
[...fullpiece].forEach((a)=>{board.innerHTML+=pieces[a]})
}
createBoard();
(()=>{
    bl?[...document.querySelectorAll("blacks")].map(a=>a=>a.style.cssText="pointer-events:all !important")
    :[...document.querySelectorAll("whites")].map(a=>a.style.cssText="pointer-events:all !important")
    localStorage.length?
    document.body.innerHTML=JSON.parse(localStorage?.getItem("doc"))
    :false;

})()
let gather=[]

let chars=[...document.querySelectorAll("*")]
.filter(a=>(/king|spac|quee|rook|pawn|knigh|bish/gim).test(a.id));

chars
.forEach((a,b)=>{
if(!/ [abcdefgh]\d/gi.test(a.id)){    
a.setAttribute("id",`${a.id} ${v[b%8]+Math.floor((b/8)+1)}`);
a.innerHTML+=`<p class="abs">${a.id.split(" ")[1]}</p>`;}
});
grid=chars.map((a,b,c)=>c.slice(b*8,(b+1)*8)).filter(a=>a[0])
chars.forEach((a,b)=>{
b<16?a.children[0].classList.add("blacks"):false;
b>47?a.children[0].classList.add("whites"):false;

a.addEventListener("click",(e)=>{
current=e.target.parentElement.parentElement.id;
let glen=toswitch.length;
glen>1?toswitch=[]:false;
let condition=e.target.tagName=="DIV" && toswitch.filter(a=>a).length==0
condition?false:(current?toswitch[toswitch[0]?1:0]=current+"_"+b:false);

toswitch=[...new Set(toswitch)]
let [gi,gd]=[(b%8),Math.floor(b/8)];
let ready=a.firstChild.classList.contains("whites");

let [pchop,rookMovement,knightMovement,bishopMovement,kingMovement]=[
[[gd-1,gi-1],[gd-1,gi+1],[gd+1,gi-1],[gd+1,gi+1]],
[...grid[gd],...grid.map(a=>a[gi])].filter(a=>a!=grid[gd][gi]),
[[gd-1,gi+2],[gd-1,gi-2],[gd+1,gi-2],[gd+1,gi+2],[gd-2,gi+1],[gd-2,gi-1],[gd+2,gi-1],[gd+2,gi+1]],
grid.flatMap((a,b,c)=>b<=gd?[[gd-b,gi+b],[gd-b,gi-b]]:[[b,gi-(Math.abs(b-gd))],[b,gi+(Math.abs(b-gd))]]),
[[gd,gi+1],[gd,gi-1],[gd-1,gi],[gd-1,gi+1],[gd-1,gi-1],[gd+1,gi+1],[gd+1,gi-1],[gd+1,gi]]

]

let move,first, second,wcheck,bcheck;
    toswitch[0]?move=toswitch[0].split(/\W/g)[0]??toswitch[0]:false;
    if(move){

        if(toswitch.length==2){
            first =toswitch[0].split("_")[1]*1;
            second =toswitch[1].split("_")[1]*1;
            wcheck= chars[first].firstChild.classList.contains("whites") && chars[second].firstChild.classList.contains("whites");
            bcheck= chars[first].firstChild.classList.contains("blacks") && chars[second].firstChild.classList.contains("blacks");
            
            wcheck?(move=toswitch[1].split(/\W/g)[0]??toswitch[1]):false;
            bcheck?(move=toswitch[1].split(/\W/g)[0]??toswitch[1]):false;
            // console.log(first,second,wcheck,bcheck)
            if(wcheck){
                toswitch=[toswitch[1]]
                gather=[]

            }
            else if(bcheck)
            {
                 toswitch=[toswitch[1]]
                 gather=[]
            }
            else{false}
            // console.log(toswitch)
        
        }
        console.log(toswitch,move,first,second,gather,bl)

        chars.map(a=>a.classList.remove("active"))
switch (move) {
    case "king":
        kingMovement
        .filter(a=>grid[a[0]] && grid[a[0]][a[1]] && a[0]>-1 && a[0]<8 && a[1]<8)
        .filter(a=>grid[a[0]][a[1]].children.length==1 ||ready !=grid[a[0]][a[1]].firstChild.classList.contains("whites"))
        .forEach((a)=>{toswitch.length==1?gather.push(grid[a[0]][a[1]]):false;grid[a[0]][a[1]]?.classList.add("active")});break;
    case "queen":bishopMovement.filter(a=>grid[a[0]] && grid[a[0]][a[1]] && a[0]>-1 && a[0]<8 && a[1]<8)
        .filter(a=>grid[a[0]][a[1]].children.length==1 ||ready !=grid[a[0]][a[1]].firstChild.classList.contains("whites"))    
        .forEach((a)=>{toswitch.length==1?gather.push(grid[a[0]][a[1]]):false;grid[a[0]][a[1]]?.classList.add("active")});
        rookMovement
        .filter(a=>a.children.length==1 ||ready !=a.firstChild.classList.contains("whites"))
        .forEach(a=>{toswitch.length==1?gather.push(a):false;a?.classList.add("active")});break;
    case "rook":rookMovement
        .filter(a=>a.children.length==1 ||ready !=a.firstChild.classList.contains("whites"))
        .forEach(a=>{toswitch.length==1?gather.push(a):false;a?.classList.add("active")});break;
    case "pawn":
        (ready?(gd!=6?[[gd-1,gi]]:[[gd-1,gi],[gd-2,gi]])
        .concat([[gd-1,gi-1],[gd-1,gi+1]].filter(a=> /svg|path/gi.test(grid[a[0]][a[1]]?.firstChild.tagName)))
        :[[gd+1,gi-1],[gd+1,gi+1]].filter(a=> /svg|path/gi.test(grid[a[0]][a[1]]?.firstChild.tagName))
        .concat(gd!=1?[[gd+1,gi]]:[[gd+1,gi],[gd+2,gi]]))
        .filter(a=>grid[a[0]] && grid[a[0]][a[1]] && (pchop.map(t=>grid[t[0]][t[1]]).includes(grid[a[0]][a[1]]) ||grid[a[0]][a[1]].children.length==1))
        .filter(a=>grid[a[0]][a[1]].children.length==1 ||ready !=grid[a[0]][a[1]].firstChild.classList.contains("whites"))
        .forEach((a)=>{toswitch.length==1?gather.push(grid[a[0]][a[1]]):false;grid[a[0]][a[1]]?.classList.add("active")});break;
    case "knight":knightMovement.filter(a=>grid[a[0]] && grid[a[0]][a[1]] && a[0]>-1 && a[0]<8 && a[1]<8)
        .filter(a=>grid[a[0]][a[1]].children.length==1 ||ready !=grid[a[0]][a[1]].firstChild.classList.contains("whites"))
        .forEach((a)=>{toswitch.length==1?gather.push(grid[a[0]][a[1]]):false;grid[a[0]][a[1]]?.classList.add("active")});break;
    case "bishop":bishopMovement.filter(a=>grid[a[0]] && grid[a[0]][a[1]] && a[0]>-1 && a[0]<8 && a[1]<8)
        .filter(a=>grid[a[0]][a[1]].children.length==1 ||ready !=grid[a[0]][a[1]].firstChild.classList.contains("whites"))
        .forEach((a)=>{toswitch.length==1?gather.push(grid[a[0]][a[1]]):false;grid[a[0]][a[1]]?.classList.add("active")});console.log(bishopMovement);break;
        
}


if(toswitch.length==2){
let ch=gather.map(a=>a.id).filter(a=>a)
let me = ch.includes(chars[b].id)
let ev=ch.every((a)=>a)
aud.currentTime=0.2;
    if(!me){
        console.log(ev,me)
        console.log(chars[b].id)
        console.log(ch)
        console.log(toswitch)
        gather=[];ch=[];
              chars.forEach(a=>{
                  a.classList.remove("active");})
              }
          else{exchange(toswitch,b)}    

}

}
else{
    false
}


})})
let next=document.querySelector("[next]")


const exchange=(c)=>{
aud.play();
    gather=[]

c && chars.forEach(a=>{
    a?.classList.remove("active");
    a.children[0].classList.contains("blacks") && bl?
    a.children[0].style.cssText="pointer-events:all !important":false;
    a.children[0].classList.contains("whites") && !bl?
    a.children[0].style.cssText="pointer-events:all !important":false;
    a.children[0].classList.contains("blacks") && !bl?
    a.children[0].style.cssText="pointer-events:none !important":false;
    a.children[0].classList.contains("whites") && bl?
    a.children[0].style.cssText="pointer-events:none !important":false;});
let [x,y,z]= [chars[c[1].split("_")[1]],chars[c[0].split("_")[1]],c.length==2]
let kk=x.firstChild;

    z?[x.innerHTML,y.innerHTML]=[y.innerHTML,x.innerHTML]:false;
    z?[x.lastChild.innerText,y.lastChild.innerText]=[y.lastChild.innerText,x.lastChild.innerText]:false;
/svg|path/g.test(y.firstChild.tagName)?conqurered.push(kk):false;

z?[x.id,y.id]=[
    y.id.split(/\W/g)[0]+" "+x.id.split(/\W/g)[1],
    x.id.split(/\W/g)[0]+" "+y.id.split(/\W/g)[1]]
    :false;
/svg|path/g.test(y.firstChild.tagName)?checkConquered(y.firstChild):false;

bl?next.classList.add("turn"):next.classList.remove("turn")
bl=!bl;

}
const full=()=>{

    document.body.requestFullscreen();
}
const leave=()=>{
    document.exitFullscreen();

}
const save=()=>{
localStorage?.setItem("doc",JSON.stringify(document.body.innerHTML))
alert("saved !")

}

let store=[...document.querySelectorAll("[stor]")]
const checkConquered=(k)=>{
k.classList.contains("whites")?store[1].append(k)
:store[0].append(k)
}
[...document.querySelectorAll("[contenteditable]")]
.map(a=>a.onkeyup=(()=>localStorage?.setItem("doc",JSON.stringify(document.body.innerHTML))))