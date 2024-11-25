import {DefaultMap} from "../default-map.js";
import * as assert from "assert";
export async function main(){
    const m=new DefaultMap(0);
    m.set("foo",5);
    assert.equal(m.get("foo"),5);
    assert.equal(m.get("bar"),0);

    const n=new DefaultMap((k)=>`Unknown '${k}'`);
    n.set("foo","I know the foo.");
    assert.equal(n.get("foo"),"I know the foo.");
    assert.equal(n.get("bar"),"Unknown 'bar'");
    n.set("bar","I also know the bar.");
    assert.equal(n.get("bar"),"I also know the bar.");
    console.log("passed");
}    
main();
