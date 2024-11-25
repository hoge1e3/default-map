# default-map

Map with default value

~~~
import {DefaultMap} from "@hoge1e3/default-map";
import * as assert from "assert";
// Map with default value is 0
const m=new DefaultMap(0);
m.set("foo",5);
assert.equal(m.get("foo"),5);
// key 'bar' is missing. get("bar") returns the default value
assert.equal(m.get("bar"),0);

// The default value is set by function that receives the missing key.
const n=new DefaultMap((k)=>`Unknown '${k}'`);
n.set("foo","I know the foo.");
assert.equal(n.get("foo"),"I know the foo.");
// key 'bar' is missing. get("bar") generates default value and the value is associated to the key 'bar' 
assert.equal(n.get("bar"),"Unknown 'bar'");
// The value can be overriden;
n.set("bar","I also know the bar.");
assert.equal(n.get("bar"),"I also know the bar.");

~~~
