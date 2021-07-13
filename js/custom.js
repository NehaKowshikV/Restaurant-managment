var items,itemprice,price=0,bill=0,index;

function start()
{
    items=["IDLI","POORI","VADA" ,"DOSA","UPMA","TEA/COFFE"];
    itemprice=[40,40,20,40,30,10];
}
function mymenu(num)
{
    document.getElementById("selected_item").innerHTML="YOU HAVE SELECTED = " + items[num];
    index = num;
}
function order()
{
    var qty=document.getElementById("quant").value;
    price=parseInt(qty)*itemprice[index];
    bill += price;

    var text = items[index] + "( "+ qty +" plates) = "+ price ;
    var ul=document.getElementById("eachitem");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
}
function createbill()
{
    document.getElementById("bill").innerHTML="YOUR BILL  ="+bill;
}