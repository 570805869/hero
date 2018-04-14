function elem(selector){
    return document.querySelector(selector);
}

function elems(selector){
    var ary = [];
    document.querySelectorAll(selector).forEach(function(item){
        ary.push(item);
    });
    return ary;
}