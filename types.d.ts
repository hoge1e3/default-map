
declare module "@hoge1e3/default-map" {
    export class DefaultMap<K,V> extends Map<K,V> {
        constructor(def:V|((key:K)=>V), setEmpty?:boolean);
    }
}
