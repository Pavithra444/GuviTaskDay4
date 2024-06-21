const resumejson=require('./resume.json');  //json file assigned to an object

for(var i in resumejson)                    //for in loop
  {
    
    if(i==="educationalqualification")
      {
        console.log(i+" : ");
        var eq=resumejson.educationalqualification;
      
       for(var j =0;j<eq.length;j++)       //for loop
          {
            let qual=eq[j];
            for(var k in qual)
              if(k==="degree")
                {
                  console.log("  "+k+" = " + qual[k]);
                }
                else{
              console.log("        "+k+" = " + qual[k]);
                }
          }
      }
      else if(i==="experience")
        {
          console.log(i+" : ");
          var exp=resumejson.experience;
       
            
            for(var l in exp)
              {
                console.log("  "+l+" = " + exp[l]);
              }
          
        }
        else if(i==="skills")
          {
            console.log(i+" : ");
            
         
              for(var m of resumejson.skills)         //for of loop
                {
                  console.log("  * "+m);
                }
  
          }
          else if(i==="languagesknown")
            {
              console.log(i+" : ");
              
              resumejson.languagesknown.forEach((element) => {        //forEach loop
                console.log("      "+element.toUpperCase());
            });
                   
            }
      else{
        console.log(i+" : "+resumejson[i]);

      }
 }
  