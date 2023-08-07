# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Informacion a destacar y cosas pendientes

- Por temas de tiempo y motivos personales no se alcanzo a realizar todos los puntos funcionales
- Puntos faltantes:
  - la vista de detalles completa, se creo el componente pero no esta maquetada ni nada.
  - utilizacion de estados: se iba a utiliar useContext ya que era un ejemplo por asi decirlo pequeño.
  - filtrado correcto de autores: Nunca habia usado reac-table, por lo que me llevo bastante tiempo,
    encontrar la version correcta de la libreria compatible con mi version de react(18)
    y aprender a usarlo mas o menos, esto tambie perdjudico bastante la entrega final por
    que sin querer le dedique mas del tiempo debido.
  - vista de favoritos: se maqueto pero falto la utilización de los estado para rellenar con info real.
  - validacion de formulario: se utilizo formkit en el formulario pero falto realizar validacion por tiempo.
- Se ha tenido que desactivar la opcion typo any del eslint por tiempo(falta de dominio de las propiedades react-table)
- Pruebas unitarias y StoryBook : Por falta de tiempo no alcance a hacer las pruebas unitarias y StoryBook, normalmente
  antes de enviar cambios hago las pruebas unitarias y demas, asi me aseguro de que todo funcione(ademas de las pruebas en mi entorno);

## Opciones Tecnicas y arquitectonicas

Cómo decidiste las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Para no hacer un texto muy denso dejo una lista del por que de cada cosa que use, que recuerde al menos...
- React 18 => Asi se utilizaria librerias mas actuales para hacer este mini proyecto mas duradero.
- Vite => Se utilizo vite para poder trabajar bien con la ultima version de react-router-dom que es lo que se recomendaba
- Typescript => Se utilizo ts en ves de js(podria hacerlo con js de igualforma, tengo bastante buen dominio de este de igual forma),
  ya que al utilizar angular la mayor parte del tiempo me acostumbre muchisimo a utilizar typescript y al tener la opcion de
  utilizarlo era mas comodo para mi, permitiendo definir interfaces y demas para especificar que requeria.
- Headlessui => No se alacanzo a materializar su uso por tiempo, pero se esperaba utilizar efectos, autocompletador
  del combobox.
- Heroicons => Instalado para usarlo mas adelante junto a tailwind queda bastante bonito.
- @tanstack/match-sorter-utils y @tanstack/react-table => Instalados para poder trabajar con react-table y sus filtros,
  se utilizo la version 8 de estas porque era la compatible con la version de React 18, probe con versiones anterioes y
  tenian bastantes conflictos con el entorno que iba creando.
- Axios en vez de fetch por que le llevo mas costumbre, con vue y otras versiones de react.
- Formkit para crear formulario, validarlos justo a tailwind para unificar estilo.
- Eslint => estoy bastante adecuado a usarlo asi que no hubo mucho problema(aun que aveces se siente algo pesado usarlo
es mucho mejor para tener un codigo mas ordenado y correcto.)

Hay alguna mejora que dejaste pendiente de hacer en su envío?

Obviamente, puse un punto destacando lo faltante que fue por temas de tiempo,
para mi caso puntual no pude usar mas alla de 3 dias, estos los use en invesitagacion y correccion de librerias
basicamente y por esto no pude comletar todo lo solicitado, pero continuare haciendola durante la proxima semana, 
por si les interesa ver un antes y despues.

¿Qué harías de manera diferente si se le asignara más tiempo?
creo que haria lo mismo a excepcion de darle tanta enfasis a la configuracion de react-table ya que podria haber tenido 
mas puntos completados y asi tener mas posibilidades. Lo mas dificil de la tabla fue los filtros y controlar los errores
que iba arrojando eslint por cada cambio. 
PS: Auque no tenia en mente realizar una prueba tecnia de un momento a otro, siempre me gusta enfrentarme a nuevos
desafios, por lo que fue basatante entretenido, me gustaria recibir algun feedback de igual forma si fuera posible ya que
como comente con anterioridad seguire subiendo contenido a esta rama con las actualizaciones pendientes.

## storybook

Sin storybook por el momento

## Mejoras después de la primera entrega
- Centrado/responsive card formulario agreagar libros
- Validacion formulario agreagar libros(obligatorios: titulo y autor)
