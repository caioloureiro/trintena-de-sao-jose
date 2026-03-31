/* Start - js/script.js */
// Seleciona o texto da div.leitura ao clicar no botão

document.addEventListener("DOMContentLoaded", function () {
	const btn = document.querySelector(".btn");
	const leitura = document.querySelector(".leitura");
	const btnTrintena = document.querySelector(".comecar-trintena");
	const counter = document.querySelector(".counter");

	// Funções para cookie
	function setCookie(name, value, days) {
		const d = new Date();
		d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = "expires=" + d.toUTCString();
		document.cookie = name + "=" + value + ";" + expires + ";path=/";
	}
	function getCookie(name) {
		const cname = name + "=";
		const decodedCookie = decodeURIComponent(document.cookie);
		const ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") c = c.substring(1);
			if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
		}
		return "";
	}

	function atualizarContador() {
		const dataInicio = getCookie("trintena_inicio");
		if (dataInicio) {
			const inicio = new Date(dataInicio);
			const agora = new Date();
			const diff = Math.floor((agora - inicio) / (1000 * 60 * 60 * 24));
			let dia = diff + 1;
			if (dia < 1) dia = 1;
			if (dia > 30) dia = 30;
			if (counter) counter.textContent = `Dia da trintena: ${dia}`;
		} else {
			if (counter) counter.textContent = "Dia da trintena: 0";
		}
	}

	if (btnTrintena) {
		btnTrintena.addEventListener("click", function (e) {
			e.preventDefault();
			if (!getCookie("trintena_inicio")) {
				const agora = new Date();
				setCookie("trintena_inicio", agora.toISOString(), 30);
			}
			atualizarContador();
		});
	}

	atualizarContador();

	if (btn && leitura) {
		btn.addEventListener("click", function (e) {
			e.preventDefault();
			if (window.getSelection && document.createRange) {
				const range = document.createRange();
				range.selectNodeContents(leitura);
				const sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
			}
		});
	}

	// Painel de voz para texto
	const voiceSelect = document.getElementById("voiceSelect");
	const btnEscutar = document.getElementById("btnEscutar");

	function popularVozes() {
		const synth = window.speechSynthesis;
		const voices = synth.getVoices();
		voiceSelect.innerHTML = "";
		voices.forEach((voice, i) => {
			const option = document.createElement("option");
			option.value = i;
			option.textContent = `${voice.name} (${voice.lang})${voice.default ? " [padrão]" : ""}`;
			voiceSelect.appendChild(option);
		});
	}

	if ("speechSynthesis" in window) {
		popularVozes();
		window.speechSynthesis.onvoiceschanged = popularVozes;
	}

	if (btnEscutar && leitura) {
		btnEscutar.addEventListener("click", function () {
			const synth = window.speechSynthesis;
			const voices = synth.getVoices();
			const selected = voiceSelect.value;
			const texto = leitura.innerText;
			if (texto.trim() !== "") {
				const utter = new SpeechSynthesisUtterance(texto);
				if (voices[selected]) utter.voice = voices[selected];
				synth.cancel(); // Para qualquer leitura anterior
				synth.speak(utter);
			}
		});
	}
});
/* End - js/script.js */
