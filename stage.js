let megathink = 0;

slide.push("<h1>スライドは以上です。次のページで問題</h1>")

function show(){
    document.querySelector("main").innerHTML = slide[megathink];
}

function left(){
    if (0 < megathink){
        megathink = megathink - 1;
        show();
    }
}

function right(){
    if (megathink < slide.length - 1){
        megathink = megathink + 1;
        show();
    } else{
        window.location.replace("/stage/tel/question/1.html")
    }
}

show();