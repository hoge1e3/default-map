# default-map

Map with default value

~~~js
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

// Default value with mutable object, setEmpty should be true
const o=new DefaultMap<string, string[]>(()=>[], true);
// o.get("cat") calls o.set("cat",[]) automatically.
const cats=o.get("cat");
cats.push("Persian");
cats.push("Bengal");
cats.push("Ragdoll");
const dogs=o.get("dog");
dogs.push("Bulldog");    
dogs.push("Chihuahua");    
// If setEmpty==false, the o.get("cat") will be empty array!
assert.deepStrictEqual(o.get("cat"), ["Persian","Bengal","Ragdoll"]);
assert.deepStrictEqual(o.get("dog"), ["Bulldog","Chihuahua"]);
// If setEmpty==false, o.has("cat") never true until o.set("cat",...) is called 
assert.ok(o.has("cat"));
assert.ok(o.has("dog")); 
assert.ok(!o.has("rabbit"));
~~~

# API

- DefaultMap<K,V> extends Map<K,V>
- new DefaultMap<K,V>(def:V|(key:K)=>V, setEmpty=false)
   - Create DefaultMap
      - `def` a default value or function that returns value for given key
      - `setEmpty` if set to true, when `get(key)` is called and the key is missing, the default value (given by `def`) is set to the key, otherwise, the default value is not set. 
      - `setEmpty` should be true if the associated value is a mutable object(such as array).