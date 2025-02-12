const cards = [
  {
    title: "Статьи-списки",
    description:
      "Статьи-списки, как любая форма контент-маркетинга, обладают своими плюсами и минусами: люди любят их читать, но многие ресурсы штампуют однообразные, повторяющиеся рейтинги.",
  },
  {
    title: "Тенденции в вашей нише",
    description:
      "Анализ текущих трендов в вашей сфере позволит вашей аудитории быть в курсе новых направлений. Это может быть как обзор последних новинок, так и прогнозы на будущее.",
  },
  {
    title: "Кейсы успешных проектов",
    description:
      "Расскажите о конкретных примерах успешных проектов. Проанализируйте, что сработало, а что нет. Такой подход не только демонстрирует вашу экспертизу, но и помогает читателям понять, как применить ваш опыт на практике.",
  },
  {
    title: "Пошаговые инструкции",
    description:
      "Создание детальных руководств по выполнению определённых задач в вашей области привлечёт пользователей, желающих научиться чему-то новому.",
  },
  {
    title: "Интервью с экспертами",
    description:
      "Интервью с профессионалами вашей сферы может добавить глубины вашему блогу. Это позволит читателям получить информацию из первых уст и продемонстрирует вашу активность в сообществе.",
  },
  {
    title: "Обзоры продуктов и услуг",
    description:
      "Предоставьте читателям качественные обзоры на продукты или услуги, которые имеют отношение к вашей теме. Убедитесь, что ваши оценки объективны и основаны на реальном опыте.",
  },
  {
    title: "Часто задаваемые вопросы (FAQ)",
    description:
      "Соберите наиболее распространённые вопросы, которые задают ваши клиенты или читатели, и дайте на них исчерпывающие ответы.",
  },
  {
    title: "Разбор ошибок",
    description:
      "Анализ часто встречающихся ошибок в вашей области может быть полезным для ваших читателей. Обсудите, как избежать этих ошибок, и предложите альтернативные подходы.",
  },
  {
    title: "Личный опыт",
    description:
      "Поделитесь своим личным опытом в своей сфере. Расскажите о трудностях, с которыми столкнулись, и о том, как их преодолели. ",
  },
  {
    title: "Инфографика",
    description:
      "Создание инфографики может помочь визуализировать сложные данные или процессы. Это может быть как самостоятельный пост, так и дополнение к тексту.",
  },
];

const page = document.querySelector("body");
const cardExample = page.querySelector("#card_example").content;
const cardList = page.querySelector(".main__ul");

function createCard(card) {
  const newCard = cardExample.cloneNode(true);
  const title = newCard.querySelector(".ul__title");
  const text = newCard.querySelector(".ul__text");
  title.textContent = card.title;
  text.textContent = card.description;
  cardList.appendChild(newCard);
}
cards.forEach(createCard);

function likeOnButton() {
  const likeButton = page.querySelectorAll(".like");
  const cardItems = page.querySelectorAll(".main__li");

  likeButton.forEach((likeButton, everyCard) => {
    const cardItem = cardItems[everyCard];
    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("like_active");
      cardItem.classList.toggle("main__li_active");
    });
  });
}

likeOnButton();

function deleteButton() {
  const deleteButtons = page.querySelectorAll(".delete_card_button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.closest(".main__li").remove();
    });
  });
}

deleteButton();

function addInputButton() {
  page.querySelector(".input_button").addEventListener("click", function () {
    const title = page.querySelector(".input_add_card_title").value;
    const description = page.querySelector(".input_add_card_description").value;

    if (title === "" || description === "") {
      alert("Заполни поля!");
      return;
    }

    if (title.length > 100 || description.length > 100) {
      alert("Длина не должна превышать 100 символов!");
      return;
    }

    const template = page.querySelector("#card_example");
    const cardClone = template.content.cloneNode(true);
    cardClone.querySelector(".ul__title").textContent = title;
    cardClone.querySelector(".ul__text").textContent = description;

    const likeButton = cardClone.querySelector(".like");
    const deleteButton = cardClone.querySelector(".delete_card_button");
    const card = cardClone.querySelector(".main__li");

    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("like_active");
      card.classList.toggle("main__li_active");
    });

    deleteButton.addEventListener("click", function () {
      deleteButton.closest(".main__li").remove();
    });

    page.querySelector(".main__ul").appendChild(cardClone);
    page.querySelector(".input_add_card_title").value = "";
    page.querySelector(".input_add_card_description").value = "";
  });
}

addInputButton();

function deleteCards() {
  const ClearButton = page.querySelector(".input__clear_button");
  ClearButton.addEventListener("click", function () {
    page.querySelectorAll(".main__li").forEach((card) => card.remove());
  });
}

deleteCards();
