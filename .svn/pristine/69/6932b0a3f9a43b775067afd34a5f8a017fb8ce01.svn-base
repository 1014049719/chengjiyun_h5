var data = { "students": [{ "name": "1" }, { "name": "2" }, { "name": "3" }, { "name": "4" }] };
var template = Handlebars.templates['test-table.tpl'];
Handlebars.registerHelper("ifOdd", function(index) {
    if (index % 2 != 0) {
        return "odd";
    }
    return "even";
});
var res = template(data);
console.log(res);