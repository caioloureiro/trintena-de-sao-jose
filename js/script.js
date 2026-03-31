/* Start - js/script.js */
// Seleciona o texto da div.leitura ao clicar no botão

document.addEventListener("DOMContentLoaded", function () {
	const btn = document.querySelector(".btn");
	const leitura = document.querySelector(".leitura");
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
