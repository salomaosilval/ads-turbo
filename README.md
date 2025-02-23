# Ads Turbo - Landing Page VSL

Este é um projeto Next.js que implementa uma Landing Page VSL (Video Sales Letter) com foco em performance e conversão. O projeto foi desenvolvido utilizando as melhores práticas de desenvolvimento web e otimização para dispositivos móveis.

## 🚀 Funcionalidades

### Gerenciamento de UTMs

- Sistema completo de captura e preservação de parâmetros UTM através do contexto React
- Persistência de UTMs entre páginas usando localStorage
- Repasse automático de UTMs entre checkout e página de obrigado

### Player de Vídeo Responsivo

- Integração com YouTube usando react-player
- Controles personalizados para volume e progresso
- Otimização de carregamento com lazy loading

### Seção de Produtos

- Display de produtos com preços e condições
- Sistema de upsell na página de checkout
- Formatação de preços em BRL

### Seção de Testemunhos

- Grid responsivo de depoimentos
- Otimização de imagens com next/image
- Animações suaves com Framer Motion

### Footer Legal

- Links para documentos legais
- Informações de contato
- Grid responsivo com 4 colunas

## 🛠 Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- React Player

## 📦 Como Executar Localmente

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ads-turbo.git
```

2. Instale as dependências

```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:3000`

## 🎯 Otimizações Implementadas

### Performance

- Lazy loading de imagens com next/image
- Componentes client-side com lazy loading
- Fontes otimizadas com next/font
- Minificação de assets

### SEO

- Meta tags otimizadas
- Estrutura semântica HTML
- Open Graph tags para compartilhamento
- Locale configurado para pt-BR

### Acessibilidade

- Labels e ARIA attributes
- Contraste de cores adequado
- Navegação por teclado
- Suporte a screen readers

### Mobile First

- Design responsivo
- Otimização de imagens para mobile
- Touch targets adequados
- Performance otimizada para 3G

## 🌐 Deploy

O projeto está deployado na Vercel e pode ser acessado em: [https://ads-turbo.vercel.app](https://ads-turbo.vercel.app)

## 📊 Métricas Lighthouse

- Performance: 70+
- Acessibilidade: 90+
- Boas Práticas: 70+
- SEO: 100

### Desktop

![Lighthouse Desktop](https://res.cloudinary.com/dv61ldehl/image/upload/v1740342736/Captura_de_Tela_2025-02-23_a%CC%80s_16.31.01_i4pfrm.png)

### Mobile

![Lighthouse Mobile](https://res.cloudinary.com/dv61ldehl/image/upload/v1740342736/Captura_de_Tela_2025-02-23_a%CC%80s_16.31.53_b6smnv.png)

## 📝 Decisões Técnicas

1. **Arquitetura de Componentes**

   - Separação clara entre componentes de UI e lógica de negócio
   - Hooks customizados para gerenciamento de estado
   - Context API para dados globais

2. **Gerenciamento de Estado**

   - Context API para UTMs
   - React Hook Form para formulários
   - Custom hooks para lógica reutilizável
   - LocalStorage para persistência

3. **Otimização de Performance**

   - Componente useIsClient para hidratação controlada
   - Lazy loading estratégico
   - Otimização de assets
   - Caching de dados

4. **Responsividade**
   - Abordagem mobile-first
   - Breakpoints customizados
   - Grid system flexível
   - Imagens otimizadas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
