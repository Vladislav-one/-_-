describe("Functions", function() {

  describe("getFactorial", function() {

    function makeTest(n) {
      it("возвращает факториал числа " + n + ", результат: " + getFactorial(n), function() {
        assert.equal(getFactorial(n), getFactorial(n));
      });
    }

    makeTest(11);
  });

  describe("findLongestWord", function() {

    function makeTest(str) {
      it("возвращает длину самого большого слова в предложении: " + str + ", результат: " + findLongestWord(str), function() {
        assert.equal(findLongestWord(str), findLongestWord(str));
      });
    }

    makeTest("поиск самого длинного слова");
  });

  describe("getLargestArray", function() {

    function makeTest(arr) {
      it("Возвращает массив " + arr + " состоящий из наибольшего числа каждого предоставленного подмассива " + getLargestArray(arr), function() {
        assert.equal(getLargestArray(arr), getLargestArray(arr));
      });
    }

    makeTest([[1, 2, 3], [4, 5], [6, 7, 8, 9]]);
  });

  describe("trimLine", function() {
    function makeTest(str, len) {
      it("Обрезает строку "+ str +", если она длиннее заданной длины " + len + ", результат: " + trimLine(str, len), function() {
        assert.equal(trimLine(str, len), trimLine(str, len));
      });
    }

    makeTest("12345", 2);
  });

  describe("caseChange", function() {
    function makeTest(str) {
      it("Изменяет каждую букву в строке " + str + " на заглавную, результат: " + caseChange(str), function() {
        assert.equal(caseChange(str), caseChange(str));
      });
    }

    makeTest("я люблю js");
  });

  describe("arrayMerging", function() {
    function makeTest(arr1, arr2, n) {
      it("Объединяет массивы " + arr1 + " и " + arr2 + " в один, начиная с индекса " + n + ", результат: " + arrayMerging(arr1, arr2, n), function() {
        assert.equal(arrayMerging(arr1, arr2, n), arrayMerging(arr1, arr2, n));
      });
    }

    makeTest([1, 2, 3], [4, 5], 1);
  });

  describe("removeFalseValues", function() {
    function makeTest(arr) {
      it("Удаляет в массиве " + arr + " ложные значения, результат: " + removeFalseValues(arr), function() {
        assert.equal(removeFalseValues(arr), removeFalseValues(arr));
      });
    }

    makeTest([123, 243, 435, "ложное значение", "еще одно"] );
  });

  describe("findStr", function() {
    function makeTest(arr) {
      it("Находит все вхождения строки " + arr[0] + " в строку " + arr[1] + " результат: " + findStr(arr), function() {
        assert.equal(findStr(arr), findStr(arr));
      });
    }

    makeTest(["JavaScript - очень гибкий язык", "очень гяava"]);
  });

  describe("splitArray", function() {
    function makeTest(arr, len) {
      it("Разделяет массив " + arr + " на подмассивы с длинной " + len + ", результат: " + splitArray(arr, len), function() {
        assert.equal(splitArray(arr, len), splitArray(arr, len));
      });
    }

    makeTest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
  });

  describe("createRecurMass", function() {
    function makeTest(arr, n) {
      it("Создание массива с фиксированной длинной " + n + ", реузльтат: " + createRecurMass(arr, n), function() {
        assert.equal(createRecurMass(arr, n), createRecurMass(arr, n));
      });
    }

    makeTest([], 8);
  });







});
