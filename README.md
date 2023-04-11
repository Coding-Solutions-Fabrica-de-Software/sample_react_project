# [Projeto exemplo](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Coding-Solutions-Fabrica-de-Software/sample_react_project/develop/LICENSE)

Este é um projeto de exemplo / estudos destinados á desenvolvedores que queiram aprimorar seus conhecimentos em React, Redux, Typescript, estruturação de pastas entre outras soluções apresentadas.

# Padrão de Code Style

Iremos instalar as seguintes extensões no VS Code:
 ## [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
 ## [dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

 Então confiraremos os seguintes arquivos para manter o padrão de toda a equipe

```json
 // .vscode/settings.json
 // OBS: Não incluir no .gitignore
 {
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode" 
}
```

```js
// .prettierrc
{
  "bracketSpacing": true,
  "parser": "typescript",
  "printWidth": 90,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "arrowParens": "always",
  "bracketSameLine": true
}
 ```

## License

[MIT](https://choosealicense.com/licenses/mit/)
