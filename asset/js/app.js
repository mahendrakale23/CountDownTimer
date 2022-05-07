 var cl=console.log;


var countDoun=document.getElementById( 'countdownTimer');
function countdownTimer(){
	var newdate=new Date();
	var futureDate=new Date(2022,5, 6);
	var diff=futureDate.getTime()-newdate.getTime();
	var days=Math.floor(diff/(1000*60*60*24));
	var hours =Math.floor(diff%(1000*60*60*24)/(1000*60*60));
	var min =Math.floor(diff%(1000*60*60)/(1000*60));
	var sec =Math.floor(diff%(1000*60)/(1000));
	 if(hours<10){
			 hours="0"+hours;
		 }
		 if(min<10){
			 min="0"+min;
		 }
		 if(sec<10){
			 sec="0"+sec;
		 }
	
	     
	
	// sec=sec<10? "0"+sec:sec;
	// min=min<10? "0"+min:min;
	// days=days<10? "0"+days:days;
	// hours=hours<10? "0"+hours:hours;
	// hours=hours>12? "PM"+hours:hours;
	cl(newdate);
	cl(futureDate);
	cl(diff);
	cl(days);
	cl(hours);
	cl(min);
	cl(sec);
	  setInterval(countdownTimer,1000);
countDoun.innerHTML=`${days} : ${hours} : ${min} : ${sec}`;
	
	
	
}
    
countdownTimer();
var count=document.getElementById("downTime");
function downTime(){
	var d=new Date();
	var dd=new Date(2022,7,8);
	var gap=dd.getTime()-d.getTime();
	var dy=Math.floor(gap/(1000*60*60*24));
	var hr=Math.floor(gap%(1000*60*60*24)/(1000*60*60));
	var mn=Math.floor(gap%(1000*60*60)/(1000*60));
	var sc=Math.floor(gap%(1000*60)/(1000));
	cl(d);
	cl(dd);
	cl(gap);
	cl(dy);
	cl(hr);
	cl(mn);
	cl(sc);
	sc=sc<10? "0"+sc:sc;
	mn=mn<10? "0"+mn:mn;
	dy=dy<10? "0"+dy:dy;
	hr=hr<10? "0"+hr:hr;
	// hr=hr>12? "PM"+hr:hr;
	count.innerHTML=`${dy} : ${hr} : ${mn} : ${sc}`;
	 setInterval(downTime,1000);
}
downTime(); 