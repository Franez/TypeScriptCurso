"use strict";
(() => {
    function callBatman() {
        return; //en este momento nos retorna undefined
    }
    const callSuperman = () => {
        return; //ojito que undefined es distinto de null
    };
    const a = callBatman();
    const b = callSuperman();
    console.log(a);
    console.log(b);
})();
