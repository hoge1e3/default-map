// @hoge1e3/default-map
export let DefaultMap=class extends Map{
    constructor(def, setEmpty=false){
        super();
        if(typeof def!=="function"){
            const v=def;
            def=()=>v;
        }
        this.def=def;
        this.setEmpty=setEmpty;
    }
    get(k){
        if(!this.has(k)){
            const r=this.def(k);
            if (this.setEmpty) super.set(k,r);
            return r;
        }
        return super.get(k);
    }
};
export default DefaultMap;
