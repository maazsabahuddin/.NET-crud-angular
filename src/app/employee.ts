export default class Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: number;
    is_delete: string;

    constructor(id: number, name: string, email: string, phone: string, role: number, is_delete: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.is_delete = is_delete;
    }
}
