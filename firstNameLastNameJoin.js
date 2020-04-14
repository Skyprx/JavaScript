var old = [
    {
      firstName:"Mike",
      lastName:"Smith"
    },
    {
      firstName:"Jack",
      lastName:"Morgan"
    },
    {
      firstName:"Joe",
      lastName:"Walker"
    },
  ];
  
  function joinName(){
  
      return old.map(function(item){
          item.fullName = [item.firstName,item.lastName].join(" - "); //Making a new item with first name and last name called fullName
          return item;
      });
  
  }
  console.log(joinName());