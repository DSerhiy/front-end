
function Resource(type, health, maxHealth, distanceReserve, maxDistancePerDay) {
  this.type = type; 
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistancePerDay = maxDistancePerDay;
  this.distanceReserve = distanceReserve;
};

Resource.prototype.isReadyToMove = function(distance) {
  return (this.distanceReserve > distance);
};

Resource.prototype.isReadyToFight = function(damage) {
  return (this.health > damage);
}

Resource.prototype.restoreHealth = function() {
  this.health = this.maxHealth;
}

Resource.prototype.resotreDistance = function() {
  this.distanceReserve = this.maxDistancePerDay;
}

Resource.prototype.clone = function () {
  return new Resource(this.type, this.health, this.maxHealth, this.distanceReserve, this.maxDistancePerDay);
}

function Squad() {
  this.squad = [];
}

Squad.prototype.addResource = function(type, health, maxHealth, distanceReserve, maxDistancePerDay) {
  this.squad.push(new Resource(type, health, maxHealth, distanceReserve, maxDistancePerDay));
}

Squad.prototype.isReadyToMove = function(distance) {
  return this.squad.every((resource) => {
    return resource.isReadyToMove(distance); 
  })
}

Squad.prototype.isReadyToFight = function(damage) {
  return this.squad.every((resource) => {
    return resource.isReadyToFight(damage); 
  })
}

Squad.prototype.restoreHealth = function(index = false) {
  if (index === false)
    this.squad[index].restoreHealth();
  else 
    this.squad.forEach((resource) => {
      resource.restoreHealth();
    })
}

Squad.prototype.restoreDistance = function(index = false) {
  if (index === false)
    this.squad[index].resotreDistance();
  else 
    this.squad.forEach((resource) => {
      resource.restoreDistance();
    })
}
 
Squad.prototype.getReadyToMoveResources = function(distance) {
 return this.squad.filter((resource) => {
    return resource.isReadyToMove(distance);
  })
}

Squad.prototype.combineResources = function(squad) {
  this.squad = this.squad.concat(squad);
}

Squad.prototype.reorderResources = function(index1, index2) {
  const tempResource = this.squad[index1];
  this.squad[index1] = this.squad[index2];
  this.squad[index2] = tempResource;
}

Squad.prototype.cloneResource = function(resource) {
  if(typeof resource === 'number')
    return this.squad[resource].clone();
  
  return resource.clone();  
}

const newSquad = new Squad();

newSquad.addResource('Horse', 100, 100, 250, 250);
newSquad.addResource('Soldier', 100, 100, 70, 70);

console.log(newSquad);

console.log(newSquad.squad[0].isReadyToMove(100));
console.log(newSquad.squad[1].isReadyToMove(100));
console.log(newSquad.getReadyToMoveResources(100));
console.log(newSquad.getReadyToMoveResources(100));
console.log(newSquad.getReadyToMoveResources(100));
