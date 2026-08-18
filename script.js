(function () {
    "use strict";

    var seletor = function (id) {
        return document.getElementById(id);
    };

    var aplicarTema = function (tema) {
        var botaoTema = seletor("botao-tema");
        var rotulo = botaoTema ? botaoTema.querySelector(".theme-toggle-label") : null;
        var modoClaro = tema === "light";

        document.documentElement.setAttribute("data-theme", tema);

        if (botaoTema) {
            botaoTema.setAttribute("aria-pressed", String(modoClaro));
        }

        if (rotulo) {
            rotulo.textContent = modoClaro ? "Modo escuro" : "Modo claro";
        }

        try {
            localStorage.setItem("harmonia-theme", tema);
        } catch (error) {
            /* storage indisponível */
        }
    };

    var iniciarTema = function () {
        var botaoTema = seletor("botao-tema");
        var temaAtual = document.documentElement.getAttribute("data-theme") || "dark";

        aplicarTema(temaAtual);

        if (!botaoTema) {
            return;
        }

        botaoTema.addEventListener("click", function () {
            var atual = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
            aplicarTema(atual === "dark" ? "light" : "dark");
        });
    };

    var fecharMenu = function () {
        var botaoMenu = seletor("botao-menu");
        var menu = seletor("menu-principal");
        var textoOculto = botaoMenu ? botaoMenu.querySelector(".visually-hidden") : null;

        if (!botaoMenu || !menu) {
            return;
        }

        menu.classList.remove("is-open");
        botaoMenu.setAttribute("aria-expanded", "false");
        if (textoOculto) {
            textoOculto.textContent = "Abrir menu";
        }
    };

    var iniciarMenu = function () {
        var botaoMenu = seletor("botao-menu");
        var menu = seletor("menu-principal");
        var textoOculto = botaoMenu ? botaoMenu.querySelector(".visually-hidden") : null;

        if (!botaoMenu || !menu) {
            return;
        }

        botaoMenu.addEventListener("click", function () {
            var aberto = botaoMenu.getAttribute("aria-expanded") === "true";
            var novoEstado = !aberto;

            botaoMenu.setAttribute("aria-expanded", String(novoEstado));
            menu.classList.toggle("is-open", novoEstado);
            if (textoOculto) {
                textoOculto.textContent = novoEstado ? "Fechar menu" : "Abrir menu";
            }
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", fecharMenu);
        });

        document.addEventListener("keydown", function (evento) {
            if (evento.key === "Escape") {
                fecharMenu();
            }
        });
    };

    var iniciarVoltarAoTopo = function () {
        var botao = seletor("voltar-topo");

        if (!botao) {
            return;
        }

        var atualizarVisibilidade = function () {
            botao.hidden = window.scrollY < 420;
        };

        window.addEventListener("scroll", atualizarVisibilidade, { passive: true });
        atualizarVisibilidade();

        botao.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    };

    var destacarCard = function (card) {
        var imagem = seletor("destaque-imagem");
        var tipo = seletor("destaque-tipo");
        var genero = seletor("destaque-genero");
        var titulo = seletor("destaque-titulo");
        var artista = seletor("destaque-artista");
        var descricao = seletor("destaque-descricao");
        var link = seletor("destaque-link");
        var painel = seletor("painel-destaque");

        if (!card || !imagem || !titulo) {
            return;
        }

        document.querySelectorAll(".card.is-featured").forEach(function (item) {
            item.classList.remove("is-featured");
        });
        card.classList.add("is-featured");

        imagem.src = card.getAttribute("data-imagem") || "";
        imagem.alt = card.getAttribute("data-alt") || "";
        if (tipo) {
            tipo.textContent = card.getAttribute("data-tipo") || "";
        }
        if (genero) {
            var nomeGenero = card.getAttribute("data-genero") || "";
            genero.textContent = nomeGenero.charAt(0).toUpperCase() + nomeGenero.slice(1);
        }
        titulo.textContent = card.getAttribute("data-titulo") || "";
        if (artista) {
            artista.textContent = card.getAttribute("data-artista") || "";
        }
        if (descricao) {
            descricao.textContent = card.getAttribute("data-descricao") || "";
        }
        if (link) {
            link.href = card.getAttribute("data-link") || "#";
        }
        if (painel) {
            painel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };

    var iniciarGaleria = function () {
        var cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {
            var acao = card.querySelector(".card-action");

            card.addEventListener("click", function () {
                destacarCard(card);
            });

            if (acao) {
                acao.addEventListener("click", function (evento) {
                    evento.stopPropagation();
                    destacarCard(card);
                });
            }
        });
    };

    var iniciarFiltro = function () {
        var botoes = document.querySelectorAll(".filtro");
        var cards = document.querySelectorAll(".card");
        var vazio = seletor("filtro-vazio");

        if (!botoes.length) {
            return;
        }

        botoes.forEach(function (botao) {
            botao.addEventListener("click", function () {
                var categoria = botao.getAttribute("data-filtro") || "todos";
                var visiveis = 0;

                botoes.forEach(function (item) {
                    var ativo = item === botao;
                    item.classList.toggle("is-active", ativo);
                    item.setAttribute("aria-pressed", String(ativo));
                });

                cards.forEach(function (card) {
                    var corresponde = categoria === "todos" || card.getAttribute("data-genero") === categoria;
                    card.hidden = !corresponde;
                    if (corresponde) {
                        visiveis += 1;
                    }
                });

                if (vazio) {
                    vazio.hidden = visiveis > 0;
                }

                var primeiroVisivel = document.querySelector(".card:not([hidden])");
                if (primeiroVisivel) {
                    destacarCard(primeiroVisivel);
                }
            });
        });
    };

    var emailValido = function (valor) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    };

    var mostrarStatus = function (mensagem, tipo) {
        var status = seletor("form-status");

        if (!status) {
            return;
        }

        status.hidden = false;
        status.textContent = mensagem;
        status.classList.remove("is-error", "is-success");
        status.classList.add(tipo === "erro" ? "is-error" : "is-success");
    };

    var iniciarFormulario = function () {
        var formulario = seletor("form-contato");

        if (!formulario) {
            return;
        }

        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            var nome = seletor("nome");
            var email = seletor("email");
            var mensagem = seletor("mensagem");
            var nomeValor = nome ? nome.value.trim() : "";
            var emailValor = email ? email.value.trim() : "";
            var mensagemValor = mensagem ? mensagem.value.trim() : "";

            if (nomeValor.length < 2 || !emailValido(emailValor) || mensagemValor.length < 10) {
                mostrarStatus("Revise os campos: nome, e-mail válido e mensagem com pelo menos 10 caracteres.", "erro");
                return;
            }

            formulario.reset();
            mostrarStatus("Mensagem registrada neste navegador. Este formulário não envia dados para um servidor.", "sucesso");
        });
    };

    iniciarTema();
    iniciarMenu();
    iniciarVoltarAoTopo();
    iniciarGaleria();
    iniciarFiltro();
    iniciarFormulario();
})();
