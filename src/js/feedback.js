//данный код работает при поддержке следующего ролика https://www.youtube.com/watch?v=PqTrhfjLQBI
export function feedback() {
  let forms = document.querySelectorAll('.form')

  if (forms) {
    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];
      form.addEventListener('submit', formSend); //при отправке формы запускается ф-я formSend
      //функция отправки
      async function formSend(e) {
        e.preventDefault(); //запрет стандартной отправки форм
        form.closest('div').classList.add('.js_wait') //родитель получает класс ожидания
        let error = formValidate(form); //присваивается результат работы функции
        let locker = form.querySelector('.js_locker')
        const formPreview = form.querySelector('.file-stiller__picture-wrapper')
        setUTM();
        let formData = new FormData(form); //новый массив с данными всех полей
        if (error === 0 && locker.value === '') {
          //дальнейший блок кода отправляет сообщение в содружестве с файлом php
          if (form.classList.contains('js_form-to-email')) {
            let response = await fetch('sendmail.php', {
              method: 'POST',
              body: formData
            });
            if (response.ok) {
              let result = await response.json();
              console.log(result.message);
              form.reset();
              formPreview.innerHTML = '';
            } else {
              alert('Ошибка');
            }
          } else if (form.classList.contains('js_form-to-file')) {
            let response = await fetch('saver.php', {
              method: 'POST',
              body: formData
            });
            if (response.ok) {
              form.reset();
            } else {
              alert('Ошибка');
            }
          } else {
            console.log('Скрипт не находит JS-якорь формы')
          }
          form.closest('div').classList.remove('.js_wait')
        } else {
          form.closest('div').classList.remove('.js_wait')
          alert('Заполните обязательные поля!')
        }
      }

      function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('.js_req') //require - обязательное поле //создаёт объект со всеми элементами с классом обязательности
        //присвоение каждому обязательному объекту определённого результата
        for (let i = 0; i < formReq.length; i++) {
          const input = formReq[i];
          formRemoveError(input); //в начале проверки объектов убрать у всех объектов класс '__error'
          //проверка на присутствие класса '__email' у объекта
          if (input.classList.contains('js_email')) {
            //если объект имеет ошибку в тексте email, то ему добавляется класс '__error'
            if (emailTest(input)) {
              formAddError(input);
              error++;
            }
          } else if (input.getAttribute('type') === 'checkbox' && !input.checked) {
            //проверка заполненности чекбоксов
            formAddError(input);
            error++;
          } else {
            //проверка заполненности оставшихся полей
            if (input.value === '') {
              formAddError(input);
              error++;
            }
          }
        }
        return error;
      }

      //функции добавляют/убирают класс '__error' себе и родительскому объету
      function formAddError(input) {
        input.parentElement.classList.add('js_error');
        input.classList.add('js_error');
      }
      function formRemoveError(input) {
        input.parentElement.classList.remove('js_error');
        input.classList.remove('js_error');
      }
      //Regexp функция теста email
      function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      }

      //UTM-метки
      function setUTM() {
        const query = window.location.href

        const js_source = form.querySelector('.js_source')
        const js_medium = form.querySelector('.js_medium')
        const js_campaign = form.querySelector('.js_campaign')

        const source_regexp = /(?!&)utm_source=[^&]*/
        const medium_regexp = /(?!&)utm_medium=[^&]*/
        const campaing_regexp = /(?!&)utm_campaign=[^&]*/

        js_source.value = query.match(source_regexp)
        js_medium.value = query.match(medium_regexp)
        js_campaign.value = query.match(campaing_regexp)
      }

      //обработка файла
      if (form.querySelector('.file-stiller__input')) {
        const formImage = form.querySelector('.file-stiller__input')
        const formPreview = form.querySelector('.file-stiller__picture-wrapper')

        formImage.addEventListener('change', () => {
          uploadFile(formImage.files[0])
        })

        function uploadFile(file) {
          if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения.')
            formImage.value = ''
            return
          }
          if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть менее 2мб')
            return
          }

          var reader = new FileReader();
          reader.onload = function (e) {
            formPreview.innerHTML = `<img class="file-stiller__picture" src="${e.target.result}" alt="picture">`
          }
          reader.onerror = function (e) {
            alert('Ошибка загрузки изображения')
          }
          reader.readAsDataURL(file)
        }
      }
    }
  }
}
