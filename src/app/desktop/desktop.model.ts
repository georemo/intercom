export class DesktopItem {
    constructor(
        public guid: number,
        public title: string,
        public content: string
    ) { }
}

export class Desktop {
    public dsCollection: Array<DesktopItem>;
    constructor() {
        this.dsCollection = new Array<DesktopItem>();
        this.dsCollection.push(new DesktopItem(101, 'Electronics', `<p>x</p>`));
        this.dsCollection.push(new DesktopItem(102, 'Electrical', `<p>y</p>`));
        this.dsCollection.push(new DesktopItem(103, 'Mechanical', `<p>z</p>`));
    }

    get DsCollection() {
        return this.dsCollection;
    }

    filterContents(key) {
        const records = this.DsCollection;
        const empid = [key];
        const object = {};
        let result;

        records.forEach((a) => {
            object[a.guid] = a;
            console.log(`a.guid=${a.guid}`);
        });

        result = empid.map((a) => {
            return object[a];
        });

        console.log('filterContents::result>>');
        console.dir(result);
        console.log('filterContents::result[0]>>');
        console.dir(result[0]);

        return result[0];
    }
}