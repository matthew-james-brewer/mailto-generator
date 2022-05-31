function submit() {
let mailto = 'mailto:'+document.getElementById('recipients')+'?bcc='+document.getElementById('bcc')+'&subject='+document.getElementById('subject')+'&body='+document.getElementById('body');
	window.open(mailto,'_blank','height='+screen.height+',width='+screen.width);
}
