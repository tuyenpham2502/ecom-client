import Constants from "src/core/application/common/Constants";
import { SortEnumType } from "src/core/domain/enums/SortEnumType";

export class GetUserByRoleRequest{
    first:number;
    last:number;
    before:string;
    after:string;
    role:string;

    constructor(first:number, last:number, before: string, after: string, role:string) {
        this.first=first;
        this.last=last;
        this.before=before;
        this.after=after;
        this.role=role;
    }
}