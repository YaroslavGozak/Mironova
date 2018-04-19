var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
class WorkerService {
    start() {
        this.runTask1();
        this.runTask2();
        this.runTask3();
        this.runTask4();
        this.runTask5();
        this.runTask6();
        this.runTask7();
    }
    runTask1() {
        console.log("------------------Task 2.1------------------");
        let worker = this.getBookByID(2);
        console.log("Worker with ID 2:");
        this.printWorker(worker);
        worker = this.getBookByID(9);
        console.log("Worker with ID 2:");
        this.printWorker(worker);
    }
    runTask2() {
        console.log("------------------Task 2.2------------------");
        let prizeLogger;
        prizeLogger = new PrizeLogger();
        prizeLogger.logPrize("10");
    }
    runTask3() {
        console.log("------------------Task 2.3------------------");
        let favoriteAuthor;
        favoriteAuthor = {
            name: "Karlos", email: "karlos@kastaneda.com", numBooksPublished: 4
        };
        let favoriteLibrarian;
        favoriteLibrarian = {
            name: "Hulio", email: "hulio@kastaneda.com", department: "characters", assistCustomer: this.assistCustomer
        };
        console.log("favoriteAuthor");
        console.log(favoriteAuthor);
        console.log("favoriteLibrarian");
        console.log(favoriteLibrarian);
    }
    runTask4() {
        console.log("------------------Task 2.4------------------");
        let favoriteLibrarian;
        favoriteLibrarian = new UniversityLibrarian();
        favoriteLibrarian.name = "Vinny Puh";
        favoriteLibrarian.assistCustomer("Pyatachok");
    }
    runTask5() {
        console.log("------------------Task 2.5------------------");
        let ref = new ReferenceItem("Trip to Isktlan", 1967);
        ref.printItem();
        let ref2 = new ReferenceItem2("CLR via C#", 1999);
        ref2.printItem();
        ref2.publisher = "Slovo";
        console.log("Publisher is " + ref2.publisher);
    }
    runTask6() {
        console.log("------------------Task 2.6------------------");
        let encyclopedia = new Encyclopedia("For children", 2005, 2.1);
        encyclopedia.printItem();
    }
    runTask7() {
        console.log("------------------Task 2.7------------------");
        let encyclopedia = new Encyclopedia2("For children", 2005, 2.1);
        encyclopedia.printCitation();
    }
    getAllWorkers() {
        let workers = [
            { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
            { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
            { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
            { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
            { id: 4, name: 'Valeria', surname: 'Viktorova', available: false, salary: 1300, category: Category.Designer },
        ];
        return workers;
    }
    getWorkersNamesByCategory(category = Category.Designer) {
        let workersInCategory = [];
        let workers = this.getAllWorkers();
        for (let worker of workers) {
            if (worker.category == category) {
                workersInCategory.push(worker.surname);
            }
        }
        return workersInCategory;
    }
    logWorkersNames(workersNames) {
        for (let workerName of workersNames) {
            console.log(workerName);
        }
    }
    logFirstAvailable(workers = this.getAllWorkers()) {
        console.log("Workers count: " + workers.length);
        for (let worker of workers) {
            if (worker.available) {
                console.log(`Available worker: ` + worker.name + ` ` + worker.surname);
            }
        }
    }
    printDeveloperName(workers) {
        workers.forEach(worker => {
            if (worker.category == Category.Developer) {
                console.log(worker.name + " " + worker.surname);
            }
        });
    }
    getWorkersByID(id) {
        let workers = this.getAllWorkers();
        return workers.find(worker => worker.id == id);
    }
    createCustomerID(name, id) {
        return name + ":" + id;
    }
    createCustomer(name, age, city) {
        let template = `Customer: ${name}`;
        if (age) {
            template += ` is ${age} years old`;
        }
        if (city) {
            template += ` and lives in ${city}`;
        }
        console.log(template);
    }
    checkoutWorkers(customer, ...workerIDs) {
        console.log(`Customer name: ${customer}`);
        let workers = this.getAllWorkers();
        let availableWorkers = [];
        for (let workerID of workerIDs) {
            let availableWorker = workers.find(worker => worker.id == workerID && worker.available);
            if (availableWorker) {
                availableWorkers.push(availableWorker);
            }
        }
        return availableWorkers;
    }
    getBookByID(id) {
        let workers = this.getAllWorkers();
        return workers.find(worker => worker.id == id) || null;
    }
    printWorker(worker) {
        if (worker)
            console.log(worker.name + " " + worker.surname + " got salary " + worker.salary);
    }
    assistCustomer(customerName) {
        console.log("Assisting customer " + customerName);
    }
}
class PrizeLogger {
    logPrize(param) {
        console.log("Prize " + param);
    }
}
class UniversityLibrarian {
    assistCustomer(customerName) {
        console.log(`${this.name} is assisting ${customerName}`);
    }
}
class ReferenceItem {
    constructor(newTitle, newYear) {
        console.log("Creating a new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
    }
}
class ReferenceItem2 {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
    }
}
ReferenceItem2.department = "Science";
class ReferenceItem3 {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
    }
}
ReferenceItem3.department = "Science";
class Encyclopedia extends ReferenceItem2 {
    constructor(title, year, edition) {
        super(title, year);
        this.title = title;
        this.year = year;
        this.edition = edition;
        console.log("Creating a new ReferenceItem...");
    }
    printItem() {
        console.log(`"${this.title}" was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}
class Encyclopedia2 extends ReferenceItem3 {
    constructor(title, year, edition) {
        super(title, year);
        this.title = title;
        this.year = year;
        this.edition = edition;
        console.log("Creating a new ReferenceItem...");
    }
    printItem() {
        console.log(`"${this.title}" was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new WorkerService();
    greeter.start();
};
