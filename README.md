# 🚀 Portfolio Interativo | Interactive CV

Um portfólio profissional moderno e interativo construído com Next.js, TypeScript e Tailwind CSS.

A modern, interactive professional portfolio built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Características | Features

- 🌐 **Internacionalização (i18n)** - Suporte a Português (pt-BR) e Inglês (en)
- 🌙 **Tema Dark/Light** - Toggle com persistência em localStorage
- 🎨 **Design Futurista** - Gradientes, glassmorphism, glow effects
- 📱 **Totalmente Responsivo** - Layout adaptável para todos os dispositivos
- 🎭 **Animações Suaves** - Framer Motion para transições elegantes
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica
- ⚡ **Performance** - Otimizado para velocidade e acessibilidade

## 🛠️ Tecnologias | Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Estado:** Zustand
- **Ícones:** Lucide React

## 📦 Instalação | Installation

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm start
```

## 📁 Estrutura do Projeto | Project Structure

```
src/
├── app/                 # App Router (Next.js)
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/          # Componentes reutilizáveis
│   ├── AnimatedBackground.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Providers.tsx
│   └── SectionWrapper.tsx
├── sections/            # Seções da página
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Projects.tsx
│   ├── Languages.tsx
│   └── Contact.tsx
├── hooks/               # Custom hooks
│   ├── useTranslation.ts
│   └── useScrollSpy.ts
├── store/               # Estado global (Zustand)
│   └── useStore.ts
└── i18n/                # Internacionalização
    ├── index.ts
    ├── pt-BR.json
    └── en.json
```

## 🎨 Personalização | Customization

### Conteúdo | Content

Edite os arquivos de tradução em `src/i18n/`:
- `pt-BR.json` - Conteúdo em Português
- `en.json` - Conteúdo em Inglês

Substitua todos os placeholders marcados com `[TEXTO]` pelo seu conteúdo real.

### Cores | Colors

Edite as cores em `tailwind.config.ts` nas propriedades `primary` e `accent`.

### Imagens | Images

Adicione suas imagens na pasta `public/` e atualize as referências nos arquivos de tradução.

## 📝 Placeholders

O projeto vem com placeholders que precisam ser substituídos:

- `[TÍTULO PROFISSIONAL AQUI]` - Seu cargo/título
- `[RESUMO PROFISSIONAL AQUI]` - Sua descrição profissional
- `[CARGO X]` - Cargos nas experiências
- `[EMPRESA X]` - Nomes das empresas
- `[TECNOLOGIA X]` - Suas tecnologias/habilidades
- `[NOME DO PROJETO X]` - Seus projetos
- `[SEU-EMAIL@EXEMPLO.COM]` - Seu email
- `[SEU-USUARIO]` - Seu username do GitHub
- etc.

## 🚀 Deploy

O projeto está pronto para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- Qualquer plataforma que suporte Next.js

## 📄 Licença | License

MIT License - Sinta-se livre para usar e modificar!

---

Feito com ❤️ por João Victor de Souza Brayner
