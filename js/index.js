let counter = 0;
let wordss = {
    numbers: [],
};

let randomNumber;
const root = document.getElementById("root");
let words = {
    english: ["Hello / Hi", "very good", "What's your name?", "My name is...", "I am...", "Nice to meet you", "Goodbye", "Bye", "See you on Friday", "a house", "a bike", "a tree", "tomorrow", "an instructions", "to read", "to listen", "to say", "to repeat", "to write", "days of the week", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "a country", "Where are you from?", "I am from...", "point to", "nationality", "in", "a city", "I don't know", "I think...", "It's", "fantastic", "to match", "nice", "to ask", "a question", "got it", "Well done!", "then", "hold on", "a chair", "the board", "the door", "a coat", "a laptop", "a window", "a table", "a dictionary", "a piece of paper", "a pen", "how do you spell it?", "Can you repeat please?", "I don't understand", "i don't know", "Sorry, I am late", "late", "to study", "look at...", "too", "at the park", "who?", "good-looking", "married", "single", "an age", "later", "when?", "how?", "what's your address?", "what's your email?", "to hear", "an application form", "a postcode", "a personal information", "divorced / separated", "a street", "at", "dot", "what time...?", "small", "a key", "an umbrella", "a credit card", "a debit card", "a watch", "a glasses", "an ID card", "a passport", "a wallet", "a purse", "a notebook", "a camera", "a brush", "a tablet", "singular", "plural", "a jacket", "a magazine", "a piece", "in my bag", "I have", "a letter", "difference", "between", "what?", "to spell", "How do you spell it?", "the board", "the door", "a chair", "a coat", "a dictionary", "to open", "to close", "stand up", "sit down", "please", "go to page 10", "can", "Excuse me", `What's "телефон" in English?`, "I don't understand", "I don't know", "Sorry, I am late", "an artist", "a journalist", "on holiday", "for work", "have a reservation", "surname", "today", "a restaurant", "How can I help you?", "That's right", "the pair of glasses", "take out", "switch off", "an electronic devices", "I like it very much", "sure", "a souvenir", "a flag", "a hat", "a T-shirt", "a map", "a postcard", "a key ring", "a mug", "How much?", "expensive", "You are welcome!", "this", "that", "these", "those", "a fish", "a market stall", "cheap", "quite", "expensive", "to prefer", "How would you like to pay?", "in cash", "by card", "a tips", "Have a good one", "pounds", "pence(p)", "dollars", "euros", "cents", "a memory card", "a one-way ticket", "sure", "a tourist", "buy lunch", "just", "wait for me", "together", "in the park", "a menu", "a burger", "a chicken", "a sandwich", "a cheese", "a tuna", "an egg", "a salad", "a drink", "a mineral water", "an orange juice", "coke / diet coke", "a beer", "coffee / tea", "order on the menu", "next", "Can I have a sandwich, please?", "Anything else?", "ice and lemon", "There you go", "Here you are", "a change", "a barman", "deli", "a child", "children", "a man", "men", "a woman", "women", "a person", "people", "a husband", "a wife", "a mother", "a father", "a son", "a daughter", "a brother", "a sister", "a boyfriend", "a girlfriend", "a female friend", "a babysitter", "my", "your", "his", "her", "its", "our", "their", "a colour", "black", "blue", "brown", "green", "yellow", "white", "purple", "grey", "orange", "pink", "a salesman", "big", "small", "old", "new", "fast", "slow", "beautiful", "ugly", "cheap", "expensive", "long", "short", "easy", "difficult", "the opposite of", "a food", "to prefer", "I prefer", "bold", "have breakfast", "have lunch", "have dinner", "at home", "at work", "usually", "healthy", "highlighted", "typical", "to eat", "to drink", "during the week", "only", "really", "a lot of", "which?", "what?", "hot", "a favourite meal of the day", "at the weekend", "sometimes", "true", "about", "a fish", "a meat", "a pasta", "a rice", "a yoghurt", "a vegetables", "a potatoes", "a fruit", "a bread", "a butter", "a cheese", "a sugar", "a sandwich", "a cereal", "a chocolate", "a coffee", "a milk", "a tea", "a water", "an orange juice", "a meal", "in the morning", "in the afternoon", "in the evening", "have eat or drink", "What do you have for breakfast?", "I have ... for breakfast", "or", "a jam", "near", "it depends", "be on flight", "a writer", "work for a company", "be at university", "be at school", "some photos", "to want", "be finished", "to need", "I need to go", "to arrive", "in 5 minutes", "common verb phrases", "live in a flat", "watch TV", "listen to the radio", "read the newspaper", "eat fast food", "drink tea", "speak English", "want a coffee", "have a dog", "like cats", "work in a bank", "study Spanish", "go to English classes", "need a new car", "at the end", "What a nice surprise", "get a taxi back to the airport", "a traffic", "a taxi driver", "the gate number", "a witch", "a vase", "a gym", "a cinema", "What time is it?", "What's the time?", "It's 4 o'clock", "tomorrow", "one more", "a train", "to hurry", "really", "a time", "past", "to", "quarter", "half", "to draw", "a minute", "an hour", "silent consonants", "to feel", "I am hot", "I am cold", "I am hungry", "I am thirsty", "I am tired", "time for bed", "It's 5 degrees", "a glass of water", "to end", "Don't worry!", "What a great show!", "Come on", "Let's go", "a fashion magazine", "an assistant", "meet the guests", "a journalist", "a dress", "be divorced", "a teacher", "a doctor", "a nurse", "a waiter", "a waitress", "a shop assistant", "a receptionist", "a policeman / policewoman", "a factory worker", "a taxi driver", "What do you do?", "What's your job?", "I am a manager", "I work as a manager", "I work for a company", "I am unemployed", "at the moment", "I am retired", "in a hospital", "in a shop", "in a restaurant", "in an office", "in a school", "in a factory", "at home", "in the street", "a job", "to work", "have in common", "a banker", "a five-star hotel", "an electronics factory", "help customers with the menu", "a special dish", "a multinational company", "to welcome", "a reason", "to give", "a primary school", "have a shower", "have a bath", "a typical day", "to wake up", "get up", "go to work", "finish work", "have a coffee", "go to shopping", "go to the gym", "make dinner", "do housework", "go to bed", "a yacht", "always", "never", "usually", "sometimes", "seldon", "outside class", "empty", "a ballet dancer", "hard", "to change", "to sleep", "a towel", "a ballet shoes", "a steak", "a clothes", "a principal dancer", "to leave", "without", "more", "spend time", "spend money", "get dressed", "put on make-up", "I forgot", "have pizza as a snack", "otherwise", "to rest", "come back", "to come", "after that", "then", "an archery", "an ice hockey", "a table tennis", "a handball", "a rugby", "only", "probably", "a world", "be very good at...", "population", "a team", "Denmark", "Norway", "Sweden", "Pacific Island", "World cup finals", "a player", "win medals", "national", "a competitions", "during", "a wife", "wives", "sing and dance", "to distract", "to train", "go out(at night)", "play computer games", "do sport", "go to the beach", "go to the cinema", "go to the theatre", "stay at home", "play tennis", "to walk", "play the piano", "to swim", "meet friends", "to relax", "to travel", "a mountains", "on Saturday night", "tiring", "a bit", "wet", "how often?", "Christmas day", "New Year's day", "Halloween", "to begin", "MONTHS", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "to win", "if", "He is famous for...", "the author", "a symphony is called...", "What's the date today?", "definitely", "a special day", "Thanksgiving", "Are you sure?", "a trip", "a film director", "be quiet!", "a lights", "an action", "come in", "to talk", "What about?", "to cry", "a scene", "to cut", "to say", "nothing", "to move", "Don't say anything", "kinds of films", "an action", "a comedy", "a drama", "an animation", "a western", "a horror", "start the car", "a motorway", "a traffic lights", "no parking", "pass the exam", "to swim", "pay by credit card", "pay in cash", "to change money", "camping", "buying clothes", "cooking", "cycling", "flying", "going to the cinema", "reading", "running", "swimming", "painting", "travelling", "What do you like doing if you have two free hours?", "a nails", "to dry", "a bookshop", "go window-shopping", "the feeling of freedom", "leave the house", "carry a suitcase", "get a taxi(a train, a bus)", "wait for a flight", "arrive at a hotel(in a city)", "stay in a hotel", "phone home", "pack a suitcase", "buy presents", "book tickets", "rent a car", "wear a coat", "to put on", "to inspire", "to forget", "to eat out", "something", "a local food", "wonderful", "also", "listen to live music", "situated", "a golf courses", "musicians", "a thing", "a big chain hotel", "wear a suit", "have an important meeting", "in the bedroom", "a kitchen", "to wash the dishes", "one of the ovens", "to get more money", "to repair", "anything", "to serve breakfast", "very hard", "at the end of the week", "be surprised", "to give", "a dress", "a skirt", "a jacket", "a jeans", "a sweater", "a shirt", "a T-shirt", "a shoes", "a trousers", "a subway", "I would like(I'd like)", "I wouldn't like", "against", "the Tube", "play badly", "How about a coffee?", "It's starting to rain", "go to exhibition", "view", "a bed", "a pillow", "a table", "a lamp", "a light", "a remote control", "the floor", "the bathroom", "the bath", "a shower", "a towel", "the cupboard", "the hotel room", "a swimming pool", "a spa", "toilets", "a restaurant", "a bar", "a gym", "a lift", "a gift shop", "a reception", "a garden", "a car park / a parking lot", "a ground floor", "in", "on", "under", "to celebrate", "to take place", "to take part in competition", "to last", "to throw oranges at somebody", "follow a dream", "to decide", "a foreign university", "young people", "comfortable", "to make friends", "a library", "to miss", "a bit lonely", "offer to sponsor", "a great opportunity", "be back", "it's his turn",
        "around the world", "shave for the first time", "thousands of miles from home", "a cycle trip", "exhausted", "turn left", "turn right", "on the left", "on the right", "go straight on", "next to", "on the corner", "opposite", "look out of the window", "tall", "a nice smell", "work in property", "drive somebody home", "a fast driver", "phone is off", "turn on the light", "a definition", "to put", "take out", "the author", "probably", "written", "to contain", "cynical", "a version", "similar to", "like", "for example","cubes","how much","how many","especially","in normal conditions","make dehydrated","myths","enought water","to hit","fall down","a campsite","changing holidays","a couple","the same","see the sights","the Statue of Liberty","disaster","clean the river","plant trees","dirty","come out","go up","incredible","main course","dessert","starter","onion soup","roast chicken","a bottle of mineral water"],
    ukraine: ["Привіт", "дуже добре", "як тебе звати?", "мене звати...", "я...", "радий знайомству", "до побачення", "па", "до зустрічі в п'ятницю", "будинок", "велосипед", "дерево", "завтра", "інструкції", "читати", "слухати", "казати", "повторювати", "писати", "дні тижня", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя", "країна", "Звідки ти?", "Я з...", "показувати", "національність", "в / у", "місто", "Я не знаю", "Я думаю, що...", "Це(є)", "фантастично", "співставляти", "класно", "запитувати", "запитання", "зрозуміло", "Молодець!", "тоді / потім", "зачекай", "крісло / стілець", "дошка", "двері", "пальто", "ноутбук", "вікно", "стіл", "словник", "аркуш паперу", "ручка", "як ви це вимовляєте по літерах?", "Можеш повторити, будь ласка?", "Я не розумію", "Я не знаю", "Вибачте, я запізнився", "пізно", "вчитися", "дивитися / подивитися на...", "також", "в парку", "хто?", "красивий", "одружений / заміжня", "самотній(я)", "вік", "пізніше", "коли?", "як?", "яка твоя адреса?", "яка в тебе електронна пошта?", "чути", "анкета", "поштовий індекс", "особиста інформація", "розлучений(а)", "вулиця", "собака(@)", "крапка", "в котрій годині...?", "маленький", "ключ", "парасоля", "кредитна карта", "дебетова карта", "наручний годинник", "окуляри", "ID карта", "паспорт", "гаманець", "жіночий гаманець / клатч", "блокнот", "фотоапарат", "щітка для волосся", "планшет", "однина", "множина", "куртка / піджак", "журнал", "шматок", "в моїй сумці", "я маю / в мене є", "буква", "різниця / відмінність", "між", "що? / який?", "вимовляти по літерах", "як ви це вимовляєте по літерах?", "дошка", "двері", "крісло", "пальто", "словник", "відкрити", "закрити", "встати", "сісти", "будь ласка", "перейти до сторінки 10", "могти / вміти", "Вибачте", 'Як "телефон" англійською?', "Я не розумію", "Я не знаю", "Вибачте, я запізнився", "художник", "журналіст", "в відпустці", "по роботі", "мати бронь", "прізвище", "сьогодні", "ресторан", "Чим я можу вам допомогти?", "Вірно / Точно", "пара окулярів", "виймати", "виключати", "електронні прилади", "мені це дуже подобається", "звичайно", "сувенір", "прапор", "капелюх / шапка", "футболка", "карта", "листівка", "брилок", "чашка", "Скільки?", "дорогий / дорого", "Будь ласка!", "цей", "той", "ці", "ті", "риба", "прилавок на ринку", "дешевий", "досить", "дорогий / дорого", "надавати перевагу", "як би ви хотіли оплатити?", "готівкою", "картою", "чайові", "гарного дня", "фунти", "пенси", "долари", "євро", "центи", "карта пам'яті", "квиток в одну сторону", "звичайно", "турист", "купляти обід", "просто / лише", "зачекай на мене", "разом", "в парку", "меню", "бургер", "курка", "бутер", "сир", "тунець", "яйце", "салат", "напій", "мінеральна вода", "апельсиновий сік", "кола / дієтична кола", "пиво", "кава / чай", "замовляти в меню", "наступний", "Можна мені бутер, будь ласка?", "Щось ще?", "лід та лимон", "Ось тримайте", "Ось", "здача", "бармен", "гастрономія / делікатеси", "дитина", "діти", "чоловік", "чоловіки", "жінка", "жінки", "людина", "люди", "муж", "дружина", "мама", "тато", "син", "дочка", "брат", "сестра", "хлопець", "дівчина", "подружка", "няня", "мій", "твій / ваш", "його", "її", "цього", "наш", "їхній", "колір", "чорний", "синій", "коричневий", "зелений", "жовтий", "білий", "фіолетовий", "сірий", "оранжевий", "рожевий", "продавець", "великий", "маленький", "старий", "новий", "швидкий", "повільний", "красивий", "потворний", "дешевий", "дорогий / дорого", "довгий", "короткий", "легко", "важкий", "протилежний до", "їжа", "надавати перевагу", "я надаю перевагу", "напівжирний", "снідати", "обідати", "вечеряти", "вдома", "на роботі", "зазвичай", "здоровий", "виділений", "типовий", "їсти", "пити", "впродовж тижня", "лише", "справді", "багато", "Який?", "Що? / Який?", "гарячий", "улюблений прийом їжі дня", "на вихідних", "іноді", "правда", "про", "риба", "м'ясо", "паста", "рис", "йогурт", "овочі", "картопля", "фрукти", "хліб", "масло", "сир", "цукор", "бутер", "пластівці", "шоколад", "кава", "молоко", "чай", "вода", "апельсиновий сік", "прийом їжі", "вранці", "в обід", "ввечері", "їсти або пити", "Чим ти снідаєш?", "Я снідаю...", "або", "повидло", "біля", "по-різному", "летіти", "письменник", "працювати в компанії", "бути в університеті", "бути в школі", "фотки", "хотіти", "завершений", "потребувати", "Мені треба піти", "прибувати", "через 5 хвилин", "поширені дієслівні вирази", "жити в квартирі", "дивитися телевізор", "слухати радіо", "читати газету", "їсти фаст фуд", "пити чай", "розмовляти англійською мовою", "хотіти каву", "мати собаку", "любити котів", "працювати в банку", "вивчати Іспанську", "ходити на уроки англійської", "потребувати нову машину", "в кінці", "який класний сюрприз", "взяти таксі назад до аеропорту", "затори", "водій таксі", "номер воріт(в аеропорту)", "відьма", "ваза", "спортзал", "кінотеатр", "Котра година?", "Котра година?", "4 година", "завтра", "ще один", "потяг", "поспішати", "справді", "час / година", "по", "до", "чверть", "половина", "малювати", "хвилина", "година", "тихі приголосні", "почуватися", "Мені жарко", "Мені холодно", "Я голодний", "Я спраглий", "Я втомлений", "час спати", "5 градусів", "стакан води", "закінчувати", "Не переживай!", "Яке класне шоу!", "Нуж-бо", "Пішли", "журнал моди", "помічник", "зустрічати гостей", "журналіст", "сукня", "бути розлученим", "вчитель", "лікар", "медсестра", "офіціант", "офіціантка", "консультант в магазині", "рецепціоніст", "міліціонер", "працівник заводу", "водій таксі", "Ким ви працюєте?", "Ким ви працюєте?", "Я менеджер", "Я працюю менеджером", "Я працюю в компанії", "я безробітній", "на даний момент", "Я на пенсії", "в лікарні", "в магазині", "в ресторані", "в офісі", "в школі", "на заводі", "вдома", "на вулиці", "робота", "працювати", "мати спільне", "банкір", "п'ятизірковий готель", "завод електроніки", "допомагати клієнтам з меню", "спеціальна страва", "міжнародна компанія", "запрошувати", "причина", "давати", "початкова школа", "приймати душ", "приймати ванну", "звичайний день", "прокидатися", "вставати з ліжка", "йти на роботу", "закінчувати роботу", "пити каву", "йти по магазинах", "йти в спортзал", "готувати вечерю", "робити роботу по дому", "лягати спати", "яхта", "завжди", "ніколи", "зазвичай", "іноді", "рідко", "за межами класу", "пустий", "балерист", "важкий", "міняти", "спати", "рушник", "взуття для балету", "стейк", "одяг", "головний танцівник", "залишати", "без", "більше", "витрачати час", "витрачати гроші", "одягатися", "фарбуватися", "я забув", "перекусити піцою", "інакше", "відпочивати", "повертатися", "приходити", "після цього", "тоді / потім", "стрільба", "хокей", "настільний теніс", "гандбол", "регбі", "єдиний", "напевно", "світ", "бути хорошим в чомусь", "населення", "команда", "Данія", "Норвегія", "Швеція", "Тихоокеанський острів", "фінал кубку світу", "гравець", "виграти медалі", "національний", "змагання", "впродовж", "дружина", "дружини", "співати і танцювати", "відволікати", "тренуватися", "йти гуляти(ввечері)", "грати комп'ютерні ігри", "займатися спортом", "йти на пляж", "йти в кіно", "йти в театр", "залишатися вдома", "грати теніс", "прогулюватися", "грати на піаніно", "плавати", "зустрічатися з друзями", "розслаблятися", "подорожувати", "гори", "в суботу ввечері", "втомлюючий", "трохи", "вологий / дощовий", "як часто?", "Різдво", "Новий рік", "Хеловін", "починати", "місяці", "січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень", "перемагати", "якщо", "він славиться...", "автор", "симфонія називається...", "яка сьогодні дата?", "точно", "особливий день", "День подяки", "Ти впевнений?", "подорож", "режисер", "тишина!", "світло", "дія", "заходити", "розмовляти", "Про що?", "плакати", "сцена", "різати", "казати", "нічого", "рухатися", "Нічого не кажи", "види фільмів", "бойовик", "комедія", "драма", "анімація", "вестерн", "фільм жахів", "завести машину", "дорога", "світлофор", "паркуватися заборонено", "здати екзамен", "плавати", "платити кредитною картою", "платити готівкою", "міняти гроші", "ночівля в палатках", "купівля одягу", "приготування їжі", "їзда на велосипеді", "літання", "ходити в кіно", "читання", "бігання", "плавання", "малювання", "подорожування", "Що ти любиш робити якщо ти маєш дві вільні години?", "нігті", "сушити", "книжковий магазин", "розглядати вітрини магазинів", "відчуття свободи", "виходити з дому", "нести валізу", "взяти таксі(поїзд, автобус)", "чекати на літак", "прибувати в готель(в місто)", "залишитися в готелі", "телефонувати додому", "пакувати валізу", "купувати подарунки", "бронювати квитки", "орендувати машину", "носити пальто", "одягати", "надихати", "забути", "їсти на вулиці", "щось", "місцева їжа", "чудово", "також", "слухати живу музику", "розташований", "поля для гольфу", "музиканти", "річ", "велика мережа готелів", "носити костюм", "мати важливу зустріч", "в спальні", "кухня", "мити посуд", "одна з духовок", "отримати більше грошей", "ремонтувати", "нічого", "сервірувати сніданки", "дуже важко", "в кінці тижня", "бути здивованим", "давати", "сукня", "спідниця", "куртка / піджак", "джинси", "кофта", "сорочка", "футболка", "взуття", "штани", "метро", "Я б хотів", "Я б не хотів", "проти", "метро", "погано грати", "Як щодо кави?", "починається дощ", "йти на виставку", "вигляд", "ліжко", "подушка", "стіл", "лампа", "світло", "пульт", "підлога", "ванна кімната", "ванна", "душ", "рушник", "шкаф", "кімната готелю", "басейн", "спа", "туалети", "ресторан", "бар", "спортзал", "ліфт", "подарунковий магазин", "рецепція", "сад", "парковка", "перший поверх", "в / у", "на", "під", "святкувати", "відбуватися", "брати участь в змаганні", "тривати", "кидати апельсини в когось", "слідувати за мрією", "вирішувати", "іноземний університет", "молоді люди", "зручний", "подружитись", "бібліотека", "скучати", "трішки самотній", "запропонувати спонсорство", "чудова можливість", "повернутись", "його черга", "по всьому світу", "голитись вперше", "тисячі кілометрів від дому", "подорож на велосипеді",
        "виснажений", "повернути ліворуч", "повернути праворуч", "зліва", "праворуч", "йти прямо", "біля", "на куті", "навпроти", "виглянути у вікно", "високий", "гарний запах", "працювати з нерухомістю", "підвезти когось додому", "швидкий водій", "телефон вимкнений", "вмикати світло", "визначення", "ставити / класти", "виймати", "автор", "напевно", "написаний", "містити", "цинічний", "версія", "схожий до", "як", "наприклад","кубики","скільки (незлічувані)","скільки (злічувані)","особливо","в нормальних умовах","зневоднювати","міфи","достатньо води","вдарятися","падати","кемпінг","канікули по обміну","пара","той самий / однаковий","розглядати визначні місця","статуя свободи","провал","чистити річку","садити дерева","брудний","виходити","піднятися","неймовірно","основна страва","десерт","перша страва","цибулевий суп","запечена курка","пляшка мінеральної води"],
    addScore: function() {
        for (let i = 0; i < words.english.length; i++) {
            words.score[i] = words.score[i] === undefined ? 0 : words.score[i]
        }
    },
    score: [10,8,6,5.5,9,9,2,10,8,10,9,9,9,6,8,6.5,8,3.5,10,9,9,10,9,10,10,5,8,9,10,3,9,4.5,10,9,8,3.5,9,9,3.5,6,8,8.5,8,4.5,7,9,3,8,9,9,9,9,9,7.5,8,9,3.5,-2.5,10,9,-3,10,9,3,8,2,9,-8,6.5,9,8,10,9,9,1.5,8.5,7,4.5,7,-1.5,3,9,9,9,0,8,9,6,8.5,8,8,4,9,7,8.5,2,9,9.5,6,8.5,9,10,9,8,5,7,9,7.5,6.5,8,8,7.5,3,7,10,10,9,8,7,9,8,10,10,7.5,8,4,0.5,6.5,10,-13,10,9,3.5,10,8,8,9,9,2,6.5,3,7,8,3,8,8.5,8,10,7.5,8,8.5,7.5,10,3,3,5,3.5,10,7,8,8,10,8,5,9,8.5,9,6,8,10,8,6,6,8,9,10,8,9.5,6.5,7,8,8.5,2,8.5,8,1,9,7,10,9,8.5,7,9,10,9,7,6.5,4.5,10,8,6,8,-7.5,8,5.5,-1,8,8,8,5,9,8,5,8,7.5,-0.5,9,9,5,6.5,8,8.5,9,7,9,10,9,6.5,3,8,10,9,10,10,6,10,9,4.5,9,10,9,10,9,9,8,9,8,9,2.5,10,5,9,9,9,10,2,9,3.5,8,9,9,9,3,3.5,10,10,10,9,4.5,7,9,6.5,6,10,10,9,5,9,10,9,7,7.5,7.5,0.5,8,7,4.5,-7,9,9,9,9,8,9,6.5,10,8,7,8,9,6,9,7,10,9,8,10,8,9,9,8.5,6.5,3.5,5,9,5,9,6.5,10,6,9,3,8,9,5.5,8.5,8,10,8,2.5,7,6,7,10,7,8.5,4,3,3,9,6.5,5,6.5,8,8,2.5,8.5,3.5,7,6,-1,3.5,9.5,8,2.5,7.5,10,10,10,-4.5,-6,8,9,10,5.5,8,4.5,8,9,9.5,8,9,9,9,8.5,6,9,10,10,10,3.5,6,10,6,9,4.5,8,-2.5,2.5,-5.5,5,8,6,9,10,6.5,9.5,8,8,10,10,6.5,9,2.5,4.5,9,6,3,5,-2.5,6,0.5,9,8,8,5,1,10,4,2,8,7.5,7,10,7,9,7,3,1,6,6,9,5,5,8,9,8,3.5,7,10,4,2.5,5,7,9,6,7.5,8,9,8,8,9.5,7,8,9,8,8,1.5,9,2,9,9,10,8,6,6,10,9.5,9,7,5.5,2,7,8,5,7,7.5,2.5,9,10,9,5.5,7,5,9,5.5,1,7,5,7,8.5,8,8,5,4,5.5,9,7,10,0,10,6,3.5,10,4.5,8,4,5,9,6.5,4,3,2.5,6,5,7,8.5,3.5,6,4,9,3,8,6,7,9,7,6.5,5,4.5,4.5,9,8.5,8,10,9,9,9,9,9,8,10,9,-4,10,9,6,3,8,2,9,5.5,9,1,8,0.5,9,6,4,-2,6,9,9,8,10,7,8,8,4,5,8,10,10,9,8,-3.5,8,8,3,6.5,10,5,7,4.5,8,2,3,8,8,-3,8,10,9,7,7,-16.5,8,6,9,-4.5,-1,-3.5,2.5,5,6,-4.5,-3,7,8,6,7,4.5,4.5,1.5,0,-0.5,4.5,6,8,2.5,6,7,9,0,4,5,-6,2.5,2.5,4.5,4,2,-1.5,-1.5,6.5,2,5,6.5,2,5,7,8,2,8,9,7,8.5,9,7,0.5,8,4,5.5,6,2.5,3,-4.5,-2,1,2,4,3,4,6,5,5,2.5,2,2,3,4.5,2,1,0.5,6,6,6,6,6,5,2.5,5,6,-3,4,5,5,6,4,-2,-7,-6,-2,-1.5,0,-3.5,0.5,0.5,-1.5,2.5,2.5,0.5,-0.5,-2,-1,1.5,2.5,-6,-1,0,-4,2,1.5,2,0,2.5,1.5,-1,1,0,2,0.5,2,1,2,1.5,-1.5,0.5,0,0,0.5,1.5,1.5,0.5,1,1,1.5,1.5,1,0.5,0.5,1,-1.5,1.5,-0.5,0.5,0.5,2,2,1,0.5,0.5,0.5,0,1,-0.5,0.5,1,0.5,1,-0.5,-0.5,1,1,1,1,0,1],
    newScore: [],
    lastScore: [10,8,6,5.5,9,9,2,10,8,10,9,9,9,6,8,6.5,8,3.5,10,9,9,10,9,10,10,5,8,9,10,3,9,4.5,10,9,8,3.5,9,9,3.5,6,8,8.5,8,4.5,7,9,3,8,9,9,9,9,9,7.5,8,9,3.5,-2.5,10,9,-3,10,9,3,8,2,9,-8,6.5,9,8,10,9,9,1.5,8.5,7,4.5,7,-1.5,3,9,9,9,0,8,9,6,8.5,8,8,4,9,7,8.5,2,9,9.5,6,8.5,9,10,9,8,5,7,9,7.5,6.5,8,8,7.5,3,7,10,10,9,8,7,9,8,10,10,7.5,8,4,0.5,6.5,10,-13,10,9,3.5,10,8,8,9,9,2,6.5,3,7,8,3,8,8.5,8,10,7.5,8,8.5,7.5,10,3,3,5,3.5,10,7,8,8,10,8,5,9,8.5,9,6,8,10,8,6,6,8,9,10,8,9.5,6.5,7,8,8.5,2,8.5,8,1,9,7,10,9,8.5,7,9,10,9,7,6.5,4.5,10,8,6,8,-7.5,8,5.5,-1,8,8,8,5,9,8,5,8,7.5,-0.5,9,9,5,6.5,8,8.5,9,7,9,10,9,6.5,3,8,10,9,10,10,6,10,9,4.5,9,10,9,10,9,9,8,9,8,9,2.5,10,5,9,9,9,10,2,9,3.5,8,9,9,9,3,3.5,10,10,10,9,4.5,7,9,6.5,6,10,10,9,5,9,10,9,7,7.5,7.5,0.5,8,7,4.5,-7,9,9,9,9,8,9,6.5,10,8,7,8,9,6,9,7,10,9,8,10,8,9,9,8.5,6.5,3.5,5,9,5,9,6.5,10,6,9,3,8,9,5.5,8.5,8,10,8,2.5,7,6,7,10,7,8.5,4,3,3,9,6.5,5,6.5,8,8,2.5,8.5,3.5,7,6,-1,3.5,9.5,8,2.5,7.5,10,10,10,-4.5,-6,8,9,10,5.5,8,4.5,8,9,9.5,8,9,9,9,8.5,6,9,10,10,10,3.5,6,10,6,9,4.5,8,-2.5,2.5,-5.5,5,8,6,9,10,6.5,9.5,8,8,10,10,6.5,9,2.5,4.5,9,6,3,5,-2.5,6,0.5,9,8,8,5,1,10,4,2,8,7.5,7,10,7,9,7,3,1,6,6,9,5,5,8,9,8,3.5,7,10,4,2.5,5,7,9,6,7.5,8,9,8,8,9.5,7,8,9,8,8,1.5,9,2,9,9,10,8,6,6,10,9.5,9,7,5.5,2,7,8,5,7,7.5,2.5,9,10,9,5.5,7,5,9,5.5,1,7,5,7,8.5,8,8,5,4,5.5,9,7,10,0,10,6,3.5,10,4.5,8,4,5,9,6.5,4,3,2.5,6,5,7,8.5,3.5,6,4,9,3,8,6,7,9,7,6.5,5,4.5,4.5,9,8.5,8,10,9,9,9,9,9,8,10,9,-4,10,9,6,3,8,2,9,5.5,9,1,8,0.5,9,6,4,-2,6,9,9,8,10,7,8,8,4,5,8,10,10,9,8,-3.5,8,8,3,6.5,10,5,7,4.5,8,2,3,8,8,-3,8,10,9,7,7,-16.5,8,6,9,-4.5,-1,-3.5,2.5,5,6,-4.5,-3,7,8,6,7,4.5,4.5,1.5,0,-0.5,4.5,6,8,2.5,6,7,9,0,4,5,-6,2.5,2.5,4.5,4,2,-1.5,-1.5,6.5,2,5,6.5,2,5,7,8,2,8,9,7,8.5,9,7,0.5,8,4,5.5,6,2.5,3,-4.5,-2,1,2,4,3,4,6,5,5,2.5,2,2,3,4.5,2,1,0.5,6,6,6,6,6,5,2.5,5,6,-3,4,5,5,6,4,-2,-7,-6,-2,-1.5,0,-3.5,0.5,0.5,-1.5,2.5,2.5,0.5,-0.5,-2,-1,1.5,2.5,-6,-1,0,-4,2,1.5,2,0,2.5,1.5,-1,1,0,2,0.5,2,1,2,1.5,-1.5,0.5,0,0,0.5,1.5,1.5,0.5,1,1,1.5,1.5,1,0.5,0.5,1,-1.5,1.5,-0.5,0.5,0.5,2,2,1,0.5,0.5,0.5,0,1,-0.5,0.5,1,0.5,1,-0.5,-0.5,1,1,1,1,0,1],
    addNewScore: function() {
        for (let i = 0; i < words.score.length; i++) {
            words.score[i] = undefined === words.newScore[i] ? words.score[i] : words.score[i] + (words.newScore[i] - words.lastScore[i]);
        }
    },
    maxlevel: 0,
    minScore: 0,
};

function starter(score) {
    let learnedWordsPercent = 100;
    let i;
    for (i = Math.ceil(Math.min(...score)); learnedWordsPercent >= 80 ; ++i) {
        learnedWordsPercent = ((score.filter(el => el > i).length / score.length)*100).toFixed(2);
    }
    filterLearnedWords(i - 1, learnedWordsPercent);
}

function filterLearnedWords(limitScore, learnedWordsPercent) {
    for (let i = 0; i < words.english.length; i++) {
        if (words.score[i] < limitScore) {
            wordss.numbers.push(i);
        } else {
            counter++;
        }
    }
    limitScore % 2 ? onUkraine(limitScore, learnedWordsPercent) : onEnglish(limitScore, learnedWordsPercent);

}

function f1() {
    if (words.english.length === words.ukraine.length) {
        words.addScore();
        starter(words.score);
    } else {
        root.innerHTML = `<h1 class="bad">Error</h1>`;
    }
}






const f2 = (limitScore) => {
    document.getElementById("root").innerHTML = `
    <button onclick="f1()">Start learned again</button>
    <form action="https://formspree.io/f/xvovyoja" method="POST">
    <input class="results" name="Results" value='[${words.score.toString()}]'>
    <input class="results" name="Max Level" value='[${limitScore}]'>
    <input class="results" name="Min Score" value='[${Math.min(...words.score)}]'>
            <input type="submit">
    </form>
    `
}

function onUkraine(limitScore) {
    let id = setTimeout(() => {
        document.getElementById("root").innerHTML = `
            <form action="https://formspree.io/f/xvovyoja" method="POST">
                <input class="results" name="Results" value='[${words.score.toString()}]'>
                <input class="results" name="Max Level" value='[${limitScore}]'>
                <input class="results" name="Min Score" value='[${Math.min(...words.score)}]'>
                <input id="send" type="submit">
            </form>
        `;
        document.getElementById("send").click();

    }, 1800000);
    root.innerHTML = `<div></div>`;
    randomNumber = Math.floor(Math.random() * wordss.numbers.length);
    root.innerHTML = `
    <h1 class="text">${words.ukraine[wordss.numbers[randomNumber]].toUpperCase()}</h1>
    <div class="pressWord">
        <input id="input" type="text" placeholder="Your word" value="" value="${words.yourTranslate}" autofocus autocomplete="off"/>
        <p>${wordss.numbers.length}</p>
        <p>Level ${limitScore}: <span>${((words.score.filter(el => el > limitScore).length / words.score.length)*100).toFixed(2)}%</span></p>
    </div>
    <div class="image"></div>
    `
    document.getElementById("input").addEventListener('keyup', () => { onKeyUp(document.getElementById("input").value, 'english', onUkraine, limitScore, id) });
};


function onEnglish(limitScore) {
    let id = setTimeout(() => {
        document.getElementById("root").innerHTML = `
            <form action="https://formspree.io/f/xvovyoja" method="POST">
                <input class="results" name="Results" value='[${words.score.toString()}]'>
                <input class="results" name="Max Level" value='[${limitScore}]'>
                <input class="results" name="Min Score" value='[${Math.min(...words.score)}]'>
                <input id="send" type="submit">
            </form>
        `;
        document.getElementById("send").click();

    }, 1800000);
    root.innerHTML = `<div></div>`;
    randomNumber = Math.floor(Math.random() * wordss.numbers.length);
    root.innerHTML = `
    <h1 class="text">${words.english[wordss.numbers[randomNumber]].toUpperCase()}</h1>
    <div class="pressWord">
        <input id="input" type="text" placeholder="Your word" value="" value="${words.yourTranslate}" autofocus autocomplete="off"></input>
        <p>${wordss.numbers.length}</p>
        <p>Level ${limitScore}: <span>${((words.score.filter(el => el > limitScore).length / words.score.length)*100).toFixed(2)}%</span></p>
    </div>
    <div class="image"></div>
    `
    document.getElementById("input").addEventListener('keyup', () => { onKeyUp(document.getElementById("input").value, 'ukraine', onEnglish, limitScore, id) });
}

function onKeyUp(e, translateLanguage, func, limitScore, intervalId) {
    clearInterval(intervalId);
    words.yourTranslate = e;
    if (words.yourTranslate.toUpperCase() == words[translateLanguage][wordss.numbers[randomNumber]].slice(0, e.length).toUpperCase()) {
        if (words.yourTranslate.length !== words[translateLanguage][wordss.numbers[randomNumber]].length) {
            document.querySelector('.image').innerHTML = `
                <div class="good">
                    <i id="good" class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </div>
                <h1>Good!</h1>
                `
                document.getElementById('good').style.fontSize = `${Math.floor(201 * (words.yourTranslate.length / words[translateLanguage][wordss.numbers[randomNumber]].length))}px`;
        } else {
            document.querySelector('.image').innerHTML = `
                <div class="great">
                    <i class="fa fa-smile-o" aria-hidden="true"></i>
                </div>
                <h1>Great!</h1>
            `
            document.getElementById('input').classList.add('great');
            document.querySelector(".pressWord").innerHTML += `<p>${words[translateLanguage][wordss.numbers[randomNumber]]}</p>`
            words.score[wordss.numbers[randomNumber]] += 1;
            wordss.numbers.splice(randomNumber, 1);
            counter = 0;
            for (let i = 0; i < words.score.length; i++) {
                if (words.score[i] >= limitScore) {
                    counter++;
                }
            }
            if (wordss.numbers.length === 0) {
                root.innerHTML = `
                    <button onclick="f1()">Start learned again</button>
                    <button onclick="f2(${limitScore})">Let results</button>
                `
            } else {
                setTimeout(() => {func(limitScore)}, 1000);
            }
        }
    } else {
        document.querySelector('.image').innerHTML = `
            <div class="bad">
                <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
            </div>
            <h1>Bad!</h1>
        `
        document.getElementById('input').classList.add('bad');
        document.querySelector(".pressWord").innerHTML += `<p>${words[translateLanguage][wordss.numbers[randomNumber]]}</p>`
        words.score[wordss.numbers[randomNumber]] -= 0.5;
        setTimeout(() => {func(limitScore)}, 2000)
    }
}

// for (let i = words.english.length - 1; i >= 0; i--) {
//     alert(`${words.english[i]}\n${words.ukraine[i]}`);
// }