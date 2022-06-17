let counter = localStorage.getItem("counter")||0;
if(counter==0)
{
    document.getElementById("task").innerHTML="No Tasks";

}
else
{
    document.getElementById("task").innerHTML=localStorage.getItem(1);
    document.getElementById("box").style.left="300px";

}
document.getElementById("myButton").addEventListener("click",add);
document.getElementById("reset").addEventListener("click",reset);
document.getElementById("complete").addEventListener("click",complete);


function add()
{
    var newTask = document.getElementById("myInput").value;
    document.getElementById("myInput").value="";
    counter++;
    localStorage.setItem("counter",counter);
    localStorage.setItem(counter,newTask);
    if(counter==1)
    {
        document.getElementById("task").innerHTML=newTask;
        document.getElementById("box").style.left="300px";
    }
}
function reset()
{
    localStorage.clear();
    counter=0;
    document.getElementById("task").innerHTML="No Tasks";
    document.getElementById("box").style.left="200px";
}
function complete()
{
    shift();
    counter--;
    if(counter==0)
    {
        document.getElementById("task").innerHTML="No Tasks";
        document.getElementById("box").style.left="200px";
    }
    else
    {
        var nextTask=localStorage.getItem(1);
        document.getElementById("task").innerHTML=nextTask;

    }


}
function shift()
{
    for(var i=1;i<=counter;i++)
    {
        var temp = localStorage.getItem(i);
        localStorage.setItem(i-1,temp);
    }
    localStorage.removeItem(counter);
    localStorage.setItem("counter",counter-1);

}
