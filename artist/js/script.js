let addButton = document.getElementById('btnAddArtist');
let aBtn = document.getElementById('btnSubmitArtist');
addButton.addEventListener('click', addArtistExpand);
aBtn.addEventListener('click', submitArtist);

let dBtns = document.getElementsByClassName('deletebutton');
for (var i = 0; i < dBtns.length; i++) {
	dBtns[i].addEventListener('click', deletenode);
}

function addArtistExpand() {
	let addBox = document.getElementById('addbox');
	let addForm = document.getElementById('addform');
	let aName = document.getElementById('aname');
	let aDesc = document.getElementById('adesc');
	let aURL = document.getElementById('aurl');
	
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
}

function submitArtist() {
	let addBox = document.getElementById('addbox');
	let addForm = document.getElementById('addform');
	let aName = document.getElementById('aname');
	let aDesc = document.getElementById('adesc');
	let aURL = document.getElementById('aurl');
	
	let artist = document.createElement('DIV');
	let piccontainer = document.createElement('DIV');
	let artistpic = document.createElement('IMG');
	let artistinfo = document.createElement('DIV');
	let artistname = document.createElement('H4');
	let artistdesc = document.createElement('P');
	let deletebutton = document.createElement('BUTTON');
	
	let nametext = document.createTextNode(aName.value);
	let desctext = document.createTextNode(aDesc.value);
	let deletetext = document.createTextNode('Delete');
	
	deletebutton.addEventListener('click', deletenode);
	
	artist.setAttribute('class', 'artist');
	piccontainer.setAttribute('class', 'piccontainer');
	artistpic.setAttribute('class', 'artistpic');
	artistinfo.setAttribute('class', 'artistinfo');
	artistname.setAttribute('class', 'artistname');
	artistdesc.setAttribute('class', 'artistdesc');
	deletebutton.setAttribute('class', 'deletebutton');
	deletebutton.setAttribute('type', 'button');
	
	artistpic.setAttribute('src', aURL.value);
	
	piccontainer.appendChild(artistpic);
	artistname.appendChild(nametext);
	artistdesc.appendChild(desctext);
	artistinfo.appendChild(artistname);
	artistinfo.appendChild(artistdesc);
	deletebutton.appendChild(deletetext);
	artist.appendChild(piccontainer);
	artist.appendChild(artistinfo);
	artist.appendChild(deletebutton);
	
	let alist = document.getElementById('artistList');
	alist.appendChild(artist);
	
	
	
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
}

function deletenode() {
	this.parentNode.remove();
}