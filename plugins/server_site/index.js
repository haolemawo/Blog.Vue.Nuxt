import Vue from "vue";
import http from "./http.js";
import "./ElementUI.js";

const install = function (VueClass, opts = {}) {

    // http method
    VueClass.http = http;
    VueClass.prototype.$http = http;
};
Vue.use(install);
