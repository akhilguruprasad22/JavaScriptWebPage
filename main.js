
showSlides(0,false);
function showSlides(SlideIndex,flag){
	var i;
	var slidess=document.getElementsByClassName("slides");
	for(i=0; i<slidess.length; i++){
		slidess[i].style.display="none";
	}
	SlideIndex++;
	if(SlideIndex>slidess.length){
		SlideIndex=1;
	}
	slidess[SlideIndex-1].style.display="block";
	if(flag){
		return process.abort();
	}else{ setTimeout(showSlides,3000,SlideIndex,false); }
}
