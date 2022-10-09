function submitAnswers(){
    let total = 2;
    let score = 0;
    let q1 = document.forms["quizForm"] ["q1"].value;
    let q2 = document.forms["quizForm"] ["q2"].value;

    
  for(let i = 1; i<= total; i++){
          if( eval('q' + i) == null || eval('q' + i) == ''){
        alert("you missed question " + i);
        return false;
    }
  }
    
    let answers = ["a", "d"]
    
    for(let i = 1; i<= total; i++){
        if(eval('q' + i) == answers [i - 1]){
            score++;
        }
    }
      alert('You scored ' + score + " out of " + total);
    //display results
    let results = document.getElementById('results');
    results.innerHTML= '<h3> You scored <span' + score + '</span> out of <span>' + total + '</span></h3>';
    
  
    
    return false;
}