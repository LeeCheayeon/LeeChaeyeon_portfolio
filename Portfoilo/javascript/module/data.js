export const pageData = ["One", "Two", "Three", "Four", "Five", "Six"]
export const buttonData = ["Google", "Github", "esc"]
export const lastPageData = ["Esc","container", "else"]
export const protextboxArr = ["Title", "subT"]
export const popArr = ["popEsc", "view"]
export const popelemArr = ["LB", "elem","RB"]
export const proRightButnArr = ["View More", "Link"]
export const colorArr = ["#333", "#d4d4d4", "#ff6666", '#c6c6c6']
export const contentArr = pageData.slice(2,6);

let contentArr1 = contentArr;
let contentArr2 = contentArr;
let contentArr3 = contentArr;
export const contentArr_3 = contentArr1.concat(contentArr2, contentArr3);
console.log(contentArr_3);