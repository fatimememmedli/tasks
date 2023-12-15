var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "FullName", {
        get: function () {
            return this.name, this.surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getSurname", {
        get: function () {
            return this.surname;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getInfo = function () {
        var obj = {
            name: this.name,
            surname: this.surname,
            age: this.age,
        };
        return "".concat(this.name, ", ").concat(this.surname, ", ").concat(this.age);
    };
    return Human;
}());
var Position;
(function (Position) {
    Position["muhendis"] = "muhendis";
})(Position || (Position = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skill, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.salary = salary;
        _this.skills = skill;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        if (GPA >= 0 && GPA <= 100) {
            _this._GPA = GPA;
        }
        return _this;
    }
    Object.defineProperty(Student.prototype, "getGPA", {
        get: function () {
            return this._GPA;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setGPA", {
        set: function (newGPA) {
            if (newGPA > 0 && newGPA < 100) {
                this._GPA = newGPA;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 50 && this._GPA > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    return Student;
}(Human));
var employee = new Employee("asd", "asdad", 20, 5000, "fly", Position.muhendis);
// console.log(employee);
// employee.getInfo();
var form = document.querySelector(".form");
var nameInput = document.querySelector(".nameInput");
var surnameInput = document.querySelector(".surnameInput");
var ageInput = document.querySelector(".ageInput");
var studentOption = document.querySelector(".studentOption");
var studentForm = document.querySelector(".formStudent");
var formEmployee = document.querySelector(".formEmployee");
var groupNameInp = document.querySelector(".groupName");
var hobbiesINp = document.querySelector(".hobbies");
var GPAInp = document.querySelector(".GPA");
formEmployee.style.display = "none";
studentForm.style.display = "none";
var employeeOption = (document.querySelector(".employeeOption"));
var InputName = "";
var InputSurname = "";
var inputAge = 0;
var inputgroup = "";
var InputHobbies = "";
var InputGpa = 0;
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    InputName = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value;
    InputSurname = surnameInput === null || surnameInput === void 0 ? void 0 : surnameInput.value;
    inputAge = Number(ageInput === null || ageInput === void 0 ? void 0 : ageInput.value);
    console.log("salam");
    if ((studentOption === null || studentOption === void 0 ? void 0 : studentOption.value) == "Student") {
        // console.log("first");
        studentForm.style.display = "block";
        formEmployee.style.display = "none";
        inputgroup = groupNameInp.value;
        InputHobbies = hobbiesINp.value;
        InputGpa = Number(GPAInp.value);
        var student1 = new Student(InputName, InputSurname, inputAge, inputgroup, InputHobbies, InputGpa);
        console.log(student1);
    }
    else if ((employeeOption === null || employeeOption === void 0 ? void 0 : employeeOption.value) == "Employee") {
        studentForm.style.display = "none";
        formEmployee.style.display = "block";
    }
});
