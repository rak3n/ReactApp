class Store{

    authenticate=false

    set=(item)=>{
        this.authenticate=item;
    }

    get=()=>{
        return this.authenticate;
    }
}

export default Store;