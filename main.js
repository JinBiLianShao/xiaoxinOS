const version = "20w14b15";
console.info("Version " + version);
const ua = navigator.userAgent.toLowerCase();
const isIpad = ua.indexOf("ipad") == -1;
const isIphone = !isIpad && ua.indexOf("iphone") != -1;
const isAndroid = ua.indexOf("android");
const isMobile = isIphone || isAndroid;
const isSafari = ua.indexOf("safari/") != -1 && ua.indexOf("chrome/") == -1;
const originalStatus = txtNoteCloudStatus.innerText;
const ypoctonod = [window[atob("bG9jYXRpb24=")], "aHJlZg=="];
const localVersion = localStorage.getItem("localVersion");
const isNotFirstRun = !!localVersion;
let lastModified0 = "";
let username = "";
let birthday = "";
let thePopUp;
let popUpClosing = false;
let currentEditingNav;
let cusNavIconErrCount = 0;
let cusNavSubmitCount = 0;
let selectedKeyword = -1;
let currentDeletingNav;
let currentSearchEngine = localStorage.getItem("searchEngPref");
let bgPreference = localStorage.getItem("bgPreference");
let cusWallpaper = localStorage.getItem("cusWallpaper");
let autoClrSearchBar = localStorage.getItem("autoClrSearchBar") != "off";
let openInNew = localStorage.getItem("openInNew") != "off";
let reduceMotion = isSafari ? true : localStorage.getItem("reduceMotion") == "on";
let autoDarkMode = localStorage.getItem("autoDarkMode") == "on";
let browserWarning = false;
let pushClass;
let pushTitle;
let pushContent;
let pushStartTime;
let pushStopTime;
window.oncontextmenu = () => {
	return false;
};
window.onkeydown = event => {
	if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
		return false;
	} else if (input0.style.opacity != "0" && cover1.style.display != "block") {
		input0.focus();
	}
};
window.onload = () => {
	const chromeVer = /chrome\/([\d]+)/i.exec(ua);
	const statUrl = "https://maorx.cn/stat/";
	if (!document.querySelector("script[src*=backend]")) {
		const newScript = document.createElement("script");
		newScript.src = atob("aHR0cHM6Ly9hLm1hb3J4LmNuL2JhY2tlbmQvY29kZT9hcHBuYW1lPU1vYml1cyUyMFN0YXJ0");
		newScript.onload = () => typeof codeLoad == "function" && codeLoad();
		document.body.appendChild(newScript);
	}
	window._paq = window._paq || [];
	_paq.push(["trackPageView"]);
	_paq.push(["enableLinkTracking"]);
	_paq.push(["setTrackerUrl", statUrl + "matomo"]);
	_paq.push(["setSiteId", "1"]);
	loadJs(statUrl + "matomo.js", null, () => {
		const imgStat = new Image();
		imgStat.src = statUrl + "matomo?idsite=1&rec=1";
		imgStat.style.display = "none";
		document.body.appendChild(imgStat);
	});
	loadJs("https://cdn.sencdn.com/widget/static/js/widget-cc5d550.js");
	if (topNotificationBar.style.top != "0px") {
		processTopNotification();
	}
	if (chromeVer && chromeVer[1] < 71) {
		if (!isNotFirstRun) {
			showMenu(tipBoxBrowser);
		}
		browserWarning = true;
	}
};
input0.onkeydown = event => {
	switch (event.keyCode) {
		case 13:
			search();
			return false;
		case 38:
			selectKeyword(-1);
			return false;
		case 40:
			selectKeyword(+1);
			return false;
	}
};
input0.onfocus = () => {
	if (autoClrSearchBar === false) {
		input0.select();
	}
	quotebox.style.opacity = "1";
	searchOptBox.style.display = "block";
	input0.classList.add("focus");
	setTimeout(() => {
		searchOptBox.style.opacity = "1";
		searchOptBox.style.top = innerWidth > 600 ? "270px" : "155px";
	}, 100);
	if (innerWidth <= 600) {
		title.style.top = "30px";
	}
	if (bgPreference == "Live") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "scale(1.1)";
		}
		liveBgBox.style.filter = "blur(10px)";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "scale(1.1)";
		}
		bgbox.style.filter = "blur(10px)";
	}
};
input0.oninput = () => {
	clearInterval(window.timeoutKeyword);
	if (input0.value.trim()) {
		const newTranslateDiv = document.createElement("div");
		keyword.innerHTML = "";
		newTranslateDiv.innerText = "翻译：" + input0.value;
		newTranslateDiv.onclick = () => {
			input0.value = newTranslateDiv.innerText;
			search();
		};
		keyword.appendChild(newTranslateDiv);
		keyword.style.height = "30px";
		keyword.style.display = "block";
		window.time = Date.now();
		window.timeoutKeyword = setTimeout(() => fetch("https://maorx.cn/a/code?action=keyword&time=" + window
				.time + "&word=" + encodeURIComponent(input0.value.trim())).then(response => response.text())
			.then(data => (new Function(data))()), 500);
	} else {
		hideKeyword();
	}
};

function Input_Blur() {
	if (autoClrSearchBar === true) {
		input0.value = "";
	} else {
		window.getSelection().empty();
	}
	quotebox.style.opacity = "0";
	quotebox.style.animation = "none";
	searchOptBox.style.opacity = "0";
	searchOptBox.style.top = "";
	input0.classList.remove("focus");
	setTimeout(() => {
		searchOptBox.style.display = "none";
		searchOptBox.style.top = "";
	}, 250);
	if (innerWidth <= 600) {
		title.style.top = "100px";
		input0.style.top = "";
	}
	if (bgPreference == "Live") {
		if (reduceMotion === false) {
			liveBgBox.style.transform = "";
		}
		liveBgBox.style.filter = "";
	} else {
		if (reduceMotion === false) {
			bgbox.style.transform = "";
		}
		bgbox.style.filter = "";
	}
	hideKeyword();
}

function keydata(keys) {
	for (let i = 0; i < keys.s.length; i++) {
		const newDiv = document.createElement("div");
		newDiv.innerText = keys.s[i];
		newDiv.onclick = () => {
			input0.value = keys.s[i];
			search();
		};
		keyword.appendChild(newDiv);
	}
	quotebox.style.opacity = "0";
	keyword.style.height = ((keys.s.length + 1) * 30) + "px";
}

function search() {
	const str = input0.value;
	const finalStr = encodeURIComponent(str.replace("翻译：", ""));
	let url;
	if (/^[a-z]+:\/\/[a-z0-9_\-\/.#?=%]+$/i.test(str)) {
		open(str);
		Input_Blur();
		return false;
	} else if (str.indexOf("翻译：") != -1) {
		url = "https://fanyi.baidu.com/#en/zh/" + finalStr;
	} else {
		switch (currentSearchEngine) {
			case 'baidu':
				url = "https://www.baidu.com/s?word=" + finalStr;
				break;
			case 'bing':
				url = "https://cn.bing.com/search?q=" + finalStr;
				break;
			case 'google':
				url = "https://www.google.com/search?q=" + finalStr;
				break;
		}
	}
	if (openInNew) {
		open(url);
	} else {
		location.href = url;
	}
	setTimeout(() => Input_Blur(), 50);
}

function selectKeyword(delta) {
	const children = keyword.getElementsByTagName("div");
	if (selectedKeyword + delta >= children.length) {
		selectedKeyword = 0;
	} else if (selectedKeyword + delta < 0) {
		selectedKeyword = children.length - 1;
	} else {
		selectedKeyword += delta;
	}
	for (let i = 0; i < children.length; i++) {
		children[i].classList.remove("focus");
	}
	children[selectedKeyword].classList.add("focus");
	input0.value = children[selectedKeyword].innerText;
}

function switchSearchEng(searchEng) {
	switch (searchEng) {
		case 'baidu':
			localStorage.setItem("searchEngPref", "baidu");
			currentSearchEngine = "baidu";
			searchOpt1.classList.add("selected");
			searchOpt2.classList.remove("selected");
			searchOpt3.classList.remove("selected");
			break;
		case 'bing':
			localStorage.setItem("searchEngPref", "bing");
			currentSearchEngine = "bing";
			searchOpt2.classList.add("selected");
			searchOpt1.classList.remove("selected");
			searchOpt3.classList.remove("selected");
			break;
		case 'google':
			localStorage.setItem("searchEngPref", "google");
			currentSearchEngine = "google";
			searchOpt3.classList.add("selected");
			searchOpt1.classList.remove("selected");
			searchOpt2.classList.remove("selected");
			break;
	}
	input0.focus();
}
keyword.onclick = () => {
	setTimeout(() => Input_Blur(), 50);
}

function hideKeyword() {
	keyword.style.height = "0px";
	keyword.style.opacity = "0";
	setTimeout(() => {
		keyword.style.display = "none";
		keyword.innerHTML = "";
		keyword.style.height = "auto";
		keyword.style.opacity = "1";
	}, 250);
}
title.onclick = event => {
	if (navbox.style.display != "block") {
		input0.style.opacity = "0";
		Input_Blur();
		quotebox.style.opacity = "0";
		quotebox.style.animation = "none";
		if (bgPreference == "Live") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "scale(1.1)";
			}
			liveBgBox.style.filter = "blur(10px)";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "scale(1.1)";
			}
			bgbox.style.filter = "blur(10px)";
		}
		navbox.style.display = "block";
		btnUser.style.display = "block";
		btnSettings.style.display = "block";
		if (browserWarning === true) {
			btnWarn.style.display = "block";
		}
		if (bgPreference == "Bing") {
			btnLike.style.display = "block";
		}
		document.getElementById("tp-weather-widget").style.opacity = "0.5";
		document.getElementById("tp-weather-widget").style.pointerEvents = "auto";
	} else {
		navbox.onclick(event);
	}
}
title.onmouseenter = () => {
	title.style.transform = "scale(1.15)";
	setTimeout(() => title.style.transform = "scale(1.1)", 250);
}
title.onmouseout = () => {
	title.style.transform = "scale(0.95)";
	setTimeout(() => title.style.transform = "scale(1)", 250);
}
navbox.onclick = event => {
	const obj = event.target;
	if (obj && obj.classList.contains("shouldNotFade") == false) {
		input0.style.opacity = "1";
		if (bgPreference == "Live") {
			if (reduceMotion === false) {
				liveBgBox.style.transform = "";
			}
			liveBgBox.style.filter = "";
		} else {
			if (reduceMotion === false) {
				bgbox.style.transform = "";
			}
			bgbox.style.filter = "";
		}
		navbox.style.opacity = "0";
		btnUser.style.opacity = "0";
		btnSettings.style.opacity = "0";
		btnLike.style.opacity = "0";
		if (browserWarning === true) {
			btnWarn.style.opacity = "0";
		}
		setTimeout(() => {
			navbox.style.display = "none";
			btnUser.style.display = "none";
			btnSettings.style.display = "none";
			btnLike.style.display = "none";
			if (browserWarning === true) {
				btnWarn.style.display = "none";
			}
			navbox.style.opacity = "";
			btnUser.style.opacity = "";
			btnSettings.style.opacity = "";
			btnLike.style.opacity = "";
			if (browserWarning === true) {
				btnWarn.style.opacity = "";
			}
		}, 250);
		document.getElementById("tp-weather-widget").style.opacity = "0";
		document.getElementById("tp-weather-widget").style.pointerEvents = "none";
		if (frmSetCustomNav.style.opacity = "1") {
			btnCloseFrmCusNav.onclick();
		}
	}
}

function encodeData(data) {
	const array = [];
	for (const key in data) {
		data[key] && array.push(key + "=" + encodeURIComponent(data[key]));
	}
	return array.join("&");
}
textNote.onclick = () => isLoggedIn();
textNote.oninput = () => {
	if (window.login && login.username) {
		const time = currentTime();
		const value = textNote.value;
		if (noteList.list.text.length <= 1) {
			if (value) {
				textNote.style.left = "200px";
				textNote.style.width = "460px";
				noteListWrap.style.left = "0px";
				noteToolBar.style.display = "block";
			} else {
				if (noteList.currentIsNew) {
					noteList.current = 0;
					noteList.list.text.splice(0, 1);
				} else {
					noteList.delete();
				}
				textNote.style.left = "0px";
				textNote.style.width = "660px";
				noteListWrap.style.left = "-200px";
				noteToolBar.style.display = "none";
			}
		}
		if (value && !noteList.current) {
			noteList.list.text.push({
				created: Date.now(),
				encrypt: false,
				text: value,
				time: currentTime(),
				title: ""
			});
			noteList.current = noteList.list.text.length;
		}
		if (noteList.isOpened()) {
			noteList.list.text[noteList.current - 1].text = value;
			noteList.list.text[noteList.current - 1].time = time;
		}
		noteList.changed = true;
		txtNoteCloudStatus.innerText = "未保存";
		if (noteList.pinned.length > 0) {
			for (let i = 0; i < noteList.pinned.length; i++) {
				if (noteList.pinned[i] == noteList.list.text[noteList.current - 1].created) {
					if (value) {
						if (document.getElementById("pinnedNoteContent" + noteList.pinned[i])) {
							document.getElementById("pinnedNoteContent" + noteList.pinned[i]).innerText = value;
						}
						if (document.getElementById("pinnedNoteTime" + noteList.pinned[i])) {
							document.getElementById("pinnedNoteTime" + noteList.pinned[i]).innerText = time;
						}
					} else {
						unpinNote(i);
					}
				}
			}
		}
	}
}
textNote.onkeydown = event => {
	if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
		noteList.save();
	}
}
btnDelNote.onclick = () => noteList.isOpened() && confirm("删除这条便笺？") && noteList.delete();
btnSaveNote.onclick = () => noteList.save();

function createPinnedNote(i, content, time) {
	const newPinnedNote = document.createElement("div");
	const newPinnedNoteContent = document.createElement("div");
	const newPinnedNoteTime = document.createElement("div");
	const newBtnCloseS = document.createElement("span");
	newPinnedNote.className = "pinnedNote";
	newPinnedNote.id = "pinnedNote" + i;
	newPinnedNote.onclick = () => pinnedNoteClick(i);
	newPinnedNote.onmousemove = pinnedNoteHover;
	newPinnedNote.onmouseout = pinnedNoteHover2;
	newPinnedNoteContent.className = "pinnedNoteContent";
	newPinnedNoteContent.id = "pinnedNoteContent" + i;
	newPinnedNoteContent.innerText = content;
	newPinnedNoteTime.className = "pinnedNoteTime";
	newPinnedNoteTime.id = "pinnedNoteTime" + i;
	newPinnedNoteTime.innerText = time;
	newBtnCloseS.className = "btnCloseS";
	newBtnCloseS.id = "btnUnpin" + i;
	newBtnCloseS.onclick = event => {
		event.stopPropagation();
		unpinNote(i);
	};
	newPinnedNote.appendChild(newPinnedNoteContent);
	newPinnedNote.appendChild(newPinnedNoteTime);
	newPinnedNote.appendChild(newBtnCloseS);
	pinnedBox.appendChild(newPinnedNote);
}
btnPinNote.onclick = () => {
	if (noteList.isOpened()) {
		if (noteList.pinned.length < 3) {
			const noteIndex = noteList.list.text[noteList.current - 1].created;
			noteList.currentIsNew && noteList.save();
			if (noteList.pinned.indexOf(noteIndex) == -1) {
				noteList.pinned.push(noteIndex);
				createPinnedNote(noteIndex, textNote.value, noteList.list.text[noteList.current - 1].time);
				showPinnedNote();
			}
		} else {
			alert("最多只能固定三条便笺喔");
		}
	}
}

function showPinnedNote() {
	pinnedBox.style.display = "block";
	pinnedNotes = document.getElementsByClassName("pinnedNote");
	for (let i = 0; i < pinnedNotes.length; i++) {
		setTimeout(() => {
			pinnedNotes[i].style.opacity = "1";
			pinnedNotes[i].style.transform = "scale(1.05)";
		}, 100 + 100 * i);
		setTimeout(() => {
			pinnedNotes[i].style.transform = "scale(1)";
		}, 350 + 100 * i);
	}
}

function unpinNote(i) {
	const thePinnedNote = document.getElementById("pinnedNote" + i);
	noteList.pinned.splice(noteList.pinned.indexOf(i), 1);
	if (thePinnedNote) {
		thePinnedNote.style.transform = "scale(1.05)";
		setTimeout(() => {
			thePinnedNote.style.transform = "scale(0.5)";
			thePinnedNote.style.opacity = "0";
		}, 250);
		setTimeout(() => thePinnedNote.remove(), 500);
		if (noteList.pinned.length < 1) {
			setTimeout(() => pinnedBox.style.display = "none", 500);
		}
	}
}

function pinnedNoteClick(i) {
	noteList.open(noteList.getIndex(i) + 1);
	if (navbox.style.display != "block") {
		title.onclick();
	}
	nbSwitch2.onclick();
}

function navboxScale0() {
	navbox1.style.transform = "scale(0.9)";
	navbox2.style.transform = "scale(0.9)";
}

function navboxScale1() {
	navbox1.style.transform = "scale(1)";
	navbox2.style.transform = "scale(1)";
}
nbSwitch1.onclick = () => {
	if (navbox1.style.left != "0px") {
		nbSwitch2_0.classList.remove("current");
		nbSwitch1_0.classList.add("current");
		navboxScale0();
		setTimeout(() => {
			navbox1.style.left = "0px";
			navbox2.style.left = "100%";
		}, 250);
		setTimeout(() => navboxScale1(), 500);
		window.cooldownScroll = true;
		setTimeout(() => window.cooldownScroll = false, 500);
	}
}
nbSwitch2.onclick = () => {
	if (navbox2.style.left != "0px") {
		nbSwitch1_0.classList.remove("current");
		nbSwitch2_0.classList.add("current");
		navboxScale0();
		setTimeout(() => {
			navbox1.style.left = "-100%";
			navbox2.style.left = "0px";
		}, 250);
		setTimeout(() => navboxScale1(), 500);
		window.cooldownScroll = true;
		setTimeout(() => window.cooldownScroll = false, 500);
	}
}

function showAbout() {
	pVersion.innerText = version;
	if (!window.frmChangeLog) {
		window.frmChangeLog = document.createElement("iframe");
		frmChangeLog.id = "frmChangeLog";
		frmChangeLog.title = "更新日志";
		frmChangeLog.src = "changelog.html";
		changeLog.appendChild(frmChangeLog);
	}
	showPop(popAbout);
}

function showPop(thePopUp) {
	cover1.style.display = "block";
	thePopUp.style.display = "block";
	if (reduceMotion === false) {
		setTimeout(() => {
			cover1.style.opacity = "1";
			thePopUp.style.opacity = "1";
			thePopUp.classList.add("showPop");
			setTimeout(() => {
				thePopUp.style.transform = "none";
				thePopUp.classList.remove("showPop");
			}, 350);
		}, 100);
	} else {
		cover1.style.opacity = "1";
		thePopUp.style.transition = "all 0s";
		thePopUp.style.transform = "none";
		thePopUp.style.transition = "all 0.25s";
		setTimeout(() => thePopUp.style.opacity = "1", 25);
	}
}

function btnCloseHover(obj) {
	if (reduceMotion === false) {
		thePopUp = obj.parentNode;
		thePopUp.style.transform = "rotate3d(1,1,0,5deg)";
	}
}

function btnCloseHover2() {
	if (reduceMotion === false) {
		if (popUpClosing == false) {
			thePopUp.style.transform = "none";
		}
	}
}

function closePop(obj) {
	popUpClosing = true;
	cover1.style.opacity = "0";
	obj.style.opacity = "0";
	if (reduceMotion === false) {
		obj.style.transform = "rotate3d(1,1,0,20deg)";
	}
	setTimeout(() => {
		cover1.style.display = "none";
		obj.style.display = "none";
		if (reduceMotion === false) {
			obj.style.transform = "rotate3d(1,1,0,90deg)";
		}
		popUpClosing = false;
	}, 350);
}
btnBrowse.onclick = () => {
	inputImg.value = "";
	inputImg.click();
};
inputImg.onchange = e => {
	var reader = new FileReader();
	reader.onload = () => {
		localStorage.setItem("cusWallpaper", reader.result);
		cusWallpaper = reader.result;
		bgPreBoxInCus.classList.remove("unset");
		bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")";
		changeWp(document.getElementById("bgPreBoxCus"));
	}
	reader.readAsDataURL(e.target.files[0]);
};

function changeWp(obj) {
	switch (obj.id) {
		case 'bgPreBoxCus':
			if (cusWallpaper) {
				liveBgBox.style.display = "none";
				liveBgBox.pause();
				bgbox.src = cusWallpaper;
				bgbox.style.opacity = "1";
				bgPreBoxInCus.classList.add("selected");
				bgPreBoxIn1.classList.remove("selected");
				bgPreBoxIn2.classList.remove("selected");
				bgPreBoxIn3.classList.remove("selected");
				bgPreBoxInBing.classList.remove("selected");
				bgPreBoxInLive.classList.remove("selected");
				localStorage.setItem("bgPreference", "Custom");
				bgPreference = "Custom";
			}
			break;
		case 'bgPreBoxD1':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_1.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.add("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default");
			bgPreference = "Default";
			break;
		case 'bgPreBoxD2':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_2.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn2.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default2");
			bgPreference = "Default2";
			break;
		case 'bgPreBoxD3':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_3.jpg";
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn3.classList.add("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Default3");
			bgPreference = "Default3";
			break;
		case 'bgPreBoxBing':
			liveBgBox.style.display = "none";
			liveBgBox.pause();
			bgbox.src = bingWallpaper.url;
			bgbox.style.opacity = "1";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxInBing.classList.add("selected");
			bgPreBoxInLive.classList.remove("selected");
			localStorage.setItem("bgPreference", "Bing");
			bgPreference = "Bing";
			break;
		case 'bgPreBoxLive':
			liveBgBox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_1.mp4";
			liveBgBox.style.display = "block";
			liveBgBox.play();
			setTimeout(() => liveBgBox.style.opacity = "1", 50);
			bgbox.style.opacity = "0";
			bgPreBoxInCus.classList.remove("selected");
			bgPreBoxIn1.classList.remove("selected");
			bgPreBoxIn2.classList.remove("selected");
			bgPreBoxIn3.classList.remove("selected");
			bgPreBoxInBing.classList.remove("selected");
			bgPreBoxInLive.classList.add("selected");
			localStorage.setItem("bgPreference", "Live");
			bgPreference = "Live";
			break;
	}
}

function getPostData(data) {
	const formData = new FormData();
	for (const key in data) {
		data[key] && formData.append(key, data[key]);
	}
	return {
		body: formData,
		method: "POST"
	};
}

function likeClick() {
	btnLike.classList.add("rebound");
	fetch(backend + "like", getPostData({
		action: "updateLikedCount"
	})).then(response => {
		if (response.ok) {
			return response.text();
		}
	}).then(data => {
		if (data) {
			if (data === "liked") {
				alert("已经点过喜欢啦");
			} else {
				numLiked.innerText = data;
			}
		}
	});
}

function currentTime() {
	const date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	hours = date.getHours();
	minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	titleText.innerText = hours + ":" + minutes;
	return year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
}
setInterval(currentTime, 1000);

function pinnedNoteHover(event) {
	if (topNotificationBar.style.top != "0px") {
		m_clientX = event.clientX - this.offsetLeft;
		m_clientY = event.clientY - this.offsetTop;
		pinnedNoteW = window.getComputedStyle(this).width.replace("px", "");
		pinnedNoteH = window.getComputedStyle(this).height.replace("px", "");
		if (m_clientX < pinnedNoteW * 0.3 && m_clientY < pinnedNoteH * 0.3) {
			this.style.transform = "rotateX(10deg) rotateY(-5deg)";
		}
		if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY < pinnedNoteH * 0.3) {
			this.style.transform = "rotateX(10deg)";
		}
		if (m_clientX > pinnedNoteW * 0.7 && m_clientY < pinnedNoteH * 0.3) {
			this.style.transform = "rotateX(10deg) rotateY(5deg)";
		}
		if (m_clientX < pinnedNoteW * 0.3 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
			this.style.transform = "rotateY(-5deg)";
		}
		if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.3 &&
			m_clientY < pinnedNoteH * 0.7) {
			this.style.transform = "none";
		}
		if (m_clientX > pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.3 && m_clientY < pinnedNoteH * 0.7) {
			this.style.transform = "rotateY(5deg)";
		}
		if (m_clientX < pinnedNoteW * 0.3 && m_clientY > pinnedNoteH * 0.7) {
			this.style.transform = "rotateX(-10deg) rotateY(-5deg)";
		}
		if (m_clientX > pinnedNoteW * 0.3 && m_clientX < pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.7) {
			this.style.transform = "rotateX(-10deg)";
		}
		if (m_clientX > pinnedNoteW * 0.7 && m_clientY > pinnedNoteH * 0.7) {
			this.style.transform = "rotateX(-10deg) rotateY(5deg)";
		}
	}
	document.getElementById("btnUnpin" + this.id.replace(/[^\d]/g, "") * 1).style.opacity = "1";
}

function pinnedNoteHover2() {
	this.style.transform = "none";
	document.getElementById("btnUnpin" + this.id.replace(/[^\d]/g, "") * 1).style.opacity = "0";
}

function cusNavClick(event, obj) {
	if (currentEditingNav != obj || frmSetCustomNav.style.opacity === "0") {
		let left = event.clientX - 150;
		currentEditingNav = obj;
		if (left < 0) {
			left = 0;
		} else if (left + 300 > innerWidth) {
			left = innerWidth - 300;
		}
		frmSetCustomNav.style.left = left + "px";
		frmSetCustomNav.style.top = (event.clientY - 180) + "px";
		frmSetCustomNav.style.display = "block";
		setTimeout(() => {
			frmSetCustomNav.style.opacity = "1";
			frmSetCustomNav.style.transform = "scale(1.05)";
		}, 50);
		setTimeout(() => frmSetCustomNav.style.transform = "scale(1)", 300);
	} else {
		btnCloseFrmCusNav.onclick();
		currentEditingNav = "";
	}
}
btnCloseFrmCusNav.onclick = () => {
	frmSetCustomNav.style.transform = "scale(1.05)";
	setTimeout(() => frmSetCustomNav.style.opacity = "0", 150);
	setTimeout(() => frmSetCustomNav.style.transform = "scale(0.5)", 200);
	setTimeout(() => frmSetCustomNav.style.display = "none", 400);
}
inputCustomTitle.onkeydown = event => {
	if (event.keyCode == 13) {
		btnAddCusNav.onclick();
	}
}
btnAddCusNav.onclick = () => {
	if (isLoggedIn()) {
		if (inputCustomUrl.value) {
			window.cusNavIconUrl = inputCustomUrl.value;
			if (!cusNavIconUrl.startsWith("http")) {
				cusNavIconUrl = "https://" + cusNavIconUrl;
			}
			window.cusNavIconUrlParsed = new URL(cusNavIconUrl);
			fetch(backend + "code?action=favicon&title=" + encodeURIComponent(inputCustomTitle.value) + "&url=" +
				encodeURIComponent(cusNavIconUrl)).then(response => {
				if (response.ok) {
					return response.json();
				} else {
					getDefaultCusNavIcon();
				}
			}).then(data => {
				if (data) {
					cusNavIconUrl = data.icon;
					if (data.title && !inputCustomTitle.value) {
						inputCustomTitle.value = data.title;
					}
					currentEditingNav.innerHTML = `
					<img class="cusNavIcon shouldNotFade" src="` + cusNavIconUrl + `" onerror="getDefaultCusNavIcon(this)" onload="getDefaultCusNavIcon(this);submitCusNav();">
					<div class="cusNavTitle shouldNotFade">` + inputCustomTitle.value + `</div>`;
					currentEditingNav.classList.add("added");
					btnCloseFrmCusNav.onclick();
				}
			});
		}
	}
}

function getDefaultCusNavIcon(obj) {
	if (!obj.naturalWidth || obj.naturalWidth < 17 && confirm("此网站的图标分辨率过低，要使用自动生成的图标吗？")) {
		cusUrlInitial = cusNavIconUrlParsed.host;
		if (cusUrlInitial.startsWith("www.")) {
			cusUrlInitial = cusUrlInitial.substring(4);
		}
		cusUrlInitial = cusUrlInitial.substring(0, 1).toUpperCase();
		cusNavIconUrl = "https://iph.href.lu/128x128?bg=333&fg=70BF00&text=" + cusUrlInitial;
		obj.src = cusNavIconUrl;
		obj.classList.add("round");
		cusNavIconErrCount = 0;
	}
}

function submitCusNav() {
	cusNavSubmitCount = cusNavSubmitCount + 1;
	if (cusNavSubmitCount == 1) {
		cusNavUrl = inputCustomUrl.value;
		if (!cusNavUrl.startsWith("http")) {
			cusNavUrl = encodeURIComponent("http://" + cusNavUrl);
		} else {
			cusNavUrl = encodeURIComponent(cusNavUrl);
		}
		cusNavUrl = "\"" + cusNavUrl + "\"";
		cusNavTitle = inputCustomTitle.value;
		cusNavIconUrl = encodeURIComponent(cusNavIconUrl);
		fetch(backend + "cusNav", getPostData({
			action: "submitCusNav",
			rthUsername: login.username,
			cusNavUrl: cusNavUrl,
			cusNavTitle: cusNavTitle,
			cusNavIconUrl: cusNavIconUrl
		})).then(response => {
			if (response.ok) {
				return response.text();
			}
		}).then(getCusNav);
	}
	setTimeout(() => cusNavSubmitCount = 0, 2000);
}
window.onclick = () => {
	if (menuUser.style.opacity === "1") {
		hideMenu(menuUser);
	}
	if (menuSettings.style.opacity === "1") {
		hideMenu(menuSettings);
	}
	if (menuCusNav.style.opacity === "1") {
		hideMenu(menuCusNav);
	}
	if (menuSearch.style.opacity === "1") {
		hideMenu(menuSearch);
	}
	if (tipBoxCopyPaste.style.opacity === "1") {
		hideMenu(tipBoxCopyPaste);
	}
	if (tipBoxLogin.style.opacity === "1") {
		hideMenu(tipBoxLogin);
	}
	if (tipBoxBrowser.style.opacity === "1") {
		hideMenu(tipBoxBrowser);
	}
}
btnWarn.onmouseenter = () => {
	showMenu(tipBoxBrowser);
}
tipBoxBrowser.onmouseleave = () => {
	if (tipBoxBrowser.style.opacity === "1") {
		hideMenu(tipBoxBrowser);
	}
}
btnUser.onclick = () => {
	if (isLoggedIn()) {
		if (menuUser.style.opacity === "1") {
			hideMenu(menuUser);
		} else {
			showMenu(menuUser);
		}
	}
}
btnUser.onmouseenter = () => {
	if (!login.username) {
		showMenu(tipBoxLogin);
		offlineMark.style.opacity = 0;
	}
}
btnUser.onmouseout = () => {
	if (tipBoxLogin.style.opacity === "1") {
		hideMenu(tipBoxLogin);
	}
}

function btnSettingsClick() {
	if (menuSettings.style.opacity === "1") {
		hideMenu(menuSettings);
	} else {
		showMenu(menuSettings);
	}
}

function showMenu(theMenu) {
	theMenu.style.display = "block";
	setTimeout(() => {
		theMenu.style.opacity = "1";
		theMenu.style.transform = "scale(1.05)";
	}, 50);
	setTimeout(() => theMenu.style.transform = "scale(1)", 300);
}

function hideMenu(theMenu) {
	theMenu.style.transform = "scale(0.5)";
	theMenu.style.opacity = "0";
	setTimeout(() => theMenu.style.display = "none", 250);
}

function isLoggedIn() {
	if (login.username) {
		return true;
	} else {
		if (!window.frmLogin) {
			window.frmLogin = document.createElement("iframe");
			frmLogin.id = "frmLogin";
			frmLogin.title = "登录";
			frmLogin.src = "https://account.rthsoftware.cn/login-mobius-start.html";
			popLogin.appendChild(frmLogin);
		}
		showPop(popLogin);
		return false;
	}
}

function loggedIn(newLogin) {
	if (newLogin) {
		closePop(popLogin);
	}
	fetch(backend + "account", getPostData({
		action: "verifyUsername",
		rthUsername: login.username,
		email: login.email
	})).then(response => {
		if (response.ok) {
			return response.text();
		}
	}).then(data => {
		if (data) {
			if (data === "0") {
				showPop(popCompleteReg);
			} else {
				var userInfo = JSON.parse(data);
				username = userInfo[0].username;
				birthday = userInfo[0].birthday;
				if (birthday != "") {
					currentMonth = new Date().getMonth() + 1;
					currentDay = new Date().getDate();
					if (currentMonth < 10) {
						currentMonth = "0" + currentMonth;
					}
					currentDate = currentMonth + "-" + currentDay;
					birthdayDate = birthday.substring(5);
				}
				if (birthdayDate != undefined && birthdayDate === currentDate) {
					showGreeting("", "生日快乐，" + username);
				} else {
					showGreeting(username, "");
				}
				menuTextUsername.innerText = username;
				titlePopAccount.innerText = "欢迎你，" + username;
				accInfoTextEmail.innerText = userInfo[0].email;
				accInfoTextUid.innerText = userInfo[0].uid;
				accInfoTextUsername.innerText = username;
				accInfoTextBirthday.innerText = birthday;
				inputEditUsername.value = username;
				inputEditBirthday.value = birthday;
			}
		}
	});
	getCusNav();
	noteList.load();
	textNote.value = "";
	offlineMark.style.opacity = 0;
}

function getCusNav() {
	fetch(backend + "cusNav", getPostData({
		action: "getCusNav",
		rthUsername: login.username
	})).then(response => {
		if (response.ok) {
			return response.text();
		}
	}).then(data => {
		if (data) {
			navboxCustom.innerHTML = data;
		}
	});
	inputCustomUrl.value = "";
	inputCustomTitle.value = "";
}

function loadCusNavSlots() {
	fetch(backend + "cusNav", getPostData({
		action: "loadCusNavSlots"
	})).then(response => {
		if (response.ok) {
			return response.text();
		}
	}).then(data => {
		if (data) {
			navboxCustom.innerHTML = data;
		}
	});
}

function showCusNavMenu(e, obj) {
	menuCusNav.style.left = e.clientX + 3 + "px";
	menuCusNav.style.top = e.clientY + 3 + "px";
	currentDeletingNav = obj.id;
	showMenu(menuCusNav);
}
cusNavMenuDel.onclick = () => {
	fetch(backend + "cusNav", getPostData({
		action: "delCusNav",
		rthUsername: login.username,
		delIndex: currentDeletingNav
	})).then(response => {
		if (response.ok) {
			getCusNav();
			title.onclick();
		}
	});
}

function checkUsername() {
	var IllegalString = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
	var index = inputUsername.value.length - 1;
	var s = inputUsername.value.charAt(index);
	if (IllegalString.indexOf(s) >= 0) {
		s = inputUsername.value.substring(0, index);
		inputUsername.value = s;
	}
	if (inputUsername.value.length > 20) {
		loginTipUsername.innerText = "用户名长度不符合限制";
		if (matchMedia("(prefers-color-scheme:dark)").matches && autoDarkMode === true) {
			loginTipUsername.style.color = "#FF565F";
		} else {
			loginTipUsername.style.color = "#FF2F3C";
		}
	} else {
		loginTipUsername.innerText = "为自己起一个好听的用户名";
		if (matchMedia("(prefers-color-scheme:dark)").matches && autoDarkMode === true) {
			loginTipUsername.style.color = "rgba(255,255,255,0.5)";
		} else {
			loginTipUsername.style.color = "rgba(0,0,0,0.5)";
		}
	}
}
btnCompleteReg.onclick = () => {
	btnCompleteReg.style.pointerEvents = "none";
	if (inputUsername.value.length > 0 && inputUsername.value.length < 21) {
		username = inputUsername.value;
		fetch(backend + "account", getPostData({
			action: "completeReg",
			rthUsername: login.username,
			username: username,
			birthday: inputBirthday.value
		})).then(response => {
			if (response.ok) {
				closePop(popCompleteReg);
				showGreeting(username, "");
			}
		});
	}
}

function editBtnClick(editItem) {
	switch (editItem) {
		case 'username':
			btnEditUsername.style.display = "none";
			inputEditUsername.style.display = "inline-block";
			btnUpdateUsername.style.display = "inline-block";
			break;
		case 'birthday':
			btnEditBirthday.style.display = "none";
			inputEditBirthday.style.display = "inline-block";
			btnUpdateBirthday.style.display = "inline-block";
			break;
	}
}

function updateUserInfo(editItem) {
	if (inputEditUsername.value.length > 0 && inputEditUsername.value.length < 21) {
		newUsername = inputEditUsername.value;
		newBirthday = inputEditBirthday.value;
		if (newUsername != username || newBirthday != birthday) {
			fetch(backend + "account", getPostData({
				action: "completeReg",
				rthUsername: login.username,
				username: newUsername,
				birthday: newBirthday
			})).then(response => {
				if (response.ok) {
					menuTextUsername.innerText = newUsername;
					titlePopAccount.innerText = "欢迎你，" + newUsername;
					accInfoTextUsername.innerText = newUsername;
					accInfoTextBirthday.innerText = newBirthday;
					username = newUsername;
					birthday = newBirthday;
				}
			});
		}
		btnEditUsername.style.display = "inline-block";
		inputEditUsername.style.display = "none";
		btnUpdateUsername.style.display = "none";
		btnEditBirthday.style.display = "inline-block";
		inputEditBirthday.style.display = "none";
		btnUpdateBirthday.style.display = "none";
	}
}

function showGreeting(username, otherText) {
	if (greetingBox.style.display != "block") {
		if (otherText === "") {
			time = new Date().getHours();
			if (time > 21 || time < 4) {
				greeting.innerText = "晚安，" + username;
			}
			if (time >= 4 && time < 9) {
				greeting.innerText = "早安，" + username;
			}
			if (time === 9) {
				greeting.innerText = "早上好，" + username;
			}
			if (time > 9 && time < 12) {
				greeting.innerText = "上午好，" + username;
			}
			if (time === 12) {
				greeting.innerText = "中午好，" + username;
			}
			if (time > 12 && time < 15) {
				greeting.innerText = "午安，" + username;
			}
			if (time >= 15 && time < 18) {
				greeting.innerText = "下午好，" + username;
			}
			if (time === 18) {
				greeting.innerText = "傍晚好，" + username;
			}
			if (time > 18 && time <= 21) {
				greeting.innerText = "晚上好，" + username;
			}
		} else {
			greeting.innerHTML = otherText;
		}
		greetingBox.style.display = "block";
		setTimeout(() => {
			greeting.style.opacity = "1";
			greeting.style.top = "0px";
		}, 50);
		setTimeout(() => {
			greeting.style.opacity = "0";
			greeting.style.top = "-100px";
		}, 3000);
		setTimeout(() => greetingBox.style.display = "none", 3500);
	}
}

function navboxScroll(e) {
	if (!window.cooldownScroll) {
		if (e.target.className.indexOf("note") == -1 && e.target.id != "textNote" && e.target.id != "iconAdd") {
			if (e.deltaX < 0 || e.deltaY < 0) {
				nbSwitch1.onclick();
			} else {
				nbSwitch2.onclick();
			}
		}
	}
}

function setAutoClrSearchBar() {
	if (chkAutoClrSearchBar.checked == true) {
		autoClrSearchBar = false;
		localStorage.setItem("autoClrSearchBar", "off");
	} else {
		autoClrSearchBar = true;
		localStorage.setItem("autoClrSearchBar", "on");
	}
}

function setOpenInNew() {
	if (chkOpenInNew.checked == true) {
		openInNew = false;
		localStorage.setItem("openInNew", "off");
	} else {
		openInNew = true;
		localStorage.setItem("openInNew", "on");
	}
}

function setReduceMotion() {
	if (chkReduceMotion.checked == true) {
		reduceMotion = false;
		localStorage.setItem("reduceMotion", "off");
	} else {
		reduceMotion = true;
		localStorage.setItem("reduceMotion", "on");
	}
}

function setAutoDarkMode() {
	if (chkAutoDarkMode.checked == true) {
		autoDarkMode = false;
		localStorage.setItem("autoDarkMode", "off");
		removeCss("styles/dark.css");
	} else {
		autoDarkMode = true;
		localStorage.setItem("autoDarkMode", "on");
		loadCss("styles/dark.css");
	}
	if ("undefined" != typeof frmChangeLog) {
		frmChangeLog.src = "changelog.html";
	}
}

function loadCss(href) {
	let addSign = true;
	const links = document.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
			addSign = false;
		}
	}
	if (addSign) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = href;
		document.head.appendChild(link);
	}
}

function removeCss(href) {
	const links = document.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
			links[i].parentNode.removeChild(links[i]);
		}
	}
}

function getTopNotification() {
	fetch(backend + "push?action=get").then(response => {
		if (response.ok) {
			return response.json();
		}
	}).then(pushInfo => {
		if (pushInfo) {
			pushClass = pushInfo[0].classification;
			pushTitle = pushInfo[0].title;
			pushContent = pushInfo[0].content;
			pushStartTime = pushInfo[0].pushStartTime;
			pushStopTime = pushInfo[0].pushStopTime;
			oldPushClass = localStorage.getItem("pushClass");
			oldPushTitle = localStorage.getItem("pushTitle");
			oldPushContent = localStorage.getItem("pushContent");
			oldPushStartTime = localStorage.getItem("pushStartTime");
			oldPushStopTime = localStorage.getItem("pushStopTime");
			localStorage.setItem("pushClass", pushClass);
			localStorage.setItem("pushTitle", pushTitle);
			localStorage.setItem("pushContent", pushContent);
			localStorage.setItem("pushStartTime", pushStartTime);
			localStorage.setItem("pushStopTime", pushStopTime);
			if (oldPushStopTime) {
				if (oldPushClass != pushClass || oldPushTitle != pushTitle || oldPushContent != pushContent ||
					oldPushStartTime != pushStartTime || oldPushStopTime != pushStopTime) {
					processTopNotification();
				}
			} else {
				processTopNotification();
			}
		}
	});
}

function processTopNotification() {
	pushClass = localStorage.getItem("pushClass");
	pushTitle = localStorage.getItem("pushTitle");
	pushContent = localStorage.getItem("pushContent");
	pushStartTime = localStorage.getItem("pushStartTime");
	pushStopTime = localStorage.getItem("pushStopTime");
	if (pushStopTime) {
		nowTime = new Date();
		pushStartTime = new Date(pushStartTime);
		pushStopTime = new Date(pushStopTime);
		if (nowTime.getTime() > pushStartTime.getTime() && nowTime.getTime() < pushStopTime.getTime()) {
			switch (pushClass) {
				case '0':
					topNotificationBar.classList.add("class0");
					break;
				case '1':
					topNotificationBar.classList.add("class1");
					break;
				case '2':
					topNotificationBar.classList.add("class2");
					break;
			}
			marqueeTitle.innerText = pushTitle;
			marqueeText.innerText = pushContent;
			showTopNbar();
		}
	}
}

function showTopNbar() {
	topNotificationBar.style.display = "block";
	marqueeBar.start();
	setTimeout(() => {
		topNotificationBar.style.top = "0";
		bodyBox.style.top = "50px";
		bodyBox.style.height = "calc(100% - 50px)";
		navbox.style.top = "50px";
		navbox.style.height = "calc(100% - 50px)";
	}, 50);
}
btnClosetopNBar.onclick = () => {
	topNotificationBar.style.top = "-50px";
	bodyBox.style.top = "0";
	bodyBox.style.height = "100%";
	navbox.style.top = "0";
	navbox.style.height = "100%";
	setTimeout(() => {
		marqueeBar.stop();
		topNotificationBar.style.display = "none";
	}, 250);
}

function showSearchMenu(e, obj) {
	menuSearch.style.left = e.clientX + 3 + "px";
	menuSearch.style.top = e.clientY + 3 + "px";
	selectedText = window.getSelection().toString();
	if (selectedText != "") {
		searchMenuCut.classList.remove("disabled");
		searchMenuCopy.classList.remove("disabled");
	} else {
		searchMenuCut.classList.add("disabled");
		searchMenuCopy.classList.add("disabled");
	}
	showMenu(menuSearch);
}
searchMenuCut.onclick = () => {
	window.getSelection().toString();
	document.execCommand("cut");
	input0.focus();
}
searchMenuCopy.onclick = () => {
	window.getSelection().toString();
	document.execCommand("copy");
	input0.focus();
}
searchMenuPaste.onclick = event = () => {
	try {
		navigator.clipboard.readText().then(clipText => input0.value = input0.value + clipText);
	} catch (err) {
		tipBoxCopyPaste.style.left = event.clientX + 3 + "px";
		tipBoxCopyPaste.style.top = event.clientY + 3 + "px";
		showMenu(tipBoxCopyPaste);
	}
	input0.focus();
}

function loadJs(src, load, error) {
	const newScript = document.createElement("script");
	newScript.src = src;
	newScript.onload = load;
	newScript.onerror = error;
	document.body.appendChild(newScript);
}
loadCusNavSlots();
if (isMobile) {
	form0.action = "https://m.baidu.com/s";
	bgbox.style.backgroundSize = "auto 100%";
	bgbox.style.backgroundPosition = "center";
}
if (ypoctonod[0][atob(ypoctonod[1])].indexOf(atob("YS5tYW9yeC5jbg==")) == -1) {
	ypoctonod[0][atob(ypoctonod[1])] = atob("aHR0cHM6Ly9hLm1hb3J4LmNuLw==");
} else {
	ypoctonod.length = 0;
}
if (!currentSearchEngine) {
	currentSearchEngine = "baidu";
}
switchSearchEng(currentSearchEngine);
if (cusWallpaper) {
	bgPreBoxInCus.classList.remove("unset");
	bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")";
}
if (!bgPreference) {
	localStorage.setItem("bgPreference", "Default");
	bgPreference = "Default";
}
switch (bgPreference) {
	case 'Custom':
		bgbox.src = cusWallpaper;
		bgPreBoxInCus.classList.add("selected");
		break;
	case 'Default':
		bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_1.jpg";
		bgPreBoxIn1.classList.add("selected");
		break;
	case 'Default2':
		bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_2.jpg";
		bgPreBoxIn2.classList.add("selected");
		break;
	case 'Default3':
		bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_3.jpg";
		bgPreBoxIn3.classList.add("selected");
		break;
	case 'Bing':
		bgPreBoxInBing.classList.add("selected");
		break;
	case 'Live':
		liveBgBox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_1.mp4";
		liveBgBox.style.display = "block";
		setTimeout(() => liveBgBox.style.opacity = "1", 50);
		bgPreBoxInLive.classList.add("selected");
		break;
}
bgbox.onload = () => {
	bgbox.style.display = "block";
	setTimeout(() => bgbox.style.opacity = "1", 50);
	setTimeout(() => cover.style.opacity = "1", 100);
}
fetch(backend + "code?action=bing").then(response => {
	if (response.ok) {
		return response.json();
	}
}).then(data => {
	if (data) {
		window.bingWallpaper = data.images[0];
		bingWallpaper.url = "https://cn.bing.com" + bingWallpaper.url;
		lastModified0 = Math.round(new Date(bingWallpaper.startdate.substring(0, 4) + "-" + bingWallpaper
				.startdate.substring(4, 6) + "-" + bingWallpaper.startdate.substring(6, 8)).getTime() /
			1000);
		console.log("Background image last modified at " + lastModified0);
		wallpaperInfo.innerText = "喜欢这张壁纸：" + bingWallpaper.copyright;
		bgPreBoxInBing.style.backgroundImage = "url(" + bingWallpaper.url + ")";
		if (bgPreference == "Bing") {
			bgbox.src = bingWallpaper.url;
		}
		fetch(backend + "like", getPostData({
			action: "getLikedCount",
			lastModified0: lastModified0
		})).then(response => {
			if (response.ok) {
				return response.text();
			}
		}).then(data => {
			if (data) {
				numLiked.innerText = data;
			}
		});
	}
});
fetch("https://v1.hitokoto.cn/?c=d&c=h&c=i&c=j&encode=json").then(response => response.json()).then(data => {
	document.getElementsByClassName("quote-content")[0].innerText = "「 " + data["hitokoto"] + " 」";
	document.getElementsByClassName("quote-author")[0].innerText = "——" + data["from"];
});
if (localVersion && localVersion.substring(0, 6) != version.substring(0, 6)) {
	showGreeting("", "欢迎回来~你的起始页刚刚更新到了<span class='links1' onclick='showAbout()'>最新版本</span>。");
}
localStorage.setItem("localVersion", version);
navbox0.addEventListener("wheel", navboxScroll, {
	passive: true
});
window["ThinkPageWeatherWidgetObject"] = "tpwidget";
window["tpwidget"] || (window["tpwidget"] = function() {
	(window["tpwidget"].q = window["tpwidget"].q || []).push(arguments)
});
window["tpwidget"].l = +new Date();
tpwidget("init", JSON.parse(atob(
	"eyJmbGF2b3IiOiJzbGltIiwibG9jYXRpb24iOiJXUzdHUUJSTlI2VjgiLCJnZW9sb2NhdGlvbiI6ImVuYWJsZWQiLCJsYW5ndWFnZSI6ImF1dG8iLCJ1bml0IjoiYyIsInRoZW1lIjoiY2hhbWVsZW9uIiwiY29udGFpbmVyIjoidHAtd2VhdGhlci13aWRnZXQiLCJidWJibGUiOiJlbmFibGVkIiwiYWxhcm1UeXBlIjoiYmFkZ2UiLCJjb2xvciI6IiNGRkZGRkYiLCJ1aWQiOiJVRTE3RDRDOTkxIiwiaGFzaCI6IjEwNWJmNmE3ZjYxZjQ3NDk1ZjNiYjU2OTNlYmUzNmRlIn0="
	)));
tpwidget("show");
marqueeBar.stop();
getTopNotification();
chkAutoClrSearchBar.checked = autoClrSearchBar;
chkOpenInNew.checked = openInNew;
chkReduceMotion.checked = reduceMotion;
chkAutoDarkMode.checked = autoDarkMode;
if (autoDarkMode) {
	loadCss("styles/dark.css");
}
window.noteList = new Vue({
	el: "#noteList",
	data: {
		changed: false,
		current: 0,
		currentIsNew: true,
		list: {
			text: [],
			time: Date.now()
		},
		pinned: JSON.parse(localStorage.getItem("pinnedNoteNum")) || []
	},
	watch: {
		pinned: function() {
			localStorage.setItem("pinnedNoteNum", JSON.stringify(this.pinned));
		}
	},
	methods: {
		delete: function() {
			const item = this.list.text[this.current - 1];
			textNote.value = "";
			if (item) {
				this.list.text.splice(this.current - 1, 1);
				this.submit(JSON.stringify({
					created: item.created,
					delete: true
				}), item.created || this.current);
				if (this.pinned && this.pinned.indexOf(item.created) != -1) {
					unpinNote(item.created);
				}
				this.current = 0;
				this.currentIsNew = true;
			}
			if (!this.list.text.length) {
				textNote.style.left = "0px";
				textNote.style.width = "660px";
				noteListWrap.style.left = "-200px";
				noteToolBar.style.display = "none";
			}
		},
		getIndex: function(i) {
			let noteIndex = null;
			for (let j = 0; j < this.list.text.length; j++) {
				if (this.list.text[j].created == i) {
					noteIndex = j;
				}
			}
			return noteIndex
		},
		isOpened: function() {
			return window.login && login.username && this.list && this.list.text && this.list.text[this
				.current - 1];
		},
		load: function() {
			fetch("https://api.rthe.cn/text/get?" + encodeData({
				token: login.token,
				username: login.username
			})).then(response => {
				if (response.ok) {
					return response.json();
				} else if (response.status == 404) {
					this.submit();
				}
			}).then(data => {
				const maximumNoteNumber = localStorage.getItem("maximumNoteNumber");
				const newPinned = [];
				if (data) {
					this.list = data;
				}
				if (maximumNoteNumber) {
					for (let i = 1; i < Number(maximumNoteNumber) + 1; i++) {
						const currentNoteTitle = localStorage.getItem("note" + i);
						if (currentNoteTitle) {
							const time = localStorage.getItem("noteTime" + i);
							this.list.text.push({
								created: time ? new Date(time.replace(/年|月/g, "-").replace(
									"日", "")).getTime() : null,
								encrypt: false,
								text: currentNoteTitle,
								time: time,
								title: ""
							});
						}
						localStorage.removeItem("note" + i);
						localStorage.removeItem("noteTime" + i);
					}
					localStorage.removeItem("maximumNoteNumber");
					this.submit();
				}
				if (this.list.text.length > 0) {
					textNote.style.left = "200px";
					textNote.style.width = "460px";
					noteListWrap.style.left = "0px";
					noteToolBar.style.display = "block";
				}
				for (let i = 0; i < this.pinned.length; i++) {
					if (this.getIndex(this.pinned[i]) !== null && newPinned.indexOf(this.pinned[
						i]) == -1) {
						newPinned.push(this.pinned[i]);
					}
				}
				this.pinned = newPinned;
				for (let i = 0; i < this.pinned.length; i++) {
					const noteIndex = this.getIndex(this.pinned[i]);
					createPinnedNote(this.pinned[i], this.list.text[noteIndex].text, this.list.text[
						noteIndex].time);
				}
				showPinnedNote();
			});
		},
		newNote: function() {
			this.changed && this.save();
			this.list.text.push({
				created: Date.now(),
				encrypt: false,
				text: "",
				time: currentTime(),
				title: ""
			});
			this.current = this.list.text.length;
			this.currentIsNew = true;
			textNote.value = "";
			textNote.focus();
			setTimeout(() => document.getElementById("noteList").scrollTop = document.getElementById(
				"noteList").scrollHeight, 1);
		},
		open: function(index) {
			this.changed && this.save();
			this.current = index * 1;
			this.currentIsNew = false;
			if (this.list.text[this.current - 1]) {
				textNote.value = this.list.text[this.current - 1].text;
			}
			txtNoteCloudStatus.innerText = originalStatus;
			noteToolBar.style.display = "block";
			textNote.focus();
		},
		save: function() {
			if (this.isOpened()) {
				const item = this.list.text[this.current - 1];
				item.encrypt = false;
				this.submit(JSON.stringify(item), this.currentIsNew ? -1 : (item.created || this.current));
				this.changed = false;
				this.currentIsNew = false;
			}
		},
		submit: function(text, key) {
			if (login.username) {
				const postData = {
					token: login.token,
					username: login.username,
					value: JSON.stringify(this.list)
				};
				this.list.time = Date.now();
				if (key) {
					postData.key = key;
					postData.time = this.list.time;
					postData.value = text;
				}
				txtNoteCloudStatus.innerText = "正在保存";
				fetch("https://api.rthe.cn/text/upload", getPostData(postData)).then(response => {
					txtNoteCloudStatus.innerText = response.ok ? "已保存" : "保存失败";
					setTimeout(() => txtNoteCloudStatus.innerText = originalStatus, 1000);
				});
			}
		}
	}
});
