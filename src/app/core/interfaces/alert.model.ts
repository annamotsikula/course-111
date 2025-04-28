export enum PopUpType {
    Success, 
    Error,
    Warning
}


export class Alert {
    message!: string;
    type!: PopUpType;
    autoClose!: boolean;
    enableCloseBtn!: boolean;
    displayTime!: number;
    id!: number

    constructor(props?: Partial<Alert>) {
        Object.assign(this, props)
    }
}

export class AlertOptions {
    autoClose?: boolean
    enableCloseBtn?: boolean;
    displayTime?: number;
    id?: number

}
