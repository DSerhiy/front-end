function MilitaryResource (type, health, distance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.distance = distance;
  this.maxDistance = maxDistance;
}

MilitaryResource.prototype.isReadyToMove;
MilitaryResource.prototype.isReadyToFight;
MilitaryResource.prototype.restore;
MilitaryResource.prototype.clone;
