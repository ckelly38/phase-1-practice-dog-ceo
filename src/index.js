console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function()
{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let imftch = fetch(imgUrl).
    then((res) => res.json()).
    then(function(ores){
        console.log("ores = " + ores);
        let myimgs = ores.message;
        console.log("myimgs = " + myimgs);
        for(let n = 0; n < myimgs.length; n++)
        {
            let myimg = document.createElement("img");
            myimg.src = myimgs[n];
            console.log("myimg.src = " + myimg.src);
            document.getElementById("dog-image-container").appendChild(myimg);
        }
    }).catch(function(err){
        console.error(err);
    });
    let bdnmftch = fetch(breedUrl).
    then((res) => res.json()).
    then(function(ores){
        console.log("ores = " + ores);
        console.log("ores.message = " + ores.message);
        let mylastnames = Object.keys(ores.message);
        let myvals = Object.values(ores.message);
        let dbglist = document.getElementById("dog-breeds");
        for(let n = 0; n < mylastnames.length; n++)
        {
            for(let k = 0; k < myvals[n].length; k++)
            {
                let myli = document.createElement("li");
                myli.textContent = "" + myvals[n][k] + " " + mylastnames[n];
                console.log("myli.textContent = " + myli.textContent);
                dbglist.appendChild(myli);
            }
        }
        for(let n = 0; n < dbglist.children.length; n++)
        {
            dbglist.children[n].addEventListener("click", function(event){
                //console.log("event.target = " + event.target);
                event.target.style.color = "red";
            });
        }
    }).catch(function(err){
        console.error(err);
    });
    let myalphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let n = 4; n < myalphabet.length; n++)
    {
        let myopt = document.createElement("option");
        myopt.value = myalphabet[n];
        myopt.textContent = myalphabet[n];
        document.getElementById("breed-dropdown").appendChild(myopt);
    }
    document.getElementById("breed-dropdown").addEventListener("click", function(event){
        console.log("event.target = " + event.target);
        console.log("event.target.value = " + event.target.value);
        let dbglist = document.getElementById("dog-breeds");
        for(let n = 0; n < dbglist.children.length; n++)
        {
            console.log("name = " + dbglist.children[n].textContent);
            if (dbglist.children[n].textContent.indexOf(event.target.value) == 0)
            {
                console.log("NEED TO SHOW THIS!");
                dbglist.children[n].style.display = "block";
            }
            else
            {
                console.log("NEED TO HIDE THIS!");
                dbglist.children[n].style.display = "none";
            }
        }
        //debugger;
    });
});
