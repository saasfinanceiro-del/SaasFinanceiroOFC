# UGRUP — Sistema de Finanças

Sistema web de gestão financeira empresarial com suporte a múltiplas entidades, recorrências, previsão de caixa e sincronização em nuvem via Firebase.

---

## Funcionalidades

- **Dashboard** — visão mensal com receitas, despesas, saldo e gráfico de categorias (donut chart)
- **Lançamentos** — criação, edição e exclusão de receitas e despesas
- **Recorrências** — suporte a parcelas e lançamentos contínuos (semanal, quinzenal, mensal, trimestral, semestral, anual)
- **Previsão de Caixa** — painel de pendentes com alertas de vencimento e projeção de saldo
- **Entidades** — separação de finanças por empresa, cartão ou unidade
- **Categorias** — categorias customizáveis com cores e migração ao excluir
- **Contatos** — cadastro de clientes/fornecedores (PF e PJ)
- **Conta Pessoal** — perfil de conta bancária pessoal
- **Modo Escuro** — alternância de tema claro/escuro
- **Sincronização** — dados salvos em tempo real via Firestore

---

## Estrutura de Pastas

```
ugrup/
├── public/
│   └── index.html          # Aplicação principal (standalone, sem build)
├── src/
│   ├── firebase.js         # Configuração e inicialização do Firebase
│   ├── constants/
│   │   └── index.js        # Categorias padrão, paleta de cores, nomes de meses
│   ├── utils/
│   │   └── dateUtils.js    # Helpers de data, formatação de moeda
│   └── components/
│       ├── Ic.jsx          # Componente de ícones SVG
│       └── DonutChart.jsx  # Gráfico donut de despesas por categoria
└── README.md
```

> **Nota:** O arquivo `public/index.html` é a aplicação completa e funcional. Os arquivos em `src/` são a versão modularizada para evolução futura do projeto.

---

## Como Rodar

O projeto não requer nenhum processo de build. Basta abrir o arquivo `public/index.html` em qualquer servidor HTTP estático.

### Opção 1 — VS Code Live Server
1. Instale a extensão **Live Server**
2. Clique com o botão direito em `public/index.html` → **Open with Live Server**

### Opção 2 — Python (qualquer sistema)
```bash
cd public
python3 -m http.server 8080
# Acesse: http://localhost:8080
```

### Opção 3 — Node.js
```bash
npx serve public
```

---

## Firebase

O projeto usa o Firebase (Firestore + Authentication). As credenciais estão em `src/firebase.js`.

Para usar com seu próprio projeto Firebase:
1. Crie um projeto em [console.firebase.google.com](https://console.firebase.google.com)
2. Ative **Authentication** (método: e-mail/senha)
3. Ative **Firestore Database**
4. Substitua o objeto `firebaseConfig` em `src/firebase.js` pelas suas credenciais

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 18 (UMD) | Interface |
| Tailwind CSS (CDN) | Estilização |
| Firebase 10 | Auth + Banco de dados |
| Babel Standalone | Transpilação JSX no browser |
| Google Fonts | Plus Jakarta Sans + Inter |

---

## Deploy

O projeto pode ser hospedado gratuitamente no **Firebase Hosting**, **GitHub Pages**, **Vercel** ou qualquer CDN estático — basta apontar para a pasta `public/`.

### Firebase Hosting (recomendado)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # selecione a pasta "public"
firebase deploy
```
