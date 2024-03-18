# Polygon editor
### Angular app for work with Mapbox SDK maps. Provides a poligon editor.
![изображение](https://github.com/UlianaSavi/poligon-editor/assets/105851981/29032379-c7e6-4638-9430-85110a4a99d1)
![изображение](https://github.com/UlianaSavi/poligon-editor/assets/105851981/24281a69-f172-487a-a491-54fb050ba8c5)



### RU

**Инструкция по запуску и использованию:**

Открыть `https://ulianasavi.github.io/poligon-editor` и перейти к пункту `5` или:
*Локальный запуск:*
1) Склонировать репозиторий - `git clone <repo name>`
2) Выполнить команду в консоли от корня приложения - `npm i`
3) Выполнить команду запуска приложения - `npm run start`
4) Перейти в Chrome на `http://localhost:4200/`
5) Навигация по карте:
  - В левом верхнем углу расположена **панель навигации** по карте
  - Под панелью навигации расположены **инструменты управления полигонами** (создание && удаление).
  - **Редактирование** полигонов происходит по клику по точкам полигона:
    - Зажав клавишу `shift` можно выделить несколько вершин выбранного полигона.
    - Выбранные вершины можно передвигать удерживая левое колесо мыши и двигая его по карте таким образом растягивая полигон.
    - Выбранные вершины можно удалить нажав на клавишу `delete`.
    - Кликая по ребру между двумя вершинами происходит создание дополнительной вершины.
  - **3д полигон**:
      - Выделите те полигоны, которым вы бы хотели задать высоту (или один)
      - Нажмите кнопку 3д куба, расположенную в нижней части панели навигации в левом верхнем углу приложения
      - Полигонам будет задана стандартная высота в 15 метров + появится форма редактрования слоев.
      - Чтобы управлять слоями полигонов выберете в верхнем правом углу один из слоев.
      - **Изменить высоту и/или цвет** кликнув на кнопку "Apply" 
      - **Удалить** полигон можно кликнув на кнопку "Delete"

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
  - **3d polygon**:
    - Select the polygons that you would like to extrude (or one).
          - Click the 3d cube button located at the bottom of the navigation bar in the upper-left corner of the application
           Polygons will be set to a standard height of 15 meters + a layer editing form will appear.
           To manage polygon layers, select one of the layers in the upper-right corner.
          - **Change the height and/or color** by clicking on the "Apply" button 
          - **You can delete a polygon by clicking on the "Delete" button
