export function formatDate(timestamp:any) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp:any) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(new Date(timestamp));
}

/*
function which returns date in string format without affecting the original timezone
aka beautify the string
*/
export function formatLocalDateTime(timestamp:any){
  var dateArr = timestamp.split('T');
  var time = dateArr[1].substring(0,8);
  var offset = dateArr[1].substring(8);
  
  var finalDate = `${dateArr[0]}, ${time}, GMT ${offset}`;
  return finalDate;

}
