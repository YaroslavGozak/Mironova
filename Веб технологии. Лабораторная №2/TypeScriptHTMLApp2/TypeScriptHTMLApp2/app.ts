interface IWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    markPrize: IPrizeLogger;
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer(customerName: string): void;
}

interface IPrizeLogger {
    logPrize(param: string): void;
}

enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

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
        let prizeLogger: IPrizeLogger;
        prizeLogger = new PrizeLogger();
        prizeLogger.logPrize("10");
    }

    runTask3() {
        console.log("------------------Task 2.3------------------");
        let favoriteAuthor: IAuthor;
        favoriteAuthor = {
            name: "Karlos", email: "karlos@kastaneda.com", numBooksPublished: 4
        }
        let favoriteLibrarian: ILibrarian;
        favoriteLibrarian = {
            name: "Hulio", email: "hulio@kastaneda.com", department: "characters", assistCustomer: this.assistCustomer
        }
        console.log("favoriteAuthor");
        console.log(favoriteAuthor);
        console.log("favoriteLibrarian");
        console.log(favoriteLibrarian);
    }

    runTask4() {
        console.log("------------------Task 2.4------------------");
        let favoriteLibrarian: ILibrarian;
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

    runTask6(){
        console.log("------------------Task 2.6------------------");
        let encyclopedia = new Encyclopedia("For children", 2005, 2.1);
        encyclopedia.printItem();
    }

    runTask7() {
        console.log("------------------Task 2.7------------------");
        let encyclopedia = new Encyclopedia2("For children", 2005, 2.1);
        encyclopedia.printCitation();
    }

    getAllWorkers(): Array<IWorker> {
        let workers = [
            { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
            { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
            { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
            { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
            { id: 4, name: 'Valeria', surname: 'Viktorova', available: false, salary: 1300, category: Category.Designer },
        ] as Array<IWorker>;
        return workers;
    }

    getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
        let workersInCategory: Array<string> = [];
        let workers = this.getAllWorkers();
        for (let worker of workers) {
            if (worker.category == category) {
                workersInCategory.push(worker.surname);
            }
        }
        return workersInCategory;
    }

    logWorkersNames(workersNames: string[]): void {
        for (let workerName of workersNames) {
            console.log(workerName);
        }
    }

    logFirstAvailable(workers: Array<any> = this.getAllWorkers()): void {
        console.log("Workers count: " + workers.length);
        for (let worker of workers) {
            if (worker.available) {
                console.log(`Available worker: ` + worker.name + ` ` + worker.surname);
            }
        }
    }

    printDeveloperName(workers: Array<any>): void {
        workers.forEach(worker => {
            if (worker.category == Category.Developer) {
                console.log(worker.name + " " + worker.surname);
            }
        });
    }

    getWorkersByID(id: number): any {
            let workers = this.getAllWorkers();
            return workers.find(worker => worker.id == id);
        }

    createCustomerID(name: string, id: number): string {
            return name + ":" + id;
        }

    createCustomer(name: string, age ?: number, city ?: string): void {
            let template = `Customer: ${name}`;
            if(age) {
                template += ` is ${age} years old`;
            }
        if (city) {
                template += ` and lives in ${city}`;
            }
        console.log(template);
        }

    checkoutWorkers(customer: string, ...workerIDs: number[]): Array < any > {
            console.log(`Customer name: ${customer}`);
            let workers = this.getAllWorkers();
            let availableWorkers: Array<any> = [];
            for(let workerID of workerIDs) {
                let availableWorker = workers.find(worker => worker.id == workerID && worker.available);
                if (availableWorker) {
                    availableWorkers.push(availableWorker);
                }
            }
        return availableWorkers;
        }

    getBookByID(id: number): IWorker{
            let workers = this.getAllWorkers();
            return workers.find(worker => worker.id == id) || null;
        }

    printWorker(worker: IWorker): void {
            if(worker)
            console.log(worker.name + " " + worker.surname + " got salary " + worker.salary); 
        }

    assistCustomer(customerName: string): void {
        console.log("Assisting customer " + customerName);
        }
}

class PrizeLogger implements IPrizeLogger {
    logPrize(param: string): void {
        console.log("Prize " + param);
    }
}

class UniversityLibrarian implements ILibrarian {
    department: string;
    name: string;
    email: string;
    assistCustomer(customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }
}

class ReferenceItem {
    title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log("Creating a new ReferenceItem...");
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }
}

class ReferenceItem2 {
    protected _publisher: string;
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    public static department: string = "Science";
    constructor(public title: string, protected year: number) {
        console.log("Creating a new ReferenceItem...");
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
    }
}

abstract class ReferenceItem3 {
    protected _publisher: string;
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    public static department: string = "Science";
    constructor(public title: string, protected year: number) {
        console.log("Creating a new ReferenceItem...");
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
    }

    abstract printCitation(): void
}

class Encyclopedia extends ReferenceItem2 {
    protected _publisher: string;
    constructor(public title: string, protected year: number, private edition: number) {
        super(title, year);
        console.log("Creating a new ReferenceItem...");

    }

    printItem(): void {
        console.log(`"${this.title}" was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}

class Encyclopedia2 extends ReferenceItem3 {
    protected _publisher: string;
    constructor(public title: string, protected year: number, private edition: number) {
        super(title, year);
        console.log("Creating a new ReferenceItem...");

    }

    printItem(): void {
        console.log(`"${this.title}" was published in ${this.year}. Publisher department - ${ReferenceItem2.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new WorkerService();
    greeter.start();
};