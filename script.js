let i = 0,
  acertos = 0,
  erros = 0,
  respostas = [];

const card = document.getElementById('card');
const contador = document.getElementById('contador');
const placar = document.getElementById('placar');
const resultado = document.getElementById('resultado');

function render() {
  const q = QUESTOES[i];

  contador.textContent = `Questão ${i + 1} de ${QUESTOES.length}`;
  placar.textContent = `Acertos: ${acertos} | Erros: ${erros}`;

  card.innerHTML = `
    <div class="card">
      <div class="numero">Questão ${q.id}</div>

      <div class="questao">
        ${escapeHtml(q.texto)}
      </div>

      <div class="botoes">
        <button class="btn v" onclick="responder('V')">
          Verdadeiro
        </button>

        <button class="btn f" onclick="responder('F')">
          Falso
        </button>
      </div>

      <div id="feedback"></div>
    </div>
  `;
}

function responder(r) {
  const q = QUESTOES[i];

  // Impede responder a mesma questão mais de uma vez
  if (respostas[i]) return;

  const ok = r === q.resposta;

  // Salva a resposta do usuário
  respostas[i] = r;

  // Conta acertos e erros
  if (ok) {
    acertos++;
  } else {
    erros++;
  }

  const fb = document.getElementById('feedback');

  fb.innerHTML = `
    <div class="feedback ${ok ? 'ok' : 'erro'}">
      ${ok ? '✓ Você acertou!' : '✗ Você errou.'}
      <br>
      Gabarito:
      <b>
        ${q.resposta === 'V' ? 'Verdadeiro' : 'Falso'}
      </b>
    </div>

    <button class="next" onclick="proxima()">
      ${i === QUESTOES.length - 1
        ? 'Ver resultado'
        : 'Próxima questão'}
    </button>
  `;

  // Desabilita os botões depois de responder
  document
    .querySelectorAll('.btn')
    .forEach(b => b.disabled = true);

  // Atualiza o placar
  placar.textContent =
    `Acertos: ${acertos} | Erros: ${erros}`;
}

function proxima() {
  if (i < QUESTOES.length - 1) {
    i++;
    render();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  card.classList.add('hidden');
  resultado.classList.remove('hidden');

  const pct = Math.round(
    (acertos / QUESTOES.length) * 100
  );

  resultado.innerHTML = `
    <div class="resultado">

      <h2>Resultado final</h2>

      <div class="stats">

        <div class="stat">
          <b>${acertos}</b>
          <br>
          Acertos
        </div>

        <div class="stat">
          <b>${erros}</b>
          <br>
          Erros
        </div>

        <div class="stat">
          <b>${pct}%</b>
          <br>
          Aproveitamento
        </div>

      </div>

      <div class="review">

        <h3>Gabarito</h3>

        ${QUESTOES.map((q, k) => `
          <div class="review-item">
            <strong>
              ${q.id}.
              ${q.resposta === 'V'
                ? 'Verdadeiro'
                : 'Falso'}
            </strong>

            ${q.texto}
          </div>
        `).join('')}

      </div>

    </div>
  `;
}

function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[c])
  );
}

document
  .getElementById('reiniciar')
  .onclick = () => {
    i = 0;
    acertos = 0;
    erros = 0;
    respostas = [];

    card.classList.remove('hidden');
    resultado.classList.add('hidden');

    render();
  };

render();
