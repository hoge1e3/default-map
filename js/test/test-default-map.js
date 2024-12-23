var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DefaultMap } from "../default-map.js";
import * as assert from "assert";
export function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Default value with primitve value
        const m = new DefaultMap(0);
        m.set("foo", 5);
        assert.strictEqual(m.get("foo"), 5);
        assert.strictEqual(m.get("bar"), 0);
        assert.ok(m.has("foo"));
        assert.ok(!m.has("bar"));
        // Default value with primitve value, using function 
        const n = new DefaultMap((k) => `Unknown '${k}'`);
        n.set("foo", "I know the foo.");
        assert.strictEqual(n.get("foo"), "I know the foo.");
        assert.strictEqual(n.get("bar"), "Unknown 'bar'");
        assert.ok(n.has("foo"));
        assert.ok(!n.has("bar"));
        n.set("bar", "I also know the bar.");
        assert.strictEqual(n.get("bar"), "I also know the bar.");
        assert.ok(n.has("bar"));
        for (let setEmpty of [true, false]) {
            // Default value with mutable object, setEmpty should be true
            const o = new DefaultMap(() => [], setEmpty);
            const cats = o.get("cat");
            cats.push("Persian");
            cats.push("Bengal");
            cats.push("Ragdoll");
            const dogs = o.get("dog");
            dogs.push("Bulldog");
            dogs.push("Chihuahua");
            // If setEmpty==false, the o.get("cat") will be empty array!
            assert.deepStrictEqual(o.get("cat"), setEmpty ? ["Persian", "Bengal", "Ragdoll"] : []);
            assert.deepStrictEqual(o.get("dog"), setEmpty ? ["Bulldog", "Chihuahua"] : []);
            // If setEmpty==false, o.has("cat") never true until o.set("cat",...) is called 
            assert.strictEqual(setEmpty, o.has("cat"));
            assert.strictEqual(setEmpty, o.has("dog"));
            assert.ok(!o.has("rabbit"));
        }
        console.log("passed");
    });
}
main();
//# sourceMappingURL=test-default-map.js.map