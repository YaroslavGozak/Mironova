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
    }

    runTask1() {
        console.log("------------------Task 1.1------------------");
        this.logFirstAvailable(this.getAllWorkers());
    }

    runTask2() {
        console.log("------------------Task 1.2------------------");
        let workersNames = this.getWorkersNamesByCategory(Category.Developer);
        this.logWorkersNames(workersNames);
    }

    runTask3() {
        console.log("------------------Task 1.3------------------");
        let workers = this.getAllWorkers();
        console.log("Developers:");
        this.printDeveloperName(workers);
        let workerWithID3 = this.getWorkersByID(3);
        console.log("Worker with ID = 3: " + workerWithID3.name + " " + workerWithID3.surname + " : " + workerWithID3.salary);
    }

    runTask4() {
        console.log("------------------Task 1.4------------------");
        let myID: string;
        myID = this.createCustomerID("Ann", 10);
        console.log(myID);
        let idGenerator = (name: string, id: number): string => { return name + ":" + id; };
        myID = idGenerator("Ann", 11);
        console.log(myID);
        idGenerator = this.createCustomerID;
        myID = idGenerator("Ann", 12);
        console.log(myID);
    }

    runTask5() {
        console.log("------------------Task 1.5------------------");
        this.createCustomer("Ann");
        this.createCustomer("Ann", 10);
        this.createCustomer("Ann", 16, "Kiev");
        console.log(this.getWorkersNamesByCategory());
        this.logFirstAvailable();
        let anyWorkers = this.checkoutWorkers('Ann', 1, 2, 4);
        console.log("Available workers");
        anyWorkers.forEach(worker => console.log(worker.name + " " + worker.surname));
    }

    getAllWorkers(): Array<any> {
        let workers = [
            { id: 0, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
            { id: 1, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
            { id: 2, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
            { id: 3, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
            { id: 4, name: 'Valeria', surname: 'Viktorova', available: false, salary: 1300, category: Category.Designer },
        ]
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

    createCustomer(name: string, age?: number, city?: string): void {
        let template = `Customer: ${name}`;
        if (age) {
            template += ` is ${age} years old`;
        }
        if (city) {
            template += ` and lives in ${city}`;
        }
        console.log(template);
    }

    checkoutWorkers(customer: string, ...workerIDs: number[]): Array<any> {
        console.log(`Customer name: ${customer}`);
        let workers = this.getAllWorkers();
        let availableWorkers: Array<any> = [];
        for (let workerID of workerIDs) {
            let availableWorker = workers.find(worker => worker.id == workerID && worker.available);
            if (availableWorker) {
                availableWorkers.push(availableWorker);
            }
        }
        return availableWorkers;
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new WorkerService();
    greeter.start();
};