const brideEducation = document.querySelector(".Brides-Grooms-education");
const familyNet = document.querySelector(".family-net");
const submitQuote = document.getElementById("submit-quote");

document.querySelector('button').onclick = myClick;

function myClick () {
  let personName = document.querySelector('.name').value;
  console.log(personName);
  document.querySelector('.out').innerHTML = personName; 
}


var age_prices = new Array();
age_prices["18"]=1.5;
age_prices["24"]=1.2;
age_prices["28"]=0.95;
console.log(age_prices);

submitQuote.addEventListener('click', function(){
  
  //document.querySelector('button').onclick = bidClick;
  //function bidClick() {
    //let bid = document.querySelector('.starting-bid').value;
    //console.log(bid);
  //}
  
  let bid = document.querySelector('.starting-bid').value;
  console.log(bid);


  
  //family net worth
  if (familyNet.options[familyNet.selectedIndex].text == "More than 100,000$") {
    answer = bid * 2;
  } else if (familyNet.options[familyNet.selectedIndex].text == "Between 50,000$ and 100,000$") {
    answer = bid * 1.5;
  } else {
    answer = bid * 1.2;
  }
  
  //education
  if (brideEducation.options[brideEducation.selectedIndex].text == "Undergraduate degree") {
    answer = answer * 1.5;
  } else if (brideEducation.options[brideEducation.selectedIndex].text == "College degree") {
    answer = answer * 1.2;
  } else if (brideEducation.options[brideEducation.selectedIndex].text == "High school degree") {
    answer = answer * 1.05;
  } else 
    answer = answer*0.9;
  
    var skills = document.getElementsByTagName("input");
    for (var i = 0; i < 4; i++)
    {
       if (skills[i].checked)
       {
          answer += (skills[i].value * 1);
       }

    }
    console.log(skills);


	var theForm = document.forms["agefound"];
	var agecount = theForm.elements["agecount"] 
	for (var i = 0; i < agecount.length; i++)
	{
		if (agecount[i].checked) 
			{
				answer *= age_prices[agecount[i].value];
			
			}
	}
  console.log(theForm);
  console.log(agecount);


  
    var selectedRealistic = document.getElementsByClassName("gossip");
    for (var j = 0; j < 3; j++){
    
      if (selectedRealistic[j].checked && j == 0){
      		answer *= 0.85;
      }
      else if (selectedRealistic[j].checked && j == 1){
        answer *= 0.9;     
    }
    else if (selectedRealistic[j].checked && j == 2) {
        answer -= 200;   
    }
    }
    console.log (selectedRealistic);

    let letter = document.querySelector('.love-letter').value;
    console.log(letter);

    document.querySelector('.price').innerHTML = "$" + answer ;
    document.querySelector('.loveletter').innerHTML = "Love letter: " + letter;




  
});

