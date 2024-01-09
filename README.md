# Fanthon Card.js

### Instalação
```sh
npm install fanthon-card
```

### Import a lib
```js
import FanthonReact from 'fanthon-card/dist';
```

### Coloque o compoe
```js
<FanthonReact 
  token={process.env.FANTHON_PUBLISHABLE_KEY}
  options={{
    base: {
      primary_color: '#c2f',
    },
    number: {
      showIcon: true
    }
  }}
  onSubmit={onSubmit}
/>   
```

### Crie uma variavel de ambiente
```sh
FANTHON_PUBLISHABLE_KEY=[SEU_TOKEN]
```