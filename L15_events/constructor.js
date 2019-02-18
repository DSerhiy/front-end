function Task(title, description, startDate, endDate) {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  
  defaultStartDate.setTime(defaultStartDate.getTime() + random(2,12)*1000);
  defaultEndDate.setTime(defaultStartDate.getTime() + random(2,12)*1000);


  this.id = Math.floor(Math.random() * 1000000);
  this.title = title;
  this.description = description;
  this.start = startDate || defaultStartDate;
  this.end = endDate || defaultEndDate; 

  const defaultStatus = this.checkStatus();
  
  this._status = defaultStatus;
  this._lastStatus = defaultStatus;
  this.onStatusChanged = null;

  const intStatusInterval = setInterval(() => {
    this._status = this.checkStatus();
    
    if(this._status != this._lastStatus) {
      this.onStatusChanged();
      this._lastStatus = this._status;
    }

    if(this._status === 'completed')
      clearInterval(intStatusInterval);
  }, 1000);
  this._intervalId = intStatusInterval;
};


Task.prototype.checkStatus = function() {
  const currentDate = Date.now();

  if(currentDate < this.start.getTime())
    return 'inactive';
  if(currentDate > this.end.getTime())
    return 'completed';
  if(currentDate >= this.start.getTime() && currentDate <= this.end.getTime())
    return 'processing';
};

Task.prototype.getStatus = function() {return this._status}
Task.prototype.deactivate = function() {clearInterval(this._intervalId)}

function random (min, max) {  
  return Math.floor(Math.random() * (max - min)) + min; 
}