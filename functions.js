module.exports = {
    longestWord : function longestWord(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length; i++) {
            if (longest <= str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    },
    shortestWord : function shortestWord(str) {
        var strSplit = str.split(' ');
        var wordLength = 2000; var short;
        for(var i = 0; i < strSplit.length; i++){
          if(strSplit[i].length<=wordLength){
              wordLength = strSplit[i].length;
              short=strSplit[i]
           };
        };
        
        return short;
      },
    wordLength : (str)=>{
        let splited=str.split(" ")
        let count=0;
        for(let i=0;i<splited.length;i++){
           count=count+splited[i].length
        }
        return count;
    },
    totalPhoneBill : function totalPhoneBill(items,call,sms){
        var bill=items.split(",")
        var totalCallsSms=0;
        for(var i=0; i<bill.length;i++){
          if(bill[i].trim()=="sms"){
            totalCallsSms+=sms
          }else if(bill[i].trim()=="call"){
            totalCallsSms+=call
          }
        }
        totalCallsSms=sms+call;
        return "R"+totalCallsSms.toFixed(2);
      },















      enoughAirTime: function enoughAirtime(usage,airtimeAvail){
        var usageItems=usage.split(',');
        var calls=0;
        var smses=0;
        var bundles=0;
        for(var i=0; i<usageItems.length;i++){
          if(usageItems[i].trim()=="call"){
            calls=calls+1.88;
          }else if(usageItems[i].trim()=="data"){
            bundles=bundles+12;
          }else if(usageItems[i].trim()=="sms"){
            smses=smses+0.75;
          }
        }
        var totalusage=calls+bundles+smses;
        airtimeAvail=airtimeAvail-totalusage;
        if(airtimeAvail<=0)
          return "R0.00"
         else
           return "R"+airtimeAvail.toFixed(2);
      }
}