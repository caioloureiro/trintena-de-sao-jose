# Trintena de São José

Site dedicado à devoção e oração durante os 30 dias em honra a São José. Oferece orações, reflexões e recursos para fortalecer a fé.

---

## 📁 Estrutura do Projeto

- **index.php**: Página principal, com SEO, Open Graph, Twitter Cards, acessibilidade e conteúdo principal da Trintena.
- **css/estilo.css**: CSS responsivo, apenas unidades VW, cores centralizadas no :root.
- **js/script.js**: Seleção de texto e painel de voz (Text-to-Speech) com escolha de voz.
- **preferences.md**: Guia de padrões do projeto (indentação, métricas, variáveis, comentários, importação de CSS/JS).
- **img/sao-jose.webp**: Imagem para SEO e visual.
- **trintena-de-sao-jose.pdf**: Documento de referência do conteúdo.

---

## 🚀 Como Usar

1. Clone ou baixe o projeto.
2. Coloque em um servidor local (ex: XAMPP, Laragon, WAMP) com suporte a PHP.
3. Acesse `index.php` pelo navegador.
4. Utilize o painel de voz para ouvir a oração ou selecione o texto para copiar/compartilhar.

---

## 🎨 Padrões e Convenções

- **CSS**: Somente VW para medidas. Todas as cores (exceto white/black) no :root. Nada de shorthands genéricos. Comentários só para Start/End.
- **JS**: Importação via require, painel de voz acessível, sem dependências externas.
- **HTML**: SEO completo, acessibilidade (uso de landmarks, contraste, navegação por teclado), meta tags, favicon, Open Graph, Twitter Cards.
- **Importação**: Sempre via require/include para CSS e JS.
- **Documentação**: Preferencialmente em README.md e preferences.md.

---

## ♿️ Acessibilidade

- Contraste alto e modo escuro por padrão.
- Navegação por teclado garantida.
- Botões e controles com foco visível.
- Painel de voz acessível por screen readers.

---

## 🔎 SEO e Compartilhamento

- Meta tags para SEO, Open Graph e Twitter Cards.
- Imagem otimizada para compartilhamento.
- Títulos e descrições dinâmicos.

---

## 🛠️ Exemplo de Uso do Painel de Voz

1. Selecione a voz desejada no painel.
2. Clique em "Escutar" para ouvir toda a oração.
3. Use o botão "Selecionar Texto" para copiar facilmente.

---

## 📄 Preferências de Código

Veja `preferences.md` para detalhes sobre:

- Indentação (sempre TAB)
- Métricas (VW)
- Cores (variáveis no :root)
- Comentários (apenas Start/End)
- Importação de CSS/JS

---

## 🤝 Contribuição

Pull requests são bem-vindos! Siga os padrões do `preferences.md` e mantenha o código limpo e documentado.

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nome-feature`)
3. Commit suas alterações (`git commit -am 'feat: nova feature'`)
4. Push para a branch (`git push origin feature/nome-feature`)
5. Abra um Pull Request

---

## 👤 Autor

Desenvolvido por Caio Loureiro  
Site: https://digitalmd.com.br  
CV: https://digitalmd.com.br/caioloureiro/cv/

---

## 📃 Licença

Este projeto é open-source e livre para uso não comercial. Para outros usos, consulte o autor.
