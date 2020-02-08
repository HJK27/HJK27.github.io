let addButton = document.getElementById('btnAddArtist');
let aBtn = document.getElementById('btnSubmitArtist');
let sBtn = document.getElementById('btnSearch');
let expanded = false;
addButton.addEventListener('click', addArtistExpand);
aBtn.addEventListener('click', submitArtist);
sBtn.addEventListener('click', search);
window.onload = function() {readyArtist()};;


function addArtistExpand() {
	let addBox = document.getElementById('addbox');
	let addForm = document.getElementById('addform');
	let aName = document.getElementById('aname');
	let aDesc = document.getElementById('adesc');
	let aURL = document.getElementById('aurl');
	
	if(expanded) {
		aName.value = "";
		aDesc.value = "";
		aURL.value = "";
		aName.style.height = '0em';
		aDesc.style.height = '0em';
		aURL.style.height = '0em';
		aBtn.style.height = '0em';
		addBox.style.border = 'none';
		addForm.style.display = 'none';
		aName.style.display = 'none';
		aDesc.style.display = 'none';
		aURL.style.display = 'none';
		aBtn.style.display = 'none';
		addForm.style.height = '0px';
		addForm.display = 'none';
		expanded = false;
	} else {
		aName.style.height = '2em';
		aDesc.style.height = '2em';
		aURL.style.height = '2em';
		aBtn.style.height = '2.5em';
		addBox.style.border = '1px solid #cccccc';
		addForm.style.display = 'block';
		aName.style.display = 'inline';
		aDesc.style.display = 'inline';
		aURL.style.display = 'inline';
		aBtn.style.display = 'block';
		addForm.style.height = 'min-content';
		addForm.display = 'block';
		expanded = true;
	}
}



function submitArtist() {
	let addBox = document.getElementById('addbox');
	let addForm = document.getElementById('addform');
	let aName = document.getElementById('aname');
	let aDesc = document.getElementById('adesc');
	let aURL = document.getElementById('aurl');
	
	let deletetext = document.createTextNode('Delete');
	
	localStorage.setItem('aNames' + localStorage.getItem('amount'), aName.value);
	localStorage.setItem('aDescs' + localStorage.getItem('amount'), aDesc.value);
	localStorage.setItem('aURLs' + localStorage.getItem('amount'), aURL.value);
	
	addArtistItem(aName.value, aDesc.value, aURL.value, parseInt(localStorage.getItem('amount')));
	
	localStorage.setItem('amount', parseInt(localStorage.getItem('amount')) + 1);
	
	
	// Display addbox to none
	aName.value = "";
	aDesc.value = "";
	aURL.value = "";
	aName.style.height = '0em';
	aDesc.style.height = '0em';
	aURL.style.height = '0em';
	aBtn.style.height = '0em';
	addBox.style.border = 'none';
	addForm.style.display = 'none';
	aName.style.display = 'none';
	aDesc.style.display = 'none';
	aURL.style.display = 'none';
	aBtn.style.display = 'none';
	addForm.style.height = '0px';
	addForm.display = 'none';
	expanded = false;
}

function addArtistItem(aName, aDesc, aURL, amt) {
	let artist = document.createElement('DIV');
	let piccontainer = document.createElement('DIV');
	let artistpic = document.createElement('IMG');
	let artistinfo = document.createElement('DIV');
	let artistname = document.createElement('H4');
	let artistdesc = document.createElement('P');
	let deletebutton = document.createElement('BUTTON');
	
	let am = document.createElement('P');
	
	let nametext = document.createTextNode(aName);
	let desctext = document.createTextNode(aDesc);
	let deletetext = document.createTextNode('Delete');
	let amtext = document.createTextNode(amt);
	
	deletebutton.addEventListener('click', deletenode);
	
	artist.setAttribute('class', 'artist');
	piccontainer.setAttribute('class', 'piccontainer');
	artistpic.setAttribute('class', 'artistpic');
	artistinfo.setAttribute('class', 'artistinfo');
	artistname.setAttribute('class', 'artistname');
	artistdesc.setAttribute('class', 'artistdesc');
	deletebutton.setAttribute('class', 'deletebutton');
	deletebutton.setAttribute('type', 'button');
	am.setAttribute('class', 'amount');
	
	artistpic.setAttribute('src', aURL);
	
	piccontainer.appendChild(artistpic);
	artistname.appendChild(nametext);
	artistdesc.appendChild(desctext);
	artistinfo.appendChild(artistname);
	artistinfo.appendChild(artistdesc);
	deletebutton.appendChild(deletetext);
	am.appendChild(amtext);
	artist.appendChild(piccontainer);
	artist.appendChild(artistinfo);
	artist.appendChild(deletebutton);
	artist.appendChild(am);
	
	let alist = document.getElementById('artistList');
	alist.appendChild(artist);
}

function readyArtist() {
	if (localStorage.getItem('amount') == null) {
		localStorage.setItem('amount', '0')
	} else {
		for (i=0; i < parseInt(localStorage.getItem("amount")); i++) {
			if (localStorage.getItem("aNames" + i) != null){
				addArtistItem(localStorage.getItem("aNames" + i),localStorage.getItem("aDescs" + i),localStorage.getItem("aURLs" + i), i);
			}
		}
	}
}

function search() {
	let list = document.getElementById('artistList');
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
	let a = document.getElementById('search');
	b = a.value;
	
	for (i=0; i < parseInt(localStorage.getItem("amount")); i++) {
		if (localStorage.getItem("aNames" + i) != null && localStorage.getItem("aNames" + i).toLowerCase().includes(b.toLowerCase())){
			addArtistItem(localStorage.getItem("aNames" + i),localStorage.getItem("aDescs" + i),localStorage.getItem("aURLs" + i), i);
		}
	}
}

function deletenode() {
	let p = this.parentNode;
	
	let a = p.getElementsByClassName('amount')[0];
	localStorage.removeItem('aNames' + a.textContent);
	localStorage.removeItem('aDescs' + a.textContent);
	localStorage.removeItem('aURLs' + a.textContent);
	
	p.remove();
}