function firstWord(s) {
    let ans=""
    
    
    for(let i=0;i<=s.length;i++){
        if(s.trim().charAt(i)==" ")  {
        break;
      }
      ans+=s.trim().charAt(i);
    }
    return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
