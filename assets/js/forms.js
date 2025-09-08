document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // IMPORTANTE: Troque este número pelo seu número de WhatsApp
        // Formato: Código do país + DDD + Número (tudo junto, sem espaços ou símbolos)
        const numeroWhatsapp = '+5518996555225';

        // Pega os valores dos campos
        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;

        // Monta a mensagem final
        const textoFinal = `Olá! Meu nome é *${nome}*.\n\n${mensagem}`;

        // Codifica a mensagem para a URL
        const mensagemCodificada = encodeURIComponent(textoFinal);

        // Monta a URL final do WhatsApp
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

        // Abre a URL em uma nova aba
        window.open(urlWhatsapp, '_blank');
    });