# poligon-editor
Angular app for work with Mapbox SDK maps. Provides a poligon editor.

### RU

**Инструкция по запуску и использованию:**

1) Склонировать репозиторий - `git clone <repo name>`
2) Выполнить команду в консоли от корня приложения - `npm i`
3) Выполнить команду запуска приложения - `npm run start`
4) Перейти в Chrome на `http://localhost:4200/`
5) Навигация по карте:
  - В левом верхнем углу расположена **панель навигации** по карте
  - Под панелью навигации расположены **инструменты управления полигонами** (создание && удаление).
  - **Редактирование** полигонов происходит по клику по точкам полигона:
    - Зажав клавишу `shift` можно выделить несколько верщин выбранного полигона.
    - Выбранные вершины можно передвигать удерживая левое колесо мыши и двигая его по карте таким образом растягивая полигон.
    - Выбранные вершины можно удалить нажав на клавишу `delete`.
    - Кликая по ребру между двумя вершинами происходит создание дополнительной вершины.

### EN

**Instructions for starting and using:**

1) Clone the repository - `git clone <repo name>`
2) Run the command in the console from the root of the app - `npm i`
3) Run the app start command - `npm run start`
4) Go to Chrome to `http://localhost:4200/`
5) Map's navigation:
  - There is **navigation panel** in the top-left of the map:
  - Under navigation panel we have **polygon management tools** (create && delete).
  - **Editing** polygons occurs by clicking on the points of the polygon:
    - By holding down the `shift` key, you can select several vertices of the selected polygon.
    - Selected vertices can be moved by holding down the left mouse wheel and moving it around the map thus stretching the polygon.
    - Selected vertices can be deleted by pressing the `delete` key.
    - By clicking on the edge between two vertices, an additional vertex is created.
