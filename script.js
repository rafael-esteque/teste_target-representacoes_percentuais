var fat_sp = 67836.43;
var fat_rj = 36678.66;
var fat_mg = 29229.88;
var fat_es = 27165.48;
var fat_outros = 19849.53;

var fat_total = fat_sp + fat_rj + fat_mg + fat_es + fat_outros;
console.log('O faturamento total é ' + fat_total);

var per_sp = fat_sp*100/fat_total;
var per_rj = fat_rj*100/fat_total;
var per_mg = fat_mg*100/fat_total;
var per_es = fat_es*100/fat_total;
var per_outros = fat_outros*100/fat_total;

console.log('As representações percentuais de cada estado são: SP - ' + per_sp.toFixed(2) + '%, RJ - ' + per_rj.toFixed(2) + '%, MG - ' + per_mg.toFixed(2) + '%, ES - ' + per_es.toFixed(2) + '%, e Outros - ' + per_outros.toFixed(2) + '%.');

document.write('As representações percentuais de cada estado são: SP - ' + per_sp.toFixed(2) + '%, RJ - ' + per_rj.toFixed(2) + '%, MG - ' + per_mg.toFixed(2) + '%, ES - ' + per_es.toFixed(2) + '%, e Outros - ' + per_outros.toFixed(2) + '%.');