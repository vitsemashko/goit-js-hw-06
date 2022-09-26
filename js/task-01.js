// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const categoriesItems = document.querySelectorAll(".item");
const categoriesItemNumber = categoriesItems.length;
console.log(`Number of categories:`, categoriesItemNumber);

// const firstCategoryName = categoriesItems[0].children[0].textContent;
// console.log(`Category:`, firstCategoryName);

// const firstCategoryNumber = categoriesItems[0].children[1].childElementCount;
// console.log("Elements:", firstCategoryNumber);

// const secondCategoryName = categoriesItems[1].children[0].textContent;
// console.log(`Category:`, secondCategoryName);

// const secondCategoryNumber = categoriesItems[1].children[1].childElementCount;
// console.log("Elements:", secondCategoryNumber);

// const thirdCategoryName = categoriesItems[2].children[0].textContent;
// console.log(thirdCategoryName);

// const thirdCategoryNumber = categoriesItems[2].children[1].childElementCount;
// console.log("Elements:", thirdCategoryNumber);

for (let i = 0; i < categoriesItemNumber; i += 1) {
	const categoryName = categoriesItems[i].children[0].textContent;
	const categoryNumber = categoriesItems[i].children[1].childElementCount;
	console.log(`Category:`, categoryName);
	console.log("Elements:", categoryNumber);
}
