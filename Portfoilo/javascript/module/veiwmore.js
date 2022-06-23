import contentsMaker from "./contents.js";
import { buttonData,proRightDiv,proRightButnArr } from "./data.js";
import pageMaker from "./pageMaker.js";
import crateElem from "./divMaker.js";

function ViewMoreDiv(target){
target.parentElement.style.display= "block";
target.parentElement.innerHTML=`
${crateElem("#d4d4d4", "popUP","artcle")}
`;
}