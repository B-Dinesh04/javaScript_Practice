 function converter(){
    let from = document.getElementById('timeUnitSelectorfrom').value
    let to = document.getElementById('timeUnitSelectorto').value
    let num
    if(document.getElementById('num').value  !== ''){
     num = Number(document.getElementById('num').value) 
   }    
  if (typeof(num) === "number" && !isNaN(num)){       
    switch(`${from} && ${to}`){
        case `days && days`: document.getElementById('res').value = num
        break;
        
        case `days && hours`: document.getElementById('res').value = (num * 24)
        break;

        case `days && minutes`: document.getElementById('res').value = (num * 60 * 24)
        break;

        case `days && seconds`: document.getElementById('res').value = (num * 60 * 60 * 24)
        break;

        case `days && millisecs`: document.getElementById('res').value = (num * 1000 * 60 * 60 * 24)
        break;

        case `hours && days`: document.getElementById('res').value = num / 24
        break;
        
        case `hours && hours`: document.getElementById('res').value = num
        break;

        case `hours && minutes`: document.getElementById('res').value = (num * 60)
        break;

        case `hours && seconds`: document.getElementById('res').value = (num * 60 * 60)
        break;

        case `hours && millisecs`: document.getElementById('res').value = (num * 60 * 60 * 1000)
        break;

        case `minutes && days`: document.getElementById('res').value = (num / 60 / 24)
        break;
        
        case `minutes && hours`: document.getElementById('res').value = (num / 60 )
        break;

        case `minutes && minutes`: document.getElementById('res').value = num
        break;

        case `minutes && seconds`: document.getElementById('res').value = (num * 60)
        break;

        case `minutes && millisecs`: document.getElementById('res').value = (num * 60 * 1000)
        break;

        case `seconds && days`: document.getElementById('res').value = (num / 24 / 60 / 60)
        break;

        case `seconds && hours`: document.getElementById('res').value = (num / 60 / 60)
        break;

        case `seconds && minutes`: document.getElementById('res').value = (num / 60)
        break;

        case `seconds && seconds`: document.getElementById('res').value = num 
        break;

        case `seconds && millisecs`: document.getElementById('res').value = (num * 1000)
        break;

        case `millisecs && days`: document.getElementById('res').value = (num / 24 / 60 / 60 / 60) 
        break;

        case `millisecs && hours`: document.getElementById('res').value = (num / 60 / 60 / 60) 
        break;

        case `millisecs && minutes`: document.getElementById('res').value = (num  / 60 / 60) 
        break;

        case `millisecs && seconds`: document.getElementById('res').value = (num / 60) 
        break;

        case `millisecs && millisecs`: document.getElementById('res').value = num 
        break;
    } }else{
        document.getElementById('num').value = 'Please fill this field as number'
    }
}
