export class MenuItem {
    constructor(
        public guid: number,
        public title: string
    ) { }
}

export const SideMenu: Array<MenuItem> = new Array<MenuItem>();
SideMenu.push(new MenuItem(101, 'Electronics'));
SideMenu.push(new MenuItem(102, 'Electrical'));
SideMenu.push(new MenuItem(103, 'Mechanical'));
