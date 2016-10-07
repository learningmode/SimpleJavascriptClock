(function(){
	function displayTime(){
		var time,hours,minutes,seconds;
		var clockDisplay,AMPM;

		time = new Date()

		hours = time.getHours();
		minutes = time.getMinutes();
		seconds = time.getSeconds();

		// Add 0 if seconds less than 10
		 if(seconds < 10 ){

		 	seconds = "0"+seconds;
		 }		
		 // convert 24 hour to 12 hour time
		 if(hours > 12){

		 	hours = hours-12;
		 	AMPM = "PM"; 
		 } else if( hours == 0){

		 	hours=12;
		 	AMPM = "AM"; 
		 }else{

		 	AMPM = "AM"; 
		 }

		// display time 
		clockDisplay = document.getElementById('clock')
		clockDisplay.innerText = hours + ":" + minutes + ":" + seconds+" "+AMPM;
		
	}
   		
   	setInterval(displayTime,1000); 
   		
})()