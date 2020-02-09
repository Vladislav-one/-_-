describe("Functions", function() {

  describe("sumAll", function() {

    function makeTest(arr) {
      it("Возвращает сумму этих двух чисел " + arr[0] + " и " + arr[1] + " плюс сумму всех чисел между ними, резульатат: " + sumAll(arr), function() {
        assert.equal(sumAll(arr), sumAll(arr));
      });
    }

    makeTest([5, 1]);
  });

  describe("findNewItem", function() {

    function makeTest(arr1, arr2) {
      it("На вход принимает два массива " + arr1 + " и " + arr2 + ". Возвращает новый массив с элементами найденными только в одном массиве, результат: " + findNewItem(arr1, arr2), function() {
        assert.equal(findNewItem(arr1, arr2), findNewItem(arr1, arr2));
      });
    }

    makeTest([], ["яблоко", "липисин"]);
  });

  describe("deleteItemArr", function() {

    function makeTest(arr, ...rest) {
      it("Удаляет из массива " + arr + " все элементы " + rest + ", которые имеют то же значение, что и эти аргументы, результат: " + deleteItemArr(arr, ...rest), function() {
        assert.equal(deleteItemArr(arr, ...rest), deleteItemArr(arr, ...rest));
      });
    }

    makeTest(["яблоко", "мандарин", "апельсин", "банан"], "яблоко", "банан", "мандарин");
  });

  describe("whatIsInAName", function() {

    function makeTest(mass_obj, obj) {
      it("Возвращает массив всех объектов " + mass_obj + " и " + obj + ", имеющих совпадающие пары имя и значение, резульатат: " + whatIsInAName(mass_obj, obj), function() {
        assert.equal(whatIsInAName(mass_obj, obj), whatIsInAName(mass_obj, obj));
      });
    }

    makeTest([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
  });

  describe("spinalCase", function() {

    function makeTest(str) {
      it("Функция, которая конвертирует строку " + str + " в spinal-case регистр, результат: " + spinalCase(str), function() {
        assert.equal(spinalCase(str), spinalCase(str));
      });
    }

    makeTest("43535This String OurRep1223%^*()");
  });

  describe("findStrReplace", function() {

    function makeTest(str, word, word_rep) {
      it("Функция, которая  которая осуществляет поиск в строке " + str + " и замену в предложении, результат: " + findStrReplace(str, word, word_rep), function() {
        assert.equal(findStrReplace(str, word, word_rep), findStrReplace(str, word, word_rep));
      });
    }

    makeTest("Моя Строка", "строка", "str");
  });

  describe("findMissing", function() {

    function makeTest(str) {
      it("Функция, которая ищет пропущенные буквы в стоке " + str + ", результат: " + findMissing(str), function() {
        assert.equal(findMissing(str), findMissing(str));
      });
    }

    makeTest("acde");
  });

  describe("createNewMass", function() {

    function makeTest() {
      it("Функция, которая объединяет два или более массивов в один, который состоит из уникальных значений, результат: " + createNewMass(), function() {
        assert.equal(createNewMass(), createNewMass());
      });
    }

    makeTest(["абра", "кадабра", "абра", "абра"], ["абра"], ["бритва", "кряква"]);
  });

  describe("spinalCase", function() {

    function makeTest(str) {
      it("Функция, которая заменяет символы &, <, >, (двойные кавычки), и ‘(апостроф) в строке " + str + " их соответствующим HTML - кодом, результат: " + characterReplacement(str), function() {
        assert.equal(characterReplacement(str), characterReplacement(str));
      });
    }

    makeTest("&фл&о‘мастер\"\"<");
  });

  describe("characterReplacement", function() {

    function makeTest(n) {
      it("Функция, которая суммирует все простые числа до " + n + ", результат: " + sumPrimeNumbers(n), function() {
        assert.equal(sumPrimeNumbers(n), sumPrimeNumbers(n));
      });
    }

    makeTest(15);
  });

  describe("dropElements", function() {

    function makeTest(arr, func) {
      it("Функция,  которая принимает массив " + arr + " и функцию " + func + " и удаляет каждый элемент массива начиная с первого, пока функция не вернет true, а затем возвращает оставшуюся часть массива, результат: " + dropElements(arr, func), function() {
        assert.equal(dropElements(arr, func), dropElements(arr, func));
      });
    }

    makeTest([1, 2, 3, 4], function(n) {return n >= 3;});
  });

  describe("steamrollArray", function() {

    function makeTest(arr) {
      it("Функция, которая принимает массив различной вложенности " + arr + " и возвращает одномерный массив, результат: " + steamrollArray(arr), function() {
        assert.equal(steamrollArray(arr), steamrollArray(arr));
      });
    }

    makeTest([1, 2, 3, [4, [[[5, [6, 7]]]], 8, 16, 4, 6,7 ,7, 6786], 2]);
  });

  describe("sumArgs", function() {

    function makeTest(a, b) {
      it("функцию, которая суммирует два аргумента " + a + " и " + b + " вместе, результат: " + sumArgs(a, b), function() {
        assert.equal(sumArgs(a, b), sumArgs(a, b));
      });
    }

    makeTest(1, 2);
  });

});
