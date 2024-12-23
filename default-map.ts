// @hoge1e3/default-map
export type RealDefFunc<K,V> = ((key: K) => V);
export type DefFunc<K, V> = V | RealDefFunc<K,V>;

export class DefaultMap<K, V> extends Map<K,V>{
    def: RealDefFunc<K,V>;
    constructor(def:DefFunc<K, V>, public setEmpty=false){
        super();
        if(typeof def==="function"){
            this.def=def as RealDefFunc<K,V>;
        } else {
            const v=def;
            this.def=()=>v;
        }
    }
    get(k:K):V{
        if(!this.has(k)){
            const r=this.def(k);
            if (this.setEmpty) super.set(k,r);
            return r;
        }
        return super.get(k)!;
    }
};
export default DefaultMap;
