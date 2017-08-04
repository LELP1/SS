(function(){


var domOrder=[1,2,3,4];
var oDom=$('.test-box');
var oDomParent=document.getElementById('content');


oDom.remove();

for(var i=0;i<4;i++){
    oDomParent.appendChild(oDom[domOrder[i]-1]);
}
$('.btn').click(function(){
    $('.test-box:eq(0)').append("<div class='tips'><div class='tip-main'></div><div class='tip-tge'></div><button class='close-btn'><i class='fa fa-close'></i></button></div>");
    setTimeout(function(){
        $('.tips').addClass('tips-animation')
    },100);
    $('.close-btn').click(function(){
        $(this.parentNode).remove();
    })
});



oDomParent.addEventListener('DOMSubtreeModified',function(){
    oDom=$('.test-box');
    domOrder=[];
    for(var i=0;i<4;i++){
        domOrder.push(oDom[i].className[0]-0);
    }
    console.log(domOrder);
})

})();

