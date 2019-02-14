function Task(title, description, startDate, endDate) {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setSeconds(defaultStartDate.getSeconds() + random(59));
  
  this.id = Math.floor(Math.random() * 1000000);
  this.title = title;
  this.description = description;
  this.start = startDate || defaultStartDate;
  this.end = endDate || defaultEndDate; 
};

Task.prototype.isExpired = function(){
  return this.end.getTime() <= Date.now() ? true : false;
};