# `Hello! :)`

## Развернутый проект на [Heroku](https://newsappreact.herokuapp.com/)

## Развернутый проект на [Github](https://Hojlb.github.io/News_App_React)

**News App React** – как Вы могли догадаться, это приложение для просмотра новостей, выполненное на React - Redux.

На написание кода ушло около 56 часов (полноценно начал писать с 20 октября). В принципе, планировал, что потрачу на всё не более 7 дней, т.к. задача не показалась сложной. В среднем уделял от 40 минут до 4 часов в день (время работы видно в принципе по коммитам на github).

## `По ТЗ  `

* Немного отступил от ТЗ, в плане порядка расположения title, headline, body, picture… каждой новости, т.к. проанализировав существующие проекты (BBC.com, onliner.by … ) пришел к выводу, что в новости главное картинка, и она должна быть в самом верху.
Но, тут же столкнулся с тем, что не все новости имеют ту самую заглавныю картинку (urlToImage). Сначала даже поставил фильтр на те новости в которых данного свойства нет, но потом от него отказался.

* Много времени тратил только на правильное название переменных и функций, на определение места того или иного файла в файловой системе (в конце уже было проще).

* На добавление решения счетчиков лайков и просмотров потрачено примерно 3 часа (планировалось в раза 2 меньше). Счетчик не сразу корректно работал при сохранении в localeStore – исправил быстро, после добавления componentDidUpdate(). На рефакторинг потрачено минут 20.

* Добавление поисковой строки отняло минут 40 (не больше).
localeStorage – используется вместо сервера для сохранения данных о количестве лайков и просмотров новости.

* Для подсчета посетителей в день использовал Яндекс Метрику. Решил, что незачем придумывать велосипед, да и другого быстрого решения я не знал, а времени ушло много с даты выдачи задания…

## `В процессе написания кода столкнулся со следующими сложностями`:

1. не сразу разобрался как правильно работает applyMiddleware, в принципе из-за него вся и запинка, в общей сумме потрачено около  ~12 часов на изучение/написание и рефакторинг;

2. изначально занимался русскоязычными новостями. Тут возникло несколько трудностей: description не читается из response, и второе сильно отвлекают (часто подвисал на чтение новостей). В конце изменил источник новостей и добавил description;

3. createStore – пришлось потратить время на наладку асинхронной работы, если мое решение нельзя назвать «костылем»…

4. поначалу, не мог определиться, что взять за ID каждой новости: установил библиотеку для генерации уникального ID (пришлось отказаться от этой идеи из-за невозможности сравнивать новые со старыми новостями из localeStorage), потом перешел на дату публикации новости (но оказалось, что новости могут публиковаться асинхронно с разницей в 0 секунд), после этого было принято решение принять в качестве ID – title новости;

5. с тестированием на C#, я был немного знаком еще с университета, но здесь пришлось поразбираться с тестированием redux компонентов (уделено 1 час на изучение и 1 час на написание тестов). Не стал покрывать тестами все компоненты и другие функции...;

6. для большего интереса, чтобы количество лайков и просмотров не начиналось с 0, создал функцию генерации случайного числа, но потом тоже от нее отказался в пользу 0.

**Что я еще понял при выполнении данного задания: что то, над чем ты думаешь 2-4 часа ночью можно за 40 мин. решить днем…**

**Не совсем понимал, что я здесь должен был написать, так что не судите строго… ;)**


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# `Max Polonsky` #
Contacts: mchp010nsky@gmail.com
