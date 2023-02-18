let isAnagram= function (str1,str2) {
    let sorted1 = str1.split("").sort().join("").toLowerCase();
    let sorted2=str2.split("").sort().join("").toLowerCase();
        return(sorted1===sorted2);
    
}

console.log(isAnagram("below", "elbow" ));
console.log(isAnagram("study", "dusty" ));
console.log(isAnagram("dessert", "tressed"));
console.log(isAnagram("thing", "night" ));
console.log(isAnagram("gainly","laying"));
console.log(isAnagram("cat", "dusty"));


const str= " There are many variations of passages of Lorem Ipsum available. The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.";

const result= str.split(". ").map(item => {
    return item.split(" ").map(word =>{
      return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ");
   
}).join(". \n");

  
console.log(result); 