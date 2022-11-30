class Bus {
    list: any;
    constructor(){
        this.list = {}
    }
    // 订阅
    $on(name: string, fn: (...arg: any) => any){
        this.list[name] = this.list[name] || [];
        this.list[name].push(fn);
    }
    // 发布
    $emit(name: string, ...arg: any){
        if(this.list[name]){
            this.list[name].forEach((item: (...arg: any) => any) => { item(...arg) })
        }
    }
    // 取消订阅
    $off(name: string) {
        if(this.list[name]){
            delete this.list[name]
        }
    }
}

export default new Bus;
