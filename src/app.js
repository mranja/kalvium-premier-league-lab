//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager( managerName,managerAge,currentTeam,trophiesWon){
  return [managerName,managerAge,currentTeam,trophiesWon]
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  let form = null
  if(formation.length == 0){
      form = null
    

  }else{
    form={
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    };
    
  
  }
  return form

  
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  let debutedyear= [ ]
  for (let i=0 ; i<players.length; i++){
    if(players[i].debut == year){
      debutedyear.push(players[i])
    }

  }
  return debutedyear

}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(pos){
  let players_position= [ ]
  for (let i=0 ; i<players.length; i++){
    if(players[i].position == pos){
      players_position.push(players[i])
    }

  }
  return players_position

}

//Progression 5 - Filter players that have won ______ award

function filterByAward(award) {
  let players_award = players.filter(function (item) {
    return item.awards.some(function (awardItem) {
      return awardItem.name === award;
    });
  });
  return players_award;
}

//Progression 6 - Filter players that won ______ award ____ times
  function filterByAwardxTimes(awardname,noofftimes){
    let times =[ ];
    for (let i = 0; i < players.length; i++) {
      let Ot = 0; 
      for (let j = 0; j < players[i].awards.length; j++){
        if (players[i].awards[j].name == awardname){
          Ot++;
        }
      }
      for (let z = 0; z < players[i].awards.length; z++){
        if (players[i].awards[z].name == awardname && Ot ==noofftimes){
          times.push(players[i]);
          break
        }
      }
    }
    return times; 
  }


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardname,country){
  let player_award = filterByAward(awardname)
  let player_award_country = [ ]
  for (let i=0 ; i < player_award.length ; i++){
    if (player_award[i].country == country){
      player_award_country.push(player_award[i])
    }  
  }
  if (awardname == undefined || country == undefined){
    player_award_country == []
  }
  return player_award_country
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfaward,team,age){
  var arr = [ ]
  console.log(noOfaward,team,age)
  for (let i=0 ; i<players.length ; i++){
    if (players[i].age < age && players[i].team == team && players[i].awards.length >= noOfaward ){
      arr.push(players[i])
      console.log(arr)
    }
  }
  return arr
}

//Progression 9 - Sort players in descending order of their age
function age(a,b){
  return a.age-b.age
}
function AgeSorter(){
  var sortbyage = players.sort(age(c,d))
  return sortbyage
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamnamexNoofAwards(team){
  var teammembers = players.filter(function(player){
    return player.team == team;
  })
  teammembers.sort(age(a,b))

  return teammembers
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function filterByNamexAgeOlder(age){
  let older = players.filter(function(i){
    return i.age>age
  })
  m.sort(function(a){
    return a.name
  })

  let old = players.filter(function(items){
    return items.awards.sort(function (a,b){
      return a.year - b.year; 
  })
})
return old
}